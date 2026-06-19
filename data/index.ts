// ============================================
// NATHAN IVOR SEQUEIRA — PORTFOLIO DATA FILE
// Edit this file to update all site content
// ============================================

export type Lang = 'en' | 'de'

export type ExperienceEntry = {
  company: string
  role: { en: string; de: string }
  duration: { en: string; de: string }
  bullets: { en: string[]; de: string[] }
}

// ── PROJECTS ────────────────────────────────
export const projects = [
  {
    id: '01',
    name: 'Sorted',
    description: {
      en: 'WhatsApp-native order management for home bakers. LLM parses natural-language orders via webhook → FastAPI → Supabase. No app install required for customers.',
      de: 'WhatsApp-natives Bestellmanagement für Hobbybäcker. Ein LLM verarbeitet natürlichsprachliche Bestellungen per Webhook → FastAPI → Supabase.',
    },
    tags: ['FastAPI', 'Supabase', 'LLM', 'WhatsApp API', 'Python'],
    github: 'https://github.com/Nathan-sudo-pycharm/Sorted',
    live: null,
  },
  {
    id: '02',
    name: 'Doc U Pilot',
    description: {
      en: 'RAG document assistant. Upload a PDF, ask questions, get cited answers. Stack: Qdrant, LangChain, Groq.',
      de: 'RAG-Dokumentenassistent. PDF hochladen, Fragen stellen, zitierte Antworten erhalten. Stack: Qdrant, LangChain, Groq.',
    },
    tags: ['LangChain', 'Qdrant', 'Groq', 'RAG', 'FastAPI'],
    github: 'https://github.com/Nathan-sudo-pycharm/docpilot-rag-groq-qdrant',
    live: null,
  },
  {
    id: '03',
    name: 'InfraBoard',
    description: {
      en: 'Observability platform with ML-powered anomaly detection. Prometheus + Grafana + Isolation Forest.',
      de: 'Observability-Plattform mit ML-basierter Anomalieerkennung. Prometheus + Grafana + Isolation Forest.',
    },
    tags: ['Prometheus', 'Grafana', 'Python', 'Docker', 'ML'],
    github: 'https://github.com/Nathan-sudo-pycharm/infraboard-observability',
    live: null,
  },
  {
    id: '04',
    name: 'CodeReviewBot',
    description: {
      en: 'Async AI code review bot. Reviews GitHub PRs and posts structured feedback via webhooks. Stack: Celery, Redis, NVIDIA NIM.',
      de: 'Asynchroner KI-Code-Review-Bot. Bewertet GitHub-PRs und postet strukturiertes Feedback per Webhook.',
    },
    tags: ['Celery', 'Redis', 'NVIDIA NIM', 'FastAPI', 'GitHub API'],
    github: 'https://github.com/Nathan-sudo-pycharm/codereviewbot',
    live: null,
  },
  {
    id: '05',
    name: 'Hermes',
    description: {
      en: 'Distributed messaging service with automatic retry, circuit breaking, and full observability. Stack: Kafka, gRPC, OpenTelemetry.',
      de: 'Verteilter Messaging-Dienst mit automatischem Retry, Circuit Breaking und vollständiger Observability.',
    },
    tags: ['Kafka', 'gRPC', 'OpenTelemetry', 'Docker', 'Python'],
    github: 'https://github.com/Nathan-sudo-pycharm/hermes',
    live: null,
  },
  {
    id: '06',
    name: 'PipelineIQ',
    description: {
      en: 'GitHub CI/CD analytics tool for pipeline performance insights. Tracks run times, failure rates, and bottlenecks.',
      de: 'GitHub-CI/CD-Analysetool für Pipeline-Performance-Einblicke. Verfolgt Laufzeiten, Fehlerquoten und Engpässe.',
    },
    tags: ['GitHub Actions', 'FastAPI', 'Next.js', 'PostgreSQL'],
    github: 'https://github.com/Nathan-sudo-pycharm/pipelineiq',
    live: null,
  },
]

// ── STACK PILLS ─────────────────────────────
export const stackPills = [
  'FastAPI', 'Next.js', 'React', 'Python', 'LangChain',
  'Groq', 'RAG', 'Qdrant', 'Supabase', 'PostgreSQL',
  'Docker', 'GitHub Actions', 'Redis', 'Celery', 'Kafka',
  'gRPC', 'OpenTelemetry', 'Prometheus', 'Grafana', 'Tailwind CSS',
]

// ── EXPERIENCE ──────────────────────────────
export const experience = [
  {
    company: 'UnifyCX',
    role: { en: 'Junior Associate - Operations (Technical Support)', de: 'Junior Associate - Technischer Support' },
    duration: { en: 'Mar 2025 – Nov 2025', de: 'März 2025 – Nov. 2025' },
    bullets: {
      en: [
        'Served as designated QA tester: designed test cases, documented failure modes, and validated fixes across VPN infrastructure for PointWild.',
        'Resolved 40-80 VPN support tickets per shift, diagnosing authentication failures, tunnel configuration errors, and server load imbalances.',
        'Used Zendesk and Okta for ticket management and identity verification workflows.',
      ],
      de: [
        'Als QA-Tester verantwortlich: Testfälle entworfen, Fehlermodi dokumentiert und Fixes für VPN-Infrastruktur validiert.',
        'Pro Schicht 40-80 VPN-Support-Tickets bearbeitet, Authentifizierungsfehler und Tunnelkonfigurationsprobleme diagnostiziert.',
        'Zendesk und Okta für Ticket-Management und Identitätsverifizierung eingesetzt.',
      ],
    },
  },
  {
    company: 'UnifyCX',
    role: { en: 'Junior Support Engineer - Bluehost', de: 'Junior Support Engineer - Bluehost' },
    duration: { en: 'Jul 2024 – Mar 2025', de: 'Jul. 2024 – März 2025' },
    bullets: {
      en: [
        'Diagnosed and resolved DNS propagation failures, SSL certificate errors, and email delivery issues across shared and VPS hosting environments.',
        'Used Grafana dashboards daily to correlate server-side symptoms with client-reported failures across hosting, DNS, and security layers.',
        'Operated WHM, cPanel, and Linux-based tools for infrastructure management.',
      ],
      de: [
        'DNS-Propagationsfehler, SSL-Zertifikatsfehler und E-Mail-Probleme in VPS- und Shared-Hosting-Umgebungen diagnostiziert und behoben.',
        'Grafana-Dashboards täglich genutzt, um serverseitige Symptome mit gemeldeten Fehlern zu korrelieren.',
        'WHM, cPanel und Linux-Tools für das Infrastrukturmanagement eingesetzt.',
      ],
    },
  },
]

// ── ABOUT ───────────────────────────────────
export const about = {
para1: {
  en: 'I have 1.5 years of professional experience in infrastructure and network operations, and I build AI-integrated backend systems independently - RAG pipelines, distributed messaging, async services. Based in Mangaluru, open to remote roles and relocation to Germany.',
  de: 'Ich verfüge über 1,5 Jahre Berufserfahrung in Infrastruktur und Netzwerkbetrieb und entwickle eigenständig KI-integrierte Backend-Systeme - RAG-Pipelines, verteiltes Messaging, asynchrone Dienste. Standort Mangaluru, offen für Remote-Stellen und Umzug nach Deutschland.',
},
  para2: {
    en: 'I am currently preparing for a Master\'s program in Germany (WS 2026/27) and am open to remote roles and European opportunities. Based in Mangaluru, India — working with teams worldwide.',
    de: 'Aktuell bereite ich mich auf ein Masterstudium in Deutschland (WS 2026/27) vor und bin offen für Remote-Positionen und europäische Möglichkeiten. Standort Mangaluru, Indien — Zusammenarbeit mit Teams weltweit.',
  },
  stackLabel: { en: 'STACK', de: 'TECHNOLOGIEN' },
}

// ── CONTACT ─────────────────────────────────
export const contact = {
  heading: { en: "Let's build something.", de: 'Lass uns etwas bauen.' },
  email: 'nathansequeirade@gmail.com',
  github: 'https://github.com/Nathan-sudo-pycharm',
  linkedin: 'https://www.linkedin.com/in/nathan-sequeira-941736255/',
  availability: {
    en: 'AVAILABLE FOR REMOTE ROLES · FREELANCE · GERMANY RELOCATION',
    de: 'VERFÜGBAR FÜR REMOTE-POSITIONEN · FREELANCE · UMZUG NACH DEUTSCHLAND',
  },
  cvLabel: { en: 'DOWNLOAD CV (PDF)', de: 'LEBENSLAUF HERUNTERLADEN (PDF)' },
}

// ── FOOTER ──────────────────────────────────
export const footer = {
  copy: '© 2026 Nathan Ivor Sequeira',
}