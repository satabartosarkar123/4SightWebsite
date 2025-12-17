import { motion } from 'framer-motion';
import { Calculator, LineChart, FileSearch, Wrench, Bot, Database } from 'lucide-react';
import { PollCard, ToolCard, ResourceCard } from '../components/community';
import './CommunityPage.css';

// Mock data - would come from backend in production
const polls = [
    {
        id: 1,
        question: 'What is your biggest challenge with SEO automation?',
        options: [
            { text: 'Getting started / setup', votes: 234 },
            { text: 'Integration with existing tools', votes: 189 },
            { text: 'Measuring ROI', votes: 156 },
            { text: 'Content quality concerns', votes: 98 },
        ],
        totalVotes: 677,
    },
    {
        id: 2,
        question: 'How often do you review your automation workflows?',
        options: [
            { text: 'Weekly', votes: 312 },
            { text: 'Monthly', votes: 456 },
            { text: 'Quarterly', votes: 187 },
            { text: 'Rarely', votes: 89 },
        ],
        totalVotes: 1044,
    },
];

const tools = [
    {
        id: 1,
        name: 'ROI Calculator',
        description: 'Calculate the potential return on investment from implementing automation.',
        icon: Calculator,
        url: '#',
    },
    {
        id: 2,
        name: 'SEO Analyzer',
        description: 'Analyze your website SEO performance and get actionable recommendations.',
        icon: FileSearch,
        url: '#',
    },
    {
        id: 3,
        name: 'Trend Tracker',
        description: 'Track industry trends and benchmark your performance.',
        icon: LineChart,
        url: '#',
        comingSoon: true,
    },
    {
        id: 4,
        name: 'AI Assistant',
        description: 'Get personalized guidance from our AI-powered assistant.',
        icon: Bot,
        url: '#',
        comingSoon: true,
    },
];

const resources = [
    {
        id: 1,
        title: 'SEO Automation Playbook',
        description: 'A comprehensive guide to implementing SEO automation in your organization.',
        type: 'guide',
        url: '#',
    },
    {
        id: 2,
        title: 'Getting Started with 4Sight',
        description: 'Video walkthrough of setting up your first automation workflow.',
        type: 'video',
        url: '#',
    },
    {
        id: 3,
        title: 'Content Calendar Template',
        description: 'Pre-built template for planning and scheduling automated content.',
        type: 'template',
        url: '#',
    },
    {
        id: 4,
        title: 'Data Governance Framework',
        description: 'Best practices for ensuring data quality in automated systems.',
        type: 'guide',
        url: '#',
    },
];

const CommunityPage = () => {
    return (
        <div className="community-page">
            {/* Hero */}
            <section className="community-hero">
                <div className="community-hero-container">
                    <motion.h1
                        className="community-hero-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Community <span className="text-gradient">Hub</span>
                    </motion.h1>
                    <motion.p
                        className="community-hero-subtitle"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Connect, learn, and grow with the 4Sight community
                    </motion.p>
                </div>
            </section>

            {/* Polls Section */}
            <section className="community-section">
                <div className="community-section-container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="section-title">Community Polls</h2>
                        <p className="section-subtitle">See what the community is thinking</p>
                    </motion.div>

                    <div className="polls-grid">
                        {polls.map((poll, index) => (
                            <PollCard
                                key={poll.id}
                                question={poll.question}
                                options={poll.options}
                                totalVotes={poll.totalVotes}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Tools Section */}
            <section className="community-section community-section-alt">
                <div className="community-section-container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="section-title">Free Tools</h2>
                        <p className="section-subtitle">Helpful tools for your automation journey</p>
                    </motion.div>

                    <div className="tools-grid">
                        {tools.map((tool, index) => (
                            <ToolCard
                                key={tool.id}
                                name={tool.name}
                                description={tool.description}
                                icon={tool.icon}
                                url={tool.url}
                                comingSoon={tool.comingSoon}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Resources Section */}
            <section className="community-section">
                <div className="community-section-container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="section-title">Resources</h2>
                        <p className="section-subtitle">Guides, videos, and templates to help you succeed</p>
                    </motion.div>

                    <div className="resources-grid">
                        {resources.map((resource, index) => (
                            <ResourceCard
                                key={resource.id}
                                title={resource.title}
                                description={resource.description}
                                type={resource.type}
                                url={resource.url}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CommunityPage;
