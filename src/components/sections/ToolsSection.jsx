import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { toolsTechnologies } from '../../data/portfolioData';

export default function ToolsSection() {
  return (
    <section
      id="tools"
      aria-labelledby="tools-heading"
      className="border-b border-white/[0.06] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            id="tools-heading"
            eyebrow="Tools & Technologies"
            title="Practical Stack for Business Workflows."
            description="Core technologies and tools I use to connect forms, spreadsheets, emails, APIs, and AI logic."
          />
          <div className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-3.5 py-2 text-xs text-zinc-400">
            <Wrench className="h-3.5 w-3.5 text-blue-400" aria-hidden="true" />
            <span>Working tools &amp; skills — focused on practical implementation</span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {toolsTechnologies.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}
              className="group rounded-2xl border border-white/[0.08] bg-[#0c0e16]/80 p-5 transition-all duration-300 hover:border-blue-500/35 hover:bg-[#101320]"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-base font-semibold tracking-tight text-zinc-100">
                  {tool.name}
                </h3>
                <span className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-0.5 font-mono text-[10px] text-blue-300">
                  {tool.role}
                </span>
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                {tool.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

