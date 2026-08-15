import React, { useState } from 'react';
import { ArrowUpRight, Copy, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (path: string) => void;
  onCopyEmail: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onCopyEmail }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    onCopyEmail();
    setTimeout(() => setCopied(false), 2500);
  };

  const handleNav = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openResume = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(PERSONAL_INFO.resumePdfPath, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer id="global-footer" className="border-t border-neutral-900 bg-[#08080a] mt-20 sm:mt-28">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-14 sm:py-20">
        {/* Main CTA Block with right-side Social Links */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 sm:mb-18">
          <div className="max-w-2xl">
            <h2 id="footer-heading" className="text-2xl sm:text-4xl font-normal text-white mb-4 sm:mb-5 leading-tight tracking-tight">
              Building a product or shaping an idea?
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed mb-8 max-w-xl">
              Let’s work together to design and build something impactful, scalable, and ready to grow.
            </p>

            <div className="flex flex-wrap items-center gap-3.5">
              {/* Primary Action: Email Copy Trigger */}
              <button
                id="footer-email-btn"
                type="button"
                onClick={handleCopy}
                className="bg-blue-600 text-white px-6 py-3 rounded-full text-xs font-semibold hover:bg-blue-500 transition-all inline-flex items-center gap-2 shadow-lg shadow-blue-600/25 active:scale-95 cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-blue-100" />
                <span>{PERSONAL_INFO.email}</span>
                {copied ? (
                  <span className="text-blue-100 text-xs ml-1 font-bold">Copied!</span>
                ) : (
                  <Copy className="w-3 h-3 text-blue-200 ml-1" />
                )}
              </button>

              {/* Secondary Action: Resume */}
              <a
                id="footer-resume-btn"
                href={PERSONAL_INFO.resumePdfPath}
                onClick={openResume}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-neutral-800 bg-neutral-900/60 px-6 py-3 rounded-full text-xs font-medium hover:bg-neutral-800 transition-all text-neutral-300 inline-flex items-center gap-2 cursor-pointer group"
              >
                <span>Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Right empty space in footer: Social Links */}
          <div id="footer-social-links" className="flex flex-wrap items-center lg:flex-col lg:items-end gap-3 shrink-0 pt-2 lg:pt-0">
            <a
              id="footer-linkedin-link"
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-neutral-300 hover:text-white transition-colors inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800 group"
            >
              <Linkedin className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              id="footer-github-link"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-neutral-300 hover:text-white transition-colors inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800 group"
            >
              <Github className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>

        {/* Bottom Navigation & Meta */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-neutral-900">
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            <a
              id="footer-nav-brand-link"
              href="/"
              onClick={(e) => handleNav('/', e)}
              className="text-sm font-semibold text-white hover:text-neutral-400 transition-colors"
            >
              {PERSONAL_INFO.name}
            </a>

            <a
              id="footer-nav-work-link"
              href="/work"
              onClick={(e) => handleNav('/work', e)}
              className="text-xs font-medium text-neutral-400 hover:text-white transition-colors"
            >
              Work
            </a>

            <a
              id="footer-nav-about-link"
              href="/about"
              onClick={(e) => handleNav('/about', e)}
              className="text-xs font-medium text-neutral-400 hover:text-white transition-colors"
            >
              About
            </a>
          </div>

          <div id="footer-copyright-text" className="text-xs text-neutral-500 font-normal">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

