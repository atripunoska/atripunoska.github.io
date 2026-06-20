export interface Project {
  id: string;
  title: string;
  year?: number; // optional — fill in if you know it, omit if not
  tags: string[];
  summary: string;
  role: string;
  stack: string;
  highlights: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  featured?: boolean; // true = shown first / larger in the Work section
}

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  current: boolean;
  summary: string;
  highlights: string[];
  skills?: string[]; // shown as small tags under the role, optional
}

export interface SkillGroup {
  id: string;
  label: string;
  skills: string[];
  primary?: string[]; // subset of `skills` rendered as highlighted/filled chips
}
