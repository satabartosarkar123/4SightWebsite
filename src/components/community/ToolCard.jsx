import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import './ToolCard.css';

const ToolCard = ({
    name,
    description,
    icon: Icon,
    url,
    comingSoon = false,
    index = 0,
}) => {
    const handleClick = () => {
        if (url && !comingSoon) {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Card
                variant="glass"
                hover={!comingSoon}
                padding="lg"
                className={`tool-card ${comingSoon ? 'tool-card-disabled' : ''}`}
                onClick={!comingSoon ? handleClick : undefined}
            >
                <div className="tool-icon-wrapper">
                    {Icon && <Icon size={28} />}
                </div>

                <div className="tool-content">
                    <div className="tool-header">
                        <h3 className="tool-name">{name}</h3>
                        {comingSoon && (
                            <Badge variant="secondary" size="sm">Coming Soon</Badge>
                        )}
                    </div>
                    <p className="tool-description">{description}</p>
                </div>

                {url && !comingSoon && (
                    <div className="tool-link">
                        <ExternalLink size={18} />
                    </div>
                )}
            </Card>
        </motion.div>
    );
};

export default ToolCard;
