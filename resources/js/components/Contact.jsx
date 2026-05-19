import React from 'react';

const WA_NUMBER = '967770000000';
const WA_MSG = encodeURIComponent('السلام عليكم، أريد الاستفسار عن خدمة أطمئن لفحص السيارات');

const WA_SVG = (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.534 5.845L.057 23.486a.498.498 0 00.457.514l5.9-.562A11.937 11.937 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.898 0-3.664-.543-5.157-1.48l-.365-.216-3.838.367.353-3.723-.234-.382A9.777 9.777 0 012.182 12C2.182 6.566 6.566 2.182 12 2.182S21.818 6.566 21.818 12 17.434 21.818 12 21.818z" />
    </svg>
);

const FB_SVG = (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
    </svg>
);

const IG_SVG = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
);

const MAIL_SVG = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
    </svg>
);

const socials = [
    {
        id: 'whatsapp',
        label: 'الواتساب الرسمي',
        value: '+967 770 000 000',
        subLabel: 'تواصل فوري ومباشر',
        href: `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`,
        icon: WA_SVG,
        brandColor: 'emerald',
        glowBg: 'rgba(16,185,129,0.02)',
        glowBorder: 'rgba(16,185,129,0.12)',
        hoverGlowBg: 'group-hover:bg-emerald-500/[0.04]',
        hoverBorderColor: 'group-hover:border-emerald-500/25',
        iconBg: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:border-emerald-500/40',
        ariaLabel: 'تواصل معنا عبر واتساب',
    },
    {
        id: 'facebook',
        label: 'فيسبوك',
        value: 'itma2en',
        subLabel: 'صفحتنا ومجتمعنا الرسمي',
        href: 'https://facebook.com/itma2en',
        icon: FB_SVG,
        brandColor: 'blue',
        glowBg: 'rgba(59,130,246,0.02)',
        glowBorder: 'rgba(59,130,246,0.12)',
        hoverGlowBg: 'group-hover:bg-blue-500/[0.04]',
        hoverBorderColor: 'group-hover:border-blue-500/25',
        iconBg: 'bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:border-blue-500/40',
        ariaLabel: 'تواصل معنا عبر فيسبوك',
    },
    {
        id: 'instagram',
        label: 'انستغرام',
        value: '@itma2en',
        subLabel: 'تغطيات وتقارير تفصيلية',
        href: 'https://instagram.com/itma2en',
        icon: IG_SVG,
        brandColor: 'pink',
        glowBg: 'rgba(236,72,153,0.02)',
        glowBorder: 'rgba(236,72,153,0.12)',
        hoverGlowBg: 'group-hover:bg-pink-500/[0.04]',
        hoverBorderColor: 'group-hover:border-pink-500/25',
        iconBg: 'bg-pink-500/10 text-pink-400 border border-pink-500/20 group-hover:border-pink-500/40',
        ariaLabel: 'تواصل معنا عبر انستغرام',
    },
    {
        id: 'email',
        label: 'البريد الإلكتروني',
        value: 'support@itma2en.com',
        subLabel: 'راسلنا لأي استفسار عام',
        href: 'mailto:support@itma2en.com',
        icon: MAIL_SVG,
        brandColor: 'cyan',
        glowBg: 'rgba(6,182,212,0.02)',
        glowBorder: 'rgba(6,182,212,0.12)',
        hoverGlowBg: 'group-hover:bg-cyan-500/[0.04]',
        hoverBorderColor: 'group-hover:border-cyan-500/25',
        iconBg: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:border-cyan-500/40',
        ariaLabel: 'أرسل لنا بريدًا إلكترونيًا',
    },
];

export default function Contact() {
    return (
        <section id="contact" aria-labelledby="contact-title" style={{ padding: '8.5rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
            {/* Elegant deep radial gradient overlay */}
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(37,99,235,0.05) 0%, transparent 60%)', pointerEvents: 'none', zIndex: 0 }} />

            {/* High-end concentric decorative rings */}
            {[820, 620, 420].map((size, i) => (
                <div key={size} aria-hidden="true"
                    style={{ position: 'absolute', top: '50%', left: '50%', width: `${size}px`, height: `${size}px`, border: `1px solid rgba(255,255,255,${0.012 + (3 - i) * 0.006})`, borderRadius: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }}
                />
            ))}

            <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

                {/* 1. Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
                    <div>
                        <div className="section-tag">تواصل معنا</div>
                    </div>
                    <h2 id="contact-title" className="section-title" style={{ letterSpacing: '-0.02em' }}>
                        نحن هنا في <span className="gradient-text">خدمتك دائماً</span>
                    </h2>
                    <div className="section-divider" />
                    <p className="section-subtitle" style={{ color: 'var(--silver-400)', maxWidth: '620px', margin: '0 auto', fontSize: '1.02rem', lineHeight: '1.8' }}>
                        نحن هنا للإجابة على استفساراتك ومساعدتك في التحقق من تاريخ سيارتك بكل ثقة.
                    </p>
                </div>

                {/* 2. Contact Information Cards */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                        gap: '1.5rem',
                        marginBottom: '4.5rem'
                    }}
                    role="list"
                >
                    {socials.map((s) => (
                        <a
                            key={s.id}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'space-between',
                                padding: '2rem 1.75rem',
                                background: s.glowBg,
                                border: `1px solid ${s.glowBorder}`,
                                borderRadius: 'var(--radius-lg)',
                                textDecoration: 'none',
                                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                position: 'relative',
                                overflow: 'hidden',
                                minHeight: '210px',
                                backdropFilter: 'blur(12px)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.borderColor = s.brandColor === 'emerald' ? 'rgba(16,185,129,0.3)' :
                                    s.brandColor === 'blue' ? 'rgba(59,130,246,0.3)' :
                                        s.brandColor === 'pink' ? 'rgba(236,72,153,0.3)' : 'rgba(6,182,212,0.3)';
                                e.currentTarget.style.boxShadow = '0 20px 40px -15px rgba(0,0,0,0.5)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = s.glowBorder;
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                            aria-label={s.ariaLabel}
                            role="listitem"
                        >
                            {/* Glow background accent */}
                            <div
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: `radial-gradient(circle at 10% 10%, rgba(${s.brandColor === 'emerald' ? '16,185,129' :
                                        s.brandColor === 'blue' ? '59,130,246' :
                                            s.brandColor === 'pink' ? '236,72,153' : '6,182,212'
                                        }, 0.04), transparent 60%)`,
                                    pointerEvents: 'none'
                                }}
                            />

                            {/* Icon Wrapper */}
                            <div
                                className={s.iconBg}
                                style={{
                                    width: '3.25rem',
                                    height: '3.25rem',
                                    borderRadius: 'var(--radius-md)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {s.icon}
                            </div>

                            {/* Content */}
                            <div style={{ width: '100%', marginTop: '1.5rem', textAlign: 'right' }}>
                                <div style={{ color: 'var(--silver-400)', fontSize: '0.85rem', fontWeight: 500, marginBottom: '0.25rem' }}>
                                    {s.label}
                                </div>
                                <div style={{ color: 'white', fontSize: '1.15rem', fontWeight: 700, letterSpacing: s.id === 'whatsapp' || s.id === 'email' ? '0.02em' : 'normal' }}>
                                    {s.value}
                                </div>
                            </div>

                            {/* Action Link Footer */}
                            <div style={{
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginTop: '1.25rem',
                                paddingTop: '1rem',
                                borderTop: '1px solid rgba(255,255,255,0.03)'
                            }}>
                                <span style={{ color: 'var(--silver-500)', fontSize: '0.78rem', fontWeight: 500 }}>
                                    {s.subLabel}
                                </span>
                                <span
                                    style={{
                                        color: s.brandColor === 'emerald' ? 'var(--green-400)' : 'var(--blue-300)',
                                        fontSize: '0.82rem',
                                        fontWeight: 600,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.25rem'
                                    }}
                                >
                                    تواصل الآن
                                    <span style={{ fontSize: '1rem', transition: 'transform 0.2s ease' }} className="group-hover:translate-x-[-4px]">←</span>
                                </span>
                            </div>
                        </a>
                    ))}
                </div>

                {/* 3. Call-to-Action Area & 4. Trust Message */}
                <div
                    className="noise-bg"
                    style={{
                        position: 'relative',
                        background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.005) 100%)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        borderRadius: 'var(--radius-xl)',
                        padding: '3rem 2.5rem',
                        boxShadow: 'var(--shadow-lg)',
                        overflow: 'hidden'
                    }}
                >
                    {/* Glowing mesh gradients */}
                    <div style={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '150px', background: 'rgba(59,130,246,0.08)', borderRadius: '50%', filter: 'blur(50px)', pointerEvents: 'none' }} />
                    <div style={{ position: 'absolute', bottom: 0, left: 0, width: '150px', height: '150px', background: 'rgba(16,185,129,0.05)', borderRadius: '50%', filter: 'blur(50px)', pointerEvents: 'none' }} />

                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '2.5rem',
                        flexWrap: 'wrap',
                        position: 'relative',
                        zIndex: 2
                    }}>
                        <div style={{ flex: '1 1 500px', textAlign: 'right' }}>
                            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'white', marginBottom: '0.85rem' }}>
                                أرسل رقم الهيكل الآن واحصل على تقرير سيارتك
                            </h3>
                            <p style={{ color: 'var(--silver-400)', fontSize: '0.96rem', lineHeight: '1.75', margin: 0 }}>
                                خدمتنا مصممة لتمنحك الثقة قبل اتخاذ قرار الشراء. نضمن لك فحصاً شاملاً وموثوقاً لجميع سجلات السيارة الرسمية المستوردة من كوريا.
                            </p>
                        </div>

                        <div style={{ flexShrink: 0, position: 'relative' }} className="pulse-glow">
                            <a
                                href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-whatsapp"
                                style={{
                                    fontSize: '1.05rem',
                                    padding: '1.1rem 2.75rem',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.75rem'
                                }}
                                aria-label="تواصل معنا فورًا عبر واتساب"
                            >
                                {WA_SVG}
                                <span>تواصل عبر واتساب الآن</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Business Information Panel */}
                <div
                    style={{
                        marginTop: '3.5rem',
                        padding: '1.75rem 2.5rem',
                        background: 'rgba(255,255,255,0.012)',
                        border: '1px solid rgba(255,255,255,0.03)',
                        borderRadius: 'var(--radius-lg)',
                        display: 'flex',
                        gap: '3rem',
                        flexWrap: 'wrap',
                        justifyContent: 'space-around',
                        backdropFilter: 'blur(10px)'
                    }}
                >
                    {[
                        { icon: '🕐', label: 'أوقات العمل المتاحة', val: 'السبت – الخميس · ٩ص – ١٠م' },
                        { icon: '📍', label: 'المركز والموقع', val: 'عدن · اليمن' },
                        { icon: '⚡', label: 'سرعة التجاوب والاستجابة', val: 'خلال ساعة كحد أقصى' }
                    ].map((item, idx) => (
                        <div key={idx} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1 1 200px' }}>
                            <div style={{ fontSize: '1.5rem', marginBottom: '0.4rem' }}>{item.icon}</div>
                            <div style={{ color: 'var(--silver-500)', fontSize: '0.72rem', fontWeight: 700, marginBottom: '0.2rem', textTransform: 'uppercase', letterSpacing: '0.03em' }}>{item.label}</div>
                            <div style={{ color: 'white', fontWeight: 700, fontSize: '0.9rem' }}>{item.val}</div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
