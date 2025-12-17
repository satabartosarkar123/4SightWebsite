import { useRef, Children } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './AntiGravityScroll.css';

/**
 * Anti-Gravity Scroll System - Card Stack Version
 * 
 * - First section is always visible (no animation)
 * - Next sections slide UP and COVER the previous section
 * - Previous sections stay in place (don't fade/move)
 * - Only incoming cards animate (fade in + slide up)
 */
const AntiGravityScroll = ({ children }) => {
    const containerRef = useRef(null);
    const sections = Children.toArray(children);
    const totalSections = sections.length;

    // Container height = sections * viewport height
    const containerHeight = `${totalSections * 100}vh`;

    return (
        <div
            className="antigravity-stack-container"
            ref={containerRef}
            style={{ height: containerHeight }}
        >
            {sections.map((section, index) => (
                <StackingCard
                    key={index}
                    index={index}
                    totalSections={totalSections}
                    containerRef={containerRef}
                    isFirst={index === 0}
                >
                    {section}
                </StackingCard>
            ))}

            {/* Progress Indicator */}
            <ProgressDots containerRef={containerRef} totalSections={totalSections} />
        </div>
    );
};

/**
 * Individual card that stacks over previous cards
 */
const StackingCard = ({ children, index, totalSections, containerRef, isFirst }) => {
    const cardRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    // Calculate when this card should start/end animating
    const cardStart = index / totalSections;
    const cardEnd = (index + 1) / totalSections;

    // First card: always visible, no animation
    // Other cards: slide up from below and cover the previous card

    // Y position: starts at 100% (below viewport), moves to 0% (covers previous)
    const y = useTransform(
        scrollYProgress,
        [cardStart - 0.001, cardStart, cardEnd],
        isFirst ? ['0%', '0%', '0%'] : ['100%', '0%', '0%']
    );

    // Opacity: first card always 1, others fade in as they slide up
    const opacity = useTransform(
        scrollYProgress,
        [cardStart - 0.001, cardStart, cardStart + 0.15],
        isFirst ? [1, 1, 1] : [0, 0.3, 1]
    );

    // Subtle scale for incoming cards (slightly smaller when entering)
    const scale = useTransform(
        scrollYProgress,
        [cardStart, cardStart + 0.1],
        isFirst ? [1, 1] : [0.95, 1]
    );

    // Z-index based on position - higher index = higher z-index
    const zIndex = index + 1;

    return (
        <motion.div
            ref={cardRef}
            className="antigravity-stack-card"
            style={{
                y,
                opacity,
                scale,
                zIndex,
                top: isFirst ? 0 : 0,
            }}
        >
            <div className="antigravity-stack-card-inner">
                {children}
            </div>
        </motion.div>
    );
};

/**
 * Progress dots indicator
 */
const ProgressDots = ({ containerRef, totalSections }) => {
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    return (
        <div className="antigravity-stack-dots">
            {Array.from({ length: totalSections }).map((_, index) => (
                <ProgressDot
                    key={index}
                    index={index}
                    totalSections={totalSections}
                    scrollProgress={scrollYProgress}
                />
            ))}
        </div>
    );
};

const ProgressDot = ({ index, totalSections, scrollProgress }) => {
    const isActive = useTransform(
        scrollProgress,
        (v) => {
            const current = Math.floor(v * totalSections);
            return current === index || (index === totalSections - 1 && v >= 0.99);
        }
    );

    return (
        <motion.div
            className="antigravity-stack-dot"
            style={{
                backgroundColor: useTransform(isActive, (active) =>
                    active ? 'var(--accent-primary)' : 'transparent'
                ),
                borderColor: useTransform(isActive, (active) =>
                    active ? 'var(--accent-primary)' : 'var(--border-color)'
                ),
                boxShadow: useTransform(isActive, (active) =>
                    active ? 'var(--glow-primary)' : 'none'
                ),
            }}
        />
    );
};

export default AntiGravityScroll;
