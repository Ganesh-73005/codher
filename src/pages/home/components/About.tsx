export default function About() {
  const stats = [
    { value: '24', label: 'HOURS', icon: 'ri-time-fill', color: '#39FF14' },
    { value: '₹50K+', label: 'PRIZES', icon: 'ri-money-rupee-circle-fill', color: '#FF1493' },
    { value: '200+', label: 'HACKERS', icon: 'ri-team-fill', color: '#00FFFF' },
    { value: '5', label: 'TRACKS', icon: 'ri-roadster-fill', color: '#FFFF00' },
  ];

  return (
    <section id="about" className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 bg-[#0D0221] overflow-hidden">
      {/* Clean Minimal Grid - More Subtle */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(57, 255, 20, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(57, 255, 20, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#39FF14]/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF1493]/30 to-transparent"></div>

      {/* Minimal Corner Accents */}
      <div className="absolute top-10 left-10 w-16 h-16 border-l border-t border-[#39FF14]/20 hidden lg:block"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 border-r border-b border-[#FF1493]/20 hidden lg:block"></div>

      {/* Subtle Gradient Orbs */}
      <div className="absolute top-1/3 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-[#FF1493]/5 rounded-full filter blur-[120px]"></div>
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-[#39FF14]/5 rounded-full filter blur-[120px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#39FF14]/10 border-2 border-[#39FF14] rounded-full mb-4 sm:mb-6">
            <span className="w-2 h-2 bg-[#39FF14] rounded-full animate-pulse"></span>
            <span className="text-[#39FF14] font-bold text-xs sm:text-sm uppercase tracking-wider">About The Event</span>
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tight leading-none px-4">
            <span className="block">WHAT IS</span>
            <span className="block text-[#FF1493] drop-shadow-[0_0_30px_rgba(255,20,147,0.5)]">CODHER?</span>
          </h2>
        </div>

        {/* Main Content Cards */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12 lg:mb-16">
          {/* ACM CEG Card */}
          <div className="group relative bg-[#0a0e1a] border-2 border-[#39FF14]/30 hover:border-[#39FF14] p-6 sm:p-8 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(57,255,20,0.3)]">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#39FF14]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Content */}
            <div className="relative z-10">
              {/* Icon Header */}
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center border-2 border-[#39FF14] flex-shrink-0">
                  <i className="ri-team-fill text-2xl sm:text-4xl text-[#39FF14]"></i>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                  ACM CEG
                </h3>
              </div>

              {/* Description */}
              <p className="text-white/70 text-sm sm:text-base leading-relaxed font-medium">
                The ACM-CEG Student Chapter, initiated in <span className="text-[#39FF14] font-bold">2004</span>, aims to instill an unwavering enthusiasm for computer science in students. 
                We provide a plethora of networking opportunities and help students seek advice from top experts in the field. 
                We aim to motivate students to embark on a journey of learning and developing the tools of computer science and instilling 
                in them a passion for excellence.
              </p>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#39FF14] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          </div>

          {/* CodHer Card */}
          <div className="group relative bg-[#0a0e1a] border-2 border-[#FF1493]/30 hover:border-[#FF1493] p-6 sm:p-8 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(255,20,147,0.3)]">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF1493]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Content */}
            <div className="relative z-10">
              {/* Icon Header */}
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center border-2 border-[#FF1493] flex-shrink-0">
                  <i className="ri-code-s-slash-fill text-2xl sm:text-4xl text-[#FF1493]"></i>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                  CodHer
                </h3>
              </div>

              {/* Description */}
              <p className="text-white/70 text-sm sm:text-base leading-relaxed font-medium">
                CodHer is an <span className="text-[#FF1493] font-bold">all-women hackathon</span> conducted by ACM-CEG. 
                CodHer serves as a platform for young women developers and coding enthusiasts to network, upskill, bring their ideas to life, 
                and exhibit their creativity, ingenuity, and competence. 
                Past versions of CodHer had a footfall of around <span className="text-[#00FFFF] font-bold">200+ female hackers</span>. 
                This is a 24-hour hackathon conducted completely online on <span className="text-[#FFFF00] font-bold">April 11-12, 2026</span>.
              </p>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FF1493] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group relative bg-[#0a0e1a] border border-white/10 hover:border-white/30 p-4 sm:p-6 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="flex justify-center mb-2 sm:mb-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                  <i className={`${stat.icon} text-2xl sm:text-3xl`} style={{ color: stat.color }}></i>
                </div>
              </div>

              {/* Value */}
              <div className="text-center">
                <div className="font-display text-2xl sm:text-3xl font-black mb-1" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <div className="text-white/60 text-[10px] sm:text-xs font-bold tracking-wider">
                  {stat.label}
                </div>
              </div>

              {/* Bottom Bar */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{ backgroundColor: stat.color }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}