import type { Metadata } from 'next';
import { TeamGrid } from '@/components/team/TeamGrid';
import { AdvisorsGrid } from '@/components/team/AdvisorsGrid';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
    title: 'Team | Andalus Healthcare Investment',
    description:
        'Meet the diverse team of world-class professionals behind Andalus Healthcare Investment.',
};

export default function TeamPage() {
    return (
        <main className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
            {/* Header */}
            <div className="pt-40 pb-6 text-center" style={{ maxWidth: '1000px', margin: '0 auto', padding: '11rem 2rem 4rem' }}>
                <h1
                    className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.05] tracking-[-0.05em] font-medium mb-6 animate-fade-slide-up"
                    style={{ color: '#1a1a1a' }}
                >
                    Meet the team that makes<br />
                    the <span style={{ fontFamily: '"Lora", serif', fontStyle: 'italic', color: '#B1A26B' }}>magic</span> happen
                </h1>
                <p
                    className="text-base md:text-lg animate-fade-slide-up animate-delay-300"
                    style={{ color: 'rgba(0,0,0,0.5)' }}
                >
                    Meet our diverse team of world-class creators, strategists, and problem solvers.
                </p>
            </div>

            {/* Team grid */}
            <TeamGrid />

            {/* Advisors */}
            <AdvisorsGrid />

            {/* Footer */}
            <Footer />
        </main>
    );
}
