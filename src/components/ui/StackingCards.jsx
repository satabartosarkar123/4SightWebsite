import { useRef, Children, cloneElement } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './StackingCards.css';

/**
 * Wrapper component for stacking cards effect.
 * Children should be section components that will stack on scroll.
 */
const StackingCards = ({ children }) => {
    const containerRef = useRef(null);
    const childArray = Children.toArray(children);

    return (
        <div className="stacking-cards-container" ref={containerRef}>
            {childArray.map((child, index) => (
                <StackingCard
                    key={index}
                    index={index}
                    totalCards={childArray.length}
                    containerRef={containerRef}
                >
                    {child}
                </StackingCard>
            ))}
        </div>
    );
};

/**
 * Individual stacking card with scroll-triggered animations.
 */
const StackingCard = ({ children, index, totalCards, containerRef }) => {
    const cardRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ['start end', 'end start'],
    });

    // Scale down slightly as card goes behind
    const scale = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [1, 1, 0.9]
    );

    // Fade out as it goes behind
    const opacity = useTransform(
        scrollYProgress,
        [0, 0.8, 1],
        [1, 1, 0.3]
    );

    // Move up slightly to create depth effect
    const y = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [0, 0, -50]
    );

    // Calculate z-index (higher index = higher z-index)
    const zIndex = totalCards - index;

    // Calculate top offset for sticky positioning
    const topOffset = 80 + index * 20; // 80px for header + stagger

    return (
        <motion.div
            ref={cardRef}
            className="stacking-card"
            style={{
                scale,
                opacity,
                y,
                zIndex,
                top: `${topOffset}px`,
            }}
        >
            <div className="stacking-card-inner">
                {children}
            </div>
        </motion.div>
    );
};

export default StackingCards;
