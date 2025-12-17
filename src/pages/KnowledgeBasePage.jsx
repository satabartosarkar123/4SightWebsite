import { motion } from 'framer-motion';
import { ArticleFeed } from '../components/knowledge';
import './KnowledgeBasePage.css';

const KnowledgeBasePage = () => {
    // In production, this would fetch from API:
    // const { data, loading, error } = useFetch('/api/content/articles');

    return (
        <div className="knowledge-page">
            <section className="knowledge-hero">
                <div className="knowledge-hero-container">
                    <motion.h1
                        className="knowledge-hero-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Knowledge <span className="text-gradient">Base</span>
                    </motion.h1>
                    <motion.p
                        className="knowledge-hero-subtitle"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Insights, guides, and best practices for data-led business automation
                    </motion.p>
                </div>
            </section>

            <section className="knowledge-content">
                <div className="knowledge-content-container">
                    <ArticleFeed />
                </div>
            </section>
        </div>
    );
};

export default KnowledgeBasePage;
