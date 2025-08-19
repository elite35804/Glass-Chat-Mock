"use client";

import { useState } from "react";

type ChatMessage = {
  id: string;
  author: "user" | "assistant";
  text: string;
  timestamp: string;
};

export default function ChatPanel() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "m1",
      author: "assistant",
      text: "Hi! This is a static mock chat. No backend calls here.",
      timestamp: new Date().toLocaleTimeString(),
    },
    {
      id: "m2",
      author: "user",
      text: "Looks great. Can I buy tokens?",
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);

  const [inputValue, setInputValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleSend() {
    if (!inputValue.trim()) return;
    const newMessage: ChatMessage = {
      id: Math.random().toString(36).slice(2),
      author: "user",
      text: inputValue.trim(),
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");
  }

  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <div className="rounded-2xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-md">
        <div className="flex items-center justify-between px-4 py-3">
          <h2 className="text-sm font-medium text-white/90">Chat</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 ring-1 ring-inset ring-white/20 transition hover:bg-white/15"
          >
            Purchase Tokens
          </button>
        </div>

        <div className="h-[420px] overflow-y-auto space-y-3 px-4 pb-4">
          {messages.map((m) => (
            <div key={m.id} className="flex">
              <div
                className={
                  m.author === "user"
                    ? "ml-auto max-w-[75%] rounded-xl rounded-br-sm bg-blue-500/20 px-3 py-2 text-sm text-blue-50 ring-1 ring-inset ring-blue-300/30 backdrop-blur"
                    : "mr-auto max-w-[75%] rounded-xl rounded-bl-sm bg-white/10 px-3 py-2 text-sm text-white/90 ring-1 ring-inset ring-white/15 backdrop-blur"
                }
              >
                <p className="whitespace-pre-line">{m.text}</p>
                <p
                  className="mt-1 text-[10px] leading-none opacity-70"
                  suppressHydrationWarning
                >
                  {m.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 p-3">
          <div className="flex items-center gap-2">
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
              className="flex-1 rounded-xl bg-white/10 px-3 py-2 text-sm text-white/90 placeholder:text-white/50 ring-1 ring-inset ring-white/20 outline-none backdrop-blur focus:ring-white/30"
            />
            <button
              onClick={handleSend}
              className="rounded-xl bg-white/15 px-3 py-2 text-sm font-medium text-white/90 ring-1 ring-inset ring-white/20 transition hover:bg-white/20"
            >
              Send
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-10 grid place-items-center bg-black/50 p-4">
          <div className="w-full max-w-sm rounded-2xl bg-white/10 p-5 text-white/90 ring-1 ring-inset ring-white/20 backdrop-blur-xl">
            <h3 className="text-base font-semibold">Purchase Tokens</h3>
            <p className="mt-1 text-sm opacity-90">
              This is a dummy modal. Hook it to your billing provider later.
            </p>
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded-lg bg-white/10 px-3 py-1.5 text-sm ring-1 ring-inset ring-white/20 transition hover:bg-white/15"
              >
                Close
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded-lg bg-emerald-500/80 px-3 py-1.5 text-sm text-white shadow ring-1 ring-emerald-400/40 transition hover:bg-emerald-500"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
