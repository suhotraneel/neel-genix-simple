import React from 'react';
import { WORK_ITEMS } from '../data/portfolioData';
import { WorkTile } from '../components/WorkTile';
import { WorkItem } from '../types';

interface WorkPageProps {
  onNavigate: (path: string) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onNavigate }) => {
  return (
    <div id="work-page" className="w-full pt-24 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Work Header */}
        <div className="mb-12 sm:mb-16 border-b border-neutral-900 pb-8">
          <h1 className="text-3xl sm:text-5xl font-light text-white">
            Work
          </h1>
          <p className="text-neutral-400 text-lg mt-4">Selected digital product design, UX research, design systems, and interface projects.</p>
        </div>

        {/* Complete Body of Work */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WORK_ITEMS.map((item) => (
            <WorkTile
              key={item.id}
              item={item}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
