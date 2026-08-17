import React, { useEffect, useMemo, useState, useCallback, useRef } from 'react';
import { ArrowLeft, ArrowRight, X, ZoomIn, ChevronLeft, ChevronRight, Upload, Image as ImageIcon, RefreshCw } from 'lucide-react';
import { WORK_ITEMS } from '../data/portfolioData';
import { GuidedPracticeCaseStudy } from '../components/GuidedPracticeCaseStudy';

interface ProjectDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

interface DisplayMedia {
  type: 'image' | 'video' | 'youtube' | 'vimeo';
  num: number;
  filename: string;
  src: string;
  isVideo?: boolean;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ slug, onNavigate }) => {
  const currentIndex = WORK_ITEMS.findIndex(
    (w) => w.slug === slug || w.slug.replace(/-hsbc$/, '') === slug || slug.replace(/-hsbc$/, '') === w.slug
  );
  const item = currentIndex !== -1 ? WORK_ITEMS[currentIndex] : null;

  const prevItem = currentIndex > 0 ? WORK_ITEMS[currentIndex - 1] : WORK_ITEMS[WORK_ITEMS.length - 1];
  const nextItem = currentIndex < WORK_ITEMS.length - 1 ? WORK_ITEMS[currentIndex + 1] : WORK_ITEMS[0];

  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [localUploadedImages, setLocalUploadedImages] = useState<DisplayMedia[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Scroll to top and set title on mount
  useEffect(() => {
    window.scrollTo(0, 0);
    if (item) {
      document.title = `${item.title} - Suhotra Chakraborty`;
    }
  }, [slug, item]);

  // Handle client-side drag & drop or file upload for instant preview
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const fileList = Array.from(e.target.files) as File[];
    
    const parsedMedia: DisplayMedia[] = fileList.map((file) => {
      const isVideoFile = file.type.startsWith('video/') || /\.(mp4|webm|mov)$/i.test(file.name);
      const numMatch = file.name.match(/\d+/);
      let num = numMatch ? parseInt(numMatch[0], 10) : 999;
      
      if (isVideoFile) {
        num = 1.5; // Always place local videos between 1 and 2
      }
      
      return {
        type: isVideoFile ? 'video' : 'image',
        num,
        filename: file.name,
        src: URL.createObjectURL(file),
      };
    });

    parsedMedia.sort((a, b) => {
      if (a.num !== b.num) return a.num - b.num;
      return a.filename.localeCompare(b.filename, undefined, { numeric: true, sensitivity: 'base' });
    });

    setLocalUploadedImages((prev) => [...prev, ...parsedMedia]);
  };

  // Get all project files dynamically from filesystem via Vite's glob import
  const staticProjectImages = useMemo(() => {
    const files = import.meta.glob('/public/projects/**/*.{jpg,jpeg,png,webp,gif,svg,mp4,webm,mov,JPG,JPEG,PNG,WEBP,GIF,SVG,MP4,WEBM,MOV}', { eager: true });
    const paths = Object.keys(files);
    
    const images: DisplayMedia[] = [];
    
    // Check possible matching folder names
    const targetSlugs = [slug, item?.slug, slug.replace(/-hsbc$/, ''), `${slug}-hsbc`].filter(Boolean) as string[];

    paths.forEach((path) => {
      const isMatch = targetSlugs.some((s) => path.startsWith(`/public/projects/${s}/`));
      if (isMatch) {
        const filename = path.split('/').pop() || '';
        const isThumb = /thumb|thumbnail|cover/i.test(filename);
        const isVideo = /\.(mp4|webm|mov)$/i.test(filename);
        
        if (!isThumb) {
          const numMatch = filename.match(/\d+/);
          let num = numMatch ? parseInt(numMatch[0], 10) : 999;
          
          if (isVideo) {
             num = 1.5; // Always place local videos between 1 and 2
          }
          
          const src = path.replace('/public', '');
          images.push({ type: isVideo ? 'video' : 'image', num, filename, src });
        }
      }
    });
    
    // Add explicitly configured media (e.g. YouTube/Vimeo links)
    if (item?.media) {
      item.media.forEach((m, i) => {
        images.push({
          type: m.type,
          src: m.src,
          filename: `media-${i}`,
          num: m.num !== undefined ? m.num : 1.5 + (i * 0.1),
        });
      });
    }

    return images.sort((a, b) => {
      if (a.num !== b.num) return a.num - b.num;
      return a.filename.localeCompare(b.filename, undefined, { numeric: true, sensitivity: 'base' });
    });
  }, [slug, item]);

  // Combine static filesystem images and locally uploaded preview images
  const allProjectImages = useMemo(() => {
    if (localUploadedImages.length > 0) {
      return localUploadedImages;
    }
    return staticProjectImages;
  }, [localUploadedImages, staticProjectImages]);

  // Keyboard navigation for lightbox
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') {
        setActiveImageIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev !== null && prev < allProjectImages.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : allProjectImages.length - 1));
      }
    },
    [activeImageIndex, allProjectImages.length]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Project not found</h1>
          <a href="/work" onClick={(e) => { e.preventDefault(); onNavigate('/work'); }} className="text-blue-400 hover:underline">Return to Work</a>
        </div>
      </div>
    );
  }

  const isGuidedPractice = slug === 'guided-practice-schoolai' || item.slug === 'guided-practice-schoolai';
  const hasImages = allProjectImages.length > 0;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#0a0a0a]/85 backdrop-blur-xl border-b border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a 
            href="/work" 
            onClick={(e) => { e.preventDefault(); onNavigate('/work'); }}
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Work</span>
          </a>

          <div className="flex items-center gap-3">
            {prevItem && (
              <a
                href={prevItem.isCustomHtml && prevItem.customHtmlPath ? prevItem.customHtmlPath : `/project/${prevItem.slug}`}
                onClick={(e) => {
                  if (!prevItem.isCustomHtml) {
                    e.preventDefault();
                    onNavigate(`/project/${prevItem.slug}`);
                  }
                }}
                className="text-xs text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-800"
              >
                <span>Prev</span>
              </a>
            )}
            {nextItem && (
              <a
                href={nextItem.isCustomHtml && nextItem.customHtmlPath ? nextItem.customHtmlPath : `/project/${nextItem.slug}`}
                onClick={(e) => {
                  if (!nextItem.isCustomHtml) {
                    e.preventDefault();
                    onNavigate(`/project/${nextItem.slug}`);
                  }
                }}
                className="text-xs text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-800"
              >
                <span>Next</span>
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Project Metadata Hero */}
      <section className="pt-16 pb-12 sm:pt-24 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2.5 mb-6">
          <span className="text-xs text-neutral-500">
            {item.year} • {item.discipline}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-6 tracking-tight">
          {item.title}
        </h1>
        {item.summary && (
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-2xl mx-auto">
            {item.summary}
          </p>
        )}
      </section>

      {/* Main Content Area */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24 max-w-7xl mx-auto">
        {/* External Link Touchpoint */}
        {item.customHtmlPath && !item.isCustomHtml && (
          <div className="relative mb-12 sm:mb-16 rounded-3xl overflow-hidden border border-neutral-800 text-center flex flex-col items-center group">
            {/* Background Image Snippet with Gradient Overlay */}
            {item.touchpointCover ? (
              <>
                <div 
                  className="absolute inset-0 z-0 transition-all duration-700"
                  style={{ background: `linear-gradient(180deg, rgba(17, 17, 17, 0.40) 0%, #111 100%), url(${item.touchpointCover}) lightgray center top / cover no-repeat` }}
                />
                <div 
                  className="absolute inset-0 z-0 pointer-events-none"
                  style={{ 
                    backdropFilter: 'blur(1px)',
                    WebkitBackdropFilter: 'blur(1px)',
                    maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 100%)'
                  }}
                />
                <div 
                  className="absolute inset-0 z-0 pointer-events-none"
                  style={{ 
                    backdropFilter: 'blur(2px)',
                    WebkitBackdropFilter: 'blur(2px)',
                    maskImage: 'linear-gradient(to bottom, transparent 15%, black 40%, black 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 15%, black 40%, black 100%)'
                  }}
                />
                <div 
                  className="absolute inset-0 z-0 pointer-events-none"
                  style={{ 
                    backdropFilter: 'blur(4px)',
                    WebkitBackdropFilter: 'blur(4px)',
                    maskImage: 'linear-gradient(to bottom, transparent 30%, black 60%, black 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 30%, black 60%, black 100%)'
                  }}
                />
                <div 
                  className="absolute inset-0 z-0 pointer-events-none"
                  style={{ 
                    backdropFilter: 'blur(6px)',
                    WebkitBackdropFilter: 'blur(6px)',
                    maskImage: 'linear-gradient(to bottom, transparent 45%, black 80%, black 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 45%, black 80%, black 100%)'
                  }}
                />
              </>
            ) : (
              <div className="absolute inset-0 z-0 bg-neutral-900" />
            )}

            <div className="relative z-20 w-full p-8 sm:p-16 flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6 backdrop-blur-md">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4 drop-shadow-md">
                {item.touchpointTitle || 'Interactive Design System'}
              </h2>
              <p className="text-neutral-300 max-w-xl mx-auto mb-8 text-sm sm:text-base drop-shadow-sm font-medium">
                {item.touchpointDescription || `Explore the living component library, tokens, and documentation for ${item.title}. The app is fully interactive and responsive.`}
              </p>
              <a 
                href={item.customHtmlPath} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm sm:text-base sm:px-8 sm:py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-full transition-all shadow-xl shadow-blue-900/20 hover:scale-105 active:scale-95"
              >
                <span>{item.touchpointButtonText || 'Launch Design System App'}</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        )}

        {/* View Mode: Case Study Interactive Presentation when applicable */}
        {isGuidedPractice && !hasImages ? (
          <div>
            <GuidedPracticeCaseStudy />
          </div>
        ) : (
          /* View Mode: Slides / Image Gallery */
          <div className="space-y-10 sm:space-y-16">
            {hasImages ? (
              allProjectImages.map((mediaItem, idx) => (
                <div 
                  key={idx} 
                  className="relative group w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700/80 shadow-2xl shadow-black/50 hover:shadow-black/70 transition-all duration-500"
                >
                  {mediaItem.type === 'image' ? (
                    <div 
                      onClick={() => setActiveImageIndex(idx)}
                      className="cursor-zoom-in relative overflow-hidden"
                    >
                      <img 
                        src={mediaItem.src} 
                        alt={`${item.title} - Slide ${mediaItem.num}`}
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                        loading={idx < 2 ? "eager" : "lazy"}
                      />
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-neutral-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-neutral-700/80 flex items-center gap-1.5 text-xs text-neutral-200 pointer-events-none">
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>Click to expand</span>
                      </div>
                    </div>
                  ) : mediaItem.type === 'video' ? (
                    <div className="w-full">
                      <video 
                        src={mediaItem.src}
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        controls
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ) : (
                    <div className="aspect-video w-full">
                      <iframe
                        src={mediaItem.src}
                        title={`${item.title} Video ${mediaItem.num}`}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}
                </div>
              ))
            ) : !item.customHtmlPath ? (
              <div className="p-8 sm:p-12 text-center rounded-2xl border border-neutral-800 bg-neutral-900/30 text-neutral-400 max-w-2xl mx-auto">
                <div className="w-12 h-12 rounded-2xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-300 mx-auto mb-4">
                  <ImageIcon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">No Static Images Found in Directory</h3>
                <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                  Files placed inside <code className="px-2 py-0.5 rounded bg-neutral-800 text-blue-300 font-mono text-xs">/public/projects/{item.slug}/</code> (such as <code className="text-neutral-200 font-mono text-xs">1.png</code>, <code className="text-neutral-200 font-mono text-xs">2.png</code>, <code className="text-neutral-200 font-mono text-xs">thumb.jpg</code>) are automatically detected and rendered in presentation order.
                </p>

                {/* Instant Local Image Upload / Dropzone */}
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="p-6 rounded-xl border border-dashed border-neutral-700 bg-neutral-900/60 hover:bg-neutral-900 hover:border-neutral-500 transition-all cursor-pointer group mb-6"
                >
                  <Upload className="w-6 h-6 text-neutral-400 group-hover:text-white mx-auto mb-2 transition-colors" />
                  <span className="text-xs font-medium text-white block mb-1">
                    Select / Drop Images or Videos to Preview Live
                  </span>
                  <span className="text-[11px] text-neutral-500">
                    Supports images and videos (e.g. 1.png, video.mp4)
                  </span>
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept="image/*,video/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </div>
              </div>
            ) : null}
          </div>
        )}

        {/* Local Preview Action Bar when images were added */}
        {localUploadedImages.length > 0 && (
          <div className="mt-6 flex items-center justify-between p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs">
            <span className="text-neutral-400">
              Previewing <strong className="text-white">{localUploadedImages.length}</strong> loaded slide images
            </span>
            <button
              onClick={() => setLocalUploadedImages([])}
              className="flex items-center gap-1.5 text-neutral-400 hover:text-red-400 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset to default</span>
            </button>
          </div>
        )}

        {/* Project Pagination Footer */}
        <div className="mt-20 pt-10 border-t border-neutral-900 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {prevItem && (
            <a
              href={prevItem.isCustomHtml && prevItem.customHtmlPath ? prevItem.customHtmlPath : `/project/${prevItem.slug}`}
              onClick={(e) => {
                if (!prevItem.isCustomHtml) {
                  e.preventDefault();
                  onNavigate(`/project/${prevItem.slug}`);
                }
              }}
              className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 transition-all text-left group flex flex-col justify-between"
            >
              <span className="text-xs text-neutral-500 mb-2 flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                Previous Project
              </span>
              <span className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">
                {prevItem.title}
              </span>
            </a>
          )}
          {nextItem && (
            <a
              href={nextItem.isCustomHtml && nextItem.customHtmlPath ? nextItem.customHtmlPath : `/project/${nextItem.slug}`}
              onClick={(e) => {
                if (!nextItem.isCustomHtml) {
                  e.preventDefault();
                  onNavigate(`/project/${nextItem.slug}`);
                }
              }}
              className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 transition-all text-right group flex flex-col justify-between sm:items-end"
            >
              <span className="text-xs text-neutral-500 mb-2 flex items-center gap-1 self-end">
                Next Project
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">
                {nextItem.title}
              </span>
            </a>
          )}
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      {activeImageIndex !== null && allProjectImages[activeImageIndex] && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8"
          onClick={() => setActiveImageIndex(null)}
        >
          <div className="absolute top-4 right-4 z-50 flex items-center gap-3">
            <span className="text-xs text-neutral-400 font-mono">
              {activeImageIndex + 1} / {allProjectImages.length}
            </span>
            <button
              onClick={() => setActiveImageIndex(null)}
              className="p-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 transition-all"
              aria-label="Close image modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Controls */}
          {allProjectImages.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : allProjectImages.length - 1));
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-neutral-900/80 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-600 transition-all z-50"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIndex((prev) => (prev !== null && prev < allProjectImages.length - 1 ? prev + 1 : 0));
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-neutral-900/80 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-600 transition-all z-50"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <div 
            className="max-w-6xl max-h-[85vh] overflow-auto flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={allProjectImages[activeImageIndex].src} 
              alt={`${item.title} presentation slide ${activeImageIndex + 1}`}
              className="max-h-[85vh] max-w-full object-contain rounded-xl shadow-2xl border border-neutral-800"
            />
          </div>
        </div>
      )}
    </div>
  );
};

