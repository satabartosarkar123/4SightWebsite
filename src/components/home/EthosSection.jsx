import { motion } from 'framer-motion';
import { Zap, Target, Shield, TrendingUp } from 'lucide-react';
import Card from '../ui/Card';
import './EthosSection.css';

// Static configuration - can be moved to config file later
const ethosStatements = [
    {
        id: 1,
        icon: Zap,
        title: 'Data-Led Automation',
        description: 'Transform raw data into actionable intelligence with our cutting-edge automation solutions that learn and adapt to your business needs.',
    },
    {
        id: 2,
        icon: Shield,
        title: 'Governance Transparency',
        description: 'Enhance visibility into your organizational processes with comprehensive audit trails and real-time compliance monitoring.',
    },
    {
        id: 3,
        icon: Target,
        title: 'Strategic Alignment',
        description: 'Align your operational metrics with strategic objectives through intelligent dashboards and predictive analytics.',
    },
    {
        id: 4,
        icon: TrendingUp,
        title: 'Scalable Growth',
        description: 'Build infrastructure that grows with your ambitions. Our solutions scale seamlessly from startup to enterprise.',
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

const EthosSection = () => {
    return (
        <section className="ethos-section">
            <div className="ethos-container">
                <motion.div
                    className="ethos-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="ethos-title">
                        Our <span className="text-gradient">Philosophy</span>
                    </h2>
                    <p className="ethos-subtitle">
                        Building the foundation for data-driven excellence in business operations
                    </p>
                </motion.div>

                <motion.div
                    className="ethos-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {ethosStatements.map((statement) => (
                        <motion.div key={statement.id} variants={itemVariants}>
                            <Card
                                variant="glass"
                                hover
                                padding="lg"
                                className="ethos-card"
                            >
                                <div className="ethos-icon-wrapper">
                                    <statement.icon size={28} />
                                </div>
                                <h3 className="ethos-card-title">{statement.title}</h3>
                                <p className="ethos-card-description">{statement.description}</p>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default EthosSection;
