import { ArrowRight } from 'lucide-react';

export default function WorkflowDiagram({
  steps,
  compact = true,
  activeIndex = null,
  onSelectStep = null,
}) {
  if (!steps || steps.length === 0) return null;

  if (compact) {
    return (
      <div
        className="rounded-xl border border-white/[0.07] bg-[#070910] p-3"
        aria-label="Workflow architecture preview"
      >
        <div className="mb-2 flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-500">
            Workflow Flow
          </span>
          <span className="font-mono text-[10px] text-blue-400/80">
            {steps.length} stages
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          {steps.map((step, index) => (
            <div key={step.label} className="flex items-center gap-1.5">
              <div className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-[11px] font-medium text-zinc-200">
                {step.label}
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="h-3 w-3 shrink-0 text-blue-400/70" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => {
          const isActive = activeIndex === index;
          const InteractiveTag = onSelectStep ? 'button' : 'div';
          return (
            <InteractiveTag
              key={step.label}
              type={onSelectStep ? 'button' : undefined}
              onClick={onSelectStep ? () => onSelectStep(index) : undefined}
              className={`group relative flex flex-col justify-between rounded-xl border p-3.5 text-left transition-all ${
                isActive
                  ? 'border-blue-500/60 bg-blue-500/10 shadow-[0_0_24px_-8px_rgba(59,130,246,0.4)]'
                  : 'border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`font-mono text-[10px] uppercase tracking-wider ${
                    isActive ? 'text-blue-300' : 'text-zinc-500'
                  }`}
                >
                  Step 0{index + 1}
                </span>
                {index < steps.length - 1 && (
                  <ArrowRight
                    className={`hidden h-3.5 w-3.5 lg:block ${
                      isActive ? 'text-blue-400' : 'text-zinc-600'
                    }`}
                    aria-hidden="true"
                  />
                )}
              </div>
              <div className="mt-2 text-sm font-medium text-zinc-100">{step.label}</div>
              <p className="mt-1 text-xs leading-relaxed text-zinc-400">{step.detail}</p>
            </InteractiveTag>
          );
        })}
      </div>
    </div>
  );
}

