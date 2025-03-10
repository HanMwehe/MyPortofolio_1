import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { MessageCircle, X } from "lucide-react";

export default function ChatPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const CHAT_BOT_KEY = import.meta.env.VITE_CHAT_BOT_KEY;

  const formatMessage = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/`(.*?)`/g, "<code>$1</code>")
      .replace(/\n/g, "<br>");
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text: input }]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          model: "llama-3.3-70b-versatile",
          messages: [
            { role: "system", content: "Mulai sekarang, namamu adalah Kirana. Jika ada yang bertanya siapa namamu, jawab 'Kirana'." },
            { role: "user", content: input }
          ],          
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${CHAT_BOT_KEY}`,
          },
        }
      );

      const aiResponse = response.data?.choices?.[0]?.message?.content || "No response";

      setMessages((prev) => [...prev, { role: "ai", text: formatMessage(aiResponse) }]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setMessages((prev) => [...prev, { role: "ai", text: formatMessage("Error fetching response") }]);
    }

    setIsLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end">
      <button
        className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {isOpen && (
      <div className="w-[90%] max-w-md h-[80vh] sm:w-96 sm:h-96 bg-gray-900 shadow-lg rounded-2xl p-4 mt-2 border border-gray-700 flex flex-col">
          <div className="flex justify-between items-center border-b border-gray-700 pb-2">
            <h2 className="text-lg font-semibold text-white">Chat with Kirana🙎‍♀️</h2>
          </div>

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
              >
                <div dangerouslySetInnerHTML={{ __html: msg.text }} />
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-1 p-2 rounded-md max-w-[85%] bg-gray-800 text-white">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "100ms" }}></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "200ms" }}></div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="mt-auto flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              className="w-full p-2 border border-gray-700 bg-gray-800 text-white rounded-md focus:ring focus:ring-blue-600"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700"
              disabled={isLoading}
            >
              {isLoading ? "..." : "Send"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
