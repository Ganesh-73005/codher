import { useEffect, useState } from 'react';

export default function Hero() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-04-11T10:00:00');

    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff > 0) {
        setCountdown({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D0221]">
      {/* Clean Modern Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(57, 255, 20, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(57, 255, 20, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      {/* Minimal Floating Elements - Clean and Modern */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-[#39FF14]/60 rounded-sm rotate-45 animate-float hidden md:block"></div>
      <div className="absolute top-32 right-20 w-3 h-3 bg-[#FF1493]/60 rounded-sm rotate-45 animate-float hidden md:block" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-40 left-16 w-3 h-3 bg-[#00FFFF]/60 rounded-sm rotate-45 animate-float hidden md:block" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 right-32 w-3 h-3 bg-[#FFFF00]/60 rounded-sm rotate-45 animate-float hidden md:block" style={{ animationDelay: '1.5s' }}></div>

      {/* Subtle Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-100 md:h-100 bg-[#FF1493]/10 rounded-full filter blur-[100px] animate-pulse"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-100 md:h-100 bg-[#39FF14]/10 rounded-full filter blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Decorative Lines - Minimal */}
      <div className="absolute top-20 right-10 w-20 h-20 border-l-2 border-t-2 border-[#39FF14]/20 hidden lg:block"></div>
      <div className="absolute bottom-20 left-10 w-20 h-20 border-r-2 border-b-2 border-[#FF1493]/20 hidden lg:block"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 pt-20">
        <div className="max-w-7xl mx-auto">

          {/* Top Badge */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#39FF14]/10 border-2 border-[#39FF14] rounded-full">
              <span className="w-2 h-2 bg-[#39FF14] rounded-full animate-pulse"></span>
              <span className="text-[#39FF14] font-bold text-xs sm:text-sm uppercase tracking-wider">April 11-12, 2026</span>
            </div>
          </div>

          {/* Main Title and Image Container */}
          <div className="flex items-center justify-center gap-6 lg:gap-10 mb-6 sm:mb-8">
            {/* TEXT */}
            <div className="text-center lg:text-right">
              <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] xl:text-[10rem] leading-none tracking-tighter">
                <span
                  className="block text-[#39FF14]"
                  style={{
                    textShadow: `
            0 0 10px rgba(57,255,20,0.9)
          `,
                  }}
                >
                  CODHER
                </span>
                <span
                  className="block text-[#FF1493]"
                  style={{
                    textShadow: `
            0 0 10px rgba(255,20,147,0.9)
          `,
                  }}
                >
                  HACKATHON
                </span>
              </h1>
            </div>

            {/* IMAGE — desktop only */}
            <div className="hidden lg:flex items-center">
              <div className="relative h-[6rem] xl:h-[8rem]">
                {/* Glow */}
                <div className="absolute inset-0 bg-[#FF1493]/20 blur-[40px] rounded-full"></div>
                {/* Image */}
                <img
                  src="/output.webp"
                  alt="Codher Graphic"
                  className="relative h-full w-auto object-contain drop-shadow-[0_0_25px_rgba(57,255,20,0.3)]"
                />
              </div>
            </div>
          </div>
          {/* Tagline */}
          <p className="text-center text-white/80 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 font-medium px-4">
            The ultimate <span className="text-[#FFFF00] font-bold">women-only</span> hackathon experience.
            24 hours of coding, innovation, and endless possibilities.
          </p>

          {/* Countdown Timer */}
          <div className="flex justify-center gap-2 sm:gap-4 lg:gap-6 mb-10 sm:mb-12">
            {[
              { value: countdown.days, label: 'DAYS' },
              { value: countdown.hours, label: 'HOURS' },
              { value: countdown.minutes, label: 'MINS' },
              { value: countdown.seconds, label: 'SECS' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-[#0D0221] border-2 border-[#39FF14] flex items-center justify-center mb-2 animate-pulse-glow">
                  <span className="font-display text-xl sm:text-2xl lg:text-4xl text-white">
                    {String(item.value).padStart(2, '0')}
                  </span>
                </div>
                <span className="text-[#39FF14] text-[10px] sm:text-xs lg:text-sm font-bold tracking-wider">{item.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
            <a
              href="https://unstop.com/hackathons/codher26-anna-university-au-chennai-1659638"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#FF1493] text-black font-black text-base sm:text-lg uppercase tracking-wider hover:bg-[#39FF14] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(57,255,20,0.6)] cursor-pointer text-center whitespace-nowrap"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Register Now
                <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
              </span>
            </a>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#00FFFF] text-[#00FFFF] font-black text-base sm:text-lg uppercase tracking-wider hover:bg-[#00FFFF] hover:text-black transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              Learn More
            </button>
          </div>

          {/* Stats Bar */}
          <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto px-4">
            {[
              { value: '24Hrs', label: 'HACKING', color: '#39FF14' },
              { value: '₹50K+', label: 'PRIZES', color: '#FF1493' },
              { value: '200+', label: 'HACKERS', color: '#00FFFF' },
              { value: '5', label: 'TRACKS', color: '#FFFF00' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-3 sm:p-4 bg-white/5 border border-white/10 backdrop-blur-sm hover:border-[#39FF14] transition-all duration-300 group"
              >
                <div className="font-display text-2xl sm:text-3xl lg:text-4xl mb-1" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <div className="text-white/60 text-[10px] sm:text-xs font-bold tracking-wider group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0D0221] to-transparent"></div>
    </section>
  );
}