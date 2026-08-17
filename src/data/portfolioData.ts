import {
  WorkItem,
  BrandItem,
  ToolItem,
  TestimonialItem,
  ImpactMetric,
  ContributionArea,
  SkillCategory,
  MakeWithAiArea,
} from '../types';

export const PERSONAL_INFO = {
  name: 'Suhotra Chakraborty',
  alias: 'Neel Genix',
  role: 'UX/UI & Product Designer',
  location: 'India',
  specialization: 'AI & Design Systems',
  email: 'suhotraneel@gmail.com',
  linkedin: 'https://www.linkedin.com/in/suhotra/',
  github: 'https://github.com/suhotraneel',
  resumePdfPath: '/resume.pdf',
  heroTagline:
    'Leading end-to-end product design from research to release. Expertise in UX research, testing, interaction design, design systems, strategy, developer handoff, cross-functional collaboration, conversational UX, and AI-native experiences.',
};

export const SELECTED_WORK_IDS = [
  'guided-practice-schoolai',
  'madtrip-storefront',
  'the-edge-schoolai',
];

export const WORK_ITEMS: WorkItem[] = [
  {
    id: 'guided-practice-schoolai',
    number: '01',
    title: 'Guided Practice - SchoolAi',
    year: '2026',
    discipline: 'UX UI Design',
    slug: 'guided-practice-schoolai',
    summary:
      "SchoolAi's core learning loop with AI Tutor Vin",
    tags: ['UX Design', 'AI Interaction', 'Design System', 'EdTech'],
    isSelected: true,
    platform: 'Web & Tablet App',
    role: 'Lead Product Designer',
  },
  {
    id: 'madtrip-storefront',
    number: '02',
    title: 'MadTrip - Online Store',
    year: '2026',
    discipline: 'UX/UI Design',
    slug: 'madtrip-storefront',
    summary: 'A psychedelic streetwear and accessories brand.',
    tags: ['E-commerce', 'Web Design', 'Visual Identity'],
    isSelected: true,
    platform: 'Web Platform',
    role: 'Lead Designer',
    customHtmlPath: 'https://madtripstore.com/',
    touchpointCover: '/projects/madtrip-storefront/cover.png',
    touchpointTitle: 'Live Storefront',
    touchpointDescription: 'Visit the live online storefront for MadTrip to explore the UI components and overall experience. The app is fully interactive and responsive.',
    touchpointButtonText: 'Open Live Website',
  },
  {
    id: 'the-edge-schoolai',
    number: '03',
    title: 'The EDGE - SchoolAi',
    year: '2026',
    discipline: 'UX UI Design',
    slug: 'the-edge-schoolai',
    summary: "SchoolAi's invite-only aspirational study environment",
    tags: ['Enterprise UX', 'Teacher Portal', 'Data Visualization', 'Workflow Design'],
    isSelected: true,
    platform: 'Desktop Platform',
    role: 'Product Designer',
  },
  {
    id: 'purple-ice-design-system',
    number: '04',
    title: 'Purple Ice Design System',
    year: '2025',
    discipline: 'Design Systems',
    slug: 'purple-ice-design-system',
    summary: 'Unified design language and component library',
    tags: ['Design System', 'Component Library', 'Tokens', 'UI Architecture'],
    isSelected: false,
    platform: 'Web & Desktop',
    role: 'Lead Systems Designer',
    customHtmlPath: '/projects/purple-ice-design-system/design-system.html',
    touchpointCover: '/projects/purple-ice-design-system/cover.png',
    touchpointTitle: 'Interactive Design System',
    touchpointDescription: 'Explore the living component library, tokens, and documentation for Purple Ice Design System. The app is fully interactive and responsive.',
    touchpointButtonText: 'Launch Design System App',
  },
  {
    id: 'shadowgun-legends',
    number: '05',
    title: 'Shadowgun Legends',
    year: '2025',
    discipline: 'UX UI Design',
    slug: 'shadowgun-legends',
    summary: 'AA Sci-Fi FPS Gameplay UI Redesign',
    tags: ['Game UX', 'HUD Systems', 'Mobile Interaction', 'Visual Design'],
    isSelected: false,
    platform: 'Mobile / Cross-Platform',
    role: 'UI/UX Designer',
  },
  {
    id: 'mosaic-lane-hsbc',
    number: '06',
    title: 'Mosaic Lane - HSBC',
    year: '2024',
    discipline: 'Marketing Campaign',
    slug: 'mosaic-lane-hsbc',
    summary: 'Marketing campaign of HSBC, celebrating objects',
    tags: ['Campaign Design', 'Visual Strategy', 'Interactive Storytelling'],
    isSelected: false,
    platform: 'Digital Campaign & Social',
    role: 'Visual & Campaign Designer',
    media: [
      { type: 'youtube', src: 'https://www.youtube.com/embed/e7jm92Q0DAQ', num: 1.4 },
      { type: 'youtube', src: 'https://www.youtube.com/embed/fa9lEn_yUbY', num: 1.5 }
    ],
  },
  {
    id: 'right-to-look-space118',
    number: '07',
    title: 'Right to Look - Space118',
    year: '2023',
    discipline: 'UX UI Design',
    slug: 'right-to-look-space118',
    summary: 'Digital immersive audio-visual art gallery experience',
    tags: ['Audio-Visual UX', 'Exhibition Design', 'Web Experience', 'Archive'],
    isSelected: false,
    platform: 'Interactive Web Archive',
    role: 'Lead Experience Designer',
  },
  {
    id: 'neo-marche-branding',
    number: '08',
    title: 'Neo Marche Branding',
    year: '2024',
    discipline: 'Marketing Communication',
    slug: 'neo-marche-branding',
    summary: 'Brand communication strategies across marketing channels',
    tags: ['Brand System', 'Communication Design', 'Packaging & Digital'],
    isSelected: false,
    platform: 'Brand & Digital Identity',
    role: 'Brand & Communication Designer',
    media: [
      { type: 'vimeo', src: 'https://player.vimeo.com/video/1050371949?h=862d69c399', num: 16.5 }
    ],
  },
  {
    id: 'maze-blaze-vr-game',
    number: '09',
    title: 'Maze Blaze - VR Game',
    year: '2024',
    discipline: 'Game Design',
    slug: 'maze-blaze-vr-game',
    summary: 'Puzzle-adventure VR game based on Star Wars',
    tags: ['Spatial UI', 'VR Interaction', '3D Navigation', 'Level Design'],
    isSelected: false,
    platform: 'Virtual Reality (VR)',
    role: 'Spatial Game Designer',
    media: [
      { type: 'youtube', src: 'https://www.youtube.com/embed/75uVig356WI', num: 1.5 }
    ],
  },
  {
    id: 'prickle-typeface',
    number: '10',
    title: 'Prickle - Typeface',
    year: '2023',
    discipline: 'Type Design',
    slug: 'prickle-typeface',
    summary: 'Bold typeface inspired by the texture of wet animal fur',
    tags: ['Type Design', 'Font Engineering', 'Glyph Construction', 'Editorial'],
    isSelected: false,
    platform: 'OpenType Font Family',
    role: 'Type Designer',
  },
];

export const BRANDS: BrandItem[] = [
  {
    id: 'unilever',
    name: 'Unilever',
    alt: 'Unilever',
    logoUrl: '/brands/unilever.svg',
  },
  {
    id: 'madtrip',
    name: 'Madtrip',
    alt: 'Madtrip',
    logoUrl: '/brands/madtrip.svg',
  },
  {
    id: 'goa-sunsplash',
    name: 'Goa Sunsplash',
    alt: 'Goa Sunsplash',
    logoUrl: '/brands/goa_sunsplash.svg',
  },
  {
    id: 'coschool',
    name: 'Coschool',
    alt: 'Coschool',
    logoUrl: '/brands/coschool.svg',
  },
  {
    id: 'ruskin-bond-collection',
    name: 'Ruskin Bond Collection',
    alt: 'Ruskin Bond Collection',
    logoUrl: '/brands/ruskin_bond_collection.svg',
  },
  {
    id: 'e4f-resurrect',
    name: 'e4f Resurrect',
    alt: 'e4f Resurrect',
    logoUrl: '/brands/e4f_ressurect.svg',
  },
  {
    id: 'neo-marche',
    name: 'Neo Marche',
    alt: 'Neo Marche',
    logoUrl: '/brands/neo_marche.svg',
  },
  {
    id: 'space118',
    name: 'Space118',
    alt: 'Space118',
    logoUrl: '/brands/space118.svg',
  },
];

export const TOOLS: ToolItem[] = [
  { id: 'framer', name: 'Framer', alt: 'Framer', logoUrl: '/tools/framer.svg', category: 'Web & Interaction' },
  { id: 'figma', name: 'Figma', alt: 'Figma', logoUrl: '/tools/figma.svg', category: 'Design & Prototyping' },
  { id: 'rive', name: 'Rive', alt: 'Rive', logoUrl: '/tools/rive.svg', category: 'Interactive Motion' },
  { id: 'claude', name: 'Claude', alt: 'Claude', logoUrl: '/tools/claude.svg', category: 'AI & Research' },
  { id: 'chatgpt', name: 'ChatGPT', alt: 'ChatGPT', logoUrl: '/tools/chat-gpt.svg', category: 'AI & Generation' },
  { id: 'gemini', name: 'Gemini', alt: 'Gemini', logoUrl: '/tools/gemini.svg', category: 'AI Multimodal' },
  { id: 'photoshop', name: 'Adobe Photoshop', alt: 'Adobe Photoshop', logoUrl: '/tools/adobe-photoshop.svg', category: 'Visual & Raster' },
  { id: 'illustrator', name: 'Adobe Illustrator', alt: 'Adobe Illustrator', logoUrl: '/tools/adobe-Illustrator.svg', category: 'Vector & Type' },
  { id: 'after-effects', name: 'Adobe After Effects', alt: 'Adobe After Effects', logoUrl: '/tools/adobe-after-effects.svg', category: 'Motion Design' },
  { id: 'lightroom', name: 'Adobe Lightroom', alt: 'Adobe Lightroom', logoUrl: '/tools/adobe-lightroom.svg', category: 'Photo & Color' },
  { id: 'indesign', name: 'Adobe InDesign', alt: 'Adobe InDesign', logoUrl: '/tools/adobe-indesign.svg', category: 'Editorial & Layout' },
  { id: 'premiere', name: 'Adobe Premiere Pro', alt: 'Adobe Premiere Pro', logoUrl: '/tools/adobe-premiere-pro.svg', category: 'Video Production' },
  { id: 'google-cloud-console', name: 'Google Cloud Console', alt: 'Google Cloud Console', logoUrl: '/tools/google-cloud-console.svg', category: 'Cloud & Infrastructure' },
  { id: 'unity', name: 'Unity', alt: 'Unity', logoUrl: '/tools/unity.svg', category: 'Game & Real-time 3D' },
  { id: 'shopify', name: 'Shopify', alt: 'Shopify', logoUrl: '/tools/shopify.svg', category: 'E-commerce & Systems' },
  { id: 'affinity', name: 'Affinity', alt: 'Affinity', logoUrl: '/tools/affinity.svg', category: 'Creative Suite' },
  { id: 'davinci-resolve', name: 'DaVinci Resolve', alt: 'DaVinci Resolve', logoUrl: '/tools/davinci-resolve.webp', category: 'Color & Post-Production' },
  { id: 'unreal-engine', name: 'Unreal Engine', alt: 'Unreal Engine', logoUrl: '/tools/unreal-engine.svg', category: 'Spatial & Game Engine' },
  { id: 'vs-code', name: 'VS Code', alt: 'VS Code', logoUrl: '/tools/vs-code.svg', category: 'Development' },
  { id: 'brilliant-design', name: 'Brilliant Design', alt: 'Brilliant Design', logoUrl: '/tools/brilliant-design.svg', category: 'Design & Prototyping' },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    name: 'Vijayender Cherupally',
    role: 'Design Director',
    quote: '“Neel brings a perfect mix of creative range, systems thinking, and strategic clarity.”',
  },
  {
    id: 't-2',
    name: 'Sharad Nandwani',
    role: 'Product Leader',
    quote: '“He can be a great design person where decisions are deliberate, yet fast.”',
  },
  {
    id: 't-3',
    name: 'Kayideni Kholi',
    role: 'Product Leader',
    quote: '“He understands the product direction and convert that into practical design decisions.”',
  },
  {
    id: 't-4',
    name: 'Sunil Mahajan',
    role: 'Design Researcher',
    quote: '“His ability to blend exploration, ideation, and practical application is remarkable.”',
  },
];

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    id: 'm-01',
    number: '01',
    metric: '60%',
    label: 'Increase in task success rate',
    context:
      'Achieved through iterative usability testing and resolving friction across key user journeys.',
  },
  {
    id: 'm-02',
    number: '02',
    metric: '30%',
    label: 'Increase in user retention',
    context:
      'Achieved through iterative usability testing and improvements to key user journeys.',
  },
  {
    id: 'm-03',
    number: '03',
    metric: '70%',
    label: 'Increase in feature visibility and usage',
    context:
      'Result of restructuring information architecture and interaction patterns across the student home experience and design system.',
  },
  {
    id: 'm-04',
    number: '04',
    metric: '80%',
    label: 'Learning goal completion rate',
    context:
      'The redesigned primary learning experience reached an 80% completion rate of defined learning goals.',
  },
  {
    id: 'm-05',
    number: '05',
    metric: '2×',
    label: 'Increase in audience engagement',
    context:
      'Achieved through the immersive web-based audio-visual experience created for the art exhibition The Right To Look with Space118.',
  },
  {
    id: 'm-06',
    number: '06',
    metric: '5.5 → 8.5',
    label: 'Heuristic evaluation score',
    context:
      'Improved from 5.5 to 8.5 through the end-to-end redesign of the teacher and student platform.',
  },
];

export const CONTRIBUTION_AREAS: ContributionArea[] = [
  {
    id: 'product-direction',
    title: 'Product Direction',
    description:
      'I turn ambiguous requirements into clear product direction, defining what to build, why it matters, and how products evolve through the process.',
  },
  {
    id: 'technical-alignment',
    title: 'Technical Alignment',
    description:
      'I design with technical feasibility in mind, working closely with engineers to refine experiences and shape products through execution.',
  },
  {
    id: 'systems-storytelling',
    title: 'Systems & Storytelling',
    description:
      'I design systems that go beyond screens, creating consistency and structure while shaping experiences through cohesive narratives.',
  },
];

export const WHAT_I_WORK_ON: SkillCategory[] = [
  {
    id: 'product-experience-design',
    title: 'Product & Experience Design',
    description:
      'I start by bringing clarity to the problem and questioning assumptions. From there, I design flows, interactions, and interfaces that align user behaviour with business intent and create direction teams can act on.',
    skills: [
      'UX Design',
      'UI Design',
      'Product Thinking',
      'Interaction Design',
      'User Flows',
      'Journey Mapping',
      'Information Architecture',
      'Design Handoff',
    ],
  },
  {
    id: 'design-systems-scalability',
    title: 'Design Systems & Scalability',
    description:
      'I design and build systems that ensure visual consistency and clarity across interfaces. From components to patterns, I focus on creating scalable UI foundations that support both usability and growth.',
    skills: [
      'Component Libraries',
      'UI Consistency',
      'Design Tokens',
      'Responsive Design',
      'Icon Libraries',
      'Surface Systems',
      'System Documentation',
      'Design Language',
    ],
  },
  {
    id: 'user-research',
    title: 'User Research',
    description:
      'I work with research inputs and observed behaviour to uncover what truly matters. My focus is on translating insights into clear decisions that improve usability and make experiences more relevant.',
    skills: [
      'Insight Synthesis',
      'Behavioral Analysis',
      'Persona Mapping',
      'Usability Testing',
      'Problem Framing',
      'Data Interpretation',
      'Qualitative Research',
      'Heuristic Evaluation',
    ],
  },
  {
    id: 'ai-interaction-design',
    title: 'AI & Interaction Design',
    description:
      'I design interactions for intelligent systems while leveraging AI in my own workflows to explore, iterate, and refine solutions. My focus is on making AI intuitive, practical, and meaningful in real contexts.',
    skills: [
      'AI Workflows',
      'Prompt Design',
      'Conversational UX',
      'Multimodal Design',
      'Interaction Patterns',
      'Rapid Iteration',
      'Use-case Design',
      'AI Prototyping',
    ],
  },
];

export const IMPLEMENTATION_TECHNOLOGIES = [
  'HTML',
  'CSS',
  'JavaScript',
  'Python',
  'AI-Assisted Coding',
  'Content Management System',
  'Shopify',
  'Git (Version Control)',
];

export const MAKE_WITH_AI_AREAS: MakeWithAiArea[] = [
  {
    id: 'automation-systems',
    title: 'Automation & Systems',
    description:
      'Designing automation workflows using AI and workflow tools for repeatable tasks with defined outcomes and human-in-the-loop structures.',
  },
  {
    id: 'responsible-usage',
    title: 'Responsible Usage',
    description:
      'Using AI in ways that are reliable, lawful, intentional, and appropriate to the problem.',
  },
  {
    id: 'technical-understanding',
    title: 'Technical Understanding',
    description:
      'Understanding how AI systems work and contributing to decisions about where AI is effective through collaboration with engineering teams.',
  },
];
