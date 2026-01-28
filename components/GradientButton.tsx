import React from 'react';
import { ArrowRight } from 'lucide-react';

interface GradientButtonProps {
    text: string;
    href: string;
    icon?: React.ReactNode;
}

const GradientButton: React.FC<GradientButtonProps> = ({ text, href, icon }) => {
    return (
        <a
            href={href}
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 active:scale-95 overflow-hidden rounded-xl"
        >
            {/* The Moving Gradient Layer */}
            <div className="absolute inset-0 w-[400%] h-full bg-gradient-to-r from-cyan-500 via-violet-500 via-blue-500 to-cyan-500 animate-moving-gradient group-hover:duration-[2s]"></div>

            {/* Soft Glow Layer */}
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Content Container */}
            <span className="relative flex items-center gap-2 z-10">
                {text}
                {icon || <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
            </span>

            {/* Animated Shadow/Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-violet-500 to-blue-500 rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300 -z-10"></div>
        </a>
    );
};

export default GradientButton;
