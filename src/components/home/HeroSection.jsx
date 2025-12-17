import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import './HeroSection.css';

const HeroSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section className="hero" ref={containerRef}>
            {/* Animated Background Grid */}
            <div className="hero-grid-bg">
                <div className="grid-lines"></div>
            </div>

            {/* Floating Orbs */}
            <div className="hero-orbs">
                <motion.div
                    className="orb orb-1"
                    animate={{
                        y: [0, -20, 0],
                        x: [0, 10, 0],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="orb orb-2"
                    animate={{
                        y: [0, 30, 0],
                        x: [0, -15, 0],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="orb orb-3"
                    animate={{
                        y: [0, -25, 0],
                        x: [0, 20, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            </div>

            {/* Main Content */}
            <motion.div
                className="hero-content"
                style={{ y, opacity }}
            >
                <motion.div
                    className="hero-badge"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Sparkles size={14} />
                    <span>Transforming Business Intelligence</span>
                </motion.div>

                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Data-Driven
                    <span className="hero-title-gradient"> Automation</span>
                    <br />
                    for Modern Enterprises
                </motion.h1>

                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Enhance transparency in governance and strategy with intelligent
                    automation solutions that scale with your business.
                </motion.p>

                <motion.div
                    className="hero-cta"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <Link to="/product">
                        <Button size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
                            Explore Product
                        </Button>
                    </Link>
                    <Link to="/#contact">
                        <Button variant="outline" size="lg">
                            Contact Us
                        </Button>
                    </Link>
                </motion.div>

                {/* Stats */}
                <motion.div
                    className="hero-stats"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="stat">
                        <span className="stat-value">10x</span>
                        <span className="stat-label">Faster Insights</span>
                    </div>
                    <div className="stat-divider" />
                    <div className="stat">
                        <span className="stat-value">99.9%</span>
                        <span className="stat-label">Accuracy</span>
                    </div>
                    <div className="stat-divider" />
                    <div className="stat">
                        <span className="stat-value">500+</span>
                        <span className="stat-label">Enterprises</span>
                    </div>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <motion.div
                    className="scroll-line"
                    animate={{ scaleY: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </motion.div>
        </section>
    );
};

export default HeroSection;
