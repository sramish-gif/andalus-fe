'use client';

const advisors = [
    {
        name: 'Dr. Mahesh Singh',
        role: '',
        image: '/member-9.webp',
    },
    {
        name: 'Christian Schumacher',
        role: '',
        image: '/member-10.webp',
    },
    {
        name: 'Emad Al Jahdali',
        role: '',
        image: '/member-11.webp',
    },
    {
        name: 'Dania Alsammarae',
        role: '',
        image: '/member-12.webp',
    },
];

export const AdvisorsGrid = () => {
    return (
        <div style={{ maxWidth: '1500px', margin: '0 auto', padding: '0 2rem 6rem' }}>
            <h2
                className="text-4xl md:text-5xl font-serif font-medium mb-15 text-center"
                style={{ color: '#1a1a1a' }}
            >
                Advisors
            </h2>
            <div
                className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
            >
                {advisors.map((member) => (
                    <div
                        key={member.name}
                        style={{
                            borderRadius: '20px',
                            border: '1px solid rgba(0,0,0,0.08)',
                            overflow: 'hidden',
                            backgroundColor: '#f0efeb',
                            position: 'relative',
                            aspectRatio: '2 / 2.5',
                            cursor: 'pointer',
                        }}
                    >
                        <img
                            src={member.image}
                            alt={member.name}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block',
                                transition: 'transform 0.4s ease',
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                        />

                        {/* Progressive blur overlay */}
                        <div
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                height: '50%',
                                backdropFilter: 'blur(12px)',
                                WebkitBackdropFilter: 'blur(40px)',
                                maskImage: 'linear-gradient(to top, black 30%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to top, black 40%, transparent 100%)',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
                            }}
                        />
                        {/* Text */}
                        <div
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                padding: '1.25rem 1.5rem',
                            }}
                        >
                            <p
                                style={{
                                    fontFamily: '"Google Sans", sans-serif',
                                    fontSize: '24px',
                                    fontWeight: 600,
                                    color: '#ffffff',
                                    marginBottom: '2px',
                                }}
                            >
                                {member.name}
                            </p>
                            <p
                                style={{
                                    fontFamily: '"Google Sans", sans-serif',
                                    fontSize: '13px',
                                    color: 'rgba(255,255,255,0.6)',
                                }}
                            >
                                {member.role}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
