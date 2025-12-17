import { motion } from 'framer-motion';
import { Cpu, BarChart3, Eye, Compass, Layers, Zap } from 'lucide-react';
import FeatureCard from './FeatureCard';
import './FeatureGrid.css';

// Static feature configuration - can be fed from backend later
const features = [
    {
        id: 1,
        icon: Cpu,
        title: 'End-to-End SEO Automation',
        description: 'Automate your entire SEO workflow from keyword research to content optimization and performance tracking.',
    },
    {
        id: 2,
        icon: BarChart3,
        title: 'Data-Driven Insights',
        description: 'Transform raw data into actionable intelligence with advanced analytics and real-time monitoring.',
    },
    {
        id: 3,
        icon: Eye,
        title: 'Governance Transparency',
        description: 'Complete visibility into decision-making processes with comprehensive audit trails and compliance tools.',
    },
    {
        id: 4,
        icon: Compass,
        title: 'Strategy Alignment',
        description: 'Align operational metrics with strategic objectives through intelligent dashboards and goal tracking.',
    },
    {
        id: 5,
        icon: Layers,
        title: 'Seamless Integration',
        description: 'Connect with your existing tools and platforms through our extensive API and native integrations.',
    },
    {
        id: 6,
        icon: Zap,
        title: 'Instant Deployment',
        description: 'Get started in minutes with our zero-configuration setup and intuitive onboarding process.',
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
