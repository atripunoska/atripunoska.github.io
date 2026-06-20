import type { SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    label: 'Languages',
    skills: ['TypeScript', 'JavaScript (ES2022+)', 'HTML5', 'CSS3'],
    primary: ['TypeScript', 'JavaScript (ES2022+)'],
  },
  {
    id: 'frameworks',
    label: 'Frameworks & UI',
    skills: ['React', 'Next.js', 'TanStack Query', 'Zustand', 'Tailwind CSS'],
    primary: ['React', 'Next.js'],
  },
  {
    id: 'platforms',
    label: 'CMS & Platforms',
    skills: [
      'Adobe Experience Manager (AEM)',
      'WooCommerce',
      'Google Maps API',
    ],
    primary: ['Adobe Experience Manager (AEM)'],
  },
  {
    id: 'tooling',
    label: 'Architecture & Tooling',
    skills: [
      'Vite',
      'Storybook',
      'MSW',
      'Git',
      'Claude Code',
      'MCP',
      'WCAG 2.1 / ARIA',
    ],
    primary: ['Claude Code'],
  },
];
