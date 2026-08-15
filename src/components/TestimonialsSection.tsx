import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials-section" className="py-14 sm:py-20 border-b border-neutral-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <h2
          id="testimonials-heading"
          className="text-[11px] uppercase tracking-[0.4em] font-bold text-neutral-500 mb-8 sm:mb-12"
        >
          Testimonials
        </h2>

        {/* Minimal Utility Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              id={`testimonial-${t.id}`}
              className="flex flex-col justify-between p-6 sm:p-8 bg-neutral-900 border border-neutral-800 relative group hover:border-neutral-700 transition-colors"
            >
              <div className="text-[10px] font-mono text-neutral-600 mb-3">REC // {t.id}</div>
              <blockquote className="text-sm sm:text-base font-light text-neutral-300 leading-relaxed mb-6">
                “{t.quote}”
              </blockquote>

              <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-white">{t.name}</div>
                  <div className="text-[11px] font-mono text-neutral-500 mt-0.5">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
