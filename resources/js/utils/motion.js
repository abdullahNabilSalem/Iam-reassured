// Shared Framer Motion animation variants — single source of truth
// Import from any component: import { fadeUp, stagger, ... } from '../utils/motion';

// ─── Fade variants ───
export const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

export const fadeDown = {
    hidden: { opacity: 0, y: -30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

export const fadeLeft = {
    hidden: { opacity: 0, x: 50 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

export const fadeRight = {
    hidden: { opacity: 0, x: -50 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

export const fadeIn = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
};

export const scaleIn = {
    hidden: { opacity: 0, scale: 0.88 },
    show: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

export const scaleInSpring = {
    hidden: { opacity: 0, scale: 0.7 },
    show: {
        opacity: 1,
        scale: 1,
        transition: { type: 'spring', stiffness: 260, damping: 20 },
    },
};

// ─── Container stagger ───
export const stagger = (delayChildren = 0.1, staggerChildren = 0.1) => ({
    hidden: {},
    show: {
        transition: {
            delayChildren,
            staggerChildren,
            staggerDirection: 1,
        },
    },
});

export const staggerFast = {
    hidden: {},
    show: {
        transition: {
            delayChildren: 0.05,
            staggerChildren: 0.08,
        },
    },
};

export const staggerSlow = {
    hidden: {},
    show: {
        transition: {
            delayChildren: 0.15,
            staggerChildren: 0.12,
        },
    },
};

// ─── Card hover presets ───
export const cardHover = {
    rest: { y: 0, scale: 1, transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] } },
    hover: { y: -6, scale: 1.015, transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] } },
};

export const cardHoverSubtle = {
    rest: { y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
    hover: { y: -4, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
};

export const iconHover = {
    rest: { scale: 1, rotate: 0 },
    hover: { scale: 1.1, rotate: -4, transition: { type: 'spring', stiffness: 300, damping: 20 } },
};

// ─── Float loop ───
export const floatLoop = {
    initial: { y: 0 },
    animate: {
        y: [-8, 0, -8],
        transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
    },
};

export const floatLoopSlow = {
    initial: { y: 0 },
    animate: {
        y: [-6, 0, -6],
        transition: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
    },
};

// ─── Viewport defaults ───
export const viewport = { once: true, amount: 0.15 };
export const viewportLazy = { once: true, amount: 0.2 };
