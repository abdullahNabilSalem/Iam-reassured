import React from 'react';

const reasons = [
    {
        icon: '🏛️',
        title: 'مصادر حكومية رسمية',
        desc: 'نضمن لك استخلاص البيانات مباشرة وبنسبة 100% من السجلات الرسمية وهيئات التأمين الكورية دون وسيط.'
    },
    {
        icon: '✍️',
        title: 'ترجمة وتحليل وافٍ',
        desc: 'لا نقدم لك رموزًا مبهمة؛ بل نترجم التقرير لملف منظم باللغة العربية، يسهل على المشتري البسيط فهمه.'
    },
    {
        icon: '⚡',
        title: 'تسليم فوري قياسي',
        desc: 'نقدر أهمية وقتك عند اتخاذ قرار الشراء، ونلتزم بتسليم تقريرك عبر الواتساب في أقل من 60 دقيقة.'
    },
    {
        icon: '🤝',
        title: 'ثقة ومصداقية تامة',
        desc: 'خدمة معتمدة حازت على تقييمات ممتازة من قبل مئات المشترين الأفراد وأصحاب معارض السيارات في عدن.'
    }
];

export default function WhyUs() {
    return (
        <section id="why-us" aria-labelledby="why-title" style={{ padding: '8.5rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
            {/* Background luxury gradient glows */}
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(59,130,246,0.04) 0%, transparent 60%)', pointerEvents: 'none', zIndex: 0 }} />

            <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
                    <div><div className="section-tag">لماذا تختارنا</div></div>
                    <h2 id="why-title" className="section-title">
                        مزايا تجعلنا <span className="gradient-text">الخيار الأول</span>
                    </h2>
                    <div className="section-divider" />
                    <p className="section-subtitle">
                        نهتم بتقديم أعلى معايير الجودة والسرية، لنمنحك رؤية واضحة وموثوقة تحمي استثمارك المالي.
                    </p>
                </div>

                {/* Grid Layout of Reasons */}
                <div 
                    className="reasons-grid-layout"
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}
                    role="list"
                >
                    {reasons.map((item, idx) => (
                        <div 
                            key={idx} 
                            className="glass-card" 
                            style={{ 
                                padding: '2.5rem 1.75rem', 
                                border: '1px solid rgba(255,255,255,0.035)', 
                                display: 'flex', 
                                flexDirection: 'column', 
                                alignItems: 'center',
                                textAlign: 'center'
                            }}
                            role="listitem"
                        >
                            {/* Icon Container with border and soft background shadow */}
                            <div 
                                style={{ 
                                    width: '60px', 
                                    height: '60px', 
                                    borderRadius: 'var(--radius-md)', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center', 
                                    fontSize: '1.8rem',
                                    marginBottom: '1.5rem',
                                    background: 'rgba(255,255,255,0.02)', 
                                    border: '1px solid rgba(255,255,255,0.06)'
                                }}
                            >
                                {item.icon}
                            </div>

                            {/* Title & Description */}
                            <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: 'white', marginBottom: '0.85rem' }}>
                                {item.title}
                            </h3>
                            <p style={{ fontSize: '0.82rem', color: 'var(--silver-400)', lineHeight: '1.75', margin: 0 }}>
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
