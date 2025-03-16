import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { io } from "socket.io-client";

interface Message {
  username: string;
  text: string;
  timestamp?: string;
}

interface ChatContextType {
  messages: Message[];
  sendMessage: (msg: { username: string; text: string }) => void;
}

const ChatContext = createContext<ChatContextType | null>(null);

const socket = io("https://compassionate-bravery-production.up.railway.app/", {
  transports: ["websocket"],
});

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    // Load pesan lama
    socket.on("loadMessages", (oldMessages: Message[]) => {
      setMessages(oldMessages);
    });

    // Pesan baru real-time
    socket.on("message", (msg: Message) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("loadMessages");
      socket.off("message");
    };
  }, []);

  const sendMessage = ({ username, text }: { username: string; text: string }) => {
    const msg: Message = { username, text, timestamp: new Date().toISOString() };
    socket.emit("sendMessage", msg);
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error("useChat must be used inside ChatProvider");
  return ctx;
};
