import type { SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    label: 'Languages',
    skills: ['TypeScript', 'JavaScript (ES2022+)', 'HTML5', 'CSS3'],
  },
  {
    id: 'frameworks',
    label: 'Frameworks & Libraries',
    skills: ['React', 'Next.js', 'TanStack Query', 'Zustand', 'Tailwind CSS'],
  },
  {
    id: 'platforms',
    label: 'CMS & Platforms',
    skills: [
      'Adobe Experience Manager (AEM)',
      'WooCommerce',
      'Google Maps API',
    ],
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
  },
];
