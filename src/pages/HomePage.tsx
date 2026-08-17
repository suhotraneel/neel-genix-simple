import React, { useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Copy, Check, Mail } from 'lucide-react';
import { PERSONAL_INFO, WORK_ITEMS } from '../data/portfolioData';
import { HeroImagePlaceholder } from '../components/HeroImagePlaceholder';
import { WorkTile } from '../components/WorkTile';
import { BrandsSection } from '../components/BrandsSection';
import { ToolsAndTestimonialsSection } from '../components/ToolsAndTestimonialsSection';
import { WorkItem } from '../types';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onCopyEmail: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onCopyEmail,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    onCopyEmail();
    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  const scrollToSelectedWork = () => {
    const el = document.getElementById('selected-work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Exactly 3 selected work items
  const selectedWorkItems = WORK_ITEMS.filter((item) => item.isSelected);

  return (
    <div id="home-page" className="w-full">
      {/* 1.1 HERO */}
      <section id="hero-section" className="pt-24 sm:pt-32 pb-14 sm:pb-20 border-b border-neutral-900">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 pr-0 lg:pr-6">
              {/* Pill Eyebrow */}
              <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs text-neutral-400 mb-5">
                <span>UX/UI & Product Designer</span>
              </div>

              {/* Headline */}
              <h1 className="text-[68px] sm:text-[84px] lg:text-[120px] font-black leading-[0.85] text-white mb-6 tracking-tighter" style={{ fontFamily: 'Impact, sans-serif, system-ui' }}>
                Complex?
                <br />
                <span className="block text-4xl sm:text-5xl lg:text-[72px] mt-4 lg:mt-6 font-bold tracking-tight" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Let’s make it <span className="text-blue-600 relative inline-block">make sense.<svg className="absolute -bottom-1 lg:-bottom-2 left-0 w-full h-3 lg:h-5 text-blue-600" viewBox="0 0 200 20" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 15C50 5 150 5 195 15" stroke="currentColor" strokeWidth="6" strokeLinecap="round" /></svg></span></span>
              </h1>

              {/* Tagline */}
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
                I’m <span className="text-neutral-300 font-medium">Suhotra Chakraborty,</span> leading end-to-end product design from research to release. I bring a human-centred approach to research, testing, and interaction design; creating experiences that are intuitive, purposeful, and easy to engage with.
              </p>

              {/* Hero CTA Buttons - Samsung One UI smooth pill shapes */}
              <div className="flex flex-wrap gap-3.5 items-center">
                {/* Selected Work button -> smoothly scrolls */}
                <button
                  id="hero-selected-work-btn"
                  type="button"
                  onClick={scrollToSelectedWork}
                  className="bg-blue-600 text-white px-6 py-3 text-xs font-semibold rounded-full hover:bg-blue-500 transition-all inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-blue-600/25 active:scale-[0.98]"
                >
                  <span>Selected work</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {/* Get in Touch button -> copies email */}
                <button
                  id="hero-get-in-touch-btn"
                  type="button"
                  onClick={handleCopyEmail}
                  className="border border-neutral-800 px-6 py-3 text-xs font-medium rounded-full bg-neutral-900/80 hover:bg-neutral-800 transition-all text-neutral-200 inline-flex items-center gap-2 cursor-pointer active:scale-[0.98]"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-blue-400" />
                      <span className="text-white">Email copied</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-3.5 h-3.5 text-neutral-400" />
                      <span>Get in touch</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Hero Visual Placeholder Frame */}
            <div className="lg:col-span-5">
              <HeroImagePlaceholder />
            </div>
          </div>
        </div>
      </section>

      {/* 1.2 SELECTED WORK */}
      <section id="selected-work" className="py-14 sm:py-20 border-b border-neutral-900">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex justify-between items-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-light text-white">
              Selected work
            </h2>
            <button
              id="selected-work-view-all-link"
              type="button"
              onClick={() => onNavigate('/work')}
              className="border border-neutral-800 px-5 py-2.5 text-xs font-medium rounded-full bg-neutral-900/60 hover:bg-neutral-800 transition-all text-neutral-300 inline-flex items-center gap-2 cursor-pointer group"
            >
              <span>See all work</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* 3 Selected Works in Samsung UI Rounded Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {selectedWorkItems.map((item, idx) => (
              <WorkTile
                key={item.id}
                item={item}
                priority={idx === 0}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 1.3 ABOUT PREVIEW */}
      <section id="about-preview-section" className="py-14 sm:py-20 border-b border-neutral-900">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Text Column */}
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl font-light text-white mb-3 leading-tight">
                Hi, I am <span className="font-semibold">Suhotra Chakraborty</span>, a UX/UI designer
              </h2>
              <p className="text-sm text-neutral-500 mb-6 italic tracking-wide">
                aka Neel Genix
              </p>

              <div className="space-y-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
                <p>
                  I bridge business intent and user behaviour, shaping products that are clear, usable, and built to scale. I ground decisions in real user behaviour while working with teams to create direction that can be effectively executed from concept to evolution.
                </p>
                <p className="text-neutral-500">
                  I was documenting, composing, and writing—trying to understand how people feel, what they notice, and why certain moments stay.
                </p>
              </div>

              {/* CTA: About me */}
              <div className="mt-8">
                <button
                  id="about-preview-cta"
                  type="button"
                  onClick={() => onNavigate('/about')}
                  className="border border-neutral-800 px-6 py-3 text-xs font-medium rounded-full bg-neutral-900/60 hover:bg-neutral-800 transition-all text-neutral-300 inline-flex items-center gap-2 cursor-pointer group"
                >
                  <span>About me</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* About Image Placeholder */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] sm:aspect-[1/1] md:aspect-video lg:aspect-[1/1] w-full rounded-3xl bg-[#0f1014] border border-neutral-800/80 overflow-hidden flex flex-col items-center justify-center text-center group shadow-xl">
                <img src="/about.webp" alt="About Suhotra Chakraborty" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1.4 BRANDS - Horizontal auto scroll full width thin strip */}
      <BrandsSection />

      {/* 1.5 TOOLS & TESTIMONIALS (1:2 Layout on Desktop, Top-to-Bottom on Mobile & Tablet) */}
      <ToolsAndTestimonialsSection />
    </div>
  );
};

