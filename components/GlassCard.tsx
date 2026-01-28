import React from 'react';

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = "", delay = 0 }) => {
    return (
        <div
            className={`relative group p-8 rounded-[2rem] bg-slate-900/40 backdrop-blur-xl border-[0.5px] border-white/5 transition-all duration-700 hover:-translate-y-2 hover:bg-slate-900/60 hover:border-white/10 overflow-hidden ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {/* Subtle Internal Gradient Tint */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 opacity-50"></div>

            {/* Slow Diagonal Shine/Sweep - Always Visible */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent -translate-x-full animate-card-shine"></div>
            </div>

            {/* Hover Background Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10"></div>

            {/* Content */}
            <div className="relative z-10 w-full">
                {children}
            </div>
        </div>
    );
};

export default GlassCard;
