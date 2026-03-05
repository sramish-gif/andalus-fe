'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const mainLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Team', href: '/team' },
    { name: 'Contact Us', href: '/contact' },
];

const socialLinks = [
    { name: 'Facebook', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'Twitter / X', href: '#' },
    { name: 'Instagram', href: '#' },
];

export const Footer = () => {
    return (
        <footer
            style={{
                position: 'relative',
                zIndex: 36,
                backgroundColor: '#ffffff',
                color: '#1a1a1a',
                fontFamily: '"Google Sans", sans-serif',
            }}
        >
            {/* Top section */}
            <div
                className="grid grid-cols-1 md:grid-cols-3"
                style={{
                    maxWidth: '1500px',
                    margin: '0 auto',
                    padding: '5rem 2rem 3rem',
                    gap: '3rem',
                }}
            >
                    {/* Logo + Stay Connected */}
                    <div>
                        <Image
                            src="/andalus-logo-dark.svg"
                            alt="Andalus"
                            width={160}
                            height={55}
                            className="h-auto"
                            style={{ width: '140px', marginBottom: '2rem' }}
                            unoptimized
                        />
                        <h3
                            style={{
                                fontFamily: '"Google Sans", sans-serif',
                                fontSize: '20px',
                                fontWeight: 600,
                                letterSpacing: '-0.01em',
                                marginBottom: '1.25rem',
                                color: '#1a1a1a',
                            }}
                        >
                            Stay Connected
                        </h3>
                        <p
                            style={{
                                fontSize: '14px',
                                color: 'rgba(0,0,0,0.5)',
                                marginBottom: '1.5rem',
                                lineHeight: 1.6,
                                maxWidth: '320px',
                            }}
                        >
                            Subscribe to our newsletter for the latest updates on healthcare investments and opportunities.
                        </p>
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            style={{
                                display: 'flex',
                                border: '1px solid rgba(0,0,0,0.15)',
                                borderRadius: '999px',
                                overflow: 'hidden',
                                maxWidth: '380px',
                            }}
                        >
                            <input
                                type="email"
                                placeholder="Enter your email"
                                style={{
                                    flex: 1,
                                    padding: '0.75rem 1.25rem',
                                    border: 'none',
                                    outline: 'none',
                                    fontSize: '14px',
                                    backgroundColor: 'transparent',
                                    color: '#1a1a1a',
                                    fontFamily: '"Google Sans", sans-serif',
                                }}
                            />
                            <button
                                type="submit"
                                style={{
                                    padding: '0.75rem 1.5rem',
                                    backgroundColor: '#1a1a1a',
                                    color: '#ffffff',
                                    border: 'none',
                                    fontSize: '13px',
                                    fontWeight: 600,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    cursor: 'pointer',
                                    borderRadius: '999px',
                                    margin: '4px',
                                    fontFamily: '"Google Sans", sans-serif',
                                }}
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                    {/* Main Links */}
                    <div>
                        <h3
                            style={{
                                fontFamily: '"Google Sans", sans-serif',
                                fontSize: '20px',
                                fontWeight: 600,
                                letterSpacing: '-0.01em',
                                marginBottom: '1.25rem',
                                color: '#1a1a1a',
                            }}
                        >
                            Main Links
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                            {mainLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        style={{
                                            fontSize: '14px',
                                            color: 'rgba(0,0,0,0.5)',
                                            textDecoration: 'none',
                                            transition: 'color 0.2s',
                                        }}
                                        onMouseEnter={(e) => { e.currentTarget.style.color = '#1a1a1a'; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(0,0,0,0.5)'; }}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Get in Touch */}
                    <div>
                        <h3
                            style={{
                                fontFamily: '"Google Sans", sans-serif',
                                fontSize: '20px',
                                fontWeight: 600,
                                letterSpacing: '-0.01em',
                                marginBottom: '1.25rem',
                                color: '#1a1a1a',
                            }}
                        >
                            Get in Touch
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '14px', color: 'rgba(0,0,0,0.5)' }}>
                            <p style={{ margin: 0 }}>+1 (555) 123-4567</p>
                            <p style={{ margin: 0 }}>info@andalus.com</p>
                            <p style={{ margin: 0, lineHeight: 1.6 }}>
                                123 Healthcare Ave, Suite 400<br />
                                Dubai, UAE
                            </p>
                        </div>
                    </div>
            </div>

            {/* Divider */}
            <div style={{ maxWidth: '1500px', margin: '0 auto', padding: '0 2rem' }}>
                <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)' }} />
            </div>

            {/* Bottom section */}
            <div
                style={{
                    maxWidth: '1500px',
                    margin: '0 auto',
                    padding: '2rem 2rem 3rem',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    gap: '2rem',
                }}
            >
                {/* Brand text */}
                <div
                    style={{
                        fontFamily: '"Lora", serif',
                        fontStyle: 'italic',
                        fontSize: 'clamp(3rem, 8vw, 7rem)',
                        fontWeight: 400,
                        lineHeight: 1,
                        color: '#1a1a1a',
                        letterSpacing: '-0.03em',
                    }}
                >
                    Andalus
                </div>

                {/* Social links */}
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', paddingBottom: '0.5rem' }}>
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                padding: '0.5rem 1rem',
                                border: '1px solid rgba(0,0,0,0.15)',
                                borderRadius: '999px',
                                fontSize: '13px',
                                color: '#1a1a1a',
                                textDecoration: 'none',
                                transition: 'all 0.2s',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#1a1a1a';
                                e.currentTarget.style.color = '#ffffff';
                                e.currentTarget.style.borderColor = '#1a1a1a';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.color = '#1a1a1a';
                                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)';
                            }}
                        >
                            {link.name}
                            <ArrowUpRight className="w-3 h-3" />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};
