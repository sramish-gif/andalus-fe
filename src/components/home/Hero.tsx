'use client';

import { useEffect, useRef } from 'react';

export const Hero = () => {
    const videoContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const update = () => {
            const el = videoContainerRef.current;
            if (!el) return;

            const scrollY = window.scrollY;
            const vh = window.innerHeight;
            const vw = window.innerWidth;

            // Progress 0 → 1 over one viewport of scrolling
            const progress = Math.min(1, Math.max(0, scrollY / vh));

            // Start: wide block with margins, peeking from below hero
            const startW = vw * 0.94;
            const startH = vh * 0.45;
            const startLeft = (vw - startW) / 2;
            const startTop = vh - startH * 0.35;

            // End: full screen
            const endW = vw;
            const endH = vh;
            const endLeft = 0;
            const endTop = 0;

            // Interpolate
            const w = startW + (endW - startW) * progress;
            const h = startH + (endH - startH) * progress;
            const left = startLeft + (endLeft - startLeft) * progress;
            const top = startTop + (endTop - startTop) * progress;
            const radius = 16 * (1 - progress);

            el.style.width = `${w}px`;
            el.style.height = `${h}px`;
            el.style.left = `${left}px`;
            el.style.top = `${top}px`;
            el.style.borderRadius = `${radius}px`;
        };

        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update, { passive: true });
        update();
        return () => {
            window.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
        };
    }, []);

    return (
        <>
            {/* Fixed video — starts bottom, expands to full screen on scroll */}
            <div
                ref={videoContainerRef}
                style={{
                    position: 'fixed',
                    overflow: 'hidden',
                    zIndex: 25,
                    willChange: 'width, height, left, top, border-radius',
                }}
            >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    aria-hidden="true"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    src="/video/video.mp4"
                />
            </div>

            {/* Hero section — 100vh */}
            <section style={{ height: '100vh', position: 'relative' }}>
                {/* Full background */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'var(--background)',
                        zIndex: 20,
                    }}
                />
                {/* Pattern overlay */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'url(/bg-pattern-4.svg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center top',
                        opacity: 0.45,
                        zIndex: 21,
                    }}
                />

                {/* Content layer */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        zIndex: 26,
                        pointerEvents: 'none',
                    }}
                >
                    <div
                        className="container mx-auto px-6 md:px-12 pt-80 "
                        style={{
                            position: 'relative',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-center',
                            paddingBottom: '18vh',
                        }}
                    >
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                            {/* Left — label + heading */}
                            <div>
                                {/* Label */}
                                <span className="animated-border-pill inline-flex items-center gap-2 mb-6 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em]" style={{ fontFamily: '"Google Sans", sans-serif', color: '#B1A26B' }}>
                                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#B1A26B' }} />
                                    Healthcare Investment Platform
                                </span>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl leading-[1.05] tracking-[-0.05em] text-black" style={{ fontFamily: '"Google Sans", sans-serif', fontWeight: 600 }}>
                                    Investing in the<br />
                                    Future of{' '}
                                    <span style={{ fontFamily: '"Lora", serif', fontStyle: 'italic', fontWeight: 500, color: '#B1A26B' }}>Healthcare</span>
                                </h1>
                            </div>

                            {/* Right — paragraph */}
                            <div className="md:max-w-md md:pb-2">
                                <p className="text-black/60 leading-relaxed" style={{ fontFamily: '"Google Sans", sans-serif', fontSize: '24px' }}>
                                    We are a healthcare investment fund focused on transforming care delivery and improving patient outcomes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scroll expansion space */}
            <div style={{ height: '100vh', position: 'relative', zIndex: 5 }} />
        </>
    );
};
