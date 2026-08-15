import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (path: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openResume = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    window.open(PERSONAL_INFO.resumePdfPath, '_blank', 'noopener,noreferrer');
  };

  return (
    <header
      id="global-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0c]/85 backdrop-blur-xl border-b border-neutral-900/80 shadow-lg'
          : 'bg-[#0a0a0c]/60 backdrop-blur-md border-b border-neutral-900/40'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Link: Suhotra Chakraborty */}
        <a
          id="nav-brand-link"
          href="/"
          onClick={(e) => handleLinkClick('/', e)}
          className="text-lg sm:text-xl font-medium tracking-tight text-[#f5f5f7] hover:text-white transition-colors flex items-center gap-2.5 group"
        >
          <span>{PERSONAL_INFO.name}</span>
        </a>

        {/* Desktop Navigation with Samsung UI pill highlights */}
        <nav id="desktop-navigation" aria-label="Main Navigation" className="hidden md:flex items-center space-x-1.5 p-1.5 rounded-full bg-neutral-900/70 border border-neutral-800/80 shadow-inner">
          <a
            id="nav-work-link"
            href="/work"
            onClick={(e) => handleLinkClick('/work', e)}
            className={`text-sm font-medium px-5 py-2 rounded-full transition-all ${
              currentPath === '/work'
                ? 'text-white bg-neutral-800 shadow-sm'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
            }`}
          >
            Work
          </a>

          <a
            id="nav-about-link"
            href="/about"
            onClick={(e) => handleLinkClick('/about', e)}
            className={`text-sm font-medium px-5 py-2 rounded-full transition-all ${
              currentPath === '/about'
                ? 'text-white bg-neutral-800 shadow-sm'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
            }`}
          >
            About
          </a>

          <a
            id="nav-resume-link"
            href={PERSONAL_INFO.resumePdfPath}
            onClick={openResume}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium px-5 py-2 rounded-full text-blue-400 hover:text-blue-300 hover:bg-neutral-800/50 transition-all inline-flex items-center gap-1.5"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-blue-400/80" />
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          id="mobile-menu-toggle"
          type="button"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-900 border border-neutral-800 transition-colors focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer with Samsung UI rounded cards */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-[#0e1014] border-b border-neutral-800 px-6 py-6 transition-all shadow-2xl"
        >
          <div className="flex flex-col gap-2.5">
            <a
              id="mobile-nav-work-link"
              href="/work"
              onClick={(e) => handleLinkClick('/work', e)}
              className={`px-5 py-3.5 text-base font-medium rounded-2xl transition-all ${
                currentPath === '/work'
                  ? 'text-white bg-neutral-800/90 border border-neutral-700 shadow-sm'
                  : 'text-neutral-300 hover:bg-neutral-900'
              }`}
            >
              Work
            </a>
            <a
              id="mobile-nav-about-link"
              href="/about"
              onClick={(e) => handleLinkClick('/about', e)}
              className={`px-5 py-3.5 text-base font-medium rounded-2xl transition-all ${
                currentPath === '/about'
                  ? 'text-white bg-neutral-800/90 border border-neutral-700 shadow-sm'
                  : 'text-neutral-300 hover:bg-neutral-900'
              }`}
            >
              About
            </a>
            <a
              id="mobile-nav-resume-link"
              href={PERSONAL_INFO.resumePdfPath}
              onClick={openResume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 text-base font-medium rounded-2xl text-neutral-300 hover:bg-neutral-900 transition-all flex items-center justify-between"
            >
              <span className="flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-neutral-400" />
                Resume (PDF)
              </span>
              <ArrowUpRight className="w-5 h-5 text-neutral-400" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

