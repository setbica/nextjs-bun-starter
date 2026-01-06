import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'dark';
  hover?: boolean;
}

export function GlassCard({
  children,
  className,
  variant = 'dark',
  hover = false,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        'rounded-[16px]',
        variant === 'light' ? 'glass-light shadow-glass' : 'glass-dark shadow-glass',
        hover && 'hover-lift cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  );
}
