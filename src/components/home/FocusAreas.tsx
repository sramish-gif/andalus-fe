import React from 'react';

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
                            x1={36 + 6 * Math.cos(rad)}
                            y1={36 + 6 * Math.sin(rad)}
                            x2={36 + 32 * Math.cos(rad)}
                            y2={36 + 32 * Math.sin(rad)}
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
        bg: '#1A2A2C',
        textColor: '#F9FAFB',
        mutedColor: '#9CA3AF',
        icon: (
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" stroke="#F9FAFB" strokeWidth="1.2">
                {[34, 26, 18, 10].map((r, i) => (
                    <polygon
                        key={i}
                        points={[0, 1, 2, 3, 4, 5].map((j) => {
                            const a = (j * 60 - 90) * (Math.PI / 180);
                            return `${36 + r * Math.cos(a)},${36 + r * Math.sin(a)}`;
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
        bg: '#1E1E1E',
        textColor: '#F9FAFB',
        mutedColor: '#9CA3AF',
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
    return (
        <section
            style={{
                position: 'relative',
                zIndex: 30,
                backgroundColor: 'var(--background)',
            }}
        >
            {/* Section header */}
            <div className="container mx-auto px-6 pt-50 pb-14">
                <p className="text-sm font-medium uppercase tracking-widest text-brand-gray mb-4">
                    What We Back
                </p>
                <h2 className="text-5xl md:text-6xl font-serif font-medium leading-tight text-foreground">
                    Our Focus Areas
                </h2>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {areas.map((area) => (
                    <div
                        key={area.number}
                        style={{ backgroundColor: area.bg, minHeight: '380px' }}
                        className="relative flex flex-col p-10"
                    >
                        {/* Icon */}
                        <div className="mb-2">{area.icon}</div>

                        {/* Number */}
                        <span
                            className="absolute top-10 right-10 text-sm font-mono tracking-widest"
                            style={{ color: area.mutedColor }}
                        >
                            {area.number}
                        </span>

                        {/* Text — pinned to bottom */}
                        <div className="mt-auto">
                            <h3
                                className="text-2xl font-serif font-medium mb-3 leading-snug"
                                style={{ color: area.textColor }}
                            >
                                {area.title}
                            </h3>
                            <p
                                className="text-sm leading-relaxed max-w-xs"
                                style={{ color: area.mutedColor }}
                            >
                                {area.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
