import { useRef, useEffect, useState, Children } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import './AntiGravityScroll.css';

/**
 * Anti-Gravity Scroll System - Continuous Version
 * 
 * Premium scroll experience where sections transition smoothly in 3D depth.
 * Transitions are CONTINUOUS and tied directly to scroll position,
 * not discrete section-to-section jumps.
 */
const AntiGravityScroll = ({ children }) => {
    const containerRef = useRef(null);
    const sections = Children.toArray(children);
    const totalSections = sections.length;

    // Enable native scrolling - we'll use scroll position to drive transforms
    // Container height = sections * viewport height
    const containerHeight = `${totalSections * 100}vh`;

    return (
        <div
            className="antigravity-container-smooth"
            ref={containerRef}
            style={{ height: containerHeight }}
        >
            <div className="antigravity-viewport-smooth">
                {sections.map((section, index) => (
                    <AntiGravitySection
                        key={index}
                        index={index}
                        totalSections={totalSections}
                        containerRef={containerRef}
                    >
                        {section}
                    </AntiGravitySection>
                ))}
            </div>

            {/* Progress Indicator */}
            <ScrollProgress containerRef={containerRef} totalSections={totalSections} />
        </div>
    );
};

/**
 * Individual section with scroll-driven 3D transforms
 */
const AntiGravitySection = ({ children, index, totalSections, containerRef }) => {
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    // Calculate this section's scroll range (0 to 1 mapped to its portion)
    const sectionStart = index / totalSections;
    const sectionEnd = (index + 1) / totalSections;
    const sectionMid = (sectionStart + sectionEnd) / 2;

    // Smooth spring for premium feel
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    // Transform calculations for each section
    // When scroll is at this section's range, it should be fully visible
    // Before its range: below viewport, scaled down, blurred
    // After its range: above viewport, scaled down, blurred, receded

    // Y position: starts at 100% (below), moves to 0% (visible), then to -20% (receded above)
    const y = useTransform(
        smoothProgress,
        [sectionStart - 0.15, sectionStart, sectionMid, sectionEnd, sectionEnd + 0.15],
        ['100%', '20%', '0%', '-10%', '-30%']
    );

    // Scale: starts small, becomes full at mid, shrinks as it recedes
    const scale = useTransform(
        smoothProgress,
        [sectionStart - 0.15, sectionStart, sectionMid, sectionEnd, sectionEnd + 0.15],
        [0.8, 0.9, 1, 0.95, 0.85]
    );

    // Opacity: fades in as it enters, fades out as it recedes
    const opacity = useTransform(
        smoothProgress,
        [sectionStart - 0.1, sectionStart, sectionMid, sectionEnd, sectionEnd + 0.1],
        [0, 0.7, 1, 0.6, 0]
    );

    // Z-axis (depth): comes forward then recedes
    const z = useTransform(
        smoothProgress,
        [sectionStart - 0.15, sectionStart, sectionMid, sectionEnd, sectionEnd + 0.15],
        [-200, -100, 0, -80, -250]
    );

    // Blur: sharp when active, blurred when entering/exiting
    const blur = useTransform(
        smoothProgress,
        [sectionStart - 0.1, sectionStart + 0.05, sectionMid, sectionEnd - 0.05, sectionEnd + 0.1],
        [12, 4, 0, 3, 10]
    );

    // Combine blur into filter string
    const [filterValue, setFilterValue] = useState('blur(0px)');

    useEffect(() => {
        const unsubscribe = blur.on('change', (v) => {
            setFilterValue(`blur(${Math.max(0, v)}px)`);
        });
        return unsubscribe;
    }, [blur]);

    return (
        <motion.div
            className="antigravity-section-smooth"
            style={{
                y,
                scale,
                opacity,
                z,
                filter: filterValue,
            }}
        >
            <div className="antigravity-section-inner">
                {children}
            </div>
        </motion.div>
    );
};

/**
 * Scroll progress indicator (optional visual feedback)
 */
const ScrollProgress = ({ containerRef, totalSections }) => {
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    // Calculate which section is currently most visible
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const unsubscribe = smoothProgress.on('change', (v) => {
            const newIndex = Math.min(
                Math.floor(v * totalSections),
                totalSections - 1
            );
            setActiveIndex(newIndex);
        });
        return unsubscribe;
    }, [smoothProgress, totalSections]);

    return (
        <div className="antigravity-progress">
            {Array.from({ length: totalSections }).map((_, index) => (
                <div
                    key={index}
                    className={`antigravity-progress-dot ${index === activeIndex ? 'active' : ''}`}
                />
            ))}
        </div>
    );
};

export default AntiGravityScroll;
