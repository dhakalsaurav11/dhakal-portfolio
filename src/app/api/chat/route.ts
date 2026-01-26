import { NextResponse } from 'next/server';
import { allProjects } from '@/lib/projects';

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

export async function POST(req: Request) {
  const { messages }: { messages: ChatMessage[] } = await req.json();

  const userMessages = messages
    .filter((m: ChatMessage) => m.role === 'user')
    .map((m: ChatMessage) => m.content)
    .join('\n');

  const projectList = allProjects.map((p) => {
    const link = p.website || p.demo;
    return `• ${p.title}: ${p.description}${link ? ` [View](${link})` : ''}`;
  }).join('\n');

  try {
    const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY!}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `You are a helpful assistant on the portfolio of Saurav Dhakal — a full-stack developer and computer science student at the University of New Mexico. He has worked on real-world projects using React, PHP, TypeScript, C++, and more.\n\nHere are Saurav's projects:\n${projectList}\n\nUse this information to answer user questions.`,
          },
          ...messages,
        ],
        max_tokens: 300,
        temperature: 0.4,
      }),
    });

    const data = await openaiResponse.json();

    const outputText = data?.choices?.[0]?.message?.content?.trim() ?? "Sorry, I couldn't generate a response.";

    return NextResponse.json({ content: outputText });

  } catch (err: unknown) {
    console.error("❌ Together.ai error:", err);
    return NextResponse.json({
      content: `Internal error: ${err instanceof Error ? err.message : 'Something went wrong.'}`,
    });
  }
}
