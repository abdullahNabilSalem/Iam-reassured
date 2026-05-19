import React, { useState } from 'react';

const stats = [
    { numericEnd: 500, prefix: '+', suffix: '', label: 'تقرير منجز', icon: '📋' },
    { numericEnd: 200, prefix: '+', suffix: '', label: 'عميل راضٍ',  icon: '😊' },
    { numericEnd: 98,  prefix: '',  suffix: '%', label: 'دقة التقارير', icon: '🎯' },
    { numericEnd: 24,  prefix: '',  suffix: 'h', label: 'متوسط التسليم', icon: '⏱️' },
];

function StatItem({ stat }) {
    return (
        <div className="stat-item">
            <div style={{ fontSize: '1.5rem', marginBottom: '0.4rem' }}>{stat.icon}</div>
            <div className="counter-number" style={{ letterSpacing: '-0.02em' }}>{stat.prefix}{stat.numericEnd}{stat.suffix}</div>
            <div style={{ color: 'var(--silver-400)', fontSize: '0.82rem', fontWeight: 500, marginTop: '0.25rem' }}>{stat.label}</div>
        </div>
    );
}

export default function Hero() {
    const [vin, setVin]             = useState('');
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!vin.trim()) return;
        setSubmitting(true);
        const msg = encodeURIComponent(`السلام عليكم، أريد الاستفسار عن سيارة برقم الهيكل:\n${vin.trim()}`);
        setTimeout(() => { window.open(`https://wa.me/967770000000?text=${msg}`, '_blank'); setSubmitting(false); }, 500);
    };

    return (
        <section id="hero" className="hero-section" aria-labelledby="hero-title" style={{ padding: '0 !important' }}>
            <div className="hero-bg" aria-hidden="true" />
            <div className="hero-grid-overlay" aria-hidden="true" />

            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '10.5rem 1.5rem 5rem', width: '100%', position: 'relative', zIndex: 2 }}>
                <div
                    className="hero-content-grid"
                    style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '5rem', alignItems: 'center' }}
                >
                    {/* Text column */}
                    <div style={{ textAlign: 'right' }}>
                        {/* Live badge */}
                        <div style={{ marginBottom: '1.75rem' }}>
                            <span className="badge-pill" style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(52,211,153,0.15)', color: '#34d399', padding: '0.4rem 1.1rem' }}>
                                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34d399', display: 'inline-block', position: 'relative' }} className="pulse-glow" />
                                <span style={{ marginRight: '0.5rem', fontWeight: 600, fontSize: '0.8rem' }}>خدمة فحص موثوقة في اليمن · عدن</span>
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 id="hero-title" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.15, marginBottom: '1.5rem', color: 'white' }}>
                            <span className="gradient-text">أطمئن</span>
                            <br />
                            <span style={{ fontWeight: 800 }}>قبل أن تشتري</span>
                            <br />
                            <span style={{ color: 'var(--silver-300)', fontWeight: 700 }}>سيارتك الكورية</span>
                        </h1>

                        {/* Subtitle */}
                        <p style={{ fontSize: '1.05rem', color: 'var(--silver-400)', lineHeight: 1.9, marginBottom: '2.5rem', maxWidth: '520px' }}>
                            تحقق من التاريخ الكامل للسيارة الكورية المستوردة عبر رقم الهيكل (VIN) واكشف ماضيها بالتفصيل قبل الشراء. تقرير احترافي شامل لحماية استثمارك.
                        </p>

                        {/* VIN Form */}
                        <form onSubmit={handleSubmit} style={{ marginBottom: '2.5rem' }} aria-label="نموذج البحث بـ VIN">
                            <div className="vin-input-wrapper" style={{ maxWidth: '520px' }}>
                                <button type="submit" className="btn-primary" disabled={submitting} style={{ padding: '0.7rem 1.6rem', fontSize: '0.9rem', flexShrink: 0, borderRadius: 'var(--radius-md)' }}>
                                    <span>{submitting ? 'جري التحميل...' : '🔍 ابحث الآن'}</span>
                                </button>
                                <input
                                    type="text" className="vin-input"
                                    value={vin} onChange={e => setVin(e.target.value.toUpperCase())}
                                    placeholder="أدخل رقم الهيكل VIN (17 خانة)..."
                                    maxLength={17} aria-label="رقم الهيكل VIN" spellCheck={false}
                                />
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', paddingRight: '0.85rem', flexShrink: 0, borderLeft: '1px solid rgba(255,255,255,0.06)', paddingLeft: '0.85rem' }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                        <rect x="3" y="6" width="18" height="12" rx="2" stroke="#60a5fa" strokeWidth="2"/>
                                        <path d="M7 10h10M7 14h6" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>
                                    <span style={{ color: 'var(--blue-300)', fontSize: '0.8rem', fontWeight: 800, fontFamily: 'monospace' }}>VIN</span>
                                </div>
                            </div>
                            <p style={{ color: 'var(--silver-500)', fontSize: '0.78rem', marginTop: '0.6rem', paddingRight: '0.25rem' }}>
                                * يتكون رقم الهيكل من 17 رمزًا وحرفًا (خالٍ من الحرفين I و O لضمان الدقة)
                            </p>
                        </form>

                        {/* CTAs */}
                        <div className="hero-cta-group" style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                            <a href="#contact" className="btn-primary" aria-label="اطلب التقرير">
                                <span>🚀 اطلب تقريرك الآن</span>
                            </a>
                            <a href="#about" className="btn-outline" aria-label="تعرف على الخدمة">
                                <span>عن الخدمة</span>
                            </a>
                        </div>

                        {/* Trust row */}
                        <div className="hero-trust-row" style={{ display: 'flex', gap: '2.5rem', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.04)', flexWrap: 'wrap' }}>
                            {[
                                ['🛡️', 'تقارير موثوقة ومثبتة'],
                                ['⚡', 'تسليم فوري خلال ساعة'],
                                ['🇰🇷', 'قواعد بيانات كورية رسمية']
                            ].map(([icon, label]) => (
                                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                    <span style={{ fontSize: '1.15rem' }}>{icon}</span>
                                    <span style={{ color: 'var(--silver-400)', fontSize: '0.82rem', fontWeight: 600 }}>{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Visual column */}
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <HeroCard />
                    </div>
                </div>

                {/* Stats bar */}
                <div
                    className="stats-grid noise-bg"
                    role="list" aria-label="إحصائيات المنصة"
                >
                    {stats.map(s => <StatItem key={s.label} stat={s} />)}
                </div>
            </div>
        </section>
    );
}

function HeroCard() {
    const reportItems = [
        { label: 'سجل الحوادث والاصطدام', status: 'خالٍ تمامًا',  ok: true,  icon: '🚗' },
        { label: 'سجل الغرق وأضرار السيول', status: 'لا يوجد', ok: true,  icon: '💧' },
        { label: 'صحة قراءة عداد المسافة', status: 'سليم وأصلي',   ok: true,  icon: '📍' },
        { label: 'تاريخ الملكية والترخيص', status: 'مالك واحد فقط', ok: true,  icon: '📋' },
    ];
    return (
        <div style={{ position: 'relative', width: '100%', maxWidth: '440px' }} className="noise-bg">
            <div className="premium-card" style={{ padding: '2.25rem', border: '1px solid rgba(255,255,255,0.06)' }}>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                    <span style={{ background: 'linear-gradient(135deg,#10b981,#047857)', padding: '0.35rem 0.95rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 700, color: 'white', border: '1px solid rgba(255,255,255,0.1)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'white' }} />
                        ✓ تقرير مكتمل بنجاح
                    </span>
                    <div style={{ display: 'flex', gap: '6px' }}>
                        {['#ff5f57','#febc2e','#28c840'].map(c => <div key={c} style={{ width: '8px', height: '8px', borderRadius: '50%', background: c }} />)}
                    </div>
                </div>

                {/* VIN Badge */}
                <div style={{ background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(96,165,250,0.15)', borderRadius: 'var(--radius-md)', padding: '1rem', marginBottom: '1.5rem', textAlign: 'center' }}>
                    <div style={{ color: 'var(--silver-400)', fontSize: '0.7rem', fontWeight: 600, marginBottom: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>رقم الهيكل المفحوص / VIN</div>
                    <div style={{ fontFamily: 'monospace', fontSize: '1.05rem', letterSpacing: '0.12em', color: 'var(--blue-300)', fontWeight: 800 }}>KNAG2511*A6****</div>
                </div>

                {/* Items */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {reportItems.map((item) => (
                        <div key={item.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.65rem 0', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                            <span style={{ background: 'rgba(16,185,129,0.08)', color: '#34d399', border: '1px solid rgba(52,211,153,0.15)', padding: '0.2rem 0.75rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 700 }}>✓ {item.status}</span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--silver-200)', fontSize: '0.85rem', fontWeight: 600 }}>
                                <span>{item.label}</span>
                                <span style={{ fontSize: '1.1rem' }} aria-hidden="true">{item.icon}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Confidence bar */}
                <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.03)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                        <span style={{ color: 'var(--blue-300)', fontWeight: 700, fontSize: '0.82rem' }}>مستوى الثقة في التقرير: 98%</span>
                        <span style={{ color: 'var(--silver-400)', fontSize: '0.78rem' }}>مطابقة تامة</span>
                    </div>
                    <div style={{ height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '9999px', overflow: 'hidden' }}>
                        <div style={{ height: '100%', background: 'linear-gradient(90deg, #10b981, #3b82f6)', borderRadius: '9999px', width: '98%' }} />
                    </div>
                </div>
            </div>

            {/* Floating badges made static/high-end */}
            <div style={{ position: 'absolute', top: '-18px', left: '-18px', background: 'linear-gradient(135deg, var(--navy-800) 0%, var(--navy-700) 100%)', borderRadius: 'var(--radius-md)', padding: '0.8rem 1.1rem', boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(255,255,255,0.08)', textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.1rem' }}>🇰🇷</div>
                <div style={{ color: 'white', fontSize: '0.7rem', fontWeight: 800 }}>فحص كوري</div>
                <div style={{ color: 'var(--silver-400)', fontSize: '0.6rem' }}>مباشر</div>
            </div>

            <div style={{ position: 'absolute', bottom: '-14px', right: '-18px', background: 'linear-gradient(135deg, #065f46 0%, #047857 100%)', borderRadius: 'var(--radius-md)', padding: '0.8rem 1.2rem', boxShadow: 'var(--shadow-green)', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
                <div style={{ color: 'white', fontSize: '0.72rem', fontWeight: 800 }}>بيانات رسمية</div>
                <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.62rem', fontWeight: 500 }}>مضمونة 100%</div>
            </div>
        </div>
    );
}
