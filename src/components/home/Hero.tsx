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

            const progress = Math.min(1, window.scrollY / window.innerHeight);

            const height = PEEK_VH + (100 - PEEK_VH) * progress;
            const inset = 3 * (1 - progress);
            const radius = 12 * (1 - progress);

            el.style.height = `${height}vh`;
            el.style.left = `${inset}%`;
            el.style.right = `${inset}%`;
            el.style.borderTopLeftRadius = `${radius}px`;
            el.style.borderTopRightRadius = `${radius}px`;
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
                    borderTopLeftRadius: '12px',
                    borderTopRightRadius: '12px',
                    overflow: 'hidden',
                    zIndex: 10,
                    willChange: 'height, left, right',
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
                    className="container mx-auto px-6"
                    style={{
                        position: 'relative',
                        zIndex: 22,
                        height: `${100 - PEEK_VH}vh`,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        paddingTop: '7rem',
                    }}
                >
                    {/* Small label */}
                    <div className="flex items-center gap-3 mb-8 text-[11px] font-medium uppercase tracking-[0.2em] text-brand-gray">
                        <span>→</span>
                        <span>Healthcare Investment</span>
                        <span>·</span>
                        <span>Transforming Care Delivery</span>
                        <span>←</span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-semibold leading-[1.05] text-foreground tracking-tight max-w-5xl">
                        Investing in the{' '}
                        <span className="text-brand-lime">future</span>
                        <br />of healthcare.
                    </h1>

                    {/* Subtext */}
                    <p className="mt-6 text-lg md:text-xl text-brand-gray leading-relaxed max-w-xl">
                        We are a healthcare investment fund focused on transforming care delivery and improving patient outcomes.
                    </p>

                    {/* CTA */}
                    <div className="mt-10">
                        <Link
                            href="/core"
                            className="inline-flex items-center gap-3 px-6 py-3 text-sm font-semibold border border-black/20 rounded-sm bg-transparent hover:bg-brand-lime hover:border-brand-lime transition-all duration-300"
                        >
                            <ArrowRight className="h-4 w-4" />
                            <span>Explore our Strategy</span>
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
