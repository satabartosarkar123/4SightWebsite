import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../ui/ThemeToggle';
import './Header.css';

const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/knowledge', label: 'Knowledge' },
    { path: '/product', label: 'Product' },
    { path: '/community', label: 'Community' },
];

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="header-logo" onClick={closeMobileMenu}>
                    <span className="logo-text">4</span>
                    <span className="logo-text-gradient">Sight</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="header-nav">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`nav-link ${location.pathname === link.path ? 'nav-link-active' : ''}`}
                        >
                            {link.label}
                            {location.pathname === link.path && (
                                <motion.div
                                    className="nav-link-indicator"
                                    layoutId="navIndicator"
                                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                />
                            )}
                        </Link>
                    ))}
                </nav>

                {/* Theme Toggle & Mobile Menu */}
                <div className="header-actions">
                    <ThemeToggle />

                    {/* Mobile Menu Button */}
                    <button
                        className="mobile-menu-button"
                        onClick={toggleMobileMenu}
                        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.nav
                        className="mobile-nav"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={link.path}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    to={link.path}
                                    className={`mobile-nav-link ${location.pathname === link.path ? 'mobile-nav-link-active' : ''}`}
                                    onClick={closeMobileMenu}
                                >
                                    {link.label}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
