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

  const prompt = `<s>[INST]
You are a helpful assistant on the portfolio of Saurav Dhakal — a full-stack developer and computer science student.

Here are Saurav's projects:
${projectList}

Use this information to answer the user's question.
Question: ${userMessages}
[/INST]>`;

  try {
    const togetherResponse = await fetch('https://api.together.xyz/inference', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.TOGETHER_API_KEY!}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'mistralai/Mistral-7B-Instruct-v0.1',
        prompt: prompt,
        max_tokens: 300,
        temperature: 0.7,
      }),
    });

    const data = await togetherResponse.json();

    const outputText = data?.output?.choices?.[0]?.text?.replace(/<\|im_sep\|>/g, '').trim() ??
      "Sorry, I couldn't generate a response.";

    return NextResponse.json({ content: outputText });

  } catch (err: unknown) {
    console.error("❌ Together.ai error:", err);
    return NextResponse.json({
      content: `Internal error: ${err instanceof Error ? err.message : 'Something went wrong.'}`,
    });
  }
}
