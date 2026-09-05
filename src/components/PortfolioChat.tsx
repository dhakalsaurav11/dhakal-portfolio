'use client';

import { useState, useEffect, useRef, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

const MAX_INPUT_LENGTH = 500;

export function PortfolioChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content:
        "Hi, I'm Diana \u2014 Saurav's AI assistant. Ask me about his work, expertise, or how he can help with your project.",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [messages, loading]);

  async function sendMessage(e: FormEvent) {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const newMessages: ChatMessage[] = [
      ...messages,
      { role: 'user', content: input.trim() },
    ];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await res.json();
      setMessages([...newMessages, { role: 'assistant', content: data.content }]);
    } catch {
      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content: 'Connection failed. Please try again.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Launcher */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#111111] text-white pl-4 pr-5 py-2.5 rounded-md shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:bg-[#333333] transition-colors duration-200 active:scale-[0.98]"
            aria-label="Open chat with Diana"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span className="text-sm font-medium">Ask Diana</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] sm:w-96 h-[32rem] bg-white rounded-lg border border-[#EAEAEA] shadow-[0_4px_24px_rgba(0,0,0,0.06)] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#EAEAEA] bg-[#F7F6F3]">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#346538]" />
                <div>
                  <div className="text-sm font-semibold text-[#111111]">Diana</div>
                  <div className="text-[10px] text-[#787774] uppercase tracking-[0.04em]">
                    AI Assistant
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 flex items-center justify-center rounded-md text-[#787774] hover:text-[#111111] hover:bg-[#EAEAEA] transition-colors duration-200"
                aria-label="Close chat"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-3.5 py-2.5 text-sm leading-relaxed ${
                      m.role === 'user'
                        ? 'bg-[#111111] text-white rounded-lg rounded-br-sm'
                        : 'bg-[#F7F6F3] text-[#2F3437] rounded-lg rounded-bl-sm'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">
                      {m.content}
                    </p>
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-[#F7F6F3] px-3.5 py-3 rounded-lg rounded-bl-sm flex gap-1">
                    <span className="w-1.5 h-1.5 bg-[#787774] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-[#787774] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-[#787774] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={sendMessage}
              className="flex items-center gap-2 border-t border-[#EAEAEA] bg-white px-3 py-3"
            >
              <label htmlFor="chat-input" className="sr-only">
                Message Diana
              </label>
              <input
                id="chat-input"
                value={input}
                onChange={(e) => setInput(e.target.value.slice(0, MAX_INPUT_LENGTH))}
                disabled={loading}
                className="flex-1 min-w-0 px-3 py-2 bg-[#F7F6F3] border border-[#EAEAEA] rounded-md text-sm text-[#2F3437] placeholder:text-[#787774] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]/10 focus-visible:border-[#111111]/20 transition-all duration-200 disabled:opacity-50"
                placeholder="Ask about Saurav's work..."
                maxLength={MAX_INPUT_LENGTH}
                autoComplete="off"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                className="w-9 h-9 flex items-center justify-center bg-[#111111] text-white rounded-md hover:bg-[#333333] transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.98]"
                aria-label="Send message"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
