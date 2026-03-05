'use client';

import { useEffect, useState } from 'react';
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
        { name: 'About', href: '/about' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Team', href: '/team' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 pt-5 px-6 md:px-12">
          <div
              className="mx-auto transition-all duration-700 ease-in-out"
              style={{ maxWidth: scrolled ? '700px' : '1500px' }}
          >
            <div
                className="flex items-center justify-between rounded-full bg-black/80 backdrop-blur-md px-5 py-3"
            >
                {/* Logo — left */}
                <Link
                    href="/"
                    className="inline-flex items-center px-2"
                >
                    <Image
                        src="/andalus-logo-01.svg"
                        alt="Andalus"
                        width={140}
                        height={48}
                        className="h-10 w-auto"
                        priority
                        unoptimized
                    />
                </Link>

                {/* Center — nav links */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`px-5 py-2 rounded-full text-xs font-regular tracking-[0.15em] uppercase transition-all ${
                                pathname === link.href
                                    ? 'bg-white/15 text-white'
                                    : 'text-white/100 hover:text-white hover:bg-white/10'
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Right — CTA */}
                <Link
                    href="/contact"
                    className="group hidden md:inline-flex items-center gap-2.5 pl-4 pr-2 py-1.5 text-xs font-bold text-white uppercase tracking-[0.15em]"
                >
                    Contact Us
                    <span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/25 text-white transition-colors duration-300 group-hover:bg-brand-lime group-hover:border-brand-lime group-hover:text-black">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                </Link>
            </div>
          </div>
        </nav>
    );
};
