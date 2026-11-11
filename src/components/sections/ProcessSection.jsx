import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import { processSteps } from '../../data/portfolioData';

export default function ProcessSection() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="border-b border-white/[0.06] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="process-heading"
          eyebrow="How I Work"
          title="From Manual Process to Automated System."
          description="A clear five-step approach designed so every automation fits how your business actually operates."
        />

        <div className="relative mt-12">
          {/* Desktop Connecting Line */}
          <div
            className="pointer-events-none absolute top-9 right-8 left-8 hidden h-px bg-gradient-to-r from-blue-500/20 via-indigo-500/40 to-violet-500/20 lg:block"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-70px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group relative flex flex-col rounded-2xl border border-white/[0.08] bg-[#0c0e16]/90 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-[#101320]"
              >
                <div className="flex items-center justify-between">
                  <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-xl border border-blue-500/35 bg-[#090d18] font-mono text-xs font-semibold text-blue-300 transition-colors group-hover:border-blue-400 group-hover:bg-blue-500/20">
                    {step.number}
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-600">
                    Phase {index + 1}
                  </span>
                </div>

                <h3 className="mt-5 text-base font-semibold tracking-tight text-zinc-50">
                  {step.number}. {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                  {step.description}
                </p>
                <p className="mt-3 border-t border-white/[0.06] pt-3 text-xs leading-relaxed text-zinc-400">
                  {step.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

