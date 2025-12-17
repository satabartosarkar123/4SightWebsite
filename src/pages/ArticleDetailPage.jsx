import { useParams } from 'react-router-dom';
import { ArticleDetail } from '../components/knowledge';

// Mock article data for demo - in production this would come from API
const mockArticles = {
    'getting-started-with-seo-automation': {
        id: '1',
        slug: 'getting-started-with-seo-automation',
        title: 'Getting Started with SEO Automation: A Complete Guide',
        excerpt: 'Learn how to leverage automation to supercharge your SEO efforts.',
        author: { name: 'Alex Johnson', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' },
        publishedDate: '2024-12-10',
        readTime: '8 min read',
        coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
        content: `
      <p>SEO automation is transforming how businesses approach search engine optimization. By leveraging intelligent tools and workflows, you can achieve better results with less manual effort.</p>
      
      <h2>Why Automate Your SEO?</h2>
      <p>Manual SEO tasks are time-consuming and prone to human error. Automation allows you to:</p>
      <ul>
        <li>Scale your SEO efforts across thousands of pages</li>
        <li>Maintain consistency in optimization standards</li>
        <li>React quickly to algorithm changes</li>
        <li>Focus on strategy while tools handle execution</li>
      </ul>
      
      <h2>Key Areas for Automation</h2>
      
      <h3>Keyword Research</h3>
      <p>Automated keyword discovery tools can analyze competitors, search trends, and user intent to surface high-value opportunities you might miss manually.</p>
      
      <h3>Content Optimization</h3>
      <p>AI-powered tools can analyze your content against top-ranking pages and provide specific recommendations for improvement.</p>
      
      <h3>Technical SEO Monitoring</h3>
      <p>Automated crawlers can continuously monitor your site for issues like broken links, slow pages, and indexing problems.</p>
      
      <h2>Getting Started</h2>
      <p>Begin by identifying your most time-consuming SEO tasks. These are prime candidates for automation. Start small, measure results, and gradually expand your automation toolkit.</p>
      
      <blockquote>
        "The best SEO automation doesn't replace human strategy—it amplifies it."
      </blockquote>
      
      <p>Ready to transform your SEO workflow? Explore how 4Sight can help you automate intelligently.</p>
    `,
    },
    'data-driven-decision-making': {
        id: '2',
        slug: 'data-driven-decision-making',
        title: 'The Power of Data-Driven Decision Making in Modern Business',
        excerpt: 'Discover how leading organizations are using data analytics to make smarter decisions.',
        author: { name: 'Maria Garcia', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face' },
        publishedDate: '2024-12-08',
        readTime: '6 min read',
        coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
        content: `
      <p>In today's competitive landscape, intuition alone isn't enough. Organizations that embrace data-driven decision making consistently outperform their peers.</p>
      
      <h2>The Data Advantage</h2>
      <p>Data-driven companies are 23 times more likely to acquire customers, 6 times more likely to retain them, and 19 times more likely to be profitable.</p>
      
      <h2>Building a Data Culture</h2>
      <p>Success requires more than tools—it requires a cultural shift toward evidence-based thinking at all levels of the organization.</p>
      
      <h3>Key Principles</h3>
      <ul>
        <li>Make data accessible to decision-makers</li>
        <li>Invest in data literacy training</li>
        <li>Establish clear metrics for success</li>
        <li>Create feedback loops to measure outcomes</li>
      </ul>
      
      <p>Start your journey toward data-driven excellence today.</p>
    `,
    },
};

const ArticleDetailPage = () => {
    const { slug } = useParams();

    // In production, fetch from API:
    // const { data, loading, error } = useFetch(`/api/content/articles/${slug}`);

    const article = mockArticles[slug];

    return (
        <ArticleDetail
            article={article}
            loading={false}
            error={article ? null : 'Article not found'}
        />
    );
};

export default ArticleDetailPage;
