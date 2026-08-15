import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Sparkles,
  Layers,
  Search,
  Bot,
  Quote,
  CheckCircle2,
  Workflow,
  ShieldCheck,
  Cpu,
} from 'lucide-react';
import {
  PERSONAL_INFO,
  CONTRIBUTION_AREAS,
  WHAT_I_WORK_ON,
  IMPACT_METRICS,
  MAKE_WITH_AI_AREAS,
} from '../data/portfolioData';

const ABOUT_SECTIONS = [
  { id: 'about-introduction', label: 'Intro' },
  { id: 'about-contribution', label: 'Approach' },
  { id: 'about-work-focus', label: 'Focus' },
  { id: 'impact-in-numbers', label: 'Impact' },
  { id: 'about-creative-background', label: 'Background' },
  { id: 'make-with-ai', label: 'AI' }
];

export const AboutPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about-introduction');

  useEffect(() => {
    const handleScroll = () => {
      let current = 'about-introduction';
      
      for (const section of ABOUT_SECTIONS) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // 150px offset to trigger the active state when it reaches the bottom of the sticky navbars
          if (rect.top <= 150) {
            current = section.id;
          }
        }
      }
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // 140px offset to account for both the top global navbar and the sticky section navbar
      const y = element.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div id="about-page" className="w-full pt-20 pb-16 sm:pb-24 relative">
      
      {/* Sticky Navigation Bar */}
      <div className="sticky top-16 sm:top-20 z-30 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-neutral-900 mb-8 sm:mb-12">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <nav className="flex items-center gap-1 overflow-x-auto py-3 no-scrollbar">
            {ABOUT_SECTIONS.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(section.id, e)}
                className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                  activeSection === section.id
                    ? 'bg-neutral-800 text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
                }`}
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* 3.1 INTRODUCTION */}
        <section id="about-introduction" className="pb-14 sm:pb-20 border-b border-neutral-900">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-400">
                  aka {PERSONAL_INFO.alias}
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-400">
                  <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                  {PERSONAL_INFO.location}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white mb-3">
                {PERSONAL_INFO.name}
              </h1>

              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-base sm:text-xl text-neutral-300 font-normal">
                <span>{PERSONAL_INFO.role}</span>
                <span className="text-neutral-700">•</span>
                <span className="text-neutral-400">{PERSONAL_INFO.specialization}</span>
              </div>
            </div>

            {/* Profile / Atelier Image Placeholder */}
            <div className="lg:col-span-4">
              <div className="aspect-square md:aspect-video lg:aspect-square w-full max-w-xs md:max-w-md lg:max-w-xs mx-auto rounded-3xl bg-[#0f1014] border border-neutral-800/80 overflow-hidden flex flex-col items-center justify-center text-center relative group shadow-xl">
                <img src="/about.webp" alt="Suhotra Chakraborty" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* 3.2 CONTRIBUTION */}
        <section id="about-contribution" className="py-14 sm:py-20 border-b border-neutral-900">
          <div className="max-w-3xl mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-light text-white mb-3 leading-tight">
              I bridge business intent and user behaviour
            </h2>
            <p className="text-base sm:text-lg font-medium text-neutral-300 mb-4">
              Shaping products that are clear, usable, and built to scale.
            </p>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              I ground decisions in real user behaviour while working with teams to create direction that can be effectively executed from concept to evolution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CONTRIBUTION_AREAS.map((area) => (
              <div
                key={area.id}
                id={`contribution-${area.id}`}
                className="p-6 rounded-2xl bg-[#0f1014] border border-neutral-800/80 flex flex-col justify-start group hover:border-neutral-700 transition-all shadow-md"
              >
                <div className="text-xs text-neutral-500 mb-2">Area {area.id}</div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {area.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 3.3 WHAT I WORK ON */}
        <section id="about-work-focus" className="py-14 sm:py-20 border-b border-neutral-900">
          <div className="mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-light text-white">
              Here’s what I work on all day
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {WHAT_I_WORK_ON.map((category) => (
              <div
                key={category.id}
                id={`work-area-${category.id}`}
                className="p-6 sm:p-7 rounded-2xl bg-[#0f1014] border border-neutral-800/80 flex flex-col justify-between group hover:border-neutral-700 transition-all shadow-md"
              >
                <div>
                  <div className="text-xs text-neutral-500 mb-2">Domain {category.id}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                    {category.description}
                  </p>
                </div>

                <div>
                  <span className="text-xs text-neutral-500 block mb-2.5">
                    Associated skills
                  </span>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3.4 IMPACT IN NUMBERS */}
        <section id="impact-in-numbers" className="py-14 sm:py-20 border-b border-neutral-900">
          <div className="mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-light text-white mb-2">
              Impact in numbers
            </h2>
            <p className="text-sm sm:text-base text-neutral-400">
              Designing experiences that improve usability, adoption, and engagement.
            </p>
          </div>

          {/* 6 Real Measurable Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {IMPACT_METRICS.map((m) => (
              <div
                key={m.id}
                id={`impact-metric-${m.id}`}
                className="p-6 rounded-2xl bg-[#0f1014] border border-neutral-800/80 flex flex-col justify-between relative group hover:border-neutral-700 transition-all shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-neutral-500">
                      Metric {m.number}
                    </span>
                  </div>

                  {/* Visually Dominant Metric */}
                  <div className="text-3xl sm:text-4xl font-normal text-white mb-2">
                    {m.metric}
                  </div>

                  {/* Metric Label */}
                  <h3 className="text-sm font-semibold text-neutral-200 mb-4">
                    {m.label}
                  </h3>
                </div>

                {/* Secondary Context */}
                <div className="pt-4 border-t border-neutral-800/80">
                  <p className="text-xs sm:text-[13px] text-neutral-400 leading-relaxed">
                    {m.context}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3.5 CREATIVE BACKGROUND */}
        <section id="about-creative-background" className="py-14 sm:py-20 border-b border-neutral-900">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-light text-white">
                  Creative background
                </h2>
              </div>
              <div className="space-y-5 text-sm sm:text-base text-neutral-400 leading-relaxed">
                <p className="text-base sm:text-lg text-neutral-200 font-medium leading-relaxed">
                I was documenting, composing, and writing—trying to understand how people feel, what they notice, and why certain moments stay.
              </p>

              <p>
                Through working with music artists, I saw how stories shape connection. Through photography, I learned to observe—capturing moments as they are, not as they’re supposed to be. Through writing, I explored emotions, perceptions, and the unspoken layers of human experience.
              </p>

              <p>
                All of this shaped how I see people—not just as users, but as individuals moving through moments, contexts, and internal states.
              </p>

              <p>
                Now, in design, I bring that same lens into everything I build. I approach problems as parts of a larger human journey—where behaviour, emotion, and environment intersect.
              </p>
              </div>
            </div>

            {/* Closing Quote & Creative Visual Placeholder */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="p-6 sm:p-7 rounded-2xl bg-[#0f1014] border border-neutral-800/80 relative shadow-md">
                <Quote className="w-6 h-6 text-neutral-600 mb-3 opacity-60" />
                <blockquote className="text-lg sm:text-xl italic text-neutral-200 leading-snug">
                  “Stories exist in what is built and in what is left unsaid.”
                </blockquote>
              </div>

              {/* Creative Archive Frame */}
              <div className="aspect-[16/10] w-full rounded-2xl bg-[#0f1014] border border-neutral-800/80 overflow-hidden relative shadow-md">
                <div className="animate-marquee h-full">
                  <img src="/creative.webp" alt="Creative Archive" className="h-full w-auto max-w-none pointer-events-none select-none" />
                  <img src="/creative.webp" alt="Creative Archive" className="h-full w-auto max-w-none pointer-events-none select-none" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3.7 MAKE WITH AI */}
        <section id="make-with-ai" className="pt-14 sm:pt-20">
          <div className="max-w-3xl mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-light text-white mb-3">
              Make with AI
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 mb-6">
              Collaborating with AI systems, balancing human thinking with structured workflows and guidelines.
            </p>

            <blockquote className="p-5 sm:p-6 rounded-2xl bg-[#0f1014] border-l-2 border-blue-400 text-xs sm:text-sm text-neutral-300 leading-relaxed shadow-md">
              “I iterate rapidly using multiple AI tools, understanding their strengths and limitations to assign the right tasks to the right systems. Some phases benefit from full AI workflows, while others require selective intervention.”
            </blockquote>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MAKE_WITH_AI_AREAS.map((area) => (
              <div
                key={area.id}
                id={`ai-area-${area.id}`}
                className="p-6 rounded-2xl bg-[#0f1014] border border-neutral-800/80 flex flex-col justify-start group hover:border-neutral-700 transition-all shadow-md"
              >
                <div className="text-xs text-neutral-500 mb-2">System {area.id}</div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {area.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
