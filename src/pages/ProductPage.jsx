import { motion } from 'framer-motion';
import { ProductDemoVideo, FeatureGrid, TestimonialsSection } from '../components/product';
import { Link } from 'react-router-dom';
import { Button, AntiGravityScroll } from '../components/ui';
import { Footer } from '../components/layout';
import { ArrowRight } from 'lucide-react';
import './ProductPage.css';

// Hero Section Component
const ProductHero = () => (
    <section className="product-hero">
        <div className="product-hero-container">
            <motion.h1
                className="product-hero-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Transform Your Business with
                <span className="text-gradient"> 4Sight</span>
            </motion.h1>
            <motion.p
                className="product-hero-subtitle"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                End-to-end automation solutions designed for modern enterprises
            </motion.p>
        </div>
    </section>
);

// CTA Section Component
const ProductCTA = () => (
    <section className="product-cta-section">
        <div className="product-cta-container">
            <motion.div
                className="product-cta-content"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="product-cta-title">
                    Ready to Get Started?
                </h2>
                <p className="product-cta-subtitle">
                    Join hundreds of enterprises already transforming their operations with 4Sight
                </p>
                <div className="product-cta-buttons">
                    <Link to="/#contact">
                        <Button size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
                            Contact Sales
                        </Button>
                    </Link>
                    <Link to="/knowledge">
                        <Button variant="outline" size="lg">
                            Learn More
                        </Button>
                    </Link>
                </div>
            </motion.div>
        </div>
    </section>
);

const ProductPage = () => {
    return (
        <AntiGravityScroll>
            <ProductHero />
            <ProductDemoVideo />
            <FeatureGrid />
            <TestimonialsSection />
            <ProductCTA />
            <Footer />
        </AntiGravityScroll>
    );
};

export default ProductPage;

