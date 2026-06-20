export interface NavSection {
  id: string;
  label: string;
  num: string; // "01", "02" etc — shown in topnav only
}

export const NAV_SECTIONS: NavSection[] = [
  { id: 'work', label: 'Work', num: '01' },
  { id: 'skills', label: 'Skills', num: '02' },
  { id: 'experience', label: 'Experience', num: '03' },
  { id: 'contact', label: 'Contact', num: '04' },
];

// Side rail includes "top" (Intro) which the topnav doesn't show
export const RAIL_SECTIONS: { id: string; label: string }[] = [
  { id: 'top', label: 'Intro' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];
