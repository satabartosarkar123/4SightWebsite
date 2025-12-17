import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            className="theme-toggle"
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            <motion.div
                className="theme-toggle-icon"
                initial={false}
                animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
                {theme === 'dark' ? (
                    <Moon size={18} />
                ) : (
                    <Sun size={18} />
                )}
            </motion.div>
        </motion.button>
    );
};

export default ThemeToggle;
