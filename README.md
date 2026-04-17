# Dhakal Consulting Portfolio

> Consulting portfolio for Saurav Dhakal — a Systems Engineer building high-performance digital infrastructure for growth-focused businesses.

## Live Demo

[https://the-dhakal.com](https://the-dhakal.com)

---

## Features

- **Fast & SEO Optimized** – Next.js + TypeScript for performance and scalability
- **AI Assistant ("Diana")** – Conversational chatbot powered by OpenAI that answers visitor questions about Saurav's work and expertise
- **Fully Responsive** – Desktop, tablet, and mobile
- **Dynamic Project Loading** – Project data loaded from `src/lib/projects.ts`
- **Animated UI** – Framer Motion transitions across hero, work, and contact sections
- **Contact Form** – Formspree-integrated intake form with honeypot spam protection

---

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **AI Assistant:** [OpenAI API](https://platform.openai.com/) (`gpt-4.1-nano`)
- **Form Handling:** [Formspree](https://formspree.io/)
- **Deployment:** Vercel + Custom Domain (`the-dhakal.com`)

---

## Installation

```bash
git clone https://github.com/dhakalsaurav11/dhakal-portfolio.git
cd dhakal-portfolio
npm install
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## Environment Variables

Create a `.env.local` file in the project root with:

```bash
OPENAI_API_KEY=sk-...
```

You'll need a valid OpenAI API key for the Diana chat assistant to function. Get one at [platform.openai.com](https://platform.openai.com/).

---

## Usage

### Content Management

- **Projects:** Edit `src/lib/projects.ts` to add or update featured work. Each project supports `category` (`client` or `engineering`), `outcome`, `tech`, `role`, and link fields.
- **Courses:** Edit `src/lib/courses.ts` to update academic highlights.
- **Branding:** Modify `tailwind.config.js` and `src/app/globals.css` for custom colors and fonts.

### AI Assistant (Diana)

- **System prompt & background:** Configured in `src/app/api/chat/route.ts`. Update the `systemPrompt` variable to change Diana's persona, scope, or knowledge base.
- **UI & styling:** Located in `src/components/PortfolioChat.tsx`. Mounted globally via `src/app/layout.tsx`.
- **Token limits:** Each request caps conversation history at the last 10 turns and `max_tokens` at 400 to keep costs predictable.
- **Model:** Uses `gpt-4.1-nano` by default for cost efficiency. Swap to `gpt-5-mini` or `gpt-5` in `route.ts` for higher quality responses.

### Contact Form

The contact form at `/contact` submits to Formspree. Update the form action URL in `src/app/contact/page.tsx` to point to your own Formspree endpoint.

---

## File Structure

```bash
├── src/
│   ├── app/                    # App Router pages & API routes
│   │   ├── api/chat/           # Diana chat endpoint
│   │   ├── contact/            # Contact form page
│   │   ├── projects/           # Case studies page
│   │   ├── blog/               # MDX blog (optional)
│   │   ├── layout.tsx          # Root layout with Navbar, Footer, Diana
│   │   └── page.tsx            # Homepage
│   ├── components/             # UI components (Navbar, Footer, PortfolioChat, etc.)
│   ├── lib/                    # Data & utilities
│   │   ├── projects.ts         # Project content
│   │   ├── courses.ts          # Course content
│   │   └── utils.ts            # Tailwind class merger (cn)
│   └── app/globals.css         # Tailwind + custom CSS variables
├── content/blog/               # MDX blog posts
├── public/                     # Static assets (resume, icons, etc.)
├── .env.local                  # API key config (gitignored)
└── README.md
```

---

## Scripts

| Command         | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Start dev server with Turbopack   |
| `npm run build` | Build for production              |
| `npm run start` | Run production server             |
| `npm run lint`  | Run ESLint                        |

---

## About

**Saurav Dhakal**
Systems Engineer · Full-Stack Developer

[GitHub](https://github.com/dhakalsaurav11)

---

## Acknowledgements

- Inspired by modern portfolios like [leerob.io](https://leerob.io/)
- Built with Next.js, Tailwind CSS, Framer Motion, and the OpenAI API