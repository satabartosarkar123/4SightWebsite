import { motion } from 'framer-motion';
import { BarChart2 } from 'lucide-react';
import Card from '../ui/Card';
import './PollCard.css';

const PollCard = ({
    question,
    options,
    totalVotes,
    index = 0,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Card variant="glass" hover padding="lg" className="poll-card">
                <div className="poll-header">
                    <div className="poll-icon">
                        <BarChart2 size={20} />
                    </div>
                    <span className="poll-label">Community Poll</span>
                </div>

                <h3 className="poll-question">{question}</h3>

                <div className="poll-options">
                    {options.map((option, idx) => {
                        const percentage = totalVotes > 0
                            ? Math.round((option.votes / totalVotes) * 100)
                            : 0;

                        return (
                            <div key={idx} className="poll-option">
                                <div className="option-header">
                                    <span className="option-text">{option.text}</span>
                                    <span className="option-percentage">{percentage}%</span>
                                </div>
                                <div className="option-bar">
                                    <motion.div
                                        className="option-bar-fill"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${percentage}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.2 + idx * 0.1 }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="poll-footer">
                    <span className="poll-votes">{totalVotes.toLocaleString()} votes</span>
                </div>
            </Card>
        </motion.div>
    );
};

export default PollCard;
