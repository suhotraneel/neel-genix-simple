import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { WorkItem } from '../types';

interface WorkTileProps {
  item: WorkItem;
  onClick?: (item: WorkItem) => void;
  priority?: boolean;
  onNavigate?: (path: string) => void;
}

export const WorkTile: React.FC<WorkTileProps> = ({ item, onClick, onNavigate }) => {
  // Dynamically find thumbnail from public folder (supporting thumb.*, thumbnail.*, cover.*, etc.)
  const thumbs = import.meta.glob('/public/projects/**/*.{jpg,jpeg,png,webp,gif,svg,JPG,JPEG,PNG,WEBP,GIF,SVG}', { eager: true });
  const thumbKey = Object.keys(thumbs).find(k => {
    const isMatchingFolder = k.includes(`/public/projects/${item.slug}/`) || 
      k.includes(`/public/projects/${item.slug.replace(/-hsbc$/, '')}/`) ||
      k.includes(`/public/projects/${item.slug}-hsbc/`);
    const filename = k.split('/').pop() || '';
    const isThumb = /thumb|thumbnail|cover/i.test(filename);
    return isMatchingFolder && isThumb;
  });
  const thumbUrl = thumbKey ? thumbKey.replace('/public', '') : null;

  // Visual artwork representation per project category using monochrome & blue highlight
  const renderVisualMockup = () => {
    if (thumbUrl) {
      return (
        <img 
          src={thumbUrl} 
          alt={item.title} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      );
    }
    switch (item.slug) {
      case 'guided-practice-schoolai':
        return (
          <div className="w-full h-full flex flex-col justify-between p-5 sm:p-6 bg-gradient-to-br from-[#13151c] via-[#0f1015] to-[#0a0a0d] relative overflow-hidden group-hover:border-neutral-700 transition-all shadow-inner">
            {/* Ambient UI elements representing AI practice flows */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs text-neutral-400">AI tutoring loop</span>
              </div>
              <span className="text-xs text-neutral-500">SchoolAi v2.6</span>
            </div>

            <div className="my-auto py-4">
              <div className="space-y-2.5 max-w-md">
                <div className="h-2.5 w-3/4 bg-neutral-800 rounded-full" />
                <div className="h-2.5 w-1/2 bg-neutral-900 rounded-full" />
                <div className="p-3 bg-neutral-900/90 rounded-xl border border-neutral-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-lg bg-neutral-800 flex items-center justify-center text-[10px] text-neutral-300">01</span>
                    <span className="text-xs text-neutral-300 font-medium">Adaptive practice step</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-300">Active</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-neutral-900 text-xs text-neutral-500">
              <span>Interactive workflow</span>
              <span className="text-blue-400/90 font-medium">80% goal rate</span>
            </div>
          </div>
        );

      case 'the-edge-schoolai':
        return (
          <div className="w-full h-full flex flex-col justify-between p-5 sm:p-6 bg-gradient-to-br from-[#13151c] via-[#0f1015] to-[#0a0a0d] relative overflow-hidden group-hover:border-neutral-700 transition-all shadow-inner">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs text-neutral-400">Teacher intelligence</span>
              </div>
              <span className="text-xs text-neutral-500">Desktop suite</span>
            </div>

            <div className="my-auto py-4">
              <div className="grid grid-cols-3 gap-2">
                <div className="p-2.5 bg-neutral-900/90 border border-neutral-800 rounded-xl">
                  <span className="text-[10px] text-neutral-400 block">Curriculum</span>
                  <span className="text-xs font-semibold text-white">Automated</span>
                </div>
                <div className="p-2.5 bg-neutral-900/90 border border-neutral-800 rounded-xl">
                  <span className="text-[10px] text-neutral-400 block">Pacing</span>
                  <span className="text-xs font-semibold text-white">Dynamic</span>
                </div>
                <div className="p-2.5 bg-neutral-900/90 border border-neutral-800 rounded-xl">
                  <span className="text-[10px] text-neutral-400 block">Heuristic</span>
                  <span className="text-xs font-semibold text-blue-300">8.5 / 10</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-neutral-900 text-xs text-neutral-500">
              <span>Platform systems</span>
              <span>Enterprise UX</span>
            </div>
          </div>
        );

      case 'shadowgun-legends':
        return (
          <div className="w-full h-full flex flex-col justify-between p-5 sm:p-6 bg-gradient-to-br from-[#13151c] via-[#0f1015] to-[#0a0a0d] relative overflow-hidden group-hover:border-neutral-700 transition-all shadow-inner">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs text-neutral-400">In-game interface & inventory</span>
              </div>
              <span className="text-xs text-neutral-500">Mobile gaming</span>
            </div>

            <div className="my-auto py-4">
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white text-xs font-semibold">
                  UI
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="h-2 w-full bg-neutral-800 rounded-full" />
                  <div className="h-2 w-4/5 bg-neutral-900 rounded-full" />
                  <div className="h-2 w-3/5 bg-neutral-900 rounded-full" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-neutral-900 text-xs text-neutral-500">
              <span>Dynamic matchmaking</span>
              <span>Tactile controls</span>
            </div>
          </div>
        );

      case 'mosaic-lane':
        return (
          <div className="w-full h-full flex flex-col justify-between p-5 sm:p-6 bg-gradient-to-br from-[#13151c] via-[#0f1015] to-[#0a0a0d] relative overflow-hidden group-hover:border-neutral-700 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-xs text-neutral-400">Campaign identity</span>
              <span className="text-xs text-neutral-500">Digital storytelling</span>
            </div>
            <div className="my-auto py-4 text-center">
              <span className="text-lg font-semibold text-neutral-200">Mosaic Lane</span>
              <p className="text-xs text-neutral-500 mt-1">Urban cultural narrative</p>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-neutral-900 text-xs text-neutral-500">
              <span>Artisanal collectives</span>
              <span>2024</span>
            </div>
          </div>
        );

      case 'right-to-look-space118':
        return (
          <div className="w-full h-full flex flex-col justify-between p-5 sm:p-6 bg-gradient-to-br from-[#13151c] via-[#0f1015] to-[#0a0a0d] relative overflow-hidden group-hover:border-neutral-700 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-xs text-neutral-400">Audio-visual archive</span>
              <span className="text-xs text-blue-400">Space118</span>
            </div>
            <div className="my-auto py-4 text-center">
              <span className="text-lg font-medium text-neutral-100">The Right to Look</span>
              <span className="block text-xs text-blue-400 mt-1 font-medium">2× audience engagement</span>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-neutral-900 text-xs text-neutral-500">
              <span>Exhibition experience</span>
              <span>2023</span>
            </div>
          </div>
        );

      case 'neo-marche-branding':
        return (
          <div className="w-full h-full flex flex-col justify-between p-5 sm:p-6 bg-gradient-to-br from-[#13151c] via-[#0f1015] to-[#0a0a0d] relative overflow-hidden group-hover:border-neutral-700 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-xs text-neutral-400">Marketplace brand system</span>
              <span className="text-xs text-neutral-500">Design language</span>
            </div>
            <div className="my-auto py-4 text-center">
              <span className="text-lg font-medium text-neutral-200">Néo Marché</span>
              <p className="text-xs text-neutral-500 mt-1">Sustainable commerce</p>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-neutral-900 text-xs text-neutral-500">
              <span>Communication</span>
              <span>2024</span>
            </div>
          </div>
        );

      case 'maze-blaze-vr-game':
        return (
          <div className="w-full h-full flex flex-col justify-between p-5 sm:p-6 bg-gradient-to-br from-[#13151c] via-[#0f1015] to-[#0a0a0d] relative overflow-hidden group-hover:border-neutral-700 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-xs text-neutral-400">Spatial UX & VR mechanics</span>
              <span className="text-xs text-neutral-500">Virtual reality</span>
            </div>
            <div className="my-auto py-4 text-center">
              <span className="text-lg font-semibold text-white">Maze Blaze</span>
              <p className="text-xs text-neutral-500 mt-1">Kinetic VR labyrinth</p>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-neutral-900 text-xs text-neutral-500">
              <span>Level design & spatial UI</span>
              <span>2024</span>
            </div>
          </div>
        );

      case 'prickle-typeface':
        return (
          <div className="w-full h-full flex flex-col justify-between p-5 sm:p-6 bg-gradient-to-br from-[#13151c] via-[#0f1015] to-[#0a0a0d] relative overflow-hidden group-hover:border-neutral-700 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-xs text-neutral-400">Display font family</span>
              <span className="text-xs text-neutral-500">Glyph engineering</span>
            </div>
            <div className="my-auto py-4 text-center">
              <span className="text-2xl font-bold tracking-widest text-neutral-100 italic">Prickle</span>
              <p className="text-xs text-neutral-500 mt-1">Aa Bb Gg Rr Zz 0-9</p>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-neutral-900 text-xs text-neutral-500">
              <span>Type design</span>
              <span>2023</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-full flex items-center justify-center p-8 bg-[#13151c] border border-neutral-800/80">
            <span className="text-xs text-neutral-400">{item.title}</span>
          </div>
        );
    }
  };

  const getHref = () => {
    if (item.isCustomHtml && item.customHtmlPath) {
      return item.customHtmlPath;
    }
    return `/project/${item.slug}`;
  };

  return (
    <a
      id={`work-tile-${item.slug}`}
      href={getHref()}
      target={item.isCustomHtml ? "_blank" : "_self"}
      rel={item.isCustomHtml ? "noopener noreferrer" : undefined}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick(item);
        } else if (onNavigate && !item.isCustomHtml) {
          e.preventDefault();
          onNavigate(getHref());
        }
      }}
      className="group cursor-pointer flex flex-col w-full text-left transition-all duration-300 focus:outline-none"
    >
      {/* Visual Canvas Tile - Smooth Rounded Frame */}
      <div className="relative w-full aspect-[16/10] md:aspect-video lg:aspect-[16/10] overflow-hidden rounded-3xl bg-[#0f1014] border border-neutral-800/80 mb-3.5 group-hover:border-neutral-700 transition-all shadow-md group-hover:shadow-xl">
        {/* Subtle Light Wash Overlay on Hover */}
        <div className="absolute inset-0 z-10 bg-white opacity-0 group-hover:opacity-[0.02] transition-opacity pointer-events-none" />

        {/* Render thumbnail container */}
        <div className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-[1.01]">
          {renderVisualMockup()}
        </div>
      </div>

      {/* Metadata Bar */}
      <div className="flex justify-between items-start pt-1 px-1">
        <div>
          <h3 className="text-sm sm:text-base font-medium text-[#f5f5f7] group-hover:text-white transition-colors">
            {item.title}
          </h3>
          <p className="text-xs text-neutral-500 mt-0.5 font-normal">
            {item.discipline}
          </p>
        </div>

        <span className="text-xs text-neutral-500">
          {item.year}
        </span>
      </div>
    </a>
  );
};
