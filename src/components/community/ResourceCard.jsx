import { motion } from 'framer-motion';
import { FileText, Video, Layout, ExternalLink } from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import './ResourceCard.css';

const resourceTypeConfig = {
    guide: {
        icon: FileText,
        label: 'Guide',
        variant: 'primary',
    },
    video: {
        icon: Video,
        label: 'Video',
        variant: 'secondary',
    },
    template: {
        icon: Layout,
        label: 'Template',
        variant: 'success',
    },
};

const ResourceCard = ({
    title,
    description,
    type = 'guide',
    url,
    index = 0,
}) => {
    const config = resourceTypeConfig[type] || resourceTypeConfig.guide;
    const Icon = config.icon;

    const handleClick = () => {
        if (url) {
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
                hover
                padding="lg"
                className="resource-card"
                onClick={handleClick}
            >
                <div className="resource-header">
                    <Badge variant={config.variant} size="sm">
                        <Icon size={12} />
                        {config.label}
                    </Badge>
                </div>

                <h3 className="resource-title">{title}</h3>
                <p className="resource-description">{description}</p>

                <div className="resource-footer">
                    <span className="resource-link">
                        View Resource
                        <ExternalLink size={14} />
                    </span>
                </div>
            </Card>
        </motion.div>
    );
};

export default ResourceCard;
