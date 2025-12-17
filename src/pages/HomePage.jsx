import { HeroSection, EthosSection, ContactForm } from '../components/home';
import { StackingCards } from '../components/ui';

const HomePage = () => {
    return (
        <div className="home-page">
            <StackingCards>
                <HeroSection />
                <EthosSection />
                <ContactForm />
            </StackingCards>
        </div>
    );
};

export default HomePage;

