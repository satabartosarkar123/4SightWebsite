import { motion } from 'framer-motion';
import { Target, Rocket, Shield, TrendingUp } from 'lucide-react';
import Card from '../ui/Card';
import './EthosSection.css';

// SIGO Framework - Strategy, Implementation, Governance, Optimization
const ethosStatements = [
    {
        id: 1,
        icon: Target,
        title: 'Strategy',
        description: 'We believe in vision-first thinking. Every solution begins with a clear strategic roadmap that aligns technology with your business objectives.',
    },
    {
        id: 2,
        icon: Rocket,
        title: 'Implementation',
        description: 'Ideas are only as powerful as their execution. We deliver precision implementation that transforms strategic plans into tangible results.',
    },
    {
        id: 3,
        icon: Shield,
        title: 'Governance',
        description: 'Trust is built on transparency. Our governance framework ensures accountability, compliance, and ethical decision-making at every level.',
    },
    {
        id: 4,
        icon: TrendingUp,
        title: 'Optimization',
        description: 'Excellence is a continuous journey. We embrace iterative improvement, leveraging data insights to constantly elevate performance.',
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
