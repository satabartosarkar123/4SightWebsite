import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Twitter, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import './SocialSidebar.css';

const socialLinks = [
    {
        icon: Linkedin,
        href: 'https://linkedin.com/company/4sight',
        label: 'LinkedIn',
        color: '#0A66C2'
    },
    {
        icon: MessageCircle,
        href: 'https://reddit.com/r/4sight',
        label: 'Reddit',
        color: '#FF4500'
    },
    {
        icon: Twitter,
        href: 'https://twitter.com/4sight',
        label: 'Twitter',
        color: '#1DA1F2'
    },
];

const sidebarVariants = {
    closed: {
        x: 60,
        transition: {
            type: 'spring',
            stiffness: 400,
            damping: 40,
        },
    },
    open: {
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 400,
            damping: 40,
        },
    },
};

const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.1,
            type: 'spring',
            stiffness: 300,
            damping: 25,
        },
    }),
};

const SocialSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <motion.div
            className="social-sidebar"
            variants={sidebarVariants}
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
        >
            {/* Toggle Button */}
            <motion.button
                className="social-sidebar-toggle"
                onClick={toggleSidebar}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={isOpen ? 'Close social links' : 'Open social links'}
                aria-expanded={isOpen}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={isOpen ? 'close' : 'open'}
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.2 }}
                    >
                        {isOpen ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                    </motion.div>
                </AnimatePresence>
            </motion.button>

            {/* Social Links */}
            <div className="social-sidebar-content">
                {socialLinks.map((social, index) => (
                    <motion.a
                        key={social.label}
                        href={social.href}
                        className="social-sidebar-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        custom={index}
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.15,
                            color: social.color,
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <social.icon size={20} />
                        <span className="social-sidebar-tooltip">{social.label}</span>
                    </motion.a>
                ))}
            </div>
        </motion.div>
    );
};

export default SocialSidebar;
