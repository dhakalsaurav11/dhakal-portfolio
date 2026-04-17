'use client';

import { useState, useEffect, useRef, FormEvent } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
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
        "Hi, I'm Diana — Saurav's AI assistant. Ask me about his work, expertise, or how he can help with your project.",
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
          content: 'Sorry, something went wrong. Please try again.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating Launcher Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-slate-900 text-white pl-4 pr-5 py-3 rounded-full shadow-xl hover:bg-blue-600 hover:shadow-blue-500/25 transition-all duration-300 group"
            aria-label="Open chat with Diana"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm font-semibold">Ask Diana</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] sm:w-96 h-[32rem] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 bg-slate-50">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <div>
                  <div className="text-sm font-semibold text-slate-900">Diana</div>
                  <div className="text-xs text-slate-500">AI Assistant</div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-200 transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-4 py-4 space-y-4"
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      m.role === 'user'
                        ? 'bg-slate-900 text-white rounded-br-sm'
                        : 'bg-slate-100 text-slate-800 rounded-bl-sm'
                    }`}
                  >
                    <p className={`whitespace-pre-wrap ${m.role === 'user' ? 'text-white' : 'text-slate-800'}`}>
                      {m.content}
                    </p>
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-slate-100 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1">
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={sendMessage}
              className="flex items-center gap-2 border-t border-slate-200 bg-white px-3 py-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value.slice(0, MAX_INPUT_LENGTH))}
                disabled={loading}
                className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all disabled:opacity-50"
                placeholder="Ask about Saurav's work..."
                maxLength={MAX_INPUT_LENGTH}
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                className="p-2.5 bg-slate-900 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}