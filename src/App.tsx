import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { AboutPage } from './pages/AboutPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { WorkItem } from './types';
import { PERSONAL_INFO } from './data/portfolioData';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    const path = window.location.pathname;
    if (path === '/work' || path === '/about' || path.startsWith('/project/')) {
      return path;
    }
    return '/';
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync route with browser history & update SEO meta tags
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/work' || path === '/about' || path.startsWith('/project/')) {
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
    let title = 'Suhotra Chakraborty — UX/UI & Product Designer';
    let description =
      'Portfolio of Suhotra Chakraborty, a UX/UI & Product Designer working across digital products, user experience, interaction design, design systems and emerging technologies.';

    if (currentPath === '/work') {
      title = 'Work — Suhotra Chakraborty';
      description =
        'Selected digital product design, UX research, design systems, and interface projects by Suhotra Chakraborty.';
    } else if (currentPath === '/about') {
      title = 'About — Suhotra Chakraborty';
      description =
        'About Suhotra Chakraborty (aka Neel Genix), UX/UI & Product Designer working across digital products, AI systems, and design systems.';
    } else if (currentPath.startsWith('/project/')) {
      title = 'Project — Suhotra Chakraborty';
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
    return <ProjectDetailPage slug={slug} onNavigate={handleNavigate} />;
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
