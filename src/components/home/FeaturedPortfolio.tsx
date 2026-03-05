'use client';

const projects = [
    {
        tag: 'Healthcare facility',
        date: '8/14/24',
        title: 'Novacare Hospitals',
        description: 'Healthcare & Medical infrastructure',
        image: '/portfolio-1.jpeg',
    },
    {
        tag: 'Diagnostics brand',
        date: '3/6/25',
        title: 'RaiDx Diagnostic',
        description: 'Branding & Identity design',
        image: '/portfolio-2.jpeg',
    },
];

export const FeaturedPortfolio = () => {
    return (
        <>
            <section
                style={{
                    position: 'relative',
                    zIndex: 35,
                    backgroundColor: '#0a0a0a',
                    marginTop: 0,
                    padding: '6rem 0 6rem',
                }}
            >
                <div
                    style={{
                        maxWidth: '1600px',
                        margin: '0 auto',
                        padding: '0 2rem',
                    }}
                >
                    {/* Heading */}
                    <div style={{ marginBottom: '3.5rem' }}>
                        <h2
                            className="text-5xl md:text-6xl font-serif font-semibold leading-tight"
                            style={{ color: '#ffffff' }}
                        >
                            Featured{' '}
                            <span style={{ fontFamily: '"Lora", serif', fontStyle: 'italic' }}>
                                Portfolio
                            </span>
                        </h2>
                    </div>

                    {/* Portfolio grid */}
                    <div
                        style={{
                            display: 'flex',
                            gap: '3rem',
                        }}
                    >
                        {projects.map((project) => (
                            <div
                                key={project.title}
                                style={{ flex: '1 1 0', minWidth: 0, cursor: 'pointer' }}
                            >
                                {/* Title */}
                                <h3
                                    className="text-2xl md:text-3xl font-serif font-medium"
                                    style={{
                                        color: '#ffffff',
                                        marginBottom: '0.35rem',
                                    }}
                                >
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p
                                    style={{
                                        fontSize: '15px',
                                        color: 'rgba(255,255,255,0.4)',
                                        marginBottom: '1.25rem',
                                    }}
                                >
                                    {project.description}
                                </p>

                                {/* Image */}
                                <div
                                    style={{
                                        borderRadius: '16px',
                                        overflow: 'hidden',
                                        aspectRatio: '4 / 3',
                                    }}
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            display: 'block',
                                            transition: 'transform 0.5s ease',
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'scale(1.03)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'scale(1)';
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};
