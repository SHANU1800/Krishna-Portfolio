import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  X,
  ArrowRight,
  ExternalLink,
  Video,
  Image as ImageIcon,
  Github,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import WorkflowDiagram from './WorkflowDiagram';

export default function ProjectModal({ project, onClose, onInquire }) {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    setActiveStep(0);
  }, [project]);

  useEffect(() => {
    if (!project) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  const hasMediaLinks = Boolean(
    project?.media?.demoVideoUrl ||
      project?.media?.githubUrl ||
      (project?.media?.screenshots && project.media.screenshots.length > 0)
  );

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="project-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/15 bg-[#0c0e16] p-6 shadow-2xl sm:p-8"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[11px] font-medium ${
                      project.isConceptDemo
                        ? 'border-indigo-400/30 bg-indigo-500/10 text-indigo-300'
                        : 'border-blue-400/30 bg-blue-500/10 text-blue-300'
                    }`}
                  >
                    {project.statusLabel}
                  </span>
                  <span className="font-mono text-xs text-zinc-500">{project.category}</span>
                </div>
                <h3
                  id="project-modal-title"
                  className="mt-3 text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl"
                >
                  {project.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-2 text-zinc-400 transition-colors hover:border-white/20 hover:bg-white/[0.08] hover:text-zinc-100"
                aria-label="Close project details"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Business Problem & Solution */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                  Business Problem
                </div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">{project.problem}</p>
              </div>
              <div className="rounded-xl border border-blue-500/20 bg-blue-500/[0.04] p-4">
                <div className="font-mono text-[11px] uppercase tracking-wider text-blue-400">
                  Automation Solution
                </div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-200">{project.solution}</p>
              </div>
            </div>

            {/* Practical Outcome */}
            <div className="mt-4 flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
              <div>
                <div className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                  Practical Business Impact
                </div>
                <p className="mt-1 text-sm leading-relaxed text-zinc-300">{project.outcome}</p>
              </div>
            </div>

            {/* Interactive Workflow Diagram */}
            <div className="mt-6">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-sm font-medium text-zinc-200">
                  <Layers className="h-4 w-4 text-blue-400" aria-hidden="true" />
                  <span>Step-by-Step Workflow Architecture</span>
                </div>
                <span className="font-mono text-[11px] text-zinc-500">
                  Click any stage to inspect
                </span>
              </div>
              <WorkflowDiagram
                steps={project.workflowSteps}
                compact={false}
                activeIndex={activeStep}
                onSelectStep={setActiveStep}
              />
              {project.workflowSteps[activeStep] && (
                <div className="mt-3 rounded-lg border border-white/10 bg-[#070910] px-4 py-3 text-xs text-zinc-300">
                  <span className="font-mono text-blue-400">
                    Stage 0{activeStep + 1} ({project.workflowSteps[activeStep].label}):{' '}
                  </span>
                  {project.workflowSteps[activeStep].detail}
                </div>
              )}
            </div>

            {/* Tools & Resources */}
            <div className="mt-6 grid grid-cols-1 gap-4 border-t border-white/10 pt-5 sm:grid-cols-2">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                  Tools &amp; Components
                </div>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-zinc-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                  Demo &amp; Artifacts
                </div>
                {hasMediaLinks ? (
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {project.media.demoVideoUrl && (
                      <a
                        href={project.media.demoVideoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-zinc-100 hover:border-blue-400/40"
                      >
                        <Video className="h-3.5 w-3.5 text-blue-400" />
                        Demo Video
                        <ExternalLink className="h-3 w-3 text-zinc-400" />
                      </a>
                    )}
                    {project.media.githubUrl && (
                      <a
                        href={project.media.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-zinc-100 hover:border-blue-400/40"
                      >
                        <Github className="h-3.5 w-3.5 text-zinc-300" />
                        Repository
                        <ExternalLink className="h-3 w-3 text-zinc-400" />
                      </a>
                    )}
                    {project.media.screenshots?.length > 0 && (
                      <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-300">
                        <ImageIcon className="h-3.5 w-3.5 text-blue-400" />
                        {project.media.screenshots.length} screenshot(s) attached
                      </span>
                    )}
                  </div>
                ) : (
                  <p className="mt-2.5 text-xs leading-relaxed text-zinc-400">
                    {project.isConceptDemo
                      ? 'Conceptual architecture demo. Live workflow walkthrough available during a discovery call.'
                      : 'Live screen-share walkthrough and workflow review available on request during a consultation.'}
                  </p>
                )}
              </div>
            </div>

            {/* Footer CTA */}
            <div className="mt-6 flex flex-col items-stretch justify-between gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center">
              <p className="text-xs text-zinc-400">
                Want a similar workflow adapted for your tools and operations?
              </p>
              <button
                type="button"
                onClick={() => onInquire(project.title)}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition hover:brightness-110"
              >
                <span>Discuss This Workflow</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

