export interface WorkItem {
  id: string;
  number: string;
  title: string;
  year: string;
  discipline: string;
  slug: string;
  thumbnailUrl?: string;
  summary?: string;
  tags?: string[];
  isSelected?: boolean;
  colorAccent?: string;
  role?: string;
  platform?: string;
  media?: { type: 'image' | 'youtube' | 'vimeo'; src: string; num?: number }[];
  isCustomHtml?: boolean;
  customHtmlPath?: string;
  touchpointCover?: string;
}

export interface BrandItem {
  id: string;
  name: string;
  alt: string;
  logoUrl?: string;
  subtext?: string;
}

export interface ToolItem {
  id: string;
  name: string;
  alt: string;
  category?: string;
  logoUrl?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
}

export interface ImpactMetric {
  id: string;
  number: string;
  metric: string;
  label: string;
  context: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: string[];
}

export interface ContributionArea {
  id: string;
  title: string;
  description: string;
}

export interface MakeWithAiArea {
  id: string;
  title: string;
  description: string;
}
