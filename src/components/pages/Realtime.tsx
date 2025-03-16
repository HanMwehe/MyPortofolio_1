"use client";
import { useChat } from "../../context/ChatContext";
import { useEffect, useRef, useState } from "react";
import { IoSend } from "react-icons/io5";
import dayjs from "dayjs";

const colors = [
  "bg-blue-600",
  "bg-green-600",
  "bg-purple-600"
]

export default function ChatApp() {
  const [userColors, setUserColors] = useState<{ [key: string]: string }>({});
  const { messages, sendMessage } = useChat();
  const [text, setText] = useState("");
  const [username, setUsername] = useState<string | null>(
    typeof window !== "undefined" ? localStorage.getItem("username") : null
  );
  const [inputUsername, setInputUsername] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (!text.trim() || !username) return;
    sendMessage({ username, text }); // HAPUS timestamp dari sini
    setText("");
  };  
  useEffect(() => {
    const newColors = { ...userColors };
    messages.forEach((msg) => {
      if (!newColors[msg.username]) {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        newColors[msg.username] = randomColor;
      }
    });
    setUserColors(newColors);
  }, [messages]);  
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSetUsername = () => {
    if (!inputUsername.trim()) return;
    localStorage.setItem("username", inputUsername);
    setUsername(inputUsername);
  };

  return (
    <div className="flex flex-col h-screen w-full max-w-3xl mx-auto p-4 bg-gray-900 text-white border border-gray-700 rounded-lg">
      {/* Header */}
      <div className="text-center font-bold text-xl border-b border-gray-700 pb-3 mb-3">
        Real-time Chat
      </div>
  
      {/* Username Input */}
      {!username ? (
        <div className="flex flex-col items-center justify-center gap-4 flex-1">
          <input
            type="text"
            className="w-full p-3 bg-gray-800 text-white rounded-lg outline-none"
            placeholder="Enter your name..."
            value={inputUsername}
            onChange={(e) => setInputUsername(e.target.value)}
          />
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded-lg font-semibold"
            onClick={handleSetUsername}
          >
            Set Username
          </button>
        </div>
      ) : (
        <>
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto space-y-3 p-1">
            {messages.map((msg, index) => (
              <div key={index} className="flex flex-col relative group">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm text-gray-400">{msg.username}</span>
                </div>
                <div className={`${userColors[msg.username] || "bg-gray-800"} p-3 rounded-xl max-w-sm relative`}>
                  {msg.text}
                  <span className="absolute text-[10px] text-gray-300 bottom-1 right-3 opacity-70 group-hover:opacity-100 transition">
                    {dayjs(msg.timestamp).format("HH:mm")}
                  </span>
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
  
          {/* Chat Input */}
          <div className="flex items-center gap-2 border-t border-gray-700 pt-3">
            <input
              type="text"
              className="flex-1 p-3 bg-gray-800 text-white rounded-lg outline-none"
              placeholder="Type a message..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 p-3 rounded-lg"
              onClick={handleSend}
            >
              <IoSend size={22} />
            </button>
          </div>
        </>
      )}
    </div>
  );  
}
