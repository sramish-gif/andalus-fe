'use client';

import { useEffect, useRef } from 'react';
const areas = [
    {
        number: '01',
        title: 'Digital Health Infrastructure',
        description: 'Backing platforms that modernize clinical workflows and data infrastructure across health systems.',
        image: '/portfolio-1.jpeg',
    },
    {
        number: '02',
        title: 'Life Sciences & Diagnostics',
        description: 'Supporting biotech and diagnostics companies bringing precision medicine to real-world clinical settings.',
        image: '/portfolio-2.jpeg',
    },
    {
        number: '03',
        title: 'Care Delivery Innovation',
        description: 'Investing in novel care models from value-based primary care networks to tech-enabled specialty clinics.',
        image: '/portfolio-1.jpeg',
    },
    {
        number: '04',
        title: 'Health Data & Analytics',
        description: 'Enabling data-driven decision making through advanced analytics platforms for healthcare providers and payers.',
        image: '/portfolio-2.jpeg',
    },
];

export const FocusAreas = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const update = () => {
            const section = sectionRef.current;
            if (!section) return;

            const scrolled = -section.getBoundingClientRect().top;
            const vh = window.innerHeight;
            const step = vh * 0.5;

            cardRefs.current.forEach((card, i) => {
                if (!card) return;

                const cardStart = i * step;
                const progress = Math.max(0, Math.min(1, (scrolled - cardStart) / (step * 0.6)));

                const translateX = (1 - progress) * 80;
                card.style.transform = `translateX(${translateX}%)`;
                card.style.opacity = `${progress}`;
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
                backgroundColor: '#ffffff',
                height: `${100 + areas.length * 50}vh`,
            }}
        >
            <div
                style={{
                    position: 'sticky',
                    top: 0,
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    maxWidth: '1600px',
                    margin: '0 auto',
                    padding: '0 2rem',
                }}
            >
                {/* Heading */}
                <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
                    <h2 className="text-5xl md:text-6xl font-serif font-semibold leading-tight text-foreground">
                        Our <span style={{ fontFamily: '"Lora", serif', fontStyle: 'italic' }}>Focus</span> Areas
                    </h2>
                </div>

                {/* Cards row */}
                <div
                    style={{
                        display: 'flex',
                        gap: '1.25rem',
                        overflow: 'hidden',
                    }}
                >
                    {areas.map((area, i) => (
                        <div
                            key={area.title}
                            ref={(el) => { cardRefs.current[i] = el; }}
                            style={{
                                flex: '1 1 0',
                                minWidth: 0,
                                opacity: 0,
                                transform: 'translateX(80%)',
                                willChange: 'transform, opacity',
                            }}
                        >
                            <div
                                style={{
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    height: '480px',
                                    position: 'relative',
                                }}
                            >
                                {/* Full background image */}
                                <img
                                    src={area.image}
                                    alt={area.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                />

                                {/* Progressive blur + dark overlay at bottom */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        height: '50%',
                                        backdropFilter: 'blur(12px)',
                                        WebkitBackdropFilter: 'blur(40px)',
                                        maskImage: 'linear-gradient(to top, black 40%, transparent 100%)',
                                        WebkitMaskImage: 'linear-gradient(to top, black 40%, transparent 100%)',
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
                                    }}
                                />
                                <div
                                    style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        padding: '2rem 1.5rem 1.5rem',
                                    }}
                                >
                                    <h3
                                        className="text-xl md:text-2xl font-serif font-bold leading-snug"
                                        style={{ color: '#ffffff', marginBottom: '0.35rem' }}
                                    >
                                        {area.title}
                                    </h3>
                                    <p
                                        className="text-xs leading-relaxed"
                                        style={{ color: 'rgba(255,255,255,0.6)' }}
                                    >
                                        {area.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
