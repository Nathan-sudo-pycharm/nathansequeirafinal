# Nathan Ivor Sequeira — Portfolio

Personal portfolio website built with Next.js 14, Three.js, and Tailwind CSS.

Live: [nathansequeirafinal.vercel.app](https://nathansequeirafinal.vercel.app)
Read [this document](./public/Content_Guide.md) to customize the contents of the website as per your requirements.

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **3D:** Three.js via @react-three/fiber + @react-three/drei
- **Animations:** Framer Motion
- **Styling:** Tailwind CSS
- **Fonts:** Syne, DM Sans, JetBrains Mono (Google Fonts)
- **Analytics:** Google Analytics 4 + Vercel Analytics
- **Deployment:** Vercel

---

## Features

- Wireframe Three.js TorusKnot hero with mouse parallax and breathing animation
- EN / DE language toggle (client-side i18n)
- Expandable project list with tech tags and GitHub/Live links
- WIP badge for in-progress projects
- Copy-to-clipboard email interaction
- CV PDF download
- Mobile responsive (375px and up)
- Text selection styled in accent color (#E8FF47)
- Scroll-aware navbar with backdrop blur

---

## Project Structure

```
├── app/
│   ├── globals.css           # Global styles, CSS variables, font utilities
│   ├── layout.tsx            # Root layout, font setup, metadata, analytics
│   ├── page.tsx              # Main page, language state management
│   └── GoogleAnalytics.tsx   # GA4 script injection
├── components/
│   ├── Navbar.tsx            # Fixed navbar, scroll blur, EN/DE switcher
│   ├── Hero.tsx              # Three.js scene, typewriter, name display
│   ├── Work.tsx              # Expandable numbered project list
│   ├── About.tsx             # Bio paragraphs, stack pills
│   ├── Experience.tsx        # Work history with numbered bullets
│   ├── Contact.tsx           # Copy email, social icons, CV download
│   └── Footer.tsx            # Copyright, language switcher
├── data/
│   └── index.ts              # ALL site content lives here — edit this file
└── public/
    └── cv/
        └── Nathan_Ivor_Sequeira_CV.pdf
```

---

## Getting Started

```bash
git clone https://github.com/Nathan-sudo-pycharm/nathansequeirafinal
cd nathansequeirafinal
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Deployment

Deployed on Vercel. Every push to `main` triggers an automatic deployment.

```bash
git add .
git commit -m "your message"
git push origin main
```

To preview changes before merging to main, work on a branch:

```bash
git checkout -b your-branch-name
# make changes
git push origin your-branch-name
# merge when ready
git checkout main
git merge your-branch-name
git push origin main
```

---

## Analytics

- **Google Analytics 4** — tracks page views, country breakdown, session duration, scroll depth, bot filtering. View at [analytics.google.com](https://analytics.google.com)
- **Vercel Analytics** — tracks unique visitors, device type, performance. View in your Vercel dashboard.

---

## License

Personal portfolio — not for reuse or redistribution.