import { useState, useEffect, useRef } from "react";
import { X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

let count = 0;

interface Message {
  text: string;
  sender: "user" | "bot";
  isTyping?: boolean;
}

const genAI = new GoogleGenerativeAI("AIzaSyA_8tD5lG-1K6C_oZHOhZmZJWHpumcy_-0"); // Replace with your actual API key
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default function Chatbot() {
  const [open, setOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState<string>("");
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");

    // Show "Typing..." indicator
    setMessages((prev) => [
      ...prev,
      { text: "Typing...", sender: "bot", isTyping: true },
    ]);

    try {
      const prompt = `Act as a chatbot model that answers only banking and finance-related queries for India in a maximum of 70 words, if required example can also be given. If the query is unrelated to banking or finance or economics, respond with appropriate message. The query is: ${input}`;
      const result = await model.generateContent(prompt);
      const botResponse = await result.response.text();

      // Replace "Typing..." with the actual Gemini API response
      setMessages((prev) =>
        prev.map((msg) =>
          msg.isTyping ? { text: botResponse, sender: "bot" } : msg
        )
      );
    } catch (error) {
      console.error("Error fetching Gemini API response:", error);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.isTyping
            ? { text: "Sorry, I couldn't fetch a response.", sender: "bot" }
            : msg
        )
      );
    }
  };

  // Auto-scroll to the latest message
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="fixed bottom-6 md:right-6 sm:right-0 flex flex-col items-end z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Card className="md:w-96 w-80 shadow-2xl rounded-xl overflow-hidden border border-gray-300">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-5 py-4 flex justify-between items-center font-semibold">
                <span>AI Assistant</span>
                <X
                  className="cursor-pointer hover:text-gray-300"
                  onClick={() => setOpen(false)}
                />
              </div>
              <CardContent
                ref={chatContainerRef}
                className="h-72 overflow-y-auto p-4 space-y-3 bg-gray-50"
              >
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex items-end space-x-2 ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {msg.sender === "bot" && (
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png"
                        alt="Bot Avatar"
                        className="w-8 h-8 rounded-full shadow-md"
                      />
                    )}
                    <div
                      className={`p-3 rounded-lg max-w-[75%] shadow-md ${
                        msg.sender === "user"
                          ? "bg-blue-500 text-white ml-auto"
                          : "bg-white text-gray-900 border border-gray-200"
                      }`}
                    >
                      <span>{msg.text}</span>
                    </div>
                    {msg.sender === "user" && (
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full shadow-md"
                      />
                    )}
                  </div>
                ))}
              </CardContent>
              <div className="flex p-3 border-t bg-white">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                />
                <Button
                  className="ml-3 bg-blue-600 text-white p-3 rounded-full shadow-md hover:bg-blue-700"
                  onClick={sendMessage}
                >
                  <Send size={20} />
                </Button>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated AI Assistant Button */}
      <motion.div
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        className="cursor-pointer"
      >
        <Button
          className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex items-center px-4 py-3 rounded-full shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
          onClick={() => setOpen(!open)}
        >
          {/* Animated Chat Icon */}
          <motion.div
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 mr-0"
              style={{ height: "30px", width: "30px" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 10h8m-8 4h6M21 12c0 4.418-4.03 8-9 8a9.88 9.88 0 01-4-.857L3 21l1.857-5A8.96 8.96 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </motion.div>
          AI Assistant
        </Button>
      </motion.div>
    </div>
  );
}
