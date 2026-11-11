import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Linkedin,
  MessageSquare,
  Send,
  Copy,
  Check,
  AlertCircle,
  ExternalLink,
  Loader2,
  Info,
} from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { siteConfig } from '../../config/siteConfig';
import { automationTopics } from '../../data/portfolioData';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactSection({ preselectedTopic }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    topic: automationTopics[0],
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitState, setSubmitState] = useState('idle'); // idle | submitting | sent | unconfigured_ready | error
  const [statusMessage, setStatusMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedInquiry, setCopiedInquiry] = useState(false);

  useEffect(() => {
    if (!preselectedTopic) return;
    setFormData((prev) => ({
      ...prev,
      topic: preselectedTopic,
    }));
  }, [preselectedTopic]);

  const validateForm = () => {
    const nextErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      nextErrors.name = 'Please enter your name.';
    }
    if (!formData.email.trim() || !EMAIL_REGEX.test(formData.email.trim())) {
      nextErrors.email = 'Please enter a valid work email address.';
    }
    if (!formData.topic.trim()) {
      nextErrors.topic = 'Please choose what you want to automate.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      nextErrors.message =
        'Please share a short description of your manual workflow (at least 15 characters).';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const buildInquirySummary = () => {
    return [
      `Name: ${formData.name.trim()}`,
      `Work Email: ${formData.email.trim()}`,
      `Company: ${formData.company.trim() || 'Not specified'}`,
      `Automation Focus: ${formData.topic}`,
      '',
      'Workflow Details:',
      formData.message.trim(),
    ].join('\n');
  };

  const buildMailtoHref = () => {
    const subject = encodeURIComponent(
      `Automation Inquiry: ${formData.topic} (${formData.company.trim() || formData.name.trim()})`
    );
    const body = encodeURIComponent(buildInquirySummary());
    return `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (submitState === 'error' || submitState === 'unconfigured_ready') {
      setSubmitState('idle');
      setStatusMessage('');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    // If no backend form/webhook service is configured, DO NOT pretend delivery succeeded.
    if (!siteConfig.formConfigured) {
      setSubmitState('unconfigured_ready');
      setStatusMessage(
        'Your inquiry is validated and ready to send. Because a direct form webhook is not yet configured on this static deployment, please launch your email client below or copy the formatted inquiry to send directly.'
      );
      return;
    }

    setSubmitState('submitting');
    setStatusMessage('');

    try {
      const response = await fetch(siteConfig.formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          company: formData.company.trim(),
          automationTopic: formData.topic,
          message: formData.message.trim(),
          source: 'krishna-agarwal-portfolio',
        }),
      });

      if (!response.ok) {
        throw new Error(`Submission failed with status ${response.status}`);
      }

      setSubmitState('sent');
      setStatusMessage(
        'Thank you — your automation inquiry was delivered. Krishna will review your details and follow up shortly.'
      );
      setFormData({
        name: '',
        email: '',
        company: '',
        topic: automationTopics[0],
        message: '',
      });
    } catch (error) {
      setSubmitState('error');
      setStatusMessage(
        `Could not submit directly right now (${error.message}). You can send your pre-filled inquiry via email directly below.`
      );
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Clipboard API unavailable
    }
  };

  const handleCopySummary = async () => {
    try {
      await navigator.clipboard.writeText(buildInquirySummary());
      setCopiedInquiry(true);
      setTimeout(() => setCopiedInquiry(false), 2000);
    } catch {
      // Clipboard API unavailable
    }
  };

  // Include preselected custom topic if it's not already in the default list
  const topicOptions = automationTopics.includes(formData.topic)
    ? automationTopics
    : [formData.topic, ...automationTopics];

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="contact-heading"
          eyebrow="Contact"
          title="Let's Make Your Business Work Smarter."
          description="Have a repetitive task that consumes too much time? Tell me about it. Let's explore how automation can help."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Column: Direct Channels */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.45 }}
            className="space-y-4 lg:col-span-5"
          >
            {/* Email Card */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0c0e16]/85 p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-400">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                      Email
                    </div>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-sm font-medium text-zinc-100 hover:text-blue-300"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-xs text-zinc-300 transition hover:border-white/20 hover:text-white"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-white/[0.08] bg-[#0c0e16]/85 p-5 transition hover:border-blue-500/40 hover:bg-[#101320]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-400">
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                    LinkedIn
                  </div>
                  <div className="text-sm font-medium text-zinc-100 group-hover:text-blue-300">
                    Krishna Agarwal
                  </div>
                </div>
              </div>
              <ExternalLink
                className="h-4 w-4 text-zinc-500 transition group-hover:text-blue-400"
                aria-hidden="true"
              />
            </a>

            {/* WhatsApp Configurable Placeholder Card */}
            {siteConfig.whatsappConfigured ? (
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-white/[0.08] bg-[#0c0e16]/85 p-5 transition hover:border-emerald-500/40 hover:bg-[#101320]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                    <MessageSquare className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                      WhatsApp
                    </div>
                    <div className="text-sm font-medium text-zinc-100 group-hover:text-emerald-300">
                      Message on WhatsApp
                    </div>
                  </div>
                </div>
                <ExternalLink
                  className="h-4 w-4 text-zinc-500 transition group-hover:text-emerald-400"
                  aria-hidden="true"
                />
              </a>
            ) : (
              <div className="rounded-2xl border border-dashed border-white/15 bg-[#0a0c13]/70 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-400">
                    <MessageSquare className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                      WhatsApp · Pending Confirmation
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                      Direct WhatsApp link will be enabled once the business number is confirmed.
                      Please use email, LinkedIn, or the inquiry form in the meantime.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* What happens next */}
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5">
              <div className="font-mono text-[11px] uppercase tracking-wider text-blue-400">
                What Happens Next
              </div>
              <ol className="mt-3 space-y-2 text-xs leading-relaxed text-zinc-400">
                <li>1. Share the repetitive workflow or manual steps slowing your team down.</li>
                <li>2. We schedule a brief discovery chat to map tools and requirements.</li>
                <li>3. You receive a clear workflow plan and scoped quote before any build starts.</li>
              </ol>
            </div>
          </motion.div>

          {/* Right Column: Validated Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-white/[0.08] bg-[#0c0e16]/90 p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-medium text-zinc-300"
                  >
                    Name <span className="text-blue-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Your full name"
                    className={`mt-2 w-full rounded-xl border bg-[#070910] px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 transition focus:outline-none ${
                      errors.name
                        ? 'border-rose-500/60 focus:border-rose-400'
                        : 'border-white/10 focus:border-blue-500/60'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-rose-400">{errors.name}</p>
                  )}
                </div>

                {/* Work Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-medium text-zinc-300"
                  >
                    Work email <span className="text-blue-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="you@company.com"
                    className={`mt-2 w-full rounded-xl border bg-[#070910] px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 transition focus:outline-none ${
                      errors.email
                        ? 'border-rose-500/60 focus:border-rose-400'
                        : 'border-white/10 focus:border-blue-500/60'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-rose-400">{errors.email}</p>
                  )}
                </div>

                {/* Company Name */}
                <div>
                  <label
                    htmlFor="contact-company"
                    className="block text-xs font-medium text-zinc-300"
                  >
                    Company name
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    value={formData.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                    placeholder="Business or agency name"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#070910] px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 transition focus:border-blue-500/60 focus:outline-none"
                  />
                </div>

                {/* What do you want to automate */}
                <div>
                  <label
                    htmlFor="contact-topic"
                    className="block text-xs font-medium text-zinc-300"
                  >
                    What do you want to automate? <span className="text-blue-400">*</span>
                  </label>
                  <select
                    id="contact-topic"
                    name="topic"
                    value={formData.topic}
                    onChange={(e) => handleChange('topic', e.target.value)}
                    className="mt-2 w-full truncate rounded-xl border border-white/10 bg-[#070910] px-4 py-3 pr-9 text-sm text-zinc-100 transition focus:border-blue-500/60 focus:outline-none"
                  >
                    {topicOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.topic && (
                    <p className="mt-1.5 text-xs text-rose-400">{errors.topic}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="mt-5">
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-medium text-zinc-300"
                >
                  Message <span className="text-blue-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Briefly describe the manual steps, the tools you use (e.g. Google Sheets, Gmail, Tally, Shopify), and what you'd like automated."
                  className={`mt-2 w-full rounded-xl border bg-[#070910] px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 transition focus:outline-none ${
                    errors.message
                      ? 'border-rose-500/60 focus:border-rose-400'
                      : 'border-white/10 focus:border-blue-500/60'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-rose-400">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={submitState === 'submitting'}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitState === 'submitting' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                      <span>Sending Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" aria-hidden="true" />
                      <span>
                        {siteConfig.formConfigured
                          ? 'Send Automation Inquiry'
                          : 'Prepare & Send Inquiry'}
                      </span>
                    </>
                  )}
                </button>

                <span className="text-xs text-zinc-500">
                  {siteConfig.formConfigured
                    ? 'Direct webhook submission active'
                    : 'Validates & prepares inquiry for direct email'}
                </span>
              </div>

              {/* Feedback Banners */}
              {submitState === 'sent' && (
                <div
                  role="status"
                  className="mt-5 flex items-start gap-3 rounded-xl border border-emerald-500/35 bg-emerald-500/10 p-4 text-sm text-emerald-200"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <p>{statusMessage}</p>
                </div>
              )}

              {(submitState === 'unconfigured_ready' || submitState === 'error') && (
                <div
                  role="status"
                  className={`mt-5 rounded-xl border p-4 ${
                    submitState === 'error'
                      ? 'border-rose-500/35 bg-rose-500/10 text-rose-100'
                      : 'border-blue-500/35 bg-blue-500/10 text-zinc-100'
                  }`}
                >
                  <div className="flex items-start gap-3 text-xs leading-relaxed">
                    {submitState === 'error' ? (
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />
                    ) : (
                      <Info className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                    )}
                    <p>{statusMessage}</p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2.5">
                    <a
                      href={buildMailtoHref()}
                      className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-3.5 py-2 text-xs font-medium text-white transition hover:bg-blue-400"
                    >
                      <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Open Prefilled Email</span>
                      <ExternalLink className="h-3 w-3" aria-hidden="true" />
                    </a>

                    <button
                      type="button"
                      onClick={handleCopySummary}
                      className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.06] px-3.5 py-2 text-xs font-medium text-zinc-100 transition hover:bg-white/[0.12]"
                    >
                      {copiedInquiry ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-400" />
                          <span>Summary Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>Copy Inquiry Summary</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
