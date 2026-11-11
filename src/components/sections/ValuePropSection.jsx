import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import { DynamicIcon } from '../ui/IconMapper';
import { valuePropositions } from '../../data/portfolioData';

export default function ValuePropSection() {
  return (
    <section
      aria-labelledby="value-prop-heading"
      className="border-b border-white/[0.06] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="value-prop-heading"
          eyebrow="Business Value"
          title="Less Manual Work. More Business Growth."
          description="Automation is not about adding complexity — it is about giving your team reliable systems for recurring daily work."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {valuePropositions.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group relative rounded-2xl border border-white/[0.08] bg-[#0c0e16]/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/35 hover:bg-[#101320]"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/25 bg-blue-500/10 text-blue-400 transition-colors group-hover:bg-blue-500/15">
                  <DynamicIcon name={item.iconName} className="h-5 w-5" />
                </div>
                <span className="font-mono text-[11px] text-zinc-500">
                  0{index + 1}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-semibold tracking-tight text-zinc-50">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                {item.description}
              </p>

              <div className="mt-5 border-t border-white/[0.06] pt-4 font-mono text-[11px] text-blue-400/90">
                {item.highlight}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

