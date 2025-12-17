import { useState, useRef, useEffect, useCallback, Children, cloneElement } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './AntiGravityScroll.css';

/**
 * Anti-Gravity Scroll System
 * 
 * Premium scroll experience where sections transition in 3D depth
 * rather than traditional scrolling. Content is replaced in space,
 * not scrolled past.
 */
const AntiGravityScroll = ({ children }) => {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [transitionProgress, setTransitionProgress] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const lastWheelTime = useRef(Date.now());
    const accumulatedDelta = useRef(0);
    const touchStartY = useRef(0);

    const sections = Children.toArray(children);
    const totalSections = sections.length;

    // Transition threshold and timing
    const TRANSITION_THRESHOLD = 100; // Accumulated scroll delta to trigger transition
    const TRANSITION_DURATION = 800; // Base duration in ms
    const VELOCITY_MULTIPLIER = 0.5; // How much velocity affects speed

    // Handle wheel scroll
    const handleWheel = useCallback((e) => {
        e.preventDefault();

        if (isTransitioning) return;

        const now = Date.now();
        const timeDelta = now - lastWheelTime.current;
        lastWheelTime.current = now;

        // Accumulate scroll delta
        accumulatedDelta.current += e.deltaY;

        // Calculate velocity (faster scroll = higher velocity)
        const velocity = Math.min(Math.abs(e.deltaY) / 50, 2);

        // Update progress for visual feedback
        const progress = Math.min(Math.abs(accumulatedDelta.current) / TRANSITION_THRESHOLD, 1);
        setTransitionProgress(e.deltaY > 0 ? progress : -progress);

        // Check if we should transition
        if (Math.abs(accumulatedDelta.current) >= TRANSITION_THRESHOLD) {
            const direction = accumulatedDelta.current > 0 ? 1 : -1;
            const nextIndex = activeIndex + direction;

            if (nextIndex >= 0 && nextIndex < totalSections) {
                triggerTransition(nextIndex, velocity);
            }

            accumulatedDelta.current = 0;
            setTransitionProgress(0);
        }

        // Reset accumulated delta after inactivity
        if (timeDelta > 150) {
            accumulatedDelta.current = e.deltaY;
        }
    }, [activeIndex, totalSections, isTransitioning]);

    // Handle touch events for mobile
    const handleTouchStart = useCallback((e) => {
        touchStartY.current = e.touches[0].clientY;
    }, []);

    const handleTouchMove = useCallback((e) => {
        if (isTransitioning) return;

        const touchDelta = touchStartY.current - e.touches[0].clientY;
        const progress = Math.min(Math.abs(touchDelta) / 150, 1);
        setTransitionProgress(touchDelta > 0 ? progress : -progress);
    }, [isTransitioning]);

    const handleTouchEnd = useCallback((e) => {
        if (isTransitioning) return;

        const touchEndY = e.changedTouches[0].clientY;
        const touchDelta = touchStartY.current - touchEndY;

        if (Math.abs(touchDelta) > 80) {
            const direction = touchDelta > 0 ? 1 : -1;
            const nextIndex = activeIndex + direction;

            if (nextIndex >= 0 && nextIndex < totalSections) {
                triggerTransition(nextIndex, 1);
            }
        }

        setTransitionProgress(0);
    }, [activeIndex, totalSections, isTransitioning]);

    // Handle keyboard navigation
    const handleKeyDown = useCallback((e) => {
        if (isTransitioning) return;

        if (e.key === 'ArrowDown' || e.key === 'PageDown') {
            e.preventDefault();
            if (activeIndex < totalSections - 1) {
                triggerTransition(activeIndex + 1, 1);
            }
        } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
            e.preventDefault();
            if (activeIndex > 0) {
                triggerTransition(activeIndex - 1, 1);
            }
        }
    }, [activeIndex, totalSections, isTransitioning]);

    // Trigger section transition
    const triggerTransition = (nextIndex, velocity) => {
        setIsTransitioning(true);

        // Calculate duration based on velocity (faster scroll = shorter duration)
        const duration = TRANSITION_DURATION * (1 - velocity * VELOCITY_MULTIPLIER * 0.3);

        // Animate to next section
        setTimeout(() => {
            setActiveIndex(nextIndex);
            setIsTransitioning(false);
            setTransitionProgress(0);
        }, duration);
    };

    // Add event listeners
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        container.addEventListener('wheel', handleWheel, { passive: false });
        container.addEventListener('touchstart', handleTouchStart, { passive: true });
        container.addEventListener('touchmove', handleTouchMove, { passive: true });
        container.addEventListener('touchend', handleTouchEnd, { passive: true });
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            container.removeEventListener('wheel', handleWheel);
            container.removeEventListener('touchstart', handleTouchStart);
            container.removeEventListener('touchmove', handleTouchMove);
            container.removeEventListener('touchend', handleTouchEnd);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleWheel, handleTouchStart, handleTouchMove, handleTouchEnd, handleKeyDown]);

    // Calculate section styles based on position relative to active
    const getSectionStyle = (index) => {
        const relativeIndex = index - activeIndex;
        const isActive = index === activeIndex;
        const isNext = index === activeIndex + 1;
        const isPrev = index === activeIndex - 1;

        // Base styles for non-visible sections
        if (relativeIndex < -1 || relativeIndex > 1) {
            return {
                opacity: 0,
                scale: 0.7,
                z: -400,
                y: relativeIndex > 0 ? '100%' : '-100%',
                filter: 'blur(16px)',
                pointerEvents: 'none',
            };
        }

        // Active section
        if (isActive) {
            const exitProgress = Math.max(0, transitionProgress);
            return {
                opacity: 1 - exitProgress * 0.7,
                scale: 1 - exitProgress * 0.15,
                z: -exitProgress * 200,
                y: `${-exitProgress * 10}%`,
                filter: `blur(${exitProgress * 8}px)`,
                pointerEvents: isTransitioning ? 'none' : 'auto',
            };
        }

        // Next section (below, waiting to come up)
        if (isNext) {
            const enterProgress = Math.max(0, transitionProgress);
            return {
                opacity: 0.3 + enterProgress * 0.7,
                scale: 0.85 + enterProgress * 0.15,
                z: -150 + enterProgress * 150,
                y: `${80 - enterProgress * 80}%`,
                filter: `blur(${8 - enterProgress * 8}px)`,
                pointerEvents: 'none',
            };
        }

        // Previous section (above, receded)
        if (isPrev) {
            const returnProgress = Math.abs(Math.min(0, transitionProgress));
            return {
                opacity: 0.2 + returnProgress * 0.8,
                scale: 0.8 + returnProgress * 0.2,
                z: -250 + returnProgress * 250,
                y: `${-15 + returnProgress * 15}%`,
                filter: `blur(${10 - returnProgress * 10}px)`,
                pointerEvents: 'none',
            };
        }

        return {};
    };

    return (
        <div className="antigravity-container" ref={containerRef} tabIndex={0}>
            <div className="antigravity-viewport">
                {sections.map((section, index) => {
                    const style = getSectionStyle(index);
                    const isVisible = Math.abs(index - activeIndex) <= 1;

                    return (
                        <motion.div
                            key={index}
                            className={`antigravity-section ${index === activeIndex ? 'active' : ''}`}
                            initial={false}
                            animate={{
                                opacity: style.opacity,
                                scale: style.scale,
                                z: style.z,
                                y: style.y,
                                filter: style.filter,
                            }}
                            transition={{
                                duration: isTransitioning ? 0.8 : 0.1,
                                ease: [0.32, 0.72, 0, 1], // Custom easing for premium feel
                            }}
                            style={{
                                pointerEvents: style.pointerEvents,
                                visibility: isVisible ? 'visible' : 'hidden',
                            }}
                        >
                            {section}
                        </motion.div>
                    );
                })}
            </div>

            {/* Section Indicators */}
            <div className="antigravity-indicators">
                {sections.map((_, index) => (
                    <button
                        key={index}
                        className={`antigravity-indicator ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => !isTransitioning && triggerTransition(index, 0.5)}
                        aria-label={`Go to section ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default AntiGravityScroll;
