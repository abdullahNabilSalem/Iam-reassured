import React from 'react';

const quickLinks = [
    { href: '#hero', label: 'الرئيسية' },
    { href: '#about', label: 'عن الخدمة' },
    { href: '#report', label: 'ماذا يشمل التقرير' },
    { href: '#customers', label: 'العملاء' },
    { href: '#contact', label: 'تواصل معنا' },
];

const services = [
    { icon: '💥', label: 'فحص سجل الحوادث والاصطدام' },
    { icon: '💧', label: 'التحقق من الغرق وأضرار المياه' },
    { icon: '📋', label: 'كشف الدعم والتأمين الشامل' },
    { icon: '🔢', label: 'التحقق من سلامة عداد المسافة' },
];

const socials = [
    {
        href: 'https://wa.me/967770000000',
        label: 'واتساب',
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.534 5.845L.057 23.486a.498.498 0 00.457.514l5.9-.562A11.937 11.937 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.898 0-3.664-.543-5.157-1.48l-.365-.216-3.838.367.353-3.723-.234-.382A9.777 9.777 0 012.182 12C2.182 6.566 6.566 2.182 12 2.182S21.818 6.566 21.818 12 17.434 21.818 12 21.818z" />
            </svg>
        ),
    },
    {
        href: 'https://facebook.com/itma2en',
        label: 'فيسبوك',
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        ),
    },
    {
        href: 'https://instagram.com/itma2en',
        label: 'انستغرام',
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
        ),
    },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer id="footer" className="relative w-full overflow-hidden bg-slate-950 text-slate-400" style={{ background: 'var(--navy-950)' }}>
            {/* Subtle top premium linear line */}
            <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.15), transparent)', zIndex: 1 }} />

            {/* Main Footer Container */}
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '5.5rem 1.5rem 3.5rem', position: 'relative', zIndex: 2 }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">

                    {/* Column 1: Brand Info */}
                    <div className="footer-column brand-column" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        <img
                            src="/images/logo1_RB.png"
                            alt="شعار أطمئن"
                            style={{ height: 'auto', width: '250px', alignSelf: 'flex-start', objectFit: 'contain' }}
                            className="footer-logo"
                        />
                        <p style={{ fontSize: '0.85rem', lineHeight: '1.8', color: 'var(--silver-400)', margin: 0, maxWidth: '280px' }} className="footer-desc">
                            بوابتك الرقمية لفحص وقراءة تقارير تاريخ السيارات المستوردة من كوريا الجنوبية عبر رقم الهيكل، لنمنحك يقيناً كاملاً قبل الشراء.
                        </p>

                        {/* Social Icons Hub */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.5rem' }} className="footer-social-hub">
                            {socials.map((s, i) => (
                                <a
                                    key={i}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '36px',
                                        height: '36px',
                                        borderRadius: 'var(--radius-sm)',
                                        background: 'rgba(255, 255, 255, 0.02)',
                                        border: '1px solid rgba(255, 255, 255, 0.05)',
                                        color: 'var(--silver-400)',
                                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                        textDecoration: 'none'
                                    }}
                                    className="hover:bg-white/10 hover:text-white hover:border-white/20 hover:-translate-y-0.5"
                                >
                                    {s.svg}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Navigation Links */}
                    <div className="footer-column" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        <h4 style={{ color: 'white', fontSize: '0.92rem', fontWeight: 700, margin: 0 }}>
                            روابط سريعة
                        </h4>
                        <nav aria-label="روابط الموقع السريعة">
                            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {quickLinks.map((link, i) => (
                                    <li key={i}>
                                        <a
                                            href={link.href}
                                            style={{
                                                color: 'var(--silver-400)',
                                                fontSize: '0.85rem',
                                                transition: 'color 0.2s',
                                                textDecoration: 'none'
                                            }}
                                            className="hover:text-white"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Column 3: Custom Services */}
                    <div className="footer-column" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        <h4 style={{ color: 'white', fontSize: '0.92rem', fontWeight: 700, margin: 0 }}>
                            خدمات التقرير
                        </h4>
                        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {services.map((srv, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                    <span style={{ fontSize: '1rem', flexShrink: 0 }} aria-hidden="true">{srv.icon}</span>
                                    <span style={{ color: 'var(--silver-400)', fontSize: '0.85rem' }}>{srv.label}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Location & Work hours */}
                    <div className="footer-column contact-column" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        <h4 style={{ color: 'white', fontSize: '0.92rem', fontWeight: 700, margin: 0 }}>
                            معلومات التواصل
                        </h4>
                        <div className="footer-info-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }} className="footer-info-item">
                                <span style={{ fontSize: '1rem', flexShrink: 0 }} aria-hidden="true">📍</span>
                                <span style={{ fontSize: '0.85rem', color: 'var(--silver-300)', fontWeight: 500 }}>عدن · اليمن</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }} className="footer-info-item">
                                <span style={{ fontSize: '1rem', flexShrink: 0 }} aria-hidden="true">📱</span>
                                <a
                                    href="tel:+96777000000"
                                    dir="ltr"
                                    style={{
                                        fontSize: '0.85rem',
                                        color: 'var(--silver-400)',
                                        textDecoration: 'none',
                                        transition: 'color 0.2s'
                                    }}
                                    className="hover:text-white"
                                >
                                    +967 77 000 0000
                                </a>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }} className="footer-info-item">
                                <span style={{ fontSize: '1rem', flexShrink: 0 }} aria-hidden="true">✉️</span>
                                <a
                                    href="mailto:info@itma2en.com"
                                    style={{
                                        fontSize: '0.85rem',
                                        color: 'var(--silver-400)',
                                        textDecoration: 'none',
                                        transition: 'color 0.2s'
                                    }}
                                    className="hover:text-white"
                                >
                                    info@itma2en.com
                                </a>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }} className="footer-info-item">
                                <span style={{ fontSize: '1rem', flexShrink: 0 }} aria-hidden="true">🕐</span>
                                <span style={{ fontSize: '0.85rem', color: 'var(--silver-400)' }}>السبت – الخميس: ٩ص – ١٠م</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Bar Segment */}
            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.04)', position: 'relative', zIndex: 2 }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '1.5rem 1.5rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', fontSize: '0.75rem', color: 'var(--silver-500)' }} className="footer-bottom-row">
                        <p style={{ margin: 0 }}>
                            © {year} <span style={{ color: 'var(--silver-300)', fontWeight: 600 }}>أطمئن</span>. جميع الحقوق محفوظة لمنصة أطمئن لفحص السيارات الكورية.
                        </p>
                        <p style={{ margin: 0 }}>
                            صُمم بعناية ودقة فائقة لخدمة سوق السيارات في اليمن
                        </p>
                    </div>
                </div>
            </div>

        </footer>
    );
}
