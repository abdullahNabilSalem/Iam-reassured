import React from 'react';

const steps = [
    {
        num: '01',
        title: 'كتابة رقم الهيكل (VIN)',
        desc: 'أدخل رقم الهيكل المكون من 17 خانة للسيارة الكورية المراد فحصها في الحقل المخصص أعلى الصفحة.'
    },
    {
        num: '02',
        title: 'تأكيد الطلب عبر الواتساب',
        desc: 'انقر على بحث ليتم توجيهك للمحادثة الرسمية، حيث يقوم مهندسونا ببدء سحب البيانات فورًا.'
    },
    {
        num: '03',
        title: 'استلام التقرير المترجم',
        desc: 'خلال وقت وجيز، تستلم ملف PDF منسقًا ومنظمًا بالكامل بلغة عربية واضحة تشرح حالة سيارتك.'
    }
];

export default function HowItWorks() {
    return (
        <section id="how" aria-labelledby="how-title" style={{ padding: '8.5rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
            {/* Background glowing effects */}
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 50% 50% at 80% 20%, rgba(16,185,129,0.03) 0%, transparent 60%)', pointerEvents: 'none', zIndex: 0 }} />

            <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '5.5rem' }}>
                    <div><div className="section-tag">خطوات الاستخدام</div></div>
                    <h2 id="how-title" className="section-title">
                        كيف تعمل <span className="gradient-text">منصة أطمئن؟</span>
                    </h2>
                    <div className="section-divider" />
                    <p className="section-subtitle">
                        صممنا تجربة مستخدم سريعة وسلسة لنضمن حصولك على التقرير دون تعقيد وفي أقل وقت ممكن.
                    </p>
                </div>

                {/* Steps Container with connecting lines */}
                <div style={{ position: 'relative' }}>
                    {/* Connecting line between steps on desktop */}
                    <div className="steps-line" aria-hidden="true" />

                    <div 
                        className="steps-grid-layout"
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem' }}
                        role="list"
                    >
                        {steps.map((step, idx) => (
                            <div 
                                key={idx} 
                                style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}
                                role="listitem"
                            >
                                {/* Glowing step circle */}
                                <div className="step-number" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                                    {step.num}
                                </div>

                                {/* Step Card Details */}
                                <div className="premium-card" style={{ padding: '2rem 1.5rem', marginTop: '1.5rem', border: '1px solid rgba(255,255,255,0.03)' }}>
                                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'white', marginBottom: '0.85rem' }}>
                                        {step.title}
                                    </h3>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--silver-400)', lineHeight: '1.75', margin: 0 }}>
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
