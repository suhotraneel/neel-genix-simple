import React from 'react';
import { TOOLS, TESTIMONIALS } from '../data/portfolioData';

export const ToolsAndTestimonialsSection: React.FC = () => {
  return (
    <section id="tools-testimonials-section" className="py-14 sm:py-20 border-b border-neutral-900">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-light text-white">
            Tools & Testimonials
          </h2>
        </div>

        {/* Stacked Layout: Tools on Top, Testimonials Below */}
        <div className="flex flex-col gap-6 lg:gap-8">
          
          {/* TOP: Tools Card */}
          <div
            id="tools-container-card"
            className="rounded-3xl bg-[#0e0f14] border border-neutral-800/80 p-3 sm:p-4 lg:p-5 flex flex-col shadow-xl relative group"
          >
            {/* Ambient background */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent pointer-events-none rounded-3xl" />

            {/* Grid of App Logos: 10x2 on lg */}
            <div className="grid grid-cols-5 md:grid-cols-10 gap-2 sm:gap-3 lg:gap-4 z-10 w-full max-w-5xl mx-auto py-1">
              {TOOLS.map((tool) => (
                <div
                  key={tool.id}
                  className="w-full aspect-square flex items-center justify-center cursor-pointer group/tile select-none relative outline-none"
                  tabIndex={0}
                  onClick={(e) => e.currentTarget.focus()}
                >
                  <img
                    src={tool.logoUrl}
                    alt={tool.alt}
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 object-contain select-none pointer-events-none transition-transform duration-200 group-hover/tile:scale-110 group-focus/tile:scale-110 group-active/tile:scale-110"
                    loading="lazy"
                  />
                  {/* Tooltip */}
                  <div className="absolute -top-8 sm:-top-10 opacity-0 group-hover/tile:opacity-100 group-focus/tile:opacity-100 group-active/tile:opacity-100 transition-all duration-200 bg-neutral-900 text-white text-[10px] sm:text-xs px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-md sm:rounded-lg border border-neutral-700 whitespace-nowrap pointer-events-none z-50 shadow-xl translate-y-2 group-hover/tile:translate-y-0 group-focus/tile:translate-y-0 group-active/tile:translate-y-0">
                    {tool.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM: Testimonials Container (No Enclosure) */}
          <div
            id="testimonials-container-card"
            className="flex flex-col w-full pt-4 sm:pt-6 lg:pt-8"
          >
            {/* 2x2 Grid of Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 z-10 w-full">
              {TESTIMONIALS.map((item) => {
                const cleanQuote = item.quote.replace(/^[“"']+|[”"']+$/g, '');
                return (
                  <div
                    key={item.id}
                    className="flex flex-col justify-between text-left group"
                  >
                    <blockquote className="text-base sm:text-lg lg:text-lg font-light text-neutral-300 leading-relaxed tracking-[-0.01em] mb-2 sm:mb-2.5">
                      “{cleanQuote}”
                    </blockquote>

                    <div className="flex flex-wrap items-baseline gap-x-2">
                      <span className="text-xs sm:text-sm font-medium text-white tracking-normal group-hover:text-blue-300 transition-colors">
                        — {item.name}
                      </span>
                      <span className="text-[11px] sm:text-xs text-neutral-400">
                        {item.role}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
