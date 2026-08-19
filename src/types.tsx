export interface SkillGroup {
  label: string;
  skills: string[];
}

export interface SectionElements {
  number: string;
  title: string;
  children: React.ReactNode;
}

export interface ProjectData {
  title: string;
  description: string;
  bullets: string[];
  stack: string[];
  github: string;
  demo: string;
}
