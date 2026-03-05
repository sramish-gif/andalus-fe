import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const CTA = () => {
    return (
        <section
            style={{
                position: 'relative',
                zIndex: 36,
                backgroundColor: '#F5F1E6',
                padding: '8rem 2rem',
                textAlign: 'center',
                overflow: 'hidden',
            }}
        >
            {/* Pattern overlay */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'url(/bg-pattern-4.svg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center top',
                    opacity: 0.18,
                    pointerEvents: 'none',
                }}
            />
            <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
                <h2
                    className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-[-0.05em] font-medium leading-tight"
                    style={{ color: '#1a1a1a', marginBottom: '1.5rem' }}
                >
                    Ready To <br />
                    <span style={{ fontFamily: '"Lora", serif', fontStyle: 'italic' }}>Partner</span> With Us?
                </h2>
                <p
                    className="text-base md:text-lg"
                    style={{ color: 'rgba(0,0,0,0.5)', marginBottom: '2.5rem', fontStyle: 'normal' }}
                >
                    Get in touch to explore how we can help your<br />
                    business reach its full potential.
                </p>
                <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[18px] font-bold uppercase tracking-[0.30em] text-black bg-white border border-black/30 rounded-full px-15 py-8 hover:bg-[#b1a26b] hover:text-white hover:border-[#b1a26b] transition-all duration-400"
                >
                    <span>Get In Touch</span>
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-current">
                        <ArrowRight className="h-2.5 w-2.5" />
                    </span>
                </Link>
            </div>
        </section>
    );
};
