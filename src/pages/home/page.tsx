
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PreEvents from './components/PreEvents';
import FlowOfEvent from './components/FlowOfEvent';
import Tracks from './components/Tracks';
import Prizes from './components/Prizes';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function HomePage() {
    return (
        <div className="bg-[#0a0e1a] min-h-screen">
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
    );
}
