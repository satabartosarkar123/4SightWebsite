import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';
import './ArticleDetail.css';

const ArticleDetail = ({ article, loading = false, error = null }) => {
    // Loading state
    if (loading) {
        return (
            <div className="article-detail">
                <div className="article-detail-container">
                    <div className="article-skeleton">
                        <div className="skeleton-header"></div>
                        <div className="skeleton-meta"></div>
                        <div className="skeleton-image"></div>
                        <div className="skeleton-content">
                            <div className="skeleton-line"></div>
                            <div className="skeleton-line"></div>
                            <div className="skeleton-line short"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="article-detail">
                <div className="article-detail-container">
                    <div className="article-error">
                        <h2>Article not found</h2>
                        <p>{error}</p>
                        <Link to="/knowledge" className="back-link">
                            <ArrowLeft size={18} />
                            Back to Knowledge Base
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    // No article
    if (!article) {
        return (
            <div className="article-detail">
                <div className="article-detail-container">
                    <div className="article-error">
                        <h2>Article not found</h2>
                        <Link to="/knowledge" className="back-link">
                            <ArrowLeft size={18} />
                            Back to Knowledge Base
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    const formattedDate = new Date(article.publishedDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <motion.div
            className="article-detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="article-detail-container">
                <Link to="/knowledge" className="back-link">
                    <ArrowLeft size={18} />
                    Back to Knowledge Base
                </Link>

                <article className="article">
                    <header className="article-header">
                        <h1 className="article-title">{article.title}</h1>

                        <div className="article-meta">
                            <div className="article-author">
                                {article.author.avatar ? (
                                    <img src={article.author.avatar} alt={article.author.name} className="author-avatar" />
                                ) : (
                                    <div className="author-avatar-placeholder">
                                        <User size={18} />
                                    </div>
                                )}
                                <span className="author-name">{article.author.name}</span>
                            </div>

                            <div className="article-info">
                                <span className="article-date">
                                    <Calendar size={16} />
                                    {formattedDate}
                                </span>
                                <span className="article-read-time">
                                    <Clock size={16} />
                                    {article.readTime}
                                </span>
                            </div>
                        </div>
                    </header>

                    {article.coverImage && (
                        <div className="article-cover">
                            <img src={article.coverImage} alt={article.title} />
                        </div>
                    )}

                    <div
                        className="article-body"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                </article>
            </div>
        </motion.div>
    );
};

export default ArticleDetail;
