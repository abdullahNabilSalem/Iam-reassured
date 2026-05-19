import React, { useState, useEffect } from 'react';

const WA_NUMBER = '967770000000';
const WA_MSG = encodeURIComponent('السلام عليكم، أريد الاستفسار عن خدمة أطمئن لفحص السيارات');

export default function FloatingCTA() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const fn = () => setVisible(window.scrollY > 300);
        window.addEventListener('scroll', fn, { passive: true });
        return () => window.removeEventListener('scroll', fn);
    }, []);

    if (!visible) return null;

    return (
        <div className="floating-cta animate-fade-in" style={{ transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}>
            <a
                href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp pulse-glow"
                style={{
                    padding: '0.65rem 1.4rem',
                    fontSize: '0.85rem',
                    borderRadius: 'var(--radius-full)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 10px 30px rgba(16, 185, 129, 0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    textDecoration: 'none'
                }}
                aria-label="اطلب التقرير الفوري عبر واتساب"
            >
                {/* Custom WhatsApp Mini-SVG */}
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.534 5.845L.057 23.486a.498.498 0 00.457.514l5.9-.562A11.937 11.937 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.898 0-3.664-.543-5.157-1.48l-.365-.216-3.838.367.353-3.723-.234-.382A9.777 9.777 0 012.182 12C2.182 6.566 6.566 2.182 12 2.182S21.818 6.566 21.818 12 17.434 21.818 12 21.818z" />
                </svg>
                <span style={{ fontWeight: 700, fontSize: '0.8rem' }}>اطلب تقريرك الآن</span>
            </a>
        </div>
    );
}
