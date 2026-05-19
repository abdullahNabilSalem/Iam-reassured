import React from 'react';

const features = [
    { icon: '🎯', title: 'دقة رسمية لا مثيل لها', desc: 'نستقطب التقارير والمعلومات مباشرة وبشكل رسمي من قواعد البيانات في كوريا الجنوبية', color: '#3b82f6', bg: 'rgba(59,130,246,0.06)' },
    { icon: '🔒', title: 'سرية وأمان البيانات',       desc: 'خصوصية استفساراتك ومعلومات سيارتك تُعامل بمسؤولية وسرية مطلقة',              color: '#10b981', bg: 'rgba(16,185,129,0.06)' },
    { icon: '🇾🇪', title: 'مواءمة تامة للسوق اليمني',   desc: 'نفهم احتياجات المشترين ومعارض السيارات في اليمن ونقدم الدعم المحلي المناسب',         color: '#f59e0b', bg: 'rgba(245,158,11,0.06)' },
];

export default function About() {
    return (
        <section id="about" aria-labelledby="about-title" style={{ padding: '8.5rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 80% 50%, rgba(37,99,235,0.05) 0%, transparent 60%)', pointerEvents: 'none', zIndex: 0 }} />

            <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                <div className="about-grid-layout" style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: '6rem', alignItems: 'center' }}>

                    {/* Text block */}
                    <div style={{ textAlign: 'right' }}>
                        <div><div className="section-tag">عن الخدمة</div></div>
                        <h2 id="about-title" className="section-title">
                            بوابة موثوقة وآمنة <br />
                            <span className="gradient-text">لتاريخ سيارتك الكورية</span>
                        </h2>
                        <div className="section-divider" style={{ margin: '1.25rem 0 1.75rem' }} />
                        <p style={{ color: 'var(--silver-400)', lineHeight: 1.95, fontSize: '0.98rem', marginBottom: '1.25rem' }}>
                            منصة <strong style={{ color: 'white', fontWeight: 700 }}>أطمئن</strong> هي الخدمة الرقمية الأولى المخصصة للتحقق الفوري من ماضي وسجل السيارات المستوردة من كوريا الجنوبية إلى اليمن عبر رقم الهيكل (VIN). نهتم بكشف أدق التفاصيل لنقودك نحو خيار شراء صائب وآمن.
                        </p>
                        <p style={{ color: 'var(--silver-400)', lineHeight: 1.95, fontSize: '0.98rem', marginBottom: '2.5rem' }}>
                            نعمل بفخر من قلب عدن لنلبي تطلعات الأفراد ومستوردي المعارض، ونضمن حماية رأس مالك واستثمارك من الغش التجاري وتلاعب العدادات.
                        </p>

                        {/* Custom Features Stack */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {features.map(f => (
                                <div key={f.title} className="trust-badge" style={{ direction: 'rtl', padding: '1.25rem 1.5rem', border: '1px solid rgba(255,255,255,0.04)' }}>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontWeight: 700, color: 'white', fontSize: '0.95rem', marginBottom: '0.25rem' }}>{f.title}</div>
                                        <div style={{ color: 'var(--silver-400)', fontSize: '0.84rem', lineHeight: 1.6 }}>{f.desc}</div>
                                    </div>
                                    <div
                                        style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', background: f.bg, border: `1px solid ${f.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0 }}
                                    >
                                        {f.icon}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Visual block */}
                    <div className="about-visual-col" style={{ display: 'flex', justifyContent: 'center' }}>
                        <AboutVisual />
                    </div>
                </div>
            </div>
        </section>
    );
}

function AboutVisual() {
    return (
        <div style={{ position: 'relative', width: '100%', maxWidth: '410px' }} className="noise-bg">
            <div className="premium-card" style={{ padding: '3rem 2.5rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div
                    style={{ width: '84px', height: '84px', borderRadius: '50%', background: 'linear-gradient(135deg,rgba(59,130,246,0.18),rgba(96,165,250,0.04))', border: '2px solid rgba(96,165,250,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.75rem', fontSize: '2.2rem', boxShadow: '0 10px 30px rgba(59,130,246,0.15)' }}
                >
                    🛡️
                </div>
                <h3 style={{ color: 'white', fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>اشترِ سيارتك الكورية بثقة</h3>
                <p style={{ color: 'var(--silver-400)', lineHeight: 1.8, fontSize: '0.9rem', marginBottom: '2.25rem' }}>
                    قبل أن تدفع عربون السيارة وتبرم الصفقة، دعنا نكشف لك ماضيها المخفي بالكامل.
                </p>
                <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {[
                        'تقرير مفصل بالكامل بلغة عربية سلسة',
                        'استناد مباشر إلى سجلات المرور والتأمين الكوري',
                        'تسليم فائق السرعة عبر الواتساب في أقل من ساعة',
                        'دعم فني واستشارات متواصلة بعد تسليم التقرير'
                    ].map((item) => (
                        <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <span style={{ color: 'var(--silver-300)', fontSize: '0.85rem', fontWeight: 500 }}>{item}</span>
                            <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'linear-gradient(135deg,#10b981,#047857)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '0.6rem', color: 'white', fontWeight: 900 }}>✓</div>
                        </div>
                    ))}
                </div>
                <div style={{ marginTop: '2rem', padding: '0.85rem 1.25rem', background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(96,165,250,0.15)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--blue-300)', fontWeight: 700, fontSize: '0.85rem' }}>🇰🇷 متخصص حصري للسيارات الكورية</span>
                </div>
            </div>

            {/* Premium decorative dots overlay */}
            <div aria-hidden="true" style={{ position: 'absolute', top: '-24px', right: '-24px', width: '96px', height: '96px', backgroundImage: 'radial-gradient(circle, rgba(96,165,250,0.18) 1px, transparent 1px)', backgroundSize: '12px 12px', opacity: 0.85, zIndex: -1 }} />
        </div>
    );
}
