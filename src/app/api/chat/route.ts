import { NextResponse } from 'next/server';
import { allProjects } from '@/lib/projects';

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

export async function POST(req: Request) {
  const { messages }: { messages: ChatMessage[] } = await req.json();

  // Only the last 10 turns kept to cap token usage per request
  const recentMessages = messages.slice(-10);

  const projectList = allProjects.map((p) => {
    const link = p.website || p.demo;
    const outcome = 'outcome' in p && p.outcome ? ` Outcome: ${p.outcome}.` : '';
    return `• ${p.title} (${p.category}): ${p.description}${outcome}${link ? ` [${link}]` : ''}`;
  }).join('\n');

  const systemPrompt = `You are Diana, the AI assistant on Saurav Dhakal's consulting portfolio (Dhakal Consulting). Saurav is a Systems Engineer who builds high-performance digital infrastructure — websites, e-commerce, and custom systems — for growth-focused businesses.

Your job:
- Answer visitor questions about Saurav's work and expertise.
- Help visitors assess whether Saurav is a fit for their project.
- Point them to /contact when they're ready to talk.

Tone: professional, concise, confident. No emojis. Don't oversell.

If asked something outside the scope of Saurav's work or portfolio, politely redirect the conversation back to his services.

Saurav's projects:
${projectList}

If you don't know something, say so and suggest booking a strategy call at /contact.`;

  try {
    const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY!}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4.1-nano',
        messages: [
          { role: 'system', content: systemPrompt },
          ...recentMessages,
        ],
        max_tokens: 400,
        temperature: 0.4,
      }),
    });

    if (!openaiResponse.ok) {
      throw new Error(`OpenAI API returned ${openaiResponse.status}`);
    }

    const data = await openaiResponse.json();
    const outputText = data?.choices?.[0]?.message?.content?.trim() 
      ?? "Sorry, I couldn't generate a response.";

    return NextResponse.json({ content: outputText });

  } catch (err: unknown) {
    console.error('OpenAI API error:', err);
    return NextResponse.json({
      content: `Sorry, I'm having trouble responding right now. Please try again or reach out via the contact page.`,
    });
  }
}