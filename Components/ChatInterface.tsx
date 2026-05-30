
"use client";

import React, { useState } from "react";
import { Paperclip } from "lucide-react";
import { AudioWaveform } from "lucide-react";
import { ChevronDown } from "lucide-react";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const assistantMsg: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content:
          "This is a sample AI response. Connect your backend/API here.",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMsg]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full w-full text-white">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              What can I help you with?
            </h1>

            <p className="text-zinc-500 text-center">
              Ask coding, debugging, AI, or general questions
            </p>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto px-6 py-8">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`mb-8 ${
                  msg.role === "user" ? "flex justify-end" : ""
                }`}
              >
                <div
                  className={`max-w-3xl ${
                    msg.role === "user"
                      ? "bg-zinc-800 px-4 py-3 rounded-2xl"
                      : ""
                  }`}
                >
                  <p className="text-[15px] leading-7 text-zinc-200 whitespace-pre-wrap">
                    {msg.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Input */}
      <div
        className="
          flex items-center h-20p px-6 rounded-full border border-zinc-800 bg-linear-to-b from-[#0f0f0f]  to-[#111111] shadow-[0_0_20px_rgba(255,255,255,0.03)]"
      >
        {/* Attachment */}
        <button className="text-white hover:text-zinc-300 transition">
          <Paperclip size={24} strokeWidth={2} />
        </button>

        {/* Input */}
        <input
          type="text"
          placeholder="Message Blackbox"
          className="flex-1 bg-transparent px-5 text-[18px] text-white placeholder:text-zinc-500 outline-none"
        />

        {/* Model Selector */}
        <button
          className="flex items-center gap-2 text-white font-medium text-xl hover:text-zinc-300 transition"
        >
          Select Models
          <ChevronDown size={18} />
        </button>

        <button
          className="ml-6 h-14 w-14 rounded-full bg-white flex items-center justify-center hover:scale-105 transition
          "
        >
          <AudioWaveform
            size={24}
            className="text-black"
            strokeWidth={2.5}
          />
        </button>
      </div>
    </div>
  );
}
