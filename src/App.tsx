import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowLeft, ArrowRight, Building2, MonitorSmartphone, Briefcase, Globe2 } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { AboutPage } from './pages/AboutPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { WorkItem } from './types';
import { PERSONAL_INFO, WORK_ITEMS } from './data/portfolioData';

const BLOG_ITEMS = [
  {
    id: 'is-design-democratic',
    title: 'Is Design Democratic?',
    date: '19 August 2026',
    readTime: '4min read',
    slug: 'is-design-democratic',
    summary: 'Design is often mistaken for visual preference. It isn’t.',
    tags: ['Design Philosophy', 'Behavioural Engineering', 'UX Systems'],
  },
  {
    id: 'minimise-wrong-size-shoes-ai-ar',
    title: 'Fit Intelligence: Minimising Wrong-Size Shoe Purchases with AR',
    date: '4 May 2024',
    readTime: '2min read',
    slug: 'minimise-wrong-size-shoes-ai-ar',
    summary: 'Addressing ill-fitting footwear challenges using AI, data analytics, and augmented reality.',
    tags: ['Artificial Intelligence', 'Augmented Reality', 'Retail Strategy'],
  }
];

const BlogTile: React.FC<{ item: typeof BLOG_ITEMS[0]; onNavigate: (path: string) => void }> = ({ item, onNavigate }) => {
  return (
    <a
      href={`/blog/${item.slug}`}
      onClick={(e) => {
        e.preventDefault();
        onNavigate(`/blog/${item.slug}`);
      }}
      className="group cursor-pointer flex flex-col w-full text-left transition-all duration-300 focus:outline-none"
    >
      <div className="relative w-full aspect-[16/10] md:aspect-video lg:aspect-[16/10] overflow-hidden rounded-3xl bg-[#0f1015] border border-neutral-800/80 mb-3.5 group-hover:border-neutral-700 transition-all shadow-md group-hover:shadow-xl shadow-inner">
         <img src={`/blogs/${item.slug}/thumb.webp`} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 z-0" />
         <div className="absolute inset-0 z-10 bg-black/10 group-hover:bg-transparent transition-colors pointer-events-none" />
      </div>
      <div className="flex flex-col pt-1 px-1">
        <h3 className="w-full text-sm sm:text-base font-medium text-[#f5f5f7] group-hover:text-white transition-colors">
          {item.title}
        </h3>
        <div className="flex justify-between items-start w-full mt-3">
          <div className="flex flex-wrap items-center gap-1.5">
            {item.tags?.slice(0, 3).map((tag, idx) => (
              <span key={idx} className="px-2 py-0.5 rounded-md border border-neutral-800 bg-neutral-900/50 text-[10px] font-medium text-neutral-400 whitespace-nowrap">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-col items-end shrink-0 ml-3 pt-0.5 gap-2.5">
            <span className="text-sm font-medium text-neutral-300 whitespace-nowrap leading-none tracking-wide">{item.date}</span>
            {item.readTime && <span className="text-xs text-neutral-500 whitespace-nowrap leading-none font-medium">{item.readTime}</span>}
          </div>
        </div>
      </div>
    </a>
  );
};

const BlogsPage: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  return (
    <div id="blogs-page" className="w-full pt-24 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="mb-12 sm:mb-16 border-b border-neutral-900 pb-8">
          <h1 className="text-3xl sm:text-5xl font-light text-white">Blog</h1>
          <p className="text-neutral-400 text-lg mt-4">Thoughts on design, systems, and engineering.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BLOG_ITEMS.map((item) => (
            <BlogTile key={item.id} item={item} onNavigate={onNavigate} />
          ))}
        </div>
      </div>
    </div>
  );
};

const BlogDetailPage: React.FC<{ slug: string; onNavigate: (path: string) => void }> = ({ slug, onNavigate }) => {
  const currentIndex = BLOG_ITEMS.findIndex((b) => b.slug === slug);
  const item = currentIndex !== -1 ? BLOG_ITEMS[currentIndex] : null;

  const prevItem = currentIndex > 0 ? BLOG_ITEMS[currentIndex - 1] : BLOG_ITEMS[BLOG_ITEMS.length - 1];
  const nextItem = currentIndex < BLOG_ITEMS.length - 1 ? BLOG_ITEMS[currentIndex + 1] : BLOG_ITEMS[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!item) {
    return <div className="pt-24 text-center text-white min-h-screen">Blog not found.</div>;
  }

  const heroBackgroundImage = `/blogs/${item.slug}/thumb.webp`;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] relative">
      {/* Background Image with Blur and Fade */}
      <div className="absolute top-0 left-0 right-0 z-0 pointer-events-none overflow-hidden h-[60vh] sm:h-[80vh] opacity-40">
        <img 
          src={heroBackgroundImage}
          alt=""
          className="w-full h-full object-cover"
          style={{ 
            filter: 'blur(24px)',
            transform: 'scale(1.1)' // Prevent blurred edges from showing white
          }}
          onError={(e) => e.currentTarget.style.display = 'none'}
        />
        {/* Gradient overlay to fade out at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]" />
      </div>

      <section className="pt-20 pb-6 sm:pt-24 sm:pb-8 mb-8 sm:mb-12 px-5 sm:px-8 max-w-6xl mx-auto relative z-10 text-center">
        
        {/* Top Navigation & Metadata Row */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="flex-shrink-0">
            {prevItem && (
              <a
                href={`/blog/${prevItem.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(`/blog/${prevItem.slug}`);
                }}
                className="text-xs sm:text-sm font-medium text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-1 p-2 sm:px-4 sm:py-2 rounded-full bg-neutral-900/50 border border-neutral-800 hover:bg-neutral-900 hover:border-neutral-700"
                aria-label="Previous Blog"
              >
                <ChevronLeft className="w-5 h-5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Prev</span>
              </a>
            )}
          </div>

          <div className="flex-1 px-4 flex justify-center">
            <span className="text-xs sm:text-sm font-medium text-neutral-500">
              {item.date}
            </span>
          </div>

          <div className="flex-shrink-0 flex justify-end">
            {nextItem && (
              <a
                href={`/blog/${nextItem.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(`/blog/${nextItem.slug}`);
                }}
                className="text-xs sm:text-sm font-medium text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-1 p-2 sm:px-4 sm:py-2 rounded-full bg-neutral-900/50 border border-neutral-800 hover:bg-neutral-900 hover:border-neutral-700"
                aria-label="Next Blog"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="w-5 h-5 sm:w-4 sm:h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Title and Summary / Tags */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl lg:leading-tight font-medium text-white mb-4 sm:mb-5 tracking-tight max-w-4xl mx-auto">
          {item.title}
        </h1>
        {item.tags && item.tags.length > 0 ? (
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-4xl mx-auto mt-4 sm:mt-6">
            {item.tags.map((tag, idx) => (
              <span key={idx} className="px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/50 text-sm font-medium text-neutral-300">
                {tag}
              </span>
            ))}
          </div>
        ) : item.summary ? (
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-4xl mx-auto">
            {item.summary}
          </p>
        ) : null}
      </section>

      <div className="px-5 sm:px-8 max-w-3xl mx-auto pb-24 relative z-10">
        {slug === 'is-design-democratic' ? (
        <article className="prose prose-invert prose-neutral max-w-none">
          <div className="text-neutral-300 space-y-6 sm:space-y-8 text-base sm:text-lg leading-relaxed">
            <p className="text-xl sm:text-2xl text-white font-medium leading-snug tracking-tight">
              Design is often mistaken for visual preference. It isn’t.
            </p>
            <p>
              At its core, design behaves more like behavioural engineering operating through perception.
            </p>
            <p>
              A lot of modern conversations around design begin from opinion instead of understanding. Somewhere in that process, the discipline itself starts getting flattened. Reduced. Simplified into taste.
            </p>
            <p>
              Over time, I’ve come to see design through two legitimate lenses.
            </p>

            <figure className="w-full my-12 sm:my-16 overflow-hidden rounded-3xl border border-neutral-800/80 shadow-md">
              <img src="/blogs/is-design-democratic/thumb.webp" alt="Is Design Democratic" className="w-full h-auto object-cover block m-0" onError={(e) => e.currentTarget.parentElement!.style.display = 'none'} />
            </figure>

            <div>
              <h3 className="text-2xl font-medium text-white mt-12 mb-6 tracking-tight">The User’s Lens</h3>
              <p className="mb-4">
                The user does not experience systems, frameworks, constraints, or design logic directly.<br/>The user experiences perception.
              </p>
              <blockquote className="border-l-2 border-blue-500/80 pl-6 my-8 py-2">
                <p className="text-xl italic text-blue-100/90 font-medium leading-relaxed">
                  "If something feels intuitive, it succeeds. If something feels confusing, it fails."
                </p>
              </blockquote>
              <p className="mb-4">
                That response matters deeply, even when the user never understands why something works. Perception is the final point of interaction. That’s where design becomes real.
              </p>
              <p>
                And honestly, most users shouldn’t have to understand design to experience clarity. That responsibility belongs somewhere else.
              </p>
            </div>

            <div className="w-16 h-[1px] bg-neutral-800 my-12 mx-auto"></div>

            <div>
              <h3 className="text-2xl font-medium text-white mt-12 mb-6 tracking-tight">The Designer’s Lens</h3>
              <p className="mb-6">The designer sees the invisible systems underneath the visible layer.</p>
              
              <div className="bg-neutral-900/40 border border-neutral-800/60 rounded-2xl p-6 sm:p-8 my-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-600/50"></div>
                <ul className="list-none space-y-4 m-0 p-0 relative z-10">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1 font-mono text-sm">01</span>
                    <span className="text-neutral-200">Spacing affects rhythm.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1 font-mono text-sm">02</span>
                    <span className="text-neutral-200">Hierarchy guides attention.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1 font-mono text-sm">03</span>
                    <span className="text-neutral-200">Interactions shape behaviour.</span>
                  </li>
                </ul>
              </div>

              <p className="mb-4">To someone deeply involved in design, very little feels accidental.</p>
              <p className="mb-4">At the same time, nothing is ever truly perfect either.</p>
              <p className="mb-8">
                Good design rarely comes from perfection. More often, it comes from intelligent compromise under real constraints, shaped through collaboration, technical realities, and human behaviour. Trade-offs everywhere. Constant adjustment. A quiet tension between what is ideal and what is possible.
              </p>

              <figure className="w-full my-12 sm:my-16 flex flex-row gap-3 sm:gap-6">
                <div className="flex-1 flex flex-col gap-3">
                  <div className="overflow-hidden rounded-3xl border border-neutral-800/80 shadow-md">
                    <img src="/blogs/is-design-democratic/1.webp" alt="User's Lens" className="w-full h-full object-cover block m-0" onError={(e) => e.currentTarget.parentElement!.style.display = 'none'} />
                  </div>
                  <figcaption className="text-center text-sm text-neutral-500 mt-1">The User's Lens</figcaption>
                </div>
                <div className="flex-1 flex flex-col gap-3">
                  <div className="overflow-hidden rounded-3xl border border-neutral-800/80 shadow-md">
                    <img src="/blogs/is-design-democratic/2.webp" alt="Designer's Lens" className="w-full h-full object-cover block m-0" onError={(e) => e.currentTarget.parentElement!.style.display = 'none'} />
                  </div>
                  <figcaption className="text-center text-sm text-neutral-500 mt-1">The Designer's Lens</figcaption>
                </div>
              </figure>

              <p className="mb-4">
                Outside these two lenses, design conversations often drift towards trend, familiarity, personal preference, or surface-level reaction. Opinions formed without enough behavioural understanding underneath them.
              </p>
              <p>Maybe that’s where many design discussions begin to lose depth.</p>
            </div>

            <div>
              <h3 className="text-2xl font-medium text-white mt-16 mb-6 tracking-tight">The User Is Emotionally Right</h3>
              <p className="mb-4">Users don’t need design education to experience friction.</p>
              <p className="mb-4">
                If something feels manipulative, exhausting, forgettable, or unclear, the design has already failed emotionally.
              </p>
              <p className="mb-8">
                Perception becomes reality the moment someone interacts with a system.
              </p>
              <blockquote className="border-l-2 border-blue-500/80 pl-6 my-8 py-2">
                <p className="text-xl italic text-blue-100/90 font-medium leading-relaxed">
                  "Mass adoption doesn’t automatically mean intelligence. Familiarity can disguise bad design extremely well."
                </p>
              </blockquote>
              <p className="mb-4">
                At the same time, people adapt to weak systems surprisingly fast.
              </p>
              <p>
                We normalise friction more easily than we realise. Repetition can make poor experiences feel standard. Entire industries slowly condition users into accepting things that probably should’ve been designed better in the first place.
              </p>
            </div>

            <div className="w-16 h-[1px] bg-neutral-800 my-16 mx-auto"></div>

            <div>
              <h3 className="text-2xl font-medium text-white mb-6 tracking-tight">Design by Consensus Creates Average Systems</h3>
              <p className="mb-4">Modern organisations are incredibly complex.</p>
              <p className="mb-4">
                Great products and systems emerge through collaboration across business, engineering, operations, marketing, product, and design.
              </p>
              <p className="mb-4">
                Collaboration matters. Business realities matter. Different perspectives matter too. Organisations are the structures that move businesses and industries forward. None of this exists without them.
              </p>
              <p className="mb-8">
                But within that collaboration, design decisions also require behavioural understanding.
              </p>

              <figure className="w-full my-12 sm:my-16">
                <div className="w-full rounded-3xl border border-neutral-800/50 overflow-hidden relative">
                  <img src="/blogs/is-design-democratic/3.webp" alt="Design Context" className="w-full h-auto object-cover block m-0" onError={(e) => e.currentTarget.parentElement!.style.display = 'none'} />
                </div>
              </figure>

              <p className="mb-4 text-xl text-neutral-200">
                A room full of partial perspectives cannot always replace deep design thinking because design is not only about preference. It’s also about consequence.
              </p>
              <p className="mb-4">
                What tends to happen in committee-driven design is subtle. Tension gets removed first. Then clarity slowly disappears with it. Behavioural precision disappears too.
              </p>
              <p className="mb-8">
                What remains usually feels safer. More acceptable. Easier to approve.<br/><span className="text-neutral-400">Not necessarily better.</span>
              </p>
              <p className="mb-4">
                This isn’t a criticism of organisations. If anything, it highlights why thoughtful design becomes even more necessary as systems become more complex.
              </p>
              <p className="mb-4">
                The role of designers is not to isolate themselves from business or product thinking. It’s to help teams understand the long-term behavioural effects of decisions that initially appear small.
              </p>
              <p className="text-lg font-medium text-white border-l-2 border-blue-500/80 pl-6 my-8 py-2">
                Because most design consequences appear slowly. And by the time they become visible, they’ve usually already shaped behaviour.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-medium text-white mt-16 mb-6 tracking-tight">Everyone Is Not a Designer</h3>
              <p className="mb-4">Somewhere along the way, exposure started getting confused with expertise.</p>
              <p className="mb-4">
                Using products does not automatically create understanding of the systems behind them. By that logic, every passenger would qualify as an aerospace engineer.
              </p>
              <p className="mb-6">
                Design has increasingly been flattened into aesthetics, trends, references, and personal taste. But design is not the arrangement of visuals.
              </p>
              
              <div className="py-6 sm:py-8 text-center bg-neutral-900/20 rounded-3xl border border-neutral-800/40 my-10">
                <span className="text-xl sm:text-2xl text-white font-serif italic tracking-wide">"Design is the arrangement of behaviour."</span>
              </div>

              <p className="mb-4">The visible layer is only the outcome of invisible decisions.</p>
              <p className="mb-4">That’s why design cannot be reduced to voting.</p>
              <p>The more behavioural complexity involved, the more expertise starts to matter. Not less.</p>
            </div>

            <div>
              <h3 className="text-2xl font-medium text-white mt-16 mb-6 tracking-tight">Design Is a Universal Discipline</h3>
              <p className="mb-6">Design is not confined to screens, brands, or objects. Every system that guides human behaviour contains design.</p>
              
              <div className="grid grid-cols-2 gap-2 sm:gap-3 my-8">
                <div className="col-span-1 p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-neutral-900/40 border border-neutral-800/60 flex flex-col items-start justify-center gap-2 sm:gap-4 group hover:border-blue-500/30 transition-colors relative overflow-hidden">
                  <div className="absolute top-0 right-0 -mr-4 -mt-4 w-12 h-12 sm:w-20 sm:h-20 bg-blue-500/5 rounded-full blur-xl group-hover:bg-blue-500/10 transition-all duration-500"></div>
                  <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 relative z-10 shrink-0" />
                  <div className="relative z-10 flex flex-col gap-1">
                    <span className="text-white text-[13px] sm:text-lg font-medium leading-none">Cities</span>
                    <span className="text-neutral-400 text-[10px] sm:text-sm leading-none mt-0.5 sm:mt-0">design movement</span>
                  </div>
                </div>
                
                <div className="col-span-1 p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-neutral-900/40 border border-neutral-800/60 flex flex-col items-start justify-center gap-2 sm:gap-4 group hover:border-blue-500/30 transition-colors relative overflow-hidden">
                  <div className="absolute top-0 right-0 -mr-4 -mt-4 w-12 h-12 sm:w-20 sm:h-20 bg-blue-500/5 rounded-full blur-xl group-hover:bg-blue-500/10 transition-all duration-500"></div>
                  <MonitorSmartphone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 relative z-10 shrink-0" />
                  <div className="relative z-10 flex flex-col gap-1">
                    <span className="text-white text-[13px] sm:text-lg font-medium leading-none">Platforms</span>
                    <span className="text-neutral-400 text-[10px] sm:text-sm leading-none">design attention</span>
                  </div>
                </div>

                <div className="col-span-1 p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-neutral-900/40 border border-neutral-800/60 flex flex-col items-start justify-center gap-2 sm:gap-4 group hover:border-blue-500/30 transition-colors relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 -ml-4 -mb-4 w-12 h-12 sm:w-20 sm:h-20 bg-blue-500/5 rounded-full blur-xl group-hover:bg-blue-500/10 transition-all duration-500"></div>
                  <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 relative z-10 shrink-0" />
                  <div className="relative z-10 flex flex-col gap-1">
                    <span className="text-white text-[13px] sm:text-lg font-medium leading-none">Companies</span>
                    <span className="text-neutral-400 text-[10px] sm:text-sm leading-none">design incentives</span>
                  </div>
                </div>

                <div className="col-span-1 p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-neutral-900/40 border border-neutral-800/60 flex flex-col items-start justify-center gap-2 sm:gap-4 group hover:border-blue-500/30 transition-colors relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 -ml-4 -mb-4 w-12 h-12 sm:w-20 sm:h-20 bg-blue-500/5 rounded-full blur-xl group-hover:bg-blue-500/10 transition-all duration-500"></div>
                  <Globe2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 relative z-10 shrink-0" />
                  <div className="relative z-10 flex flex-col gap-1">
                    <span className="text-white text-[13px] sm:text-lg font-medium leading-none">Culture</span>
                    <span className="text-neutral-400 text-[10px] sm:text-sm leading-none mt-0.5 sm:mt-0">designs aspiration</span>
                  </div>
                </div>
              </div>

              <p className="mb-4">The interface is only the final surface.</p>
              <p className="mb-8">
                The real design exists underneath. In psychology. In friction. In timing. In systems. In repetition.
              </p>

              <figure className="w-full my-12 sm:my-16">
                <div className="w-full rounded-3xl border border-neutral-800/50 overflow-hidden">
                  <img src="/blogs/is-design-democratic/4.webp" alt="Concluding Design Thought" className="w-full h-auto object-cover block m-0" onError={(e) => e.currentTarget.parentElement!.style.display = 'none'} />
                </div>
              </figure>

              <p className="mb-4">A designer who doesn’t understand human behaviour is often styling outcomes they don’t fully understand.</p>
              <p className="mb-6">And because of that, designers carry responsibility beyond aesthetics.</p>
              
              <ul className="list-disc pl-5 space-y-2 mb-8 text-neutral-200 marker:text-blue-400">
                <li>Every interaction teaches behaviour</li>
                <li>Every system shapes expectation over time</li>
              </ul>
              
              <p className="text-xl sm:text-2xl font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200 mb-12 tracking-wide">Design is never neutral.</p>
            </div>

            <div className="border-t border-neutral-800/80 pt-12 mt-12">
              <p className="mb-4 text-neutral-400">I do not see this perspective as the absolute truth.</p>
              <p className="mb-4 text-neutral-400">
                But I do think design deserves more responsibility, more behavioural awareness, and perhaps a little more respect for the depth the discipline actually holds.
              </p>
              <p className="mb-4 text-neutral-400">Maybe the conversation around design does not need more opinions.</p>
              <p className="mb-8 text-neutral-400">Maybe it needs clearer lenses.</p>
              
              <div className="bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-transparent p-6 sm:p-8 rounded-3xl border border-blue-500/20 relative overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.05)] group hover:border-blue-500/30 transition-colors">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500/50 to-blue-500/10"></div>
                <p className="text-sm sm:text-base text-blue-50/90 m-0 relative z-10 leading-relaxed font-medium">
                  I’d genuinely like to hear how others see it too. Different philosophies. Different disagreements. Different ways of approaching the discipline. That’s usually where the more honest conversations around design start.
                </p>
              </div>
            </div>
          </div>
        </article>
        ) : slug === 'minimise-wrong-size-shoes-ai-ar' ? (
        <article className="prose prose-invert prose-neutral max-w-none">
          <div className="text-neutral-300 space-y-6 sm:space-y-8 text-base sm:text-lg leading-relaxed">
            <p className="text-xl sm:text-2xl text-white font-medium leading-snug tracking-tight mt-4">
              The global sneaker market alone was worth more than USD 60 billion in 2019 and is expected to rise at a CAGR of more than 7% between 2021 and 2026. <span className="italic text-neutral-500 font-normal text-lg">(Ratchana R - Times of India, 2021)</span>
            </p>
            <p>
              In the domain of shoe retail, the issue of ill-fitting footwear persists, arising from fluctuating foot sizes, non-standardized sizing, and inadequate customer guidance. Addressing these challenges demands innovative solutions empowered by AI and immersive technologies.
            </p>

            <div className="w-16 h-[1px] bg-neutral-800 my-12 mx-auto"></div>

            <figure className="w-full mb-12 overflow-hidden rounded-3xl border border-neutral-800/80 shadow-md">
              <img src="/blogs/minimise-wrong-size-shoes-ai-ar/thumb.webp" alt="Fit Intelligence" className="w-full h-auto object-cover m-0 block" onError={(e) => e.currentTarget.parentElement!.style.display = 'none'} />
            </figure>

            <div>
              <h3 className="text-2xl font-medium text-white mb-6 tracking-tight">Key Takeaways</h3>
              
              <div className="bg-neutral-900/40 border border-neutral-800/60 rounded-2xl p-6 sm:p-8 my-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-600/50"></div>
                <ul className="list-none space-y-6 m-0 p-0 relative z-10">
                  <li className="flex items-start gap-4">
                    <span className="text-blue-400 mt-0.5 font-mono text-sm shrink-0">01</span>
                    <div>
                      <strong className="text-white block mb-1">Informed sizing structures & advanced technologies</strong>
                      <span className="text-neutral-400 text-base">Move from 2D static measurements to 3D data-driven sizing for better fit.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-blue-400 mt-0.5 font-mono text-sm shrink-0">02</span>
                    <div>
                      <strong className="text-white block mb-1">Significant reduction in return rates</strong>
                      <span className="text-neutral-400 text-base">Accurate sizing and personalized experiences lead to satisfied customers and brand loyalty.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-blue-400 mt-0.5 font-mono text-sm shrink-0">03</span>
                    <div>
                      <strong className="text-white block mb-1">Potential marketing tools</strong>
                      <span className="text-neutral-400 text-base">Immersive technologies like AR create engaging try-on experiences and boost store traffic.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-blue-400 mt-0.5 font-mono text-sm shrink-0">04</span>
                    <div>
                      <strong className="text-white block mb-1">Personalized customer experiences</strong>
                      <span className="text-neutral-400 text-base">Leverage data analytics to personalize offerings, improve inventory management, and reduce costs.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-medium text-white mt-16 mb-6 tracking-tight">The Problem with Traditional Sizing</h3>
              <p className="mb-4">
                Firstly, the dynamic nature of foot sizes necessitates a change from static measurements to informed sizing structures. Hormonal changes, weight fluctuations, and other life events contribute to size variations. Providing customers with extensive information regarding shoe sizing can diminish these discrepancies.
              </p>
              <p className="mb-8">
                Moreover, conventional two-dimensional sizing fails to capture the intricacies of three-dimensional shoe structures, highlighting the need for advanced sizing methodologies.
              </p>

              <figure className="w-full my-12 sm:my-16">
                <div className="w-full overflow-hidden rounded-3xl border border-neutral-800/80 shadow-md">
                  <img src="/blogs/minimise-wrong-size-shoes-ai-ar/1.png" alt="Dynamic sizing variations" className="w-full h-auto object-cover block m-0" onError={(e) => e.currentTarget.parentElement!.style.display = 'none'} />
                </div>
              </figure>

              <p className="mb-4">
                Secondly, manufacturers' inconsistent sizing worsens the problem, leading to misconceptions among consumers. Utilizing scanning technologies to establish precise shoe measurements can significantly reduce return rates.
              </p>
              <p className="mb-8">
                Brands must educate consumers about size disparities and employ innovative sizing solutions to enhance customer satisfaction.
              </p>
              
              <blockquote className="border-l-2 border-blue-500/80 pl-6 my-8 py-2">
                <p className="text-xl italic text-blue-100/90 font-medium leading-relaxed">
                  Thirdly, inadequate customer assistance in physical and online stores heightens the issue. Overwhelmed staff often fail to provide personalized guidance, resulting in uninformed purchase decisions leading to higher return rates.
                </p>
              </blockquote>
              
              <p className="mb-4">
                Augmented reality (AR) and AI-driven tools offer comprehensive support, enabling customers to make informed choices independently.
              </p>
              <p className="mb-4">
                Furthermore, comfort levels in shoes aren't standardized across the industry. Certain terms, such as "comfortable" or "very comfortable," have different meanings to different people and might not fully satisfy every customer's unique comfort needs.
              </p>
              <p className="mb-8">
                Implementing an intuitive guidance system will ensure that consumers can select shoes that satisfy their individual comfort needs.
              </p>

              <figure className="w-full my-12 sm:my-16">
                <div className="overflow-hidden rounded-3xl border border-neutral-800/80 shadow-md bg-[#0a0a0a]">
                  <img src="/blogs/minimise-wrong-size-shoes-ai-ar/2.webp" alt="Three-dimensional shoe sizing" className="w-full h-auto object-cover m-0" onError={(e) => e.currentTarget.parentElement!.style.display = 'none'} />
                </div>
              </figure>
            </div>

            <div className="w-16 h-[1px] bg-neutral-800 my-16 mx-auto"></div>

            <div>
              <h3 className="text-2xl font-medium text-white mb-6 tracking-tight">The AI & AR Solution</h3>
              <p className="mb-6">
                Nike is leading the change through AI-driven solutions like Nike Fit. Technologies such as computer vision, machine learning, data science, artificial intelligence, recommended models and augmented reality are being used to provide personalized experiences for customers.
              </p>
              
              <div className="py-6 sm:py-8 text-center bg-blue-500/5 rounded-3xl border border-blue-500/20 my-10 relative overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.05)]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
                <span className="text-xl sm:text-2xl text-blue-100 font-serif italic tracking-wide relative z-10">"Proper shoe sizing can reduce return rates by 18%."</span>
                <span className="block mt-2 text-sm text-blue-400/80 relative z-10">(Volumental, 2023)</span>
              </div>

              <p className="mb-4">
                Beyond addressing practical concerns, immersive technologies serve as potential marketing tools, attracting customers to experience retail environments. AR-based try-on experiences not only engage customers but also increase footfall in physical and online stores.
              </p>
              <p className="mb-4">
                Moreover, personalized customer experiences driven by data analytics offer a competitive edge. Analyzing consumer behaviour enables brands to tailor offerings, optimize inventory management, and enhance supply chain efficiency.
              </p>
              
              <div className="bg-[#111] p-6 sm:p-8 rounded-3xl border border-neutral-800 mt-8">
                <p className="text-sm sm:text-base text-neutral-300 m-0">
                  Nike's investment in personalized marketing underscores the potential for substantial returns on investment and reduced customer acquisition costs. <span className="italic text-neutral-500">(Ryan Owen - Emerj, 2021)</span>
                </p>
              </div>
            </div>
          </div>
        </article>
        ) : null}
        
        <div className="mt-20 pt-10 border-t border-neutral-900 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {prevItem && (
            <a
              href={`/blog/${prevItem.slug}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(`/blog/${prevItem.slug}`);
              }}
              className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 transition-all text-left group flex flex-col justify-between"
            >
              <span className="text-xs text-neutral-500 mb-2 flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                Previous Post
              </span>
              <span className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">
                {prevItem.title}
              </span>
            </a>
          )}
          
          {nextItem ? (
            <a
              href={`/blog/${nextItem.slug}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(`/blog/${nextItem.slug}`);
              }}
              className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 transition-all text-right group flex flex-col justify-between col-start-1 sm:col-start-2"
            >
              <span className="text-xs text-neutral-500 mb-2 flex items-center justify-end gap-1">
                Next Post
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">
                {nextItem.title}
              </span>
            </a>
          ) : (
            <div className="col-start-1 sm:col-start-2 hidden sm:block"></div>
          )}
        </div>

      </div>
    </div>
  );
};

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    const path = window.location.pathname;
    if (path === '/work' || path === '/about' || path === '/blog' || path.startsWith('/project/') || path.startsWith('/blog/')) {
      return path;
    }
    return '/';
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync route with browser history & update SEO meta tags
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/work' || path === '/about' || path === '/blog' || path.startsWith('/project/') || path.startsWith('/blog/')) {
        setCurrentPath(path);
      } else {
        setCurrentPath('/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update Page Title and Meta Description on route change
  useEffect(() => {
    let title = 'Suhotra Chakraborty - UX/UI & Product Designer';
    let description =
      'Portfolio of Suhotra Chakraborty, a UX/UI & Product Designer working across digital products, user experience, interaction design, design systems and emerging technologies.';

    if (currentPath === '/work') {
      title = 'Work - Suhotra Chakraborty';
      description =
        'Selected digital product design, UX research, design systems, and interface projects by Suhotra Chakraborty.';
    } else if (currentPath === '/about') {
      title = 'About - Suhotra Chakraborty';
      description =
        'About Suhotra Chakraborty (aka Neel Genix), UX/UI & Product Designer working across digital products, AI systems, and design systems.';
    } else if (currentPath === '/blog') {
      title = 'Blog - Suhotra Chakraborty';
      description =
        'Thoughts on design, systems, and engineering by Suhotra Chakraborty.';
    } else if (currentPath.startsWith('/blog/')) {
      const slug = currentPath.replace('/blog/', '');
      const blog = BLOG_ITEMS.find((b) => b.slug === slug);
      title = blog ? `${blog.title} - Suhotra Chakraborty` : 'Blog - Suhotra Chakraborty';
    } else if (currentPath.startsWith('/project/')) {
      const slug = currentPath.replace('/project/', '');
      const project = WORK_ITEMS.find((w) => w.slug === slug || w.slug.replace(/-hsbc$/, '') === slug || slug.replace(/-hsbc$/, '') === w.slug);
      title = project ? `${project.title} - Suhotra Chakraborty` : 'Project - Suhotra Chakraborty';
    }

    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);
  }, [currentPath]);

  const handleNavigate = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 2800);
  };

  if (currentPath.startsWith('/project/')) {
    const slug = currentPath.replace('/project/', '');
    return (
      <div id="portfolio-app" className="min-h-screen flex flex-col bg-[#0a0a0a] text-[#f5f5f5] selection:bg-neutral-800 selection:text-white">
        <Navbar currentPath={currentPath} onNavigate={handleNavigate} />
        <main className="flex-1">
          <ProjectDetailPage slug={slug} onNavigate={handleNavigate} />
        </main>
        <Footer onNavigate={handleNavigate} onCopyEmail={() => triggerToast('Email copied to clipboard')} />
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
      </div>
    );
  }

  if (currentPath.startsWith('/blog/') && currentPath !== '/blog') {
    const slug = currentPath.replace('/blog/', '');
    return (
      <div id="portfolio-app" className="min-h-screen flex flex-col bg-[#0a0a0a] text-[#f5f5f5] selection:bg-neutral-800 selection:text-white">
        <Navbar currentPath={currentPath} onNavigate={handleNavigate} />
        <main className="flex-1">
          <BlogDetailPage slug={slug} onNavigate={handleNavigate} />
        </main>
        <Footer onNavigate={handleNavigate} onCopyEmail={() => triggerToast('Email copied to clipboard')} />
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
      </div>
    );
  }

  return (
    <div id="portfolio-app" className="min-h-screen flex flex-col bg-[#0a0a0a] text-[#f5f5f5] selection:bg-neutral-800 selection:text-white">
      {/* Global Navigation - No Home link, brand goes to / */}
      <Navbar currentPath={currentPath} onNavigate={handleNavigate} />

      {/* Main View Area */}
      <main id="main-content" className="flex-1">
        {currentPath === '/' && (
          <HomePage
            onNavigate={handleNavigate}
            onCopyEmail={() => triggerToast('Email copied to clipboard')}
          />
        )}

        {currentPath === '/work' && (
          <WorkPage onNavigate={handleNavigate} />
        )}

        {currentPath === '/about' && (
          <AboutPage />
        )}

        {currentPath === '/blog' && (
          <BlogsPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onCopyEmail={() => triggerToast('Email copied to clipboard')}
      />

      {/* Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
