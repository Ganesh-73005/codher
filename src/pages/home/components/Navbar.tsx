import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'ABOUT', id: 'about' },
    { name: 'SPEAKERS', id: 'speakers' },
    { name: 'TRACKS', id: 'tracks' },
    { name: 'PRIZES', id: 'prizes' },
    { name: 'FAQ', id: 'faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#0D0221]/95 backdrop-blur-lg border-b-2 border-[#39FF14]' 
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="font-display text-xl sm:text-2xl lg:text-3xl tracking-tighter hover:scale-105 transition-transform cursor-pointer whitespace-nowrap"
          >
            <span className="text-[#39FF14]">COD</span>
            <span className="text-[#FF1493]">HER</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="relative font-bold text-sm tracking-wider text-white hover:text-[#39FF14] transition-colors duration-300 group cursor-pointer whitespace-nowrap"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF1493] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="https://unstop.com/hackathons/codher26-anna-university-au-chennai-1659638"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-5 xl:px-6 py-2.5 xl:py-3 bg-[#FF1493] text-black font-bold text-sm uppercase tracking-wider hover:bg-[#39FF14] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(57,255,20,0.5)] cursor-pointer whitespace-nowrap"
            >
              <span>Register Now</span>
              <i className="ri-arrow-right-line"></i>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center border-2 border-[#39FF14] text-[#39FF14] hover:bg-[#39FF14] hover:text-black transition-all cursor-pointer"
          >
            <i className={`ri-${isMobileMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0D0221] border-t-2 border-[#39FF14]">
          <div className="px-4 sm:px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left font-bold text-base sm:text-lg text-white hover:text-[#39FF14] transition-colors py-2 cursor-pointer"
              >
                {link.name}
              </button>
            ))}
            <a
              href="https://unstop.com/hackathons/codher26-anna-university-au-chennai-1659638"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-6 py-3 bg-[#FF1493] text-black font-bold uppercase mt-4 cursor-pointer whitespace-nowrap"
            >
              Register Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}