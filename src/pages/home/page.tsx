import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PreEvents from './components/PreEvents';
import FlowOfEvent from './components/FlowOfEvent';
import Tracks from './components/Tracks';
import Prizes from './components/Prizes';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

export default function HomePage() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
            <div className={`bg-[#0a0e1a] min-h-screen transition-opacity duration-1000 ${isLoading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
                <Navbar />
                <Hero />
                <About />
                <PreEvents />
                <FlowOfEvent />
                <Tracks />
                <Prizes />
                <FAQ />
                <Footer />
            </div>
        </>
    );
}
