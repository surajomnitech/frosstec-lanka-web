import type { ReactNode } from 'react';

type SectionPillProps = {
    children: ReactNode;
    variant?: 'light' | 'dark';
    className?: string;
    withMargin?: boolean;
};

type StatusPillProps = {
    children: ReactNode;
    className?: string;
};

export function SectionPill({
    children,
    variant = 'light',
    className = '',
    withMargin = true,
}: SectionPillProps) {
    const isDark = variant === 'dark';

    return (
        <div
            className={`inline-flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-xl ${withMargin ? 'mb-7' : ''
                } ${isDark
                    ? 'bg-[#04142D]/95 border border-accent/40 shadow-[0_8px_30px_rgba(0,0,0,0.40)]'
                    : 'bg-white border border-primary/20 shadow-[0_8px_26px_rgba(39,58,115,0.12)]'
                } ${className}`}
        >
            <span
                className={`w-2.5 h-2.5 rounded-full bg-accent ${isDark
                        ? 'shadow-[0_0_12px_rgba(191,66,21,0.90)]'
                        : 'shadow-[0_0_10px_rgba(191,66,21,0.45)]'
                    }`}
            />

            <span
                className={`font-extrabold text-[11px] sm:text-xs uppercase tracking-[0.2em] ${isDark ? 'text-accent' : 'text-primary-dark'
                    }`}
            >
                {children}
            </span>
        </div>
    );
}

export function StatusPill({ children, className = '' }: StatusPillProps) {
    return (
        <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#04142D]/95 border border-accent/40 shadow-[0_8px_24px_rgba(0,0,0,0.28)] ${className}`}
        >
            <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(191,66,21,0.9)]" />

            <span className="text-[0.65rem] font-extrabold text-accent uppercase tracking-[0.18em]">
                {children}
            </span>
        </span>
    );
}