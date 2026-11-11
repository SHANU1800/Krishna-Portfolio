import {
  FileText,
  Workflow,
  Table,
  Mail,
  Clock,
  ShieldCheck,
  TrendingUp,
  Users,
  Calculator,
  ShoppingBag,
  MailCheck,
  BarChart3,
  Bot,
  Sparkles,
} from 'lucide-react';

const ICON_MAP = {
  FileText,
  Workflow,
  Table,
  Mail,
  Clock,
  ShieldCheck,
  TrendingUp,
  Users,
  Calculator,
  ShoppingBag,
  MailCheck,
  BarChart3,
  Bot,
  Sparkles,
};

export function DynamicIcon({ name, className = 'w-5 h-5' }) {
  const IconComponent = ICON_MAP[name] || Workflow;
  return <IconComponent className={className} aria-hidden="true" />;
}

