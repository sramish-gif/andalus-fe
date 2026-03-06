'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export const Preloader = () => {
    const [progress, setProgress] = useState(0);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        // Animate progress from 0 to 100
        let start: number | null = null;
        const duration = 2000; // 2 seconds

        const animate = (timestamp: number) => {
            if (!start) start = timestamp;
            const elapsed = timestamp - start;
            const pct = Math.min(100, (elapsed / duration) * 100);
            setProgress(pct);

            if (pct < 100) {
                requestAnimationFrame(animate);
            } else {
                // Signal preloader done
                window.dispatchEvent(new CustomEvent('preloader-done'));
                // Fade out after complete
                setTimeout(() => setHidden(true), 300);
            }
        };

        requestAnimationFrame(animate);
    }, []);

    if (hidden) return null;

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 9999,
                backgroundColor: '#F5F1E6',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2.5rem',
                transition: 'opacity 0.5s ease',
                opacity: progress >= 100 ? 0 : 1,
                pointerEvents: progress >= 100 ? 'none' : 'auto',
            }}
        >
            {/* Logo */}
            <Image
                src="/andalus-logo-dark.svg"
                alt="Andalus Capital"
                width={180}
                height={60}
                priority
                unoptimized
                style={{ height: 'auto', width: '180px' }}
            />

            {/* Progress bar */}
            <div
                style={{
                    width: '220px',
                    height: '3px',
                    backgroundColor: 'rgba(0,0,0,0.08)',
                    borderRadius: '999px',
                    overflow: 'hidden',
                }}
            >
                <div
                    style={{
                        height: '100%',
                        width: `${progress}%`,
                        backgroundColor: '#B1A26B',
                        borderRadius: '999px',
                        transition: 'width 0.1s linear',
                    }}
                />
            </div>
        </div>
    );
};
