import { ArrowUpRight, Mail, Linkedin, MessageSquare } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { navLinks } from '../../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-[#06070b]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] font-mono text-sm font-semibold text-white">
                {siteConfig.logoMark}
              </span>
              <div>
                <div className="text-sm font-semibold text-zinc-100">{siteConfig.brandName}</div>
                <div className="text-xs text-zinc-400">{siteConfig.roleTitle}</div>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
              Helping businesses eliminate repetitive manual processes through practical n8n, API,
              and AI-powered workflows.
            </p>
            <div className="mt-3 font-mono text-xs text-zinc-500">{siteConfig.location}</div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <div className="font-mono text-xs uppercase tracking-wider text-zinc-500">
              Navigation
            </div>
            <ul className="mt-3 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#pricing"
                  className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
                >
                  Engagement &amp; Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="md:col-span-4">
            <div className="font-mono text-xs uppercase tracking-wider text-zinc-500">
              Direct Channels
            </div>
            <div className="mt-3 space-y-2.5">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 text-sm text-zinc-300 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 text-blue-400" aria-hidden="true" />
                <span>{siteConfig.email}</span>
              </a>
              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-zinc-300 transition-colors hover:text-white"
              >
                <Linkedin className="h-4 w-4 text-blue-400" aria-hidden="true" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-zinc-500" aria-hidden="true" />
              </a>
              {siteConfig.whatsappConfigured ? (
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-zinc-300 transition-colors hover:text-white"
                >
                  <MessageSquare className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                  <span>WhatsApp Chat</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-zinc-500" aria-hidden="true" />
                </a>
              ) : (
                <div className="flex items-center gap-2.5 text-xs text-zinc-500">
                  <MessageSquare className="h-4 w-4 text-zinc-600" aria-hidden="true" />
                  <span>WhatsApp: Configurable (number pending confirmation)</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/[0.06] pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center">
          <div>
            &copy; {year} {siteConfig.brandName}. All rights reserved.
          </div>
          <div>Practical AI &amp; Business Operations Automation</div>
        </div>
      </div>
    </footer>
  );
}

