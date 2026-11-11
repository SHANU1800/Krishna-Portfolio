import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2, Sparkles } from 'lucide-react';
import { heroWorkflowNodes, targetCustomers } from '../../data/portfolioData';
import { DynamicIcon } from '../ui/IconMapper';

export default function HeroSection({ onPrimaryCta }) {
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);
  const [isAutoCycling, setIsAutoCycling] = useState(true);

  useEffect(() => {
    if (!isAutoCycling) return undefined;
    const timer = setInterval(() => {
      setActiveNodeIndex((prev) => (prev + 1) % heroWorkflowNodes.length);
    }, 2400);
    return () => clearInterval(timer);
  }, [isAutoCycling]);

  const handleSelectNode = (index) => {
    setIsAutoCycling(false);
    setActiveNodeIndex(index);
  };

  const handleReplay = () => {
    setActiveNodeIndex(0);
    setIsAutoCycling(true);
  };

  const activeNode = heroWorkflowNodes[activeNodeIndex];

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-white/[0.06] pt-14 pb-16 sm:pt-20 sm:pb-24"
    >
      {/* Subtle architectural background */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-70" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[780px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600/15 via-indigo-500/12 to-violet-600/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-3.5 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-blue-300">
              <Sparkles className="h-3.5 w-3.5 text-blue-400" aria-hidden="true" />
              <span>AI AUTOMATION CONSULTANT</span>
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
              Your Business Has Workflows. I{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Make Them Automatic.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              I build practical automation systems that eliminate repetitive work, connect your
              business tools and help your team focus on growth.
            </p>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-400">
              Practical n8n, Excel, API, and AI workflows designed around real accounting,
              operations, and e-commerce processes.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => onPrimaryCta('Custom Business Workflow / Discovery Call')}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition hover:brightness-110"
              >
                <span>Let&apos;s Automate Your Business</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-zinc-100 transition hover:border-white/25 hover:bg-white/[0.07]"
              >
                <span>Explore My Projects</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Animated Workflow Canvas */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl border border-white/12 bg-[#0b0d15]/90 p-5 shadow-2xl shadow-black/60 backdrop-blur-md">
              {/* Top canvas bar */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                  </div>
                  <span className="ml-2 font-mono text-[11px] text-zinc-400">
                    lead-intake-workflow.n8n
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleReplay}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-blue-400/25 bg-blue-500/10 px-2.5 py-1 font-mono text-[10px] font-medium text-blue-300 transition hover:bg-blue-500/20"
                  title="Animate workflow sequence"
                >
                  <Play className="h-2.5 w-2.5 fill-current" aria-hidden="true" />
                  <span>{isAutoCycling ? 'Running' : 'Auto Run'}</span>
                </button>
              </div>

              {/* Workflow Nodes & Animated Connectors */}
              <div className="bg-dot-canvas mt-4 rounded-xl border border-white/[0.06] bg-[#070910]/90 p-4">
                <div className="space-y-0">
                  {heroWorkflowNodes.map((node, index) => {
                    const isActive = index === activeNodeIndex;
                    const isCompleted = index < activeNodeIndex;
                    const isLast = index === heroWorkflowNodes.length - 1;

                    return (
                      <div key={node.id}>
                        <button
                          type="button"
                          onClick={() => handleSelectNode(index)}
                          className={`group flex w-full items-center justify-between gap-3 rounded-xl border px-3.5 py-3 text-left transition-all ${
                            isActive
                              ? 'border-blue-500/60 bg-blue-500/[0.11] shadow-[0_0_24px_-10px_rgba(59,130,246,0.55)]'
                              : isCompleted
                              ? 'border-emerald-500/25 bg-emerald-500/[0.04]'
                              : 'border-white/10 bg-[#0d1019] hover:border-white/20'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                                isActive
                                  ? 'border-blue-400/40 bg-blue-500/20 text-blue-300'
                                  : isCompleted
                                  ? 'border-emerald-400/30 bg-emerald-500/10 text-emerald-300'
                                  : 'border-white/10 bg-white/[0.04] text-zinc-400'
                              }`}
                            >
                              <DynamicIcon name={node.iconName} className="h-4 w-4" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-zinc-100">
                                  {node.title}
                                </span>
                                {isCompleted && (
                                  <CheckCircle2
                                    className="h-3.5 w-3.5 text-emerald-400"
                                    aria-hidden="true"
                                  />
                                )}
                              </div>
                              <div className="text-xs text-zinc-400">{node.subtitle}</div>
                            </div>
                          </div>

                          <span
                            className={`rounded-md border px-2 py-0.5 font-mono text-[10px] ${
                              isActive
                                ? 'border-blue-400/30 bg-blue-500/15 text-blue-300'
                                : 'border-white/10 bg-white/[0.03] text-zinc-500'
                            }`}
                          >
                            {node.badge}
                          </span>
                        </button>

                        {/* Animated Connector Line */}
                        {!isLast && (
                          <div className="relative ml-8 flex h-5 w-px items-center justify-center bg-white/15">
                            {isActive && (
                              <motion.span
                                initial={{ y: -8, opacity: 0 }}
                                animate={{ y: 8, opacity: [0, 1, 0] }}
                                transition={{
                                  duration: 1.1,
                                  repeat: Infinity,
                                  ease: 'easeInOut',
                                }}
                                className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.9)]"
                              />
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Live Node Payload Preview */}
                <div className="mt-3.5 rounded-lg border border-white/[0.08] bg-[#0b0e17] px-3 py-2.5">
                  <div className="flex items-center justify-between font-mono text-[10px] text-zinc-500">
                    <span>STEP {activeNode.step} · {activeNode.title.toUpperCase()}</span>
                    <span className="text-blue-400">Active step</span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-300">
                    {activeNode.samplePayload}
                  </p>
                </div>
              </div>

              {/* Status Label */}
              <div className="mt-3.5 flex items-center justify-between gap-2 px-1">
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span>Turning manual work into automated workflows.</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Target Industries Strip */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 border-t border-white/[0.07] pt-8"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500">
              Built for teams across
            </span>
            <div className="flex flex-wrap gap-2">
              {targetCustomers.map((segment) => (
                <span
                  key={segment}
                  className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1 text-xs text-zinc-300"
                >
                  {segment}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

