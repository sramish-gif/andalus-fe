'use client';

const team = [
    {
        name: 'Faraz Minai',
        role: 'Managing Partner',
        image: '/member-1.webp',
    },
    {
        name: 'David Heyman',
        role: 'Partner ',
        image: '/member-2.webp',
    },
    {
        name: 'Hans Kedzierski',
        role: 'Founding Partner',
        image: '/member-3.webp',
    },
    {
        name: 'Ghalib Hafiz',
        role: 'Founding Partner',
        image: '/member-4.webp',
    },
    {
        name: 'Mustafa Hassan',
        role: 'Director',
        image: '/member-5.webp',
    },
    {
        name: 'Daniyal Khan',
        role: 'Senior Manager',
        image: '/member-6.webp',
    },
    {
        name: 'Rida Zaheer',
        role: 'Associate Director',
        image: '/member-7.webp',
    },
    {
        name: 'Usman Ahmad',
        role: 'Head of Finance',
        image: '/member-8.webp',
    },
];

export const TeamGrid = () => {
    return (
        <div style={{ maxWidth: '1500px', margin: '0 auto', padding: '0 2rem 6rem' }}>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '1.5rem',
                }}
            >
                {team.map((member) => (
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
                        {/* Image fills the card */}
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
