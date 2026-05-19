import React from 'react';

// Star icon SVG for testimonials rating
const StarIcon = () => (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-amber-400" aria-hidden="true" style={{ display: 'inline-block' }}>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

// User Profile SVG for avatar
const UserIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-slate-400">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

const customerTypes = [
    {
        id: 'showrooms',
        title: 'أصحاب المعارض',
        badge: 'ثقة متكاملة',
        desc: 'نوفر لمعارض السيارات تقارير رسمية متكاملة لزيادة موثوقية صالات العرض وتسريع عمليات البيع بكسب ثقة المشتري فوراً.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                <rect x="2" y="10" width="20" height="12" rx="2" />
                <path d="M12 2L2 7h20L12 2z" />
                <circle cx="12" cy="16" r="2" />
            </svg>
        ),
        accentColor: 'rgba(59,130,246,0.3)', // blue
        glowBg: 'rgba(59,130,246,0.01)',
        iconColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20'
    },
    {
        id: 'individuals',
        title: 'المشترون الأفراد',
        badge: 'حماية استثمارك',
        desc: 'نحميك من التلاعب بعدادات المسافة، الحوادث الخفية، وسجلات الغرق لتتخذ قرار الشراء النهائي لسيارتك الكورية بكل طمأنينة وأمان.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 11l2 2 4-4" />
            </svg>
        ),
        accentColor: 'rgba(16,185,129,0.3)', // emerald
        glowBg: 'rgba(16,185,129,0.01)',
        iconColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
    },
    {
        id: 'importers',
        title: 'مستوردو السيارات',
        badge: 'تقارير مباشرة',
        desc: 'فحص وتدقيق للسيارات قبل استيرادها وشحنها من كوريا الجنوبية لضمان مطابقتها للمواصفات وخلوها من العيوب وسوابق الحوادث.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
        ),
        accentColor: 'rgba(236,72,153,0.3)', // pink
        glowBg: 'rgba(236,72,153,0.01)',
        iconColor: 'text-pink-400 bg-pink-500/10 border-pink-500/20'
    }
];

const testimonials = [
    {
        name: 'أبو صالح السعدي',
        role: 'مالك معرض السعدي للسيارات · عدن',
        quote: 'أصبحت خدمة أطمئن ركيزة أساسية في عملنا. نقوم بفحص وتوفير التقرير لكل سيارة كورية نستوردها، مما بنى ثقة قوية بيننا وبين عملائنا وضاعف المبيعات.',
        type: 'أصحاب المعارض'
    },
    {
        name: 'المهندس عادل اليافعي',
        role: 'مستورد ومستشار سيارات',
        quote: 'أنقذتني خدمة أطمئن من خسارة فادحة! كشفت لي تقاريرهم تلاعباً بعداد المسافة (تنقيص بأكثر من 80 ألف كم) لسيارة كورية كنت على وشك شرائها واستيرادها.',
        type: 'مستوردو السيارات'
    },
    {
        name: 'خالد عبد الرحمن',
        role: 'مشتري فردي · المعلا عدن',
        quote: 'طلبت تقرير أطمئن قبل شراء سيارة كورية مستخدمة واكتشفت حادث اصطدام سابق في الرفرف تم إصلاحه بكوريا. التقرير دقيق ومفصل وسعره بسيط جداً مقارنة بالفائدة.',
        type: 'المشترون الأفراد'
    }
];

export default function Customers() {
    return (
        <section id="customers" aria-labelledby="customers-title" style={{ padding: '8.5rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
            {/* Background glowing effects */}
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 80% 80%, rgba(16,185,129,0.03) 0%, transparent 60%)', pointerEvents: 'none', zIndex: 0 }} />

            <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

                {/* 1. Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
                    <div><div className="section-tag">عملاؤنا والشركاء</div></div>
                    <h2 id="customers-title" className="section-title">
                        من نخدم في <span className="gradient-text">أطمئن</span>
                    </h2>
                    <div className="section-divider" />
                    <p className="section-subtitle" style={{ color: 'var(--silver-400)', maxWidth: '620px', margin: '0 auto', fontSize: '1.02rem', lineHeight: '1.8' }}>
                        نساعد أصحاب المعارض والمشترين على اتخاذ قرارات شراء أكثر أمانًا وثقة.
                    </p>
                </div>

                {/* 2. Customer Type Cards */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '1.5rem',
                        marginBottom: '5rem'
                    }}
                    role="list"
                >
                    {customerTypes.map((type) => (
                        <div
                            key={type.id}
                            className="group"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                padding: '2.25rem 2rem',
                                background: type.glowBg,
                                border: '1px solid rgba(255,255,255,0.04)',
                                borderRadius: 'var(--radius-lg)',
                                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                position: 'relative',
                                overflow: 'hidden',
                                backdropFilter: 'blur(10px)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.borderColor = type.accentColor;
                                e.currentTarget.style.boxShadow = '0 20px 40px -15px rgba(0,0,0,0.5)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                            role="listitem"
                        >
                            {/* Accent backdrop glow */}
                            <div
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    width: '120px',
                                    height: '120px',
                                    background: `radial-gradient(circle, ${type.accentColor.replace('0.3', '0.04')} 0%, transparent 70%)`,
                                    pointerEvents: 'none'
                                }}
                            />

                            {/* Icon Wrapper */}
                            <div
                                className={`${type.iconColor}`}
                                style={{
                                    width: '3.25rem',
                                    height: '3.25rem',
                                    borderRadius: 'var(--radius-md)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1.5rem',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {type.icon}
                            </div>

                            {/* Badge */}
                            <span
                                style={{
                                    display: 'inline-block',
                                    padding: '0.25rem 0.75rem',
                                    background: type.id === 'showrooms' ? 'rgba(59,130,246,0.08)' :
                                        type.id === 'individuals' ? 'rgba(16,185,129,0.08)' : 'rgba(236,72,153,0.08)',
                                    color: type.id === 'showrooms' ? 'var(--blue-300)' :
                                        type.id === 'individuals' ? 'var(--green-400)' : '#f472b6',
                                    borderRadius: 'var(--radius-sm)',
                                    fontSize: '0.72rem',
                                    fontWeight: 700,
                                    marginBottom: '0.75rem'
                                }}
                            >
                                {type.badge}
                            </span>

                            {/* Title */}
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'white', marginBottom: '0.75rem', textAlign: 'right' }}>
                                {type.title}
                            </h3>

                            {/* Description */}
                            <p style={{ color: 'var(--silver-400)', fontSize: '0.9rem', lineHeight: '1.75', margin: 0, textAlign: 'right' }}>
                                {type.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* 3. Trust Statistics */}
                <div
                    style={{
                        borderTop: '1px solid rgba(255,255,255,0.04)',
                        borderBottom: '1px solid rgba(255,255,255,0.04)',
                        padding: '2.5rem 0',
                        margin: '4rem 0 5rem',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '2.5rem',
                        textAlign: 'center',
                        background: 'rgba(255,255,255,0.003)'
                    }}
                >
                    {[
                        { count: '+500', label: 'تقرير فحص منجز بنجاح', sub: 'بيانات كاملة وموثوقة' },
                        { count: '+200', label: 'عميل وصاحب معرض يثق بنا', sub: 'شراكات مبنية على الصدق' },
                        { count: '98%', label: 'مستوى الدقة والمطابقة', sub: 'مباشر من قواعد البيانات الكورية' }
                    ].map((stat, idx) => (
                        <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div className="gradient-text" style={{ fontSize: '2.5rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '0.35rem' }}>
                                {stat.count}
                            </div>
                            <div style={{ color: 'white', fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.15rem' }}>
                                {stat.label}
                            </div>
                            <div style={{ color: 'var(--silver-500)', fontSize: '0.75rem', fontWeight: 500 }}>
                                {stat.sub}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Section title for testimonials */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <span style={{ color: 'var(--silver-500)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>آراء حقيقية</span>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white', marginTop: '0.5rem' }}>
                        قصص نجاح من واقع تجربة عملائنا
                    </h3>
                </div>

                {/* Testimonials Grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '1.5rem'
                    }}
                    role="list"
                >
                    {testimonials.map((item, idx) => (
                        <div
                            key={idx}
                            className="customer-card noise-bg"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                textAlign: 'right',
                                background: 'rgba(255,255,255,0.01)',
                                border: '1px solid rgba(255,255,255,0.03)',
                                borderRadius: 'var(--radius-lg)',
                                padding: '2rem 1.75rem',
                                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                position: 'relative'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                                e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.03)';
                                e.currentTarget.style.background = 'rgba(255,255,255,0.01)';
                            }}
                            role="listitem"
                        >
                            {/* Star ratings & Customer Type Label */}
                            <div style={{ display: 'flex', justifycontent: 'space-between', width: '100%', alignItems: 'center', marginBottom: '1.25rem' }}>
                                <div style={{ display: 'flex', gap: '2px' }}>
                                    {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                                </div>
                                <span style={{ color: 'var(--blue-300)', fontSize: '0.7rem', fontWeight: 700, padding: '0.2rem 0.5rem', background: 'rgba(59,130,246,0.06)', borderRadius: '4px' }}>
                                    {item.type}
                                </span>
                            </div>

                            {/* Client Quote */}
                            <blockquote style={{ fontSize: '0.88rem', color: 'var(--silver-300)', lineHeight: '1.8', fontStyle: 'italic', margin: '0 0 1.5rem', fontWeight: 500, flexGrow: 1 }}>
                                "{item.quote}"
                            </blockquote>

                            {/* User Avatar + Profile details */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginTop: 'auto', width: '100%', borderTop: '1px solid rgba(255,255,255,0.03)', paddingTop: '1rem' }}>
                                <div
                                    style={{
                                        width: '2.5rem',
                                        height: '2.5rem',
                                        borderRadius: '50%',
                                        background: 'rgba(255,255,255,0.02)',
                                        border: '1px solid rgba(255,255,255,0.05)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <UserIcon />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'white', margin: 0 }}>
                                        {item.name}
                                    </h4>
                                    <p style={{ fontSize: '0.74rem', color: 'var(--silver-500)', fontWeight: 600, margin: 0 }}>
                                        {item.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 4. Trust Message */}
                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <p style={{ color: 'var(--silver-400)', fontSize: '0.9rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--green-500)', display: 'inline-block' }} className="pulse-glow" />
                        ثقة عملائنا هي أساس نجاحنا.
                    </p>
                </div>

            </div>
        </section>
    );
}
