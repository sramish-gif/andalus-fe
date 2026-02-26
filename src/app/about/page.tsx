import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'About | Andalus Healthcare Investment',
    description:
        'Learn about Andalus — our mission, values, and the team behind one of the most dedicated healthcare investment funds.',
};

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-32 px-6 pb-24">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-5xl md:text-7xl font-serif font-medium mb-12 leading-tight">
                    About <br />
                    <span className="italic">Andalus</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg text-brand-gray leading-relaxed">
                    <div>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h2>
                        <p>
                            Andalus is a healthcare investment platform dedicated to backing the innovations that will define the next century of care.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">Our Philosophy</h2>
                        <p>
                            Our mission is to bridge the gap between financial capital and clinical excellence, ensuring that the most promising healthcare solutions reach the patients who need them most.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">Why Healthcare?</h2>
                        <p>
                            Healthcare is the largest global sector by necessity. We believe investing in its transformation is not just financially sound — it is a moral imperative.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">Our Network</h2>
                        <p>
                            We partner with leading clinical institutions, health systems, and research universities to source, diligence, and support every portfolio company.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
