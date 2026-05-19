import React, { useState, useEffect } from 'react';

const navLinks = [
    { href: '#about', label: 'عن الخدمة' },
    { href: '#report', label: 'التقرير' },
    { href: '#how', label: 'كيف يعمل' },
    { href: '#customers', label: 'عملاؤنا' },
    { href: '#contact', label: 'تواصل معنا' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', fn, { passive: true });
        return () => window.removeEventListener('scroll', fn);
    }, []);

    return (
        <>
            <nav
                className={`navbar ${scrolled ? 'scrolled' : ''}`}
                role="navigation"
                aria-label="القائمة الرئيسية"
                style={{
                    backdropFilter: scrolled ? 'blur(20px)' : 'none',
                    WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
                }}
            >
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    {/* Logo */}
                    <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', transition: 'transform 0.2s ease' }} className="hover:scale-102">
                        <img src="/images/logo1_RB.png" alt="شعار أطمئن" style={{ height: '100px', width: '200px', objectFit: 'contain' }} />
                    </a>

                    {/* Desktop links */}
                    <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '1.75rem', background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.03)', padding: '0.4rem 1.5rem', borderRadius: 'var(--radius-full)', backdropFilter: 'blur(10px)' }}>
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} className="nav-link" style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '-0.01em' }}>
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* CTA + hamburger */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <a href="#contact" className="btn-primary desktop-nav" style={{ padding: '0.55rem 1.5rem', fontSize: '0.82rem', borderRadius: 'var(--radius-full)' }}>
                            <span>اطلب تقريرك</span>
                        </a>
                        <button className="hamburger" onClick={() => setMenuOpen(v => !v)} aria-label="القائمة" aria-expanded={menuOpen}>
                            <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }} />
                            <span style={{ opacity: menuOpen ? 0 : 1 }} />
                            <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile menu overlay */}
            {menuOpen && (
                <div className="mobile-menu open" role="dialog" aria-modal="true">
                    <button
                        onClick={() => setMenuOpen(false)}
                        style={{
                            position: 'absolute',
                            top: '2rem',
                            left: '2rem',
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            color: 'white',
                            width: '44px',
                            height: '44px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.2rem',
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                        }}
                        aria-label="إغلاق"
                        className="hover:bg-white/10"
                    >
                        ✕
                    </button>
                    {/* <img src="/images/logo1_RB.png" alt="أطمئن" style={{ height: '52px', marginBottom: '1.5rem', objectFit: 'contain' }} /> */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', width: '100%' }}>
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="nav-link"
                                onClick={() => setMenuOpen(false)}
                                style={{ fontSize: '1.25rem', fontWeight: 600 }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <a
                        href="#contact"
                        className="btn-primary"
                        onClick={() => setMenuOpen(false)}
                        style={{ marginTop: '2rem', width: '80%', maxWidth: '280px', justifyContent: 'center' }}
                    >
                        <span>اطلب تقريرك الآن</span>
                    </a>
                </div>
            )}
        </>
    );
}
