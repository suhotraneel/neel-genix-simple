import React, { useState } from 'react';
import { TOOLS } from '../data/portfolioData';
import { ToolItem } from '../types';

export const ToolsSection: React.FC = () => {
  return (
    <section id="tools-section" className="py-14 sm:py-20 border-b border-neutral-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <h2
          id="tools-heading"
          className="text-[11px] uppercase tracking-[0.4em] font-bold text-neutral-500 mb-8 sm:mb-10"
        >
          Tools
        </h2>

        {/* Minimal Utility Tool badges */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
          {TOOLS.map((tool) => (
            <ToolBadge key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ToolBadge: React.FC<{ tool: ToolItem }> = ({ tool }) => {
  const [imageError, setImageError] = useState(false);
  const potentialImagePath = tool.logoUrl || `/assets/tools/${tool.id}.svg`;

  return (
    <div
      id={`tool-item-${tool.id}`}
      className="flex items-center gap-2.5 px-3.5 py-2 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 focus:border-neutral-700 transition-colors group cursor-pointer outline-none"
      tabIndex={0}
      onClick={(e) => e.currentTarget.focus()}
    >
      {!imageError && tool.logoUrl ? (
        <img
          src={potentialImagePath}
          alt={tool.alt}
          onError={() => setImageError(true)}
          className="w-4 h-4 object-contain opacity-70 group-hover:opacity-100 group-focus:opacity-100 transition-opacity"
          referrerPolicy="no-referrer"
        />
      ) : (
        <span
          role="img"
          aria-label={tool.alt}
          className="w-1.5 h-1.5 bg-neutral-500 group-hover:bg-white group-focus:bg-white transition-colors"
        />
      )}
      <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 group-hover:text-white group-focus:text-white transition-colors">
        {tool.name}
      </span>
    </div>
  );
};
