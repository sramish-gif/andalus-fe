'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const PEEK_VH = 22;

export const Hero = () => {
    const videoContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const update = () => {
            const el = videoContainerRef.current;
            if (!el) return;

            const scrollY = window.scrollY;
            const vh = window.innerHeight;

            // Phase 1: expand video from peek to full screen (scroll 0 → vh)
            const expandProgress = Math.min(1, Math.max(0, scrollY / vh));

            // Phase 2: contract video back (add insets) before next section overlaps
            // Kicks in during the latter portion of the scroll expansion space
            const contractStart = vh * 1.25;
            const contractEnd = vh * 1.85;
            const contractProgress = Math.min(1, Math.max(0, (scrollY - contractStart) / (contractEnd - contractStart)));

            const height = PEEK_VH + (100 - PEEK_VH) * expandProgress;
            const inset = 3 * (1 - expandProgress + contractProgress);
            const topRadius = 12 * (1 - expandProgress + contractProgress);
            const bottomRadius = 12 * contractProgress;

            el.style.height = `${height}vh`;
            el.style.left = `${inset}%`;
            el.style.right = `${inset}%`;
            el.style.borderTopLeftRadius = `${topRadius}px`;
            el.style.borderTopRightRadius = `${topRadius}px`;
            el.style.borderBottomLeftRadius = `${bottomRadius}px`;
            el.style.borderBottomRightRadius = `${bottomRadius}px`;
        };

        window.addEventListener('scroll', update, { passive: true });
        update();
        return () => window.removeEventListener('scroll', update);
    }, []);

    return (
        <>
            {/* Fixed video — expands from bottom peek to full screen on scroll */}
            <div
                ref={videoContainerRef}
                style={{
                    position: 'fixed',
                    bottom: 0,
                    left: '3%',
                    right: '3%',
                    height: `${PEEK_VH}vh`,
                    borderTopLeftRadius: '10px',
                    borderTopRightRadius: '10px',
                    overflow: 'hidden',
                    zIndex: 10,
                    willChange: 'height, left, right, border-radius',
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
                {/* Solid background covers only the text area (top portion) */}
                {/* Solid background — keeps video hidden */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: `${PEEK_VH}vh`,
                        backgroundColor: 'var(--background)',
                        zIndex: 20,
                    }}
                />
                {/* Pattern overlay — opacity controlled independently */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: `${PEEK_VH}vh`,
                        backgroundImage: 'url(/bg-pattern-2.svg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center top',
                        opacity: 0.45,
                        zIndex: 21,
                    }}
                />

                {/* Text content */}
                <div
                    className="container mx-auto px-6 md:px-12"
                    style={{
                        position: 'relative',
                        zIndex: 22,
                        height: `${100 - PEEK_VH}vh`,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingTop: '4rem',
                        gap: '3rem',
                    }}
                >
                    {/* Left column: label + heading */}
                    <div style={{ flex: '1 1 0', minWidth: 0 }}>
                        {/* Small label */}
                        <div className="mb-5 text-[10px] font-medium uppercase tracking-[0.25em] text-black/60">
                            Strategy&nbsp;&nbsp;·&nbsp;&nbsp;Branding&nbsp;&nbsp;·&nbsp;&nbsp;Design
                        </div>

                        {/* Heading */}
                        <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-serif font-normal leading-[1.2] text-black tracking-tight">
                            Investing in the<br />
                            Future
                            {' '}of{' '}
                            <span style={{ color: '#b1a26b' }}>Healthcare</span>
                        </h1>
                    </div>

                    {/* Right column: description + CTA */}
                    <div style={{ flex: '0 0 360px' }} className="flex flex-col gap-7">
                        <p className="text-base md:text-lg lg:text-xl text-black/75 leading-relaxed">
                            We are a healthcare investment fund focused on transforming care delivery and improving patient outcomes.
                        </p>

                        {/* CTA */}
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 self-start text-[14px] font-bold uppercase tracking-[0.30em] text-black border border-black/30 rounded-full px-10 py-5 hover:bg-[#b1a26b] hover:text-white hover:border-[#b1a26b] transition-all duration-300"
                        >
                            <span>Let&apos;s Chat</span>
                            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-current">
                                <ArrowRight className="h-2.5 w-2.5" />
                            </span>
                        </Link>
                    </div>
                </div>
                {/* Bottom PEEK_VH portion is transparent — the fixed video shows through here */}
            </section>

            {/* Scroll expansion space — scrolling through here drives the video from peek → full screen */}
            <div style={{ height: '100vh', position: 'relative', zIndex: 5 }} />
        </>
    );
};
