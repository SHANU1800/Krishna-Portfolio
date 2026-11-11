import { motion } from 'framer-motion';
import { ArrowRight, Check, Info } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { pricingPackages } from '../../data/portfolioData';

export default function PricingSection({ onSelectPackage }) {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="border-b border-white/[0.06] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="pricing-heading"
          eyebrow="Engagement Models"
          title="Flexible Ways to Work Together."
          description="Transparent indicative starting packages for businesses automating a single process or building connected operations."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pricingPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={`relative flex flex-col justify-between rounded-2xl border p-6 transition-all duration-300 sm:p-7 ${
                pkg.featured
                  ? 'border-blue-500/50 bg-gradient-to-b from-blue-500/[0.09] via-[#0e111d] to-[#0b0d15] shadow-xl shadow-blue-500/10'
                  : 'border-white/[0.08] bg-[#0c0e16]/85 hover:border-white/20'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold tracking-tight text-zinc-50">
                    {pkg.name}
                  </h3>
                  {pkg.badge && (
                    <span className="rounded-full border border-blue-400/35 bg-blue-500/15 px-2.5 py-0.5 font-mono text-[10px] font-medium text-blue-300">
                      {pkg.badge}
                    </span>
                  )}
                </div>

                <p className="mt-2 text-sm text-zinc-400">{pkg.subtitle}</p>

                <div className="mt-6 border-y border-white/[0.07] py-5">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                    {pkg.pricePrefix} (Indicative)
                  </div>
                  <div className="mt-1.5 flex items-baseline gap-1">
                    <span className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
                      {pkg.price}
                    </span>
                    {pkg.period && (
                      <span className="text-sm font-medium text-zinc-400">{pkg.period}</span>
                    )}
                  </div>
                </div>

                <ul className="mt-6 space-y-3">
                  {pkg.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-blue-400"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => onSelectPackage(pkg.inquiryTopic)}
                  className={`flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition ${
                    pkg.featured
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/20 hover:brightness-110'
                      : 'border border-white/15 bg-white/[0.04] text-zinc-100 hover:border-blue-400/40 hover:bg-white/[0.08]'
                  }`}
                >
                  <span>Discuss Your Requirements</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Indicative Pricing Clarification */}
        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 text-xs leading-relaxed text-zinc-400 sm:items-center">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-blue-400 sm:mt-0" aria-hidden="true" />
          <p>
            <strong className="font-medium text-zinc-200">Indicative Starting Prices:</strong>{' '}
            The figures above represent starting price guides. Final pricing depends on your
            specific workflow complexity, number of tool integrations, and project requirements.
          </p>
        </div>
      </div>
    </section>
  );
}

