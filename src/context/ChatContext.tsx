// src/context/ChatContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

interface Message {
  username: string;
  text: string;
  timestamp?: string;
}

interface ChatContextType {
  messages: Message[];
  setMessages: (msgs: Message[]) => void;
  addMessage: (msg: Message) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<Message[]>([]);

  const addMessage = (msg: Message) => {
    setMessages((prev) => [...prev, msg]);
  };

  return (
    <ChatContext.Provider value={{ messages, setMessages, addMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};
