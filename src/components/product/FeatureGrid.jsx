import { motion } from 'framer-motion';
import { Target, Rocket, Shield, TrendingUp, BarChart3, Layers } from 'lucide-react';
import FeatureCard from './FeatureCard';
import './FeatureGrid.css';

// SIGO Framework + Analytics & Integration
const features = [
    {
        id: 1,
        icon: Target,
        title: 'Strategy',
        description: 'Define your vision and roadmap with data-driven strategic planning. Align your SEO objectives with business goals through comprehensive market analysis and competitive intelligence.',
    },
    {
        id: 2,
        icon: Rocket,
        title: 'Implementation',
        description: 'Execute your strategy with precision using our cutting-edge automation tools. From keyword research to content optimization, deploy changes seamlessly across your digital ecosystem.',
    },
    {
        id: 3,
        icon: Shield,
        title: 'Governance',
        description: 'Ensure compliance and maintain control with comprehensive audit trails and approval workflows. Monitor policy adherence and manage access with enterprise-grade security protocols.',
    },
    {
        id: 4,
        icon: TrendingUp,
        title: 'Optimization',
        description: 'Continuously improve performance through AI-powered insights and real-time analytics. Identify opportunities, refine strategies, and maximize ROI with iterative optimization cycles.',
    },
    {
        id: 5,
        icon: BarChart3,
        title: 'Analytics',
        description: 'Transform raw data into actionable intelligence with advanced reporting and visualization. Track KPIs, measure campaign effectiveness, and uncover hidden patterns in your data.',
    },
    {
        id: 6,
        icon: Layers,
        title: 'Integration',
        description: 'Connect seamlessly with your existing tools and platforms through our extensive API ecosystem. Unify your tech stack and enable smooth data flow across all your systems.',
    },
];

const FeatureGrid = () => {
    return (
        <section className="features-section">
            <div className="features-container">
                <motion.div
                    className="features-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="features-title">
                        Powerful <span className="text-gradient">Features</span>
                    </h2>
                    <p className="features-subtitle">
                        Everything you need to transform your business operations
                    </p>
                </motion.div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={feature.id}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureGrid;
