# Dhakal Portfolio

> A sleek, modern developer portfolio showcasing projects, skills, and personal brand — built for clarity, speed, and customization.

## Live Demo

[https://the-dhakal.com](https://the-dhakal.com)

---

## Features

* **Fast & SEO Optimized** – Next.js + TypeScript for performance and scalability
* **Custom AI Assistant** – Chat with a dynamic assistant powered by Together.ai
* **Fully Responsive** – Works great on desktop, tablet, and mobile
* **Dynamic Project Loading** – Project data loads from `data/projects.ts`
* **Dark Mode Support**
* **Minimal, Custom Design** – Tailwind CSS styling inspired by clean dev portfolios

---

## Tech Stack

* **Framework:** [Next.js](https://nextjs.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Language:** TypeScript
* **AI Assistant:** [Together.ai](https://together.ai/)
* **Deployment:** Vercel + Custom Domain (e.g., `the-dhakal.com`)

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

## Usage

* **Projects:** Edit `data/projects.ts` to add/update featured work
* **Skills & Info:** Add/edit skills in `data/skills.ts` and bio details in layout files
* **Branding:** Modify `tailwind.config.js` and `globals.css` for custom colors/fonts
* **Chat Assistant:** Configured in `PortfolioChat.tsx` and `/api/chat/route.ts`

  * Uses Together.ai
  * Reads your projects automatically
  * Provides contextual Q\&A to site visitors

---

## File Structure

```bash
├── components/       # UI components (navbar, chat, cards)
├── data/             # Dynamic content (projects, skills)
├── app/              # App directory (routes, layouts)
├── public/           # Static assets
├── styles/           # Tailwind + global CSS
├── .env.local        # API key config (Together.ai)
└── README.md
```

---

## About

**Saurav Dhakal**
CS Student · Full-Stack Developer

[GitHub](https://github.com/dhakalsaurav11) · [LinkedIn](https://linkedin.com/in/dhakalsaurav11)

---

## Acknowledgements

* Inspired by modern portfolios like [leerob.io](https://leerob.io/)
* Built using Next.js, Tailwind, and free AI APIs
