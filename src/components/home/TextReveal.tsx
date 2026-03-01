'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const TEXT =
    "We're Andalus, a forward-thinking investment firm crafting the future of healthcare across strategy, innovation, and a wide range of clinical systems. We lead investments at the intersection of technology and care delivery, exploring digital health, diagnostics, and transformative patient experiences.";

const words = TEXT.split(' ');

export const TextReveal = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

    useEffect(() => {
        const update = () => {
            const section = sectionRef.current;
            if (!section) return;

            const rect = section.getBoundingClientRect();
            const sectionHeight = section.offsetHeight - window.innerHeight;
            const scrolled = -rect.top;
            const progress = Math.max(0, Math.min(1, scrolled / sectionHeight));

            const filledCount = Math.floor(progress * words.length);

            wordRefs.current.forEach((span, i) => {
                if (!span) return;
                span.style.color = i < filledCount ? '#000000' : '#d1d5db';
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
                height: '200vh',
            }}
        >
            <div
                style={{
                    position: 'sticky',
                    top: 0,
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div style={{ maxWidth: '1600px', padding: '0 2rem', margin: '0 auto' }}>
                    {/* Tag */}
                    <p className="text-sm font-medium uppercase tracking-widest text-brand-gray mb-8">
                        About Andalus
                    </p>

                    {/* Text */}
                    <p
                        className="text-4xl md:text-5xl lg:text-[4.5rem] font-serif font-normal leading-[1.2] tracking-tight"
                        style={{ textAlign: 'left' }}
                    >
                        {words.map((word, i) => (
                            <span
                                key={i}
                                ref={(el) => { wordRefs.current[i] = el; }}
                                style={{
                                    color: '#d8dce4',
                                    transition: 'color 0.15s ease',
                                }}
                            >
                                {word}{i < words.length - 1 ? ' ' : ''}
                            </span>
                        ))}
                    </p>

                    {/* CTA */}
                    <div className="flex justify-center mt-20">
                    <Link
                        href="/about"
                        className="inline-flex items-center gap-2 text-[18px] font-bold uppercase tracking-[0.30em] text-black border border-black/30 rounded-full px-15 py-8 hover:bg-[#b1a26b] hover:text-white hover:border-[#b1a26b] transition-all duration-400"
                    >
                        <span>Read More</span>
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-current">
                            <ArrowRight className="h-2.5 w-2.5" />
                        </span>
                    </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
