import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, User, ArrowRight } from 'lucide-react';
import Card from '../ui/Card';
import './ArticleCard.css';

const ArticleCard = ({
    slug,
    title,
    excerpt,
    author,
    publishedDate,
    readTime,
    coverImage,
    index = 0,
}) => {
    const formattedDate = new Date(publishedDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Link to={`/knowledge/${slug}`} className="article-card-link">
                <Card variant="default" hover padding="none" className="article-card">
                    {coverImage && (
                        <div className="article-image-wrapper">
                            <img src={coverImage} alt={title} className="article-image" />
                            <div className="article-image-overlay" />
                        </div>
                    )}
                    <div className="article-content">
                        <h3 className="article-title">{title}</h3>
                        <p className="article-excerpt">{excerpt}</p>

                        <div className="article-meta">
                            <div className="article-author">
                                {author.avatar ? (
                                    <img src={author.avatar} alt={author.name} className="author-avatar" />
                                ) : (
                                    <div className="author-avatar-placeholder">
                                        <User size={16} />
                                    </div>
                                )}
                                <span className="author-name">{author.name}</span>
                            </div>

                            <div className="article-info">
                                <span className="article-date">{formattedDate}</span>
                                <span className="article-divider">·</span>
                                <span className="article-read-time">
                                    <Clock size={14} />
                                    {readTime}
                                </span>
                            </div>
                        </div>

                        <div className="article-cta">
                            <span>Read More</span>
                            <ArrowRight size={16} />
                        </div>
                    </div>
                </Card>
            </Link>
        </motion.div>
    );
};

export default ArticleCard;
