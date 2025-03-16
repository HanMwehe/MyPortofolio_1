"use client";
import { useChat } from "../../context/ChatContext";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

interface Message {
  username: string;
  text: string;
  timestamp?: string;
}

const socket = io("https://compassionate-bravery-production.up.railway.app/", {
  transports : ["websocket"]
}
);

export default function ChatApp() {
  const { messages, setMessages, addMessage } = useChat(); // ganti useState
  const [text, setText] = useState("");
  const [username, setUsername] = useState<string | null>(
    typeof window !== "undefined" ? localStorage.getItem("username") : null
  );
  const [inputUsername, setInputUsername] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    socket.on("loadMessages", (oldMessages: Message[]) => {
      setMessages(oldMessages);
    });

    socket.on("message", (message: Message) => {
      addMessage(message);
    });    

    return () => {
      socket.off("message");
      socket.off("loadMessages");
    };
  }, []);

  const sendMessage = () => {
    if (!text.trim() || !username) return;
    socket.emit("sendMessage", { username, text });
    setText("");
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSetUsername = () => {
    if (!inputUsername.trim()) return;
    localStorage.setItem("username", inputUsername);
    setUsername(inputUsername);
  };

  return (
    <div className="flex flex-col h-screen max-w-lg mx-auto p-4 bg-gray-900 text-white border border-gray-700 rounded-lg">
      {/* Header */}
      <div className="text-center font-bold text-lg border-b border-gray-700 pb-2 mb-2">
        Real-time Chat
      </div>

      {/* Username Input */}
      {!username ? (
        <div className="flex flex-col items-center justify-center gap-2">
          <input
            type="text"
            className="p-2 bg-gray-800 text-white rounded-lg outline-none"
            placeholder="Enter your name..."
            value={inputUsername}
            onChange={(e) => setInputUsername(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg"
            onClick={handleSetUsername}
          >
            Set Username
          </button>
        </div>
      ) : (
        <>
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto space-y-2 p-2">
            {messages.map((msg, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-sm text-gray-400">{msg.username}</span>
                <div className="bg-gray-800 p-2 rounded-lg max-w-xs">
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Chat Input */}
          <div className="flex items-center gap-2 border-t border-gray-700 pt-2">
            <input
              type="text"
              className="flex-1 p-2 bg-gray-800 text-white rounded-lg outline-none"
              placeholder="Type a message..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </>
      )}
    </div>
  );
}
