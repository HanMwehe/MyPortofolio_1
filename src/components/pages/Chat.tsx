import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { MessageCircle, X } from "lucide-react";

export default function ChatPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const formatMessage = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Bold
      .replace(/\*(.*?)\*/g, "<em>$1</em>"); // Italic
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text: input }]);

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          contents: [{ parts: [{ text: input }] }],
        },
        { headers: { "Content-Type": "application/json" } }
      );

      const aiResponse =
        response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";

      setMessages((prev) => [...prev, { role: "ai", text: aiResponse }]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setMessages((prev) => [...prev, { role: "ai", text: "Error fetching response" }]);
    }

    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end">
      {/* Button Toggle Chat */}
      <button
        className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Popup Chat Box */}
      {isOpen && (
        <div className="w-96 h-96 bg-gray-900 shadow-lg rounded-2xl p-4 mt-2 border border-gray-700 flex flex-col">
          <div className="flex justify-between items-center border-b border-gray-700 pb-2">
            <h2 className="text-lg font-semibold text-white">Chat with AI</h2>
            <button onClick={() => setIsOpen(false)}>
              <X size={20} className="text-white hover:text-gray-300" />
            </button>
          </div>

          {/* Chat Messages */}
          <div
            className="h-72 overflow-y-auto p-2 flex flex-col gap-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800"
            onMouseEnter={(e) => (e.currentTarget.style.overflowY = "scroll")}
            onMouseLeave={(e) => (e.currentTarget.style.overflowY = "auto")}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-md max-w-[85%] break-words ${
                  msg.role === "user"
                    ? "bg-blue-600 text-white self-end"
                    : "bg-gray-800 text-white"
                }`}
                dangerouslySetInnerHTML={{ __html: formatMessage(msg.text) }}
              />
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input & Send Button */}
          <div className="mt-auto flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="w-full p-2 border border-gray-700 bg-gray-800 text-white rounded-md focus:ring focus:ring-blue-600"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
