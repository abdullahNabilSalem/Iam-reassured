import React from 'react';

const reportContents = [
    {
        icon: '💥',
        title: 'تفاصيل الحوادث والاصطدام',
        desc: 'رصد دقيق لكافة الحوادث المسجلة للسيارة في كوريا، مع بيان تفاصيل الأضرار وتواريخ حدوثها.',
        accent: '#ef4444'
    },
    {
        icon: '💧',
        title: 'كشف الغرق وتلف المياه',
        desc: 'التحقق الحاسم مما إذا كانت السيارة قد تعرضت للغرق بفعل الأعاصير أو السيول والأمطار الغزيرة.',
        accent: '#3b82f6'
    },
    {
        icon: '📍',
        title: 'فحص التلاعب بالعداد (Mileage)',
        desc: 'عرض السجل المتسلسل لقراءات عداد المسافة الرسمية المسجلة للتأكد من عدم تزييفها أو إنقاصها.',
        accent: '#10b981'
    },
    {
        icon: '📋',
        title: 'سجل الملكية والاستخدام السابق',
        desc: 'معرفة عدد المالكين السابقين في كوريا، وتحديد نوعية الاستخدام السابق (شخصي، ليموزين، تأجير).',
        accent: '#f59e0b'
    },
    {
        icon: '🛠️',
        title: 'الهيكل والقطع المستبدلة',
        desc: 'توضيح كامل للأجزاء الهيكلية التي خضعت لعمليات فك، قص، أو استبدال في مراكز الصيانة الرسمية.',
        accent: '#8b5cf6'
    },
    {
        icon: '💰',
        title: 'سجلات التعويض والتأمين',
        desc: 'كشف كامل عن المبالغ والتعويضات المالية التي صُرفت لإصلاح السيارة لتقدير مدى جسامة الحادث.',
        accent: '#ec4899'
    }
];

export default function ReportFeatures() {
    return (
        <section id="report" aria-labelledby="report-title" style={{ padding: '8.5rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
            {/* Background luxury gradient glows */}
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 20% 80%, rgba(59,130,246,0.04) 0%, transparent 60%)', pointerEvents: 'none', zIndex: 0 }} />

            <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
                    <div><div className="section-tag">محتوى التقرير</div></div>
                    <h2 id="report-title" className="section-title">
                        ماذا يكشف لك <span className="gradient-text">تقرير أطمئن؟</span>
                    </h2>
                    <div className="section-divider" />
                    <p className="section-subtitle">
                        نمنحك ملفًا شاملاً ومفصلاً باللغة العربية، مترجمًا باحترافية من سجلات الفحص الكورية الرسمية ليغطي كافة جوانب وتفاصيل تاريخ سيارتك.
                    </p>
                </div>

                {/* Grid Layout of Features */}
                <div 
                    className="report-grid-layout"
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}
                    role="list"
                >
                    {reportContents.map((item, idx) => (
                        <div 
                            key={idx} 
                            className="glass-card" 
                            style={{ 
                                padding: '2.5rem 2rem', 
                                border: '1px solid rgba(255,255,255,0.035)', 
                                display: 'flex', 
                                flexDirection: 'column', 
                                alignItems: 'flex-start',
                                textAlign: 'right'
                            }}
                            role="listitem"
                        >
                            {/* Decorative soft glowing spot */}
                            <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, width: '60px', height: '60px', background: `radial-gradient(circle, ${item.accent}15 0%, transparent 70%)`, pointerEvents: 'none' }} />

                            {/* Icon Container with border and soft background shadow */}
                            <div className="report-card-icon" style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 'var(--radius-md)' }}>
                                <span style={{ fontSize: '1.4rem' }}>{item.icon}</span>
                            </div>

                            {/* Title & Description */}
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'white', marginBottom: '0.85rem' }}>
                                {item.title}
                            </h3>
                            <p style={{ fontSize: '0.86rem', color: 'var(--silver-400)', lineHeight: '1.75', margin: 0 }}>
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
