'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';

export const Navbar = () => {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Core', href: '/core' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
            <div
                style={{
                    maxWidth: scrolled ? '40rem' : '45rem',
                    transition: 'max-width 0.5s ease-in-out, background-color 0.5s ease-in-out',
                }}
                className={`w-full rounded-full px-6 py-1.5 ${
                    scrolled
                        ? 'bg-black/60 backdrop-blur-md border border-white/10'
                        : 'bg-black/86 backdrop-blur-md border border-white/8'
                }`}
            >
                <div className="flex items-center">
                    {/* Logo — left */}
                    <div className="flex-1">
                        <Link href="/" className="inline-flex items-center">
                            <Image
                                src="/andalus-logo-01.svg"
                                alt="Andalus"
                                width={160}
                                height={60}
                                className="h-11 w-auto mt-1" 
                                priority
                                unoptimized
                            />
                        </Link>
                    </div>

                    {/* Nav links — true center */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-4 py-1.5 rounded-full text-sm font-medium tracking-wide uppercase transition-all ${
                                    pathname === link.href
                                        ? 'bg-white/15 text-white'
                                        : 'text-white/100 hover:text-white hover:bg-white/10'
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA — right */}
                    <div className="flex-1 flex justify-end">
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-2 text-sm font-semibold text-white"
                        >
                            TALK TO US
                            <span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/40 text-white transition-colors duration-300 group-hover:bg-brand-lime group-hover:border-brand-lime group-hover:text-black">
                                <ArrowUpRight className="w-4 h-4" />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};
