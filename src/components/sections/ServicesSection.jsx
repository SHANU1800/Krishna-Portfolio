import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { DynamicIcon } from '../ui/IconMapper';
import { servicesData } from '../../data/portfolioData';

export default function ServicesSection({ onSelectService }) {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="border-b border-white/[0.06] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            id="services-heading"
            eyebrow="Services"
            title="What Can I Automate For You?"
            description="Focused automation engagements tailored around the operational workflows businesses run every day."
          />
          <button
            type="button"
            onClick={() => onSelectService('Custom Business Workflow / Discovery Call')}
            className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-blue-400/40 hover:bg-white/[0.06]"
          >
            <span>Need a custom workflow?</span>
            <ArrowRight className="h-4 w-4 text-blue-400" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ duration: 0.45, delay: (index % 3) * 0.07 }}
              className="group flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0c0e16]/85 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-[#111421]"
            >
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-blue-400 transition-colors group-hover:border-blue-500/30 group-hover:bg-blue-500/10">
                  <DynamicIcon name={service.iconName} className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-lg font-semibold tracking-tight text-zinc-50">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {service.summary}
                </p>

                <ul className="mt-5 space-y-2 border-t border-white/[0.06] pt-4">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2.5 text-sm text-zinc-300"
                    >
                      <Check
                        className="h-3.5 w-3.5 shrink-0 text-blue-400"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-2">
                <button
                  type="button"
                  onClick={() => onSelectService(service.inquiryTopic)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-400 transition-colors hover:text-blue-300"
                >
                  <span>Automate this workflow</span>
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

