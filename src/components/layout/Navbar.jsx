import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navLinks } from '../../data/portfolioData';
import { siteConfig } from '../../config/siteConfig';

export default function Navbar({ onBookCall }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['home', 'services', 'projects', 'about', 'contact'];
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: '-35% 0px -55% 0px' }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const handleLinkClick = (href) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/[0.08] bg-[#07080d]/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-[#07080d]/40 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#home');
          }}
          className="group flex items-center gap-2.5 text-zinc-50"
          aria-label="Krishna Agarwal Home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] font-mono text-sm font-semibold tracking-tight text-white transition-colors group-hover:border-blue-400/50 group-hover:bg-blue-500/10">
            {siteConfig.logoMark}
          </span>
          <span className="hidden text-sm font-medium tracking-tight text-zinc-200 sm:inline">
            {siteConfig.brandName}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-100'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-dot"
                    className="absolute inset-x-3.5 -bottom-[1px] h-[2px] rounded-full bg-gradient-to-r from-blue-400 to-indigo-400"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              onBookCall('Custom Business Workflow / Discovery Call');
            }}
            className="hidden items-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-500/15 transition hover:brightness-110 sm:inline-flex"
          >
            <span>Book a Free Call</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-200 transition hover:bg-white/[0.08] md:hidden"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden border-t border-white/[0.08] bg-[#0a0c13]/95 backdrop-blur-xl md:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {navLinks.map((link) => {
                const id = link.href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                      isActive
                        ? 'bg-blue-500/10 text-blue-300'
                        : 'text-zinc-300 hover:bg-white/[0.04] hover:text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    onBookCall('Custom Business Workflow / Discovery Call');
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2.5 text-sm font-medium text-white"
                >
                  <span>Book a Free Call</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

