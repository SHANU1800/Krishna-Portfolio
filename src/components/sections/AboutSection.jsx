import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle2,
  MapPin,
  Calendar,
} from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import {
  aboutStoryParagraphs,
  aboutHighlights,
  experienceTimeline,
  educationAndAcademic,
  leadershipHighlights,
} from '../../data/portfolioData';

const BACKGROUND_TABS = [
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'education', label: 'Education & Finance', icon: GraduationCap },
  { id: 'leadership', label: 'Leadership', icon: Award },
];

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-b border-white/[0.06] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="about-heading"
          eyebrow="About Me"
          title="Business Understanding Meets Automation."
        />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left Column: Narrative + Background Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-6"
          >
            <div className="space-y-4 text-base leading-relaxed text-zinc-300">
              {aboutStoryParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/[0.08] bg-[#0c0e16]/80 p-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-blue-400">
                Background Foundation
              </div>
              <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {aboutHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-300">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-blue-400"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column: Interactive Resume Credentials Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="lg:col-span-6"
          >
            <div className="rounded-2xl border border-white/[0.08] bg-[#0c0e16]/90 p-5 sm:p-6">
              {/* Tab Switcher */}
              <div
                className="flex flex-wrap gap-2 border-b border-white/[0.08] pb-4"
                role="tablist"
                aria-label="Krishna Agarwal background details"
              >
                {BACKGROUND_TABS.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveTab(tab.id)}
                      className={`inline-flex items-center gap-2 rounded-xl border px-3.5 py-2 text-xs font-medium transition ${
                        isActive
                          ? 'border-blue-500/50 bg-blue-500/15 text-blue-200'
                          : 'border-white/10 bg-white/[0.02] text-zinc-400 hover:border-white/20 hover:text-zinc-200'
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Tab Content */}
              <div className="mt-5 space-y-4">
                {activeTab === 'experience' &&
                  experienceTimeline.map((item) => (
                    <div
                      key={`${item.organization}-${item.period}`}
                      className="rounded-xl border border-white/[0.07] bg-[#070910] p-4"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h3 className="text-sm font-semibold text-zinc-100">{item.role}</h3>
                          <div className="mt-0.5 text-xs font-medium text-blue-400">
                            {item.organization}
                          </div>
                        </div>
                        <div className="flex flex-col items-start gap-1 text-[11px] text-zinc-500 sm:items-end">
                          <span className="inline-flex items-center gap-1 font-mono">
                            <Calendar className="h-3 w-3" aria-hidden="true" />
                            {item.period}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="h-3 w-3" aria-hidden="true" />
                            {item.location}
                          </span>
                        </div>
                      </div>
                      <p className="mt-2.5 text-xs leading-relaxed text-zinc-400">
                        {item.summary}
                      </p>
                    </div>
                  ))}

                {activeTab === 'education' &&
                  educationAndAcademic.map((edu) => (
                    <div
                      key={edu.title}
                      className="rounded-xl border border-white/[0.07] bg-[#070910] p-4"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h3 className="text-sm font-semibold text-zinc-100">{edu.title}</h3>
                          <div className="mt-0.5 text-xs font-medium text-blue-400">
                            {edu.institution}
                          </div>
                        </div>
                        <span className="font-mono text-[11px] text-zinc-500">{edu.period}</span>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-zinc-300">{edu.detail}</p>
                    </div>
                  ))}

                {activeTab === 'leadership' &&
                  leadershipHighlights.map((lead) => (
                    <div
                      key={lead.title}
                      className="rounded-xl border border-white/[0.07] bg-[#070910] p-4"
                    >
                      <h3 className="text-sm font-semibold text-zinc-100">{lead.title}</h3>
                      <div className="mt-0.5 font-mono text-[11px] text-blue-400">
                        {lead.subtitle}
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-zinc-400">{lead.detail}</p>
                    </div>
                  ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

