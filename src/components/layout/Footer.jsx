import { Link } from 'react-router-dom';
import { Twitter, Linkedin, MessageCircle } from 'lucide-react';
import './Footer.css';

const footerLinks = {
    product: [
        { label: 'Features', path: '/product' },
        { label: 'Pricing', path: '/product#pricing' },
        { label: 'Demo', path: '/product#demo' },
    ],
    resources: [
        { label: 'Knowledge Base', path: '/knowledge' },
        { label: 'Community', path: '/community' },
        { label: 'Documentation', path: '/docs' },
    ],
    company: [
        { label: 'About', path: '/about' },
        { label: 'Contact', path: '/#contact' },
        { label: 'Careers', path: '/careers' },
    ],
};

const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/4sight', label: 'LinkedIn' },
    { icon: MessageCircle, href: 'https://reddit.com/r/4sight', label: 'Reddit' },
    { icon: Twitter, href: 'https://twitter.com/4sight', label: 'Twitter' },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    {/* Brand Section */}
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            <span className="logo-text">4</span>
                            <span className="logo-text-gradient">Sight</span>
                        </Link>
                        <p className="footer-tagline">
                            Data-led business process automation. Enhancing transparency in governance and strategy.
                        </p>
                        <div className="footer-social">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="social-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Sections */}
                    <div className="footer-links-section">
                        <h4 className="footer-links-title">Product</h4>
                        <ul className="footer-links">
                            {footerLinks.product.map((link) => (
                                <li key={link.label}>
                                    <Link to={link.path} className="footer-link">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-links-section">
                        <h4 className="footer-links-title">Resources</h4>
                        <ul className="footer-links">
                            {footerLinks.resources.map((link) => (
                                <li key={link.label}>
                                    <Link to={link.path} className="footer-link">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-links-section">
                        <h4 className="footer-links-title">Company</h4>
                        <ul className="footer-links">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <Link to={link.path} className="footer-link">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} 4Sight. All rights reserved.
                    </p>
                    <div className="footer-legal">
                        <Link to="/privacy" className="footer-legal-link">Privacy Policy</Link>
                        <Link to="/terms" className="footer-legal-link">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
