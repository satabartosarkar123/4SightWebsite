import { motion } from 'framer-motion';
import Card from '../ui/Card';
import './FeatureCard.css';

const FeatureCard = ({ icon: Icon, title, description, index = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Card variant="glass" hover padding="lg" className="feature-card">
                <div className="feature-icon-wrapper">
                    {Icon && <Icon size={28} />}
                </div>
                <h3 className="feature-title">{title}</h3>
                <p className="feature-description">{description}</p>
            </Card>
        </motion.div>
    );
};

export default FeatureCard;
