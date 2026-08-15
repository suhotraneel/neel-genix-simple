import React from 'react';
import { BRANDS } from '../data/portfolioData';

export const BrandsSection: React.FC = () => {
  return (
    <section id="brands-section" className="py-14 sm:py-20 border-b border-neutral-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-light text-white">
            Brands & Collaborations
          </h2>
        </div>

        {/* Thin full-width auto-scroll strip with rounded corners */}
        <div className="relative w-full rounded-2xl sm:rounded-3xl bg-[#0d0e13] border border-neutral-800/80 py-5 sm:py-6 overflow-hidden shadow-inner">
          {/* Subtle Left & Right edge blur/fade gradients */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-[#0d0e13] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-[#0d0e13] to-transparent z-10" />

          {/* Marquee Track (Repeated twice for seamless loop) */}
          <div className="animate-marquee flex items-center gap-8 sm:gap-12">
            {BRANDS.map((brand, idx) => (
              <div
                key={`brand-1-${brand.id}-${idx}`}
                className="flex items-center justify-center min-w-[100px] sm:min-w-[120px] py-2 sm:py-3 opacity-80 hover:opacity-100 focus:opacity-100 transition-opacity cursor-pointer select-none group relative outline-none"
                tabIndex={0}
                onClick={(e) => e.currentTarget.focus()}
              >
                <img
                  src={brand.logoUrl}
                  alt={brand.alt}
                  className="h-10 sm:h-12 lg:h-14 w-auto max-w-[100px] sm:max-w-[130px] object-contain select-none pointer-events-none transition-transform duration-200 group-hover:scale-105 group-focus:scale-105 group-active:scale-105"
                  loading="lazy"
                />
                {/* Tooltip */}
                <div className="absolute -top-2 sm:-top-3 opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100 transition-all duration-200 bg-neutral-900/95 text-white text-[10px] sm:text-xs px-2 py-1 rounded-md border border-neutral-700 whitespace-nowrap pointer-events-none z-50 shadow-xl translate-y-1 group-hover:translate-y-0 group-focus:translate-y-0 group-active:translate-y-0">
                  {brand.name}
                </div>
              </div>
            ))}
            {BRANDS.map((brand, idx) => (
              <div
                key={`brand-2-${brand.id}-${idx}`}
                className="flex items-center justify-center min-w-[100px] sm:min-w-[120px] py-2 sm:py-3 opacity-80 hover:opacity-100 focus:opacity-100 transition-opacity cursor-pointer select-none group relative outline-none"
                tabIndex={0}
                onClick={(e) => e.currentTarget.focus()}
              >
                <img
                  src={brand.logoUrl}
                  alt={brand.alt}
                  className="h-10 sm:h-12 lg:h-14 w-auto max-w-[100px] sm:max-w-[130px] object-contain select-none pointer-events-none transition-transform duration-200 group-hover:scale-105 group-focus:scale-105 group-active:scale-105"
                  loading="lazy"
                />
                {/* Tooltip */}
                <div className="absolute -top-2 sm:-top-3 opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100 transition-all duration-200 bg-neutral-900/95 text-white text-[10px] sm:text-xs px-2 py-1 rounded-md border border-neutral-700 whitespace-nowrap pointer-events-none z-50 shadow-xl translate-y-1 group-hover:translate-y-0 group-focus:translate-y-0 group-active:translate-y-0">
                  {brand.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

