import { motion } from 'framer-motion';
import ArticleCard from './ArticleCard';
import Skeleton from '../ui/Skeleton';
import { FileText } from 'lucide-react';
import './ArticleFeed.css';

// Mock articles - these would come from API in production
const mockArticles = [
    {
        id: '1',
        slug: 'getting-started-with-seo-automation',
        title: 'Getting Started with SEO Automation: A Complete Guide',
        excerpt: 'Learn how to leverage automation to supercharge your SEO efforts and achieve better rankings with less manual work.',
        author: { name: 'Alex Johnson', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' },
        publishedDate: '2024-12-10',
        readTime: '8 min read',
        coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
    },
    {
        id: '2',
        slug: 'data-driven-decision-making',
        title: 'The Power of Data-Driven Decision Making in Modern Business',
        excerpt: 'Discover how leading organizations are using data analytics to make smarter, faster business decisions.',
        author: { name: 'Maria Garcia', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face' },
        publishedDate: '2024-12-08',
        readTime: '6 min read',
        coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
    },
    {
        id: '3',
        slug: 'governance-transparency-best-practices',
        title: 'Best Practices for Governance Transparency in Enterprises',
        excerpt: 'Explore proven strategies for improving transparency and accountability in organizational governance.',
        author: { name: 'David Kim', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
        publishedDate: '2024-12-05',
        readTime: '10 min read',
        coverImage: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=450&fit=crop',
    },
    {
        id: '4',
        slug: 'strategic-alignment-frameworks',
        title: 'Strategic Alignment Frameworks for Growing Companies',
        excerpt: 'How to align your operational metrics with strategic objectives using proven frameworks and methodologies.',
        author: { name: 'Sarah Chen' },
        publishedDate: '2024-12-01',
        readTime: '7 min read',
        coverImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=450&fit=crop',
    },
    {
        id: '5',
        slug: 'automation-roi-metrics',
        title: 'Measuring ROI from Business Process Automation',
        excerpt: 'Key metrics and methodology for measuring the return on investment from your automation initiatives.',
        author: { name: 'James Wilson', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face' },
        publishedDate: '2024-11-28',
        readTime: '5 min read',
        coverImage: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=450&fit=crop',
    },
    {
        id: '6',
        slug: 'ai-in-content-strategy',
        title: 'How AI is Transforming Content Strategy in 2024',
        excerpt: 'Explore the latest AI-powered tools and techniques revolutionizing content creation and optimization.',
        author: { name: 'Emily Watson' },
        publishedDate: '2024-11-25',
        readTime: '9 min read',
        coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop',
    },
];

const ArticleFeed = ({ articles, loading = false, error = null }) => {
    // Use mock data if no articles provided (for demo purposes)
    const displayArticles = articles || mockArticles;

    // Loading state
    if (loading) {
        return (
            <div className="article-feed">
                <div className="article-feed-grid">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <Skeleton.Card key={index} />
                    ))}
                </div>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="article-feed">
                <div className="article-feed-error">
                    <div className="error-icon">
                        <FileText size={48} />
                    </div>
                    <h3 className="error-title">Unable to load articles</h3>
                    <p className="error-message">{error}</p>
                </div>
            </div>
        );
    }

    // Empty state
    if (!displayArticles || displayArticles.length === 0) {
        return (
            <div className="article-feed">
                <div className="article-feed-empty">
                    <div className="empty-icon">
                        <FileText size={48} />
                    </div>
                    <h3 className="empty-title">No articles yet</h3>
                    <p className="empty-message">Check back soon for new content!</p>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            className="article-feed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="article-feed-grid">
                {displayArticles.map((article, index) => (
                    <ArticleCard
                        key={article.id}
                        slug={article.slug}
                        title={article.title}
                        excerpt={article.excerpt}
                        author={article.author}
                        publishedDate={article.publishedDate}
                        readTime={article.readTime}
                        coverImage={article.coverImage}
                        index={index}
                    />
                ))}
            </div>
        </motion.div>
    );
};

export default ArticleFeed;
