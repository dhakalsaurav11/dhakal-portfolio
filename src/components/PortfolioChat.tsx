'use client';

import { useState, useEffect, useRef, FormEvent } from 'react';

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

export function PortfolioChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollTo(0, ref.current.scrollHeight);
  }, [messages]);

  async function sendMessage(e: FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages: ChatMessage[] = [...messages, { role: 'user' as const, content: input }];
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

      setMessages([...newMessages, { role: 'assistant' as const, content: data.content }]);
    } catch {
      // optional: log if needed during dev
      // console.error(err);
      setMessages([
        ...newMessages,
        { role: 'assistant' as const, content: '❌ Error getting response from assistant.' },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 bg-neutral-900 text-white rounded-xl w-80 shadow-lg z-50 border border-neutral-800 flex flex-col overflow-hidden">
      <div className="p-4 border-b border-neutral-800 font-semibold">Ask Me Anything</div>

      <div ref={ref} className="flex-1 overflow-y-auto px-4 py-3 space-y-3 text-sm max-h-60">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`whitespace-pre-wrap ${
              m.role === 'user' ? 'text-right text-blue-300' : 'text-left text-neutral-300'
            }`}
          >
            <strong>{m.role === 'user' ? 'You' : 'AI'}:</strong>
            <p className="text-sm leading-relaxed whitespace-pre-wrap">{m.content}</p>
          </div>
        ))}
        {loading && <p className="text-neutral-500 italic">Thinking...</p>}
      </div>

      <form onSubmit={sendMessage} className="flex border-t border-neutral-800 bg-neutral-800">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-3 py-2 bg-transparent text-sm text-white placeholder-neutral-400 focus:outline-none"
          placeholder="Ask about my work..."
        />
        <button type="submit" className="px-4 text-blue-400 hover:text-blue-500">
          ↵
        </button>
      </form>
    </div>
  );
}
