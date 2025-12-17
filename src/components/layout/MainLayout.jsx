import { Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import './MainLayout.css';

const pageVariants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: 'easeOut',
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.3,
            ease: 'easeIn',
        },
    },
};

const MainLayout = () => {
    return (
        <div className="main-layout">
            <Header />
            <AnimatePresence mode="wait">
                <motion.main
                    className="main-content"
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <Outlet />
                </motion.main>
            </AnimatePresence>
            <Footer />
        </div>
    );
};

export default MainLayout;
