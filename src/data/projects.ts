import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'quill',
    title: 'Quill - AI Writing Studio',
    tags: ['Next.js 16', 'TypeScript', 'Tiptap', 'Anthropic API', 'Zustand'],
    summary:
      'A writing app where AI collaborates in real time — suggesting continuations, rewriting tone, and giving structured feedback, with a hand-built streaming layer.',
    role: 'Solo builder',
    stack:
      'Next.js 16 (App Router), TypeScript, Tiptap, Anthropic API, Zustand, Neon PostgreSQL, Clerk',
    highlights: [
      'Implemented the SSE streaming protocol from scratch against the raw Anthropic API - no Vercel AI SDK - including manual SSE line parsing and AbortController-based cancellation',
      'Built a custom useStream hook handling token-by-token state updates for three concurrent AI modes: Suggest, Rewrite, and Coach',
      'Structured the app around RSC boundaries - server components fetch documents and user data, client islands handle only the interactive editor and AI panel',
      'Integrated Tiptap for the rich text editor with debounced autosave',
    ],
    liveUrl: 'https://quill-ai-writing-studio.vercel.app',
    githubUrl: 'https://github.com/atripunoska/quill-ai-writing-studio',
  },
  {
    id: 'personal-finance-app',
    title: 'Personal Finance App',
    tags: ['Next.js 16', 'TypeScript', 'NextAuth.js', 'Neon', 'Zod'],
    summary:
      'A full-stack budgeting app with transactions, budgets, savings pots, and recurring bill tracking. Built well past its original Frontend Mentor brief.',
    role: 'Solo builder',
    stack:
      'Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Neon PostgreSQL, NextAuth.js, Zod, Chart.js',
    highlights: [
      'Built a full data access layer with 20+ CRUD functions, server actions, and Zod schema validation on every mutation',
      'Implemented secure authentication and session management with NextAuth.js',
      'Wrote a real test suite - Jest and React Testing Library for components, Playwright for end-to-end coverage',
      'Followed WCAG 2.1 AA throughout: keyboard navigation, semantic landmarks, and verified color contrast',
    ],
    liveUrl: 'https://personal-finance-app-ookl.vercel.app',
    githubUrl: 'https://github.com/atripunoska/personal-finance-app',
    // NOTE: started from the Frontend Mentor "Personal Finance App" challenge
    // brief — worth being upfront about that origin if asked, since the real
    // differentiator is everything built past the brief (auth, real DB, tests)
  },
  // Career Compass — not yet finished/deployed. Add back here once it's
  // live, in the same shape as the entries above. Don't show unfinished
  // work alongside shipped projects.
  //
  // {
  //   id: 'career-compass',
  //   title: 'Career Compass',
  //   tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Zustand'],
  //   summary: 'A self-built platform for tracking career goals, skills, and feedback.',
  //   role: 'Solo builder',
  //   stack: 'Next.js 15, TypeScript, Tailwind CSS v4, Zustand, Neon PostgreSQL',
  //   highlights: [
  //     'Designed the data model and auth flow from scratch, migrating the database layer from Supabase to Neon PostgreSQL mid-build',
  //     'Built analytics, goal-tracking, and skill-progression features with a shared Zustand store',
  //     'Used Claude Code as a structured agentic workflow throughout the build',
  //   ],
  //   liveUrl: '', // add once deployed
  //   githubUrl: '', // add once public
  // },
];
