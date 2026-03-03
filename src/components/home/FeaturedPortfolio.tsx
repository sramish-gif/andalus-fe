import React from 'react';
import Link from 'next/link';

const projects = [
    {
        title: 'Novacare Hospitals',
        category: 'Creative, Interaction',
        year: '2024',
        description:
            'Crafting an end-to-end dating app that reimagines the experience with intentional, gamified mechanics',
        image: '/portfolio-1.jpeg',
        bg: '#E8A84C',
        href: '/projects/ballpitt',
    },
    {
        title: 'RaiDx Diagnostic',
        category: 'Strategy, Branding',
        year: '2025',
        description:
            'Building a modern healthcare brand identity that communicates trust, innovation, and patient-first values',
        image: '/portfolio-2.jpeg',
        bg: '#1A2A2C',
        href: '/projects/andalus-healthcare',
    },
];

export const FeaturedPortfolio = () => {
    return (
        <section
            style={{
                position: 'relative',
                zIndex: 35,
                backgroundColor: 'var(--background)',
            }}
        >
            {/* Section header */}
            <div className="container mx-auto px-6 pt-50 pb-14">
                <p className="text-sm font-medium uppercase tracking-widest text-brand-gray mb-4">
                    Our Work
                </p>
                <h2 className="text-5xl md:text-6xl font-serif font-semibold leading-tight text-foreground">
                    Featured <span style={{ fontFamily: '"Lora", serif', fontStyle: 'italic' }}>Portfolio</span>
                </h2>
            </div>

            {/* Cards */}
            <div className="container mx-auto px-6 pb-32 flex flex-col gap-20">
                {projects.map((project) => (
                    <div key={project.title} className="group">
                        {/* Image */}
                        <div
                            className="w-full overflow-hidden rounded-lg"
                            style={{ aspectRatio: '16 / 10', backgroundColor: project.bg }}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Info row */}
                        <div className="flex flex-col md:flex-row md:justify-between mt-8 gap-6">
                            {/* Left — title, category, year */}
                            <div>
                                <h3 className="text-3xl md:text-4xl font-serif font-normal text-foreground mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-base text-brand-gray">
                                    Category: {project.category}
                                </p>
                                <p className="text-base text-brand-gray">
                                    Year: {project.year}
                                </p>
                            </div>

                            {/* Right — description + link */}
                            <div className="max-w-md">
                                <p className="text-base md:text-lg text-foreground/75 leading-relaxed mb-4">
                                    {project.description}
                                </p>
                                <Link
                                    href={project.href}
                                    className="text-base font-medium text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity"
                                >
                                    View Project
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
