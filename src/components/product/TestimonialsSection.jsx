import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Card from '../ui/Card';
import './TestimonialsSection.css';

// Static testimonials - can be fed from backend later
const testimonials = [
    {
        id: 1,
        quote: "4Sight has completely transformed how we approach SEO. The automation features have saved us countless hours while improving our results by 300%.",
        name: "Sarah Chen",
        role: "Head of Marketing",
        company: "TechFlow Inc.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    },
    {
        id: 2,
        quote: "The governance transparency features gave our board complete confidence in our decision-making processes. Essential for any modern enterprise.",
        name: "Michael Rodriguez",
        role: "CEO",
        company: "Governance Solutions",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
        id: 3,
        quote: "Implementation was seamless and the ROI was visible within the first month. The data-driven insights have become central to our strategy.",
        name: "Emily Watson",
        role: "Director of Operations",
        company: "ScaleUp Partners",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

const TestimonialsSection = () => {
    return (
        <section className="testimonials-section">
            <div className="testimonials-container">
                <motion.div
                    className="testimonials-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="testimonials-title">
                        Happy <span className="text-gradient">Customers</span>
                    </h2>
                    <p className="testimonials-subtitle">
                        See what industry leaders are saying about 4Sight
                    </p>
                </motion.div>

                <motion.div
                    className="testimonials-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {testimonials.map((testimonial) => (
                        <motion.div key={testimonial.id} variants={itemVariants}>
                            <Card variant="glass" hover padding="lg" className="testimonial-card">
                                <div className="quote-icon">
                                    <Quote size={24} />
                                </div>
                                <p className="testimonial-quote">{testimonial.quote}</p>
                                <div className="testimonial-author">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="author-avatar"
                                    />
                                    <div className="author-info">
                                        <span className="author-name">{testimonial.name}</span>
                                        <span className="author-role">
                                            {testimonial.role}, {testimonial.company}
                                        </span>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
