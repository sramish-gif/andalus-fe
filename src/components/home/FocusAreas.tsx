'use client';

import React, { useEffect, useRef } from 'react';

const areas = [
    {
        number: '01.',
        title: 'Digital Health Infrastructure',
        description: 'Backing platforms that modernize clinical workflows, interoperability, and data infrastructure across health systems.',
        bg: '#E8E5DC',
        textColor: '#111827',
        mutedColor: '#4B5563',
        icon: (
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" stroke="#111827" strokeWidth="1.2">
                <circle cx="36" cy="36" r="4" />
                {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => {
                    const rad = (deg * Math.PI) / 180;
                    return (
                        <line
                            key={i}
                            x1={Math.round((36 + 6 * Math.cos(rad)) * 100) / 100}
                            y1={Math.round((36 + 6 * Math.sin(rad)) * 100) / 100}
                            x2={Math.round((36 + 32 * Math.cos(rad)) * 100) / 100}
                            y2={Math.round((36 + 32 * Math.sin(rad)) * 100) / 100}
                        />
                    );
                })}
            </svg>
        ),
    },
    {
        number: '02.',
        title: 'Life Sciences & Diagnostics',
        description: 'Supporting early-stage biotech and diagnostics companies bringing precision medicine into real-world clinical settings.',
        bg: '#b1a26b',
        textColor: '#F9FAFB',
        mutedColor: 'rgba(255,255,255,0.65)',
        icon: (
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" stroke="#F9FAFB" strokeWidth="1.2">
                {[34, 26, 18, 10].map((r, i) => (
                    <polygon
                        key={i}
                        points={[0, 1, 2, 3, 4, 5].map((j) => {
                            const a = (j * 60 - 90) * (Math.PI / 180);
                            return `${Math.round((36 + r * Math.cos(a)) * 100) / 100},${Math.round((36 + r * Math.sin(a)) * 100) / 100}`;
                        }).join(' ')}
                    />
                ))}
            </svg>
        ),
    },
    {
        number: '03.',
        title: 'Care Delivery Innovation',
        description: 'Investing in novel care models — from value-based primary care networks to tech-enabled specialty clinics.',
        bg: '#F0EEE8',
        textColor: '#111827',
        mutedColor: '#4B5563',
        icon: (
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" stroke="#111827" strokeWidth="1.2">
                <polygon points="36,8 60,50 12,50" />
                <polygon points="36,20 52,44 20,44" />
                <line x1="36" y1="8" x2="36" y2="50" />
                <line x1="12" y1="50" x2="52" y2="44" />
                <line x1="60" y1="50" x2="20" y2="44" />
                <line x1="36" y1="20" x2="12" y2="50" />
                <line x1="36" y1="20" x2="60" y2="50" />
            </svg>
        ),
    },
    {
        number: '04.',
        title: 'Health Equity & Access',
        description: 'Funding solutions that expand access to quality care in underserved communities and address systemic gaps in the healthcare system.',
        bg: '#b1a26b',
        textColor: '#F9FAFB',
        mutedColor: 'rgba(255,255,255,0.65)',
        icon: (
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" stroke="#F9FAFB" strokeWidth="1.2">
                <circle cx="36" cy="28" r="12" />
                <path d="M14 60c0-12.15 9.85-22 22-22s22 9.85 22 22" />
                <line x1="36" y1="8" x2="36" y2="16" />
                <line x1="36" y1="40" x2="36" y2="48" />
                <line x1="16" y1="28" x2="24" y2="28" />
                <line x1="48" y1="28" x2="56" y2="28" />
            </svg>
        ),
    },
];

export const FocusAreas = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const update = () => {
            const section = sectionRef.current;
            if (!section) return;

            const rect = section.getBoundingClientRect();
            const scrolled = -rect.top;
            const vh = window.innerHeight;
            const totalScroll = section.offsetHeight - vh;

            // Pre-compute each card's slide-in progress
            const progresses = areas.map((_, i) => {
                const cardStart = (i / areas.length) * totalScroll;
                const cardEnd = cardStart + totalScroll / areas.length * 0.65;
                return Math.max(0, Math.min(1, (scrolled - cardStart) / (cardEnd - cardStart)));
            });

            cardRefs.current.forEach((card, i) => {
                if (!card) return;

                const progress = progresses[i];

                // Slide in from the right
                const slideX = (1 - progress) * 110;

                // When the next card arrives, push this card left & scale it down
                const nextProgress = i < areas.length - 1 ? progresses[i + 1] : 0;
                const pushX = nextProgress * -3;
                const scale = 1 - nextProgress * 0.04;

                card.style.transform = `translateX(${slideX + pushX}%) scale(${scale})`;
                card.style.opacity = `${progress}`;
                const blur = (1 - progress) * 16;
                card.style.filter = blur > 0.1 ? `blur(${blur}px)` : 'none';
            });
        };

        window.addEventListener('scroll', update, { passive: true });
        update();
        return () => window.removeEventListener('scroll', update);
    }, []);

    return (
        <section
            ref={sectionRef}
            style={{
                position: 'relative',
                zIndex: 30,
                backgroundColor: 'var(--background)',
                height: `${100 + areas.length * 55}vh`,
            }}
        >
            <div
                style={{
                    position: 'sticky',
                    top: 0,
                    height: '100vh',
                    display: 'flex',
                    maxWidth: '1600px',
                    margin: '0 auto',
                    padding: '0 2rem',
                    gap: '4rem',
                    alignItems: 'center',
                    overflow: 'hidden',
                }}
            >
                {/* Left: heading */}
                <div style={{ flex: '0 0 35%' }}>
                    <p className="text-sm font-medium uppercase tracking-widest text-brand-gray mb-4">
                        What We Back
                    </p>
                    <h2 className="text-5xl md:text-6xl font-serif font-normal leading-tight text-foreground">
                        Our Focus<br />Areas
                    </h2>
                </div>


                {/* Right: cards that slide in from the right */}
                <div style={{ flex: 1, position: 'relative', height: '60vh' }}>
                    {areas.map((area, i) => (
                        <div
                            key={area.number}
                            ref={(el) => { cardRefs.current[i] = el; }}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                transform: 'translateX(110%)',
                                zIndex: i + 1,
                                backgroundColor: area.bg,
                                borderRadius: '20px',
                                padding: '2.5rem',
                                display: 'flex',
                                flexDirection: 'column',
                                willChange: 'transform',
                            }}
                        >
                            {/* Icon */}
                            <div className="mb-2">{area.icon}</div>

                            {/* Number */}
                            <span
                                className="text-sm font-mono tracking-widest"
                                style={{
                                    color: area.mutedColor,
                                    position: 'absolute',
                                    top: '2.5rem',
                                    right: '2.5rem',
                                }}
                            >
                                {area.number}
                            </span>

                            {/* Text — pinned to bottom */}
                            <div className="mt-auto">
                                <h3
                                    className="text-3xl md:text-4xl font-serif font-normal mb-4 leading-snug"
                                    style={{ color: area.textColor }}
                                >
                                    {area.title}
                                </h3>
                                <p
                                    className="text-base md:text-lg leading-relaxed max-w-sm"
                                    style={{ color: area.mutedColor }}
                                >
                                    {area.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
