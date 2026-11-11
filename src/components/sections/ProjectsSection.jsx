import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import WorkflowDiagram from '../ui/WorkflowDiagram';
import ProjectModal from '../ui/ProjectModal';
import { projectCategories, projectsData } from '../../data/portfolioData';

export default function ProjectsSection({ onInquireProject }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  const handleInquireFromModal = (projectTitle) => {
    setActiveProject(null);
    onInquireProject(projectTitle);
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-b border-white/[0.06] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeader
            id="projects-heading"
            eyebrow="Featured Projects"
            title="Real Workflows. Practical Solutions."
            description="Built automations, financial models, and a conceptual e-commerce operations flow grounded in real business workflows."
          />

          {/* Category Filter */}
          <div
            className="flex shrink-0 flex-wrap gap-2"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {projectCategories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(category)}
                  className={`whitespace-nowrap rounded-xl border px-3 py-2 text-xs font-medium transition ${
                    isSelected
                      ? 'border-blue-500/50 bg-blue-500/15 text-blue-200'
                      : 'border-white/10 bg-white/[0.02] text-zinc-400 hover:border-white/20 hover:text-zinc-200'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ duration: 0.45, delay: (index % 2) * 0.08 }}
              className="group flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0c0e16]/90 p-6 transition-all duration-300 hover:border-blue-500/40 hover:bg-[#101320]"
            >
              <div>
                {/* Badges Row */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[11px] font-medium ${
                      project.isConceptDemo
                        ? 'border-indigo-400/35 bg-indigo-500/15 text-indigo-300'
                        : 'border-blue-400/30 bg-blue-500/10 text-blue-300'
                    }`}
                  >
                    {project.isConceptDemo && (
                      <Sparkles className="h-3 w-3" aria-hidden="true" />
                    )}
                    <span>{project.statusLabel}</span>
                  </span>

                  <span className="font-mono text-[11px] text-zinc-500">
                    {project.category}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-semibold tracking-tight text-zinc-50">
                  {project.title}
                </h3>

                {/* Problem & Solution */}
                <div className="mt-4 space-y-3">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-500">
                      Problem
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-blue-400">
                      Solution
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-200">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Compact Workflow Preview */}
                <div className="mt-5">
                  <WorkflowDiagram steps={project.workflowSteps} compact />
                </div>
              </div>

              {/* Footer: Tools + View Button */}
              <div className="mt-6 flex flex-col justify-between gap-4 border-t border-white/[0.06] pt-4 sm:flex-row sm:items-center">
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-zinc-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2 text-xs font-medium text-zinc-100 transition hover:border-blue-400/50 hover:bg-blue-500/15"
                >
                  <span>View Project</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-blue-400" aria-hidden="true" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Interactive Project Detail Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onInquire={(projectTitle) => handleInquireFromModal(`Workflow like: ${projectTitle}`)}
      />
    </section>
  );
}
