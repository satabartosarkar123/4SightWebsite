import { HeroSection, EthosSection, ContactForm } from '../components/home';
import { Footer } from '../components/layout';
import { AntiGravityScroll } from '../components/ui';

const HomePage = () => {
    return (
        <AntiGravityScroll>
            <HeroSection />
            <EthosSection />
            <ContactForm />
            <Footer />
        </AntiGravityScroll>
    );
};

export default HomePage;

