import { Outlet } from 'react-router-dom';
import Header from './Header';
import SocialSidebar from './SocialSidebar';
import './MainLayout.css';

/**
 * MainLayout wraps all pages.
 * Note: Footer is not included here because anti-gravity sections
 * handle the full viewport. Footer content should be included
 * as the last section in each page's AntiGravityScroll.
 */
const MainLayout = () => {
    return (
        <div className="main-layout">
            <Header />
            <main className="main-content">
                <Outlet />
            </main>
            <SocialSidebar />
        </div>
    );
};

export default MainLayout;
