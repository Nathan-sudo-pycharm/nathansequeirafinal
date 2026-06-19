# Content & Customisation Guide

This file explains how to update portfolio content, manage languages,
customise the 3D element, and add new sections.

---

## The Golden Rule

All site content lives in ONE file: `data/index.ts`

Never edit component files to change text or personal details.
Always edit `data/index.ts` and the components will update automatically.

---

## Updating Content

### 1. Update your bio (About section)

Open `data/index.ts` and find the `about` object:

```ts
export const about = {
  para1: {
    en: 'Your English bio paragraph 1.',
    de: 'Your German bio paragraph 1.',
  },
  para2: {
    en: 'Your English bio paragraph 2.',
    de: 'Your German bio paragraph 2.',
  },
  stackLabel: { en: 'STACK', de: 'TECHNOLOGIEN' },
}
```

Edit the `en` and `de` values. Save. Done.

---

### 2. Add or edit a project

Find the `projects` array in `data/index.ts`:

```ts
{
  id: '07',               // next number in sequence, shown as "07" on site
  name: 'Your Project',
  wip: false,             // set to true to show a yellow WIP badge
  description: {
    en: 'English description of the project.',
    de: 'German description of the project.',
  },
  tags: ['FastAPI', 'Next.js', 'Python'],   // tech stack pills
  github: 'https://github.com/your-repo',   // or null if private
  live: 'https://your-live-url.com',        // or null if no live demo
},
```

To mark a project as work in progress, set `wip: true`.
A small yellow WIP badge will appear next to the project name.

To remove a project, delete its entire object from the array.
To reorder projects, just reorder the objects in the array.

---

### 3. Update work experience

Find the `experience` array in `data/index.ts`:

```ts
{
  company: 'Company Name',
  role: { en: 'Your Role Title', de: 'German Role Title' },
  duration: { en: 'Jan 2024 – Present', de: 'Jan. 2024 – Heute' },
  bullets: {
    en: [
      'First bullet point.',
      'Second bullet point.',
      'Third bullet point.',
    ],
    de: [
      'Erster Punkt.',
      'Zweiter Punkt.',
      'Dritter Punkt.',
    ],
  },
},
```

To add a new role, add a new object to the array.
The most recent role should be first in the array.

---

### 4. Update contact details

```ts
export const contact = {
  heading: { en: "Let's build something.", de: 'Lass uns etwas bauen.' },
  email: 'your@email.com',
  github: 'https://github.com/your-handle',
  linkedin: 'https://linkedin.com/in/your-handle',
  availability: {
    en: 'AVAILABLE FOR REMOTE ROLES · FREELANCE · GERMANY RELOCATION',
    de: 'VERFÜGBAR FÜR REMOTE-POSITIONEN · FREELANCE · UMZUG NACH DEUTSCHLAND',
  },
  cvLabel: { en: 'DOWNLOAD CV (PDF)', de: 'LEBENSLAUF HERUNTERLADEN (PDF)' },
}
```

---

### 5. Update the stack pills (About section)

Find `stackPills` in `data/index.ts`:

```ts
export const stackPills = [
  'FastAPI', 'Next.js', 'React', 'Python', 'LangChain',
  // add or remove items here
]
```

Just add or remove strings from the array.

---

### 6. Update your CV file

Replace the file at:
```
public/cv/Nathan_Ivor_Sequeira_CV.pdf
```

Keep the exact same filename. If you rename it, update this line
in `components/Contact.tsx` and `components/Navbar.tsx`:
```tsx
href="/cv/Nathan_Ivor_Sequeira_CV.pdf"
```

---

### 7. Update the hero typewriter roles

In `components/Hero.tsx` find the `roles` object near the top:

```ts
const roles = {
  en: ['Full-Stack Developer', 'AI Integration Engineer', 'LLM Pipeline Architect', 'Open to Remote & Germany'],
  de: ['Full-Stack-Entwickler', 'KI-Integrations-Ingenieur', 'LLM-Pipeline-Architekt', 'Offen für Remote & Deutschland'],
}
```

Add, remove, or edit the strings in the arrays.
The typewriter cycles through them automatically.

---

## Language Management

### How it works

The site uses client-side language state. The `lang` variable is
either `'en'` or `'de'` and is passed as a prop to every component.
Every string has an `en` and `de` version in `data/index.ts`.

### Remove German — English only

If you want English only and no language switcher:

**Step 1** — In `app/page.tsx`, remove the useState and hardcode:
```ts
const lang = 'en' as const
// remove: const [lang, setLang] = useState<'en' | 'de'>('en')
```

**Step 2** — Remove `setLang` from Navbar and Footer props.

**Step 3** — In `components/Navbar.tsx`, delete the language switcher block:
```tsx
{/* Delete this entire block */}
<div className="flex items-center gap-2 font-mono-jet text-xs tracking-widest">
  <button onClick={() => setLang('en')} ...>EN</button>
  <span>/</span>
  <button onClick={() => setLang('de')} ...>DE</button>
</div>
```

**Step 4** — Do the same in `components/Footer.tsx`.

**Step 5** — In `data/index.ts`, you can simplify bilingual strings
from `{ en: '...', de: '...' }` to plain strings and update
component references from `about.para1[lang]` to `about.para1`.

---

### Add a third language (e.g. French)

**Step 1** — Update the Lang type in `data/index.ts`:
```ts
export type Lang = 'en' | 'de' | 'fr'
```

**Step 2** — Add `fr` keys to every bilingual object:
```ts
para1: {
  en: 'English text.',
  de: 'German text.',
  fr: 'French text.',   // add this
},
```

**Step 3** — In `components/Navbar.tsx` and `components/Footer.tsx`,
add a third button to the language switcher:
```tsx
<button onClick={() => setLang('fr')} ...>FR</button>
```

**Step 4** — Update the `app/page.tsx` state type:
```ts
const [lang, setLang] = useState<'en' | 'de' | 'fr'>('en')
```

---

## Customising the 3D Element

All 3D configuration is in `components/Hero.tsx`.

### Change the color
Find `meshBasicMaterial` and change the `color` prop:
```tsx
<meshBasicMaterial color="#E8FF47" wireframe />
// change #E8FF47 to any hex color
```

### Change the size
Find `torusKnotGeometry` and adjust `args`:
```tsx
<torusKnotGeometry args={[radius, tube, tubularSegments, radialSegments, p, q]} />
// radius → overall size (currently 1.2) — increase to make bigger
// tube → thickness (currently 0.38) — increase to make fatter
// p, q → knot shape: try (2,3) (3,4) (3,5) (2,5) for different shapes
```

### Change rotation speed
Find `delta * 0.15` in `useFrame` and adjust:
```ts
meshRef.current.rotation.y += delta * 0.15
// increase 0.15 to spin faster, decrease to spin slower
```

### Change mouse sensitivity
Find `mouse.current[0] * 0.3` and adjust the `0.3` value:
```ts
meshRef.current.rotation.x += (mouse.current[1] * 0.3 - ...) * 0.05
// increase 0.3 for more dramatic mouse tracking
// decrease for subtler movement
```

### Remove the 3D element entirely
In `components/Hero.tsx`, delete the Canvas block:
```tsx
{/* Delete from here */}
<div className="absolute md:left-[45%] z-0" ...>
  <Canvas ...>
    <Suspense fallback={null}>
      <Scene mouse={mouse} />
    </Suspense>
  </Canvas>
</div>
{/* To here */}
```

Also delete the mobile dim overlay div below it.

---

## Adding a New Section

**Step 1** — Create `components/YourSection.tsx`:
```tsx
'use client'
import type { Lang } from '@/data/index'

type Props = { lang: Lang }

export default function YourSection({ lang }: Props) {
  return (
    <div className="w-full border-t border-[#2A2A2A]">
      <section id="your-section" className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto">
        <span className="font-mono-jet text-xs tracking-[0.25em] text-[#666666]">
          SECTION LABEL
        </span>
        {/* your content */}
      </section>
    </div>
  )
}
```

**Step 2** — Import and add it in `app/page.tsx`:
```tsx
import YourSection from '@/components/YourSection'
// add inside <main>:
<YourSection lang={lang} />
```

**Step 3** — Add a nav link in `components/Navbar.tsx` links array:
```ts
{ label: 'YOUR SECTION', href: '#your-section' }
```

**Step 4** — Add content to `data/index.ts` following the same
bilingual pattern as existing sections.

---

## Design Tokens

These are defined as CSS variables in `app/globals.css`:

| Variable | Value | Usage |
|---|---|---|
| `--bg` | `#080808` | Page background |
| `--fg` | `#F0F0F0` | Primary text |
| `--accent` | `#E8FF47` | Yellow-green accent |
| `--muted` | `#2A2A2A` | Borders, dividers |
| `--muted-fg` | `#666666` | Secondary text, labels |

To change the accent color globally, change `--accent` in `globals.css`.
This will update the 3D element color, EN/DE active state, WIP badge,
bullet numbers, email, and all hover states automatically... except
the Three.js mesh color which is set separately in `Hero.tsx`.

---

## Common Issues

**Site showing old version after push**
Vercel caches aggressively. Hard refresh with `Ctrl + Shift + R`
or wait 2-3 minutes for the deployment to complete.

**3D element not showing**
Check browser console for WebGL errors. Some corporate/school
networks block WebGL. The site degrades gracefully — layout
remains intact without the 3D canvas.

**Language toggle not working**
Make sure both `en` and `de` keys exist for every string you
edited in `data/index.ts`. A missing key will show `undefined`.

**CV download not working**
Confirm the file exists at exactly `public/cv/Nathan_Ivor_Sequeira_CV.pdf`.
Filenames are case-sensitive on Linux (Vercel's build environment).