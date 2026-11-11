import { motion } from 'framer-motion';

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  id,
}) {
  const centered = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-blue-400 ${
            centered ? 'mx-auto' : ''
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
          <span>{eyebrow}</span>
        </div>
      )}
      <h2
        id={id}
        className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-[17px]">
          {description}
        </p>
      )}
    </motion.div>
  );
}

