import React from 'react';

const strategies = [
    {
        title: 'Digital Health Infrastructure',
        description:
            'Backing platforms that modernize clinical workflows, interoperability, and data infrastructure across health systems.',
        tag: 'Technology',
    },
    {
        title: 'Care Delivery Innovation',
        description:
            'Investing in novel care models — from value-based primary care networks to tech-enabled specialty clinics — that improve accessibility and quality.',
        tag: 'Operations',
    },
    {
        title: 'Life Sciences & Diagnostics',
        description:
            'Supporting early-stage biotech and diagnostics companies that are bringing precision medicine from research into real-world clinical settings.',
        tag: 'Sciences',
    },
    {
        title: 'Health Equity',
        description:
            'Championing companies that expand coverage, reduce cost barriers, and prioritize underserved populations in every investment thesis.',
        tag: 'Impact',
    },
];

export default function CorePage() {
    return (
        <main className="min-h-screen pt-32 px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="mb-16">
                    <h1 className="text-5xl md:text-7xl font-serif font-medium mb-6 leading-tight">
                        Our core <br />
                        <span className="text-brand-lime bg-black px-3 rounded-md">strategies</span>
                    </h1>
                    <p className="text-xl text-brand-gray max-w-2xl leading-relaxed">
                        We invest across four thesis areas where the intersection of innovation and healthcare need is greatest.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {strategies.map((s) => (
                        <div
                            key={s.title}
                            className="group rounded-2xl border border-black/10 bg-white/60 p-8 backdrop-blur-sm transition-shadow hover:shadow-lg"
                        >
                            <span className="mb-4 inline-block rounded-full bg-brand-lime px-4 py-1 text-xs font-semibold uppercase tracking-widest text-black">
                                {s.tag}
                            </span>
                            <h2 className="mb-3 text-2xl font-semibold text-foreground">{s.title}</h2>
                            <p className="text-brand-gray leading-relaxed">{s.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
