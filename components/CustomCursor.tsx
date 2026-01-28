import React, { useEffect, useState, useRef } from 'react';

const CustomCursor: React.FC = () => {
    const dotRef = useRef<HTMLDivElement>(null);
    const outlineRef = useRef<HTMLDivElement>(null);

    const [isHovering, setIsHovering] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Mouse position hooks
    const mousePos = useRef({ x: 0, y: 0 });
    const outlinePos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        // Check if mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);

        const onMouseEnter = () => setIsVisible(true);
        const onMouseLeave = () => setIsVisible(false);
        const onMouseDown = () => setIsClicked(true);
        const onMouseUp = () => setIsClicked(false);

        const onMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
            if (!isVisible) setIsVisible(true);
        };

        // Hover detection for interactive elements
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('clickable') ||
                window.getComputedStyle(target).cursor === 'pointer'
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);
        document.body.addEventListener('mouseenter', onMouseEnter);
        document.body.addEventListener('mouseleave', onMouseLeave);

        // Animation loop for magnetic/lag effect
        let rafId: number;
        const animate = () => {
            // Smooth lag for the outline
            const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

            outlinePos.current.x = lerp(outlinePos.current.x, mousePos.current.x, 0.15);
            outlinePos.current.y = lerp(outlinePos.current.y, mousePos.current.y, 0.15);

            if (dotRef.current) {
                dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
            }

            if (outlineRef.current) {
                outlineRef.current.style.transform = `translate3d(${outlinePos.current.x}px, ${outlinePos.current.y}px, 0)`;
            }

            rafId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener('resize', checkMobile);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            document.body.removeEventListener('mouseenter', onMouseEnter);
            document.body.removeEventListener('mouseleave', onMouseLeave);
            cancelAnimationFrame(rafId);
        };
    }, [isVisible]);

    if (isMobile) return null;

    return (
        <>
            <style>{`
        body, a, button, .clickable {
          cursor: none !important;
        }
        @media (max-width: 768px) {
          body, a, button, .clickable {
            cursor: auto !important;
          }
        }
      `}</style>

            {/* Inner Dot */}
            <div
                ref={dotRef}
                className={`fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ marginLeft: '-3px', marginTop: '-3px' }}
            />

            {/* Outer Circle */}
            <div
                ref={outlineRef}
                className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border border-indigo-500/50 transition-all duration-300 ease-out flex items-center justify-center ${isVisible ? 'opacity-100' : 'opacity-0'
                    } ${isHovering ? 'w-12 h-12 bg-indigo-500/10 border-indigo-400 scale-125' : 'w-8 h-8'
                    } ${isClicked ? 'scale-75 brightness-150' : ''
                    }`}
                style={{
                    marginLeft: isHovering ? '-24px' : '-16px',
                    marginTop: isHovering ? '-24px' : '-16px',
                    boxShadow: isHovering ? '0 0 20px rgba(99, 102, 241, 0.3)' : 'none',
                    backdropFilter: 'blur(2px)'
                }}
            />
        </>
    );
};

export default CustomCursor;
