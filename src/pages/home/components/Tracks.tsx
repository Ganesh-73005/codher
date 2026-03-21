export default function Tracks() {
  const tracks = [
    {
      name: 'Game Development for Social Causes',
      color: '#39FF14',
      icon: 'ri-gamepad-fill',
      description: 'Create games that drive positive social impact'
    },
    {
      name: 'IoT for Sustainability',
      color: '#FF1493',
      icon: 'ri-lightbulb-flash-fill',
      description: 'Build IoT solutions for a greener planet'
    },
    {
      name: 'Transport Technology for Safety and Sustainability',
      color: '#00FFFF',
      icon: 'ri-car-fill',
      description: 'Innovate safer and eco-friendly transportation'
    },
    {
      name: 'Solutions for AI Ethicality',
      color: '#FFFF00',
      icon: 'ri-brain-fill',
      description: 'Develop ethical and responsible AI systems'
    },
    {
      name: 'Business Optimization with Technology',
      color: '#FF6B35',
      icon: 'ri-line-chart-fill',
      description: 'Transform businesses with smart tech solutions'
    }
  ];

  return (
    <section id="tracks" className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 bg-[#0D0221] overflow-hidden">
      {/* Clean Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(57, 255, 20, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(57, 255, 20, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      {/* Minimal Decorative Elements */}
      <div className="absolute top-10 left-10 w-3 h-3 bg-[#39FF14]/50 rounded-sm rotate-45 animate-float hidden lg:block"></div>
      <div className="absolute bottom-20 right-20 w-3 h-3 bg-[#FF1493]/50 rounded-sm rotate-45 animate-float hidden lg:block"></div>

      {/* Subtle Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-[#39FF14]/5 rounded-full filter blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-[#FF1493]/5 rounded-full filter blur-[120px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#00FFFF]/10 border-2 border-[#00FFFF] rounded-full mb-4 sm:mb-6">
            <span className="w-2 h-2 bg-[#00FFFF] rounded-full animate-pulse"></span>
            <span className="text-[#00FFFF] font-bold text-xs sm:text-sm uppercase tracking-wider">Choose Your Path</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tight leading-none px-4">
            <span className="block">INNOVATION</span>
            <span className="block text-[#39FF14] drop-shadow-[0_0_30px_rgba(57,255,20,0.5)]">TRACKS</span>
          </h2>

          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto font-medium px-4">
            Pick your domain and <span className="text-[#FF1493] font-bold">hack your way</span> to victory
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 ">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="group relative bg-[#0a0e1a] border-2 p-5 sm:p-6   hover:border-[#39FF14] transition-all duration-500 transform hover:-translate-y-3 hover:shadow-[0_0_50px_rgba(57,255,20,0.3)] cursor-pointer"
              style={{
                borderColor: `${track.color}40`,
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Number Badge */}
              <div className="absolute -top-3 -right-3 w-8 h-8 sm:w-10 sm:h-10 border-2 flex items-center justify-center font-display text-lg sm:text-xl font-black bg-[#0D0221]"
                style={{
                  color: track.color,
                  borderColor: track.color
                }}>
                {index + 1}
              </div>

              {/* Gradient Background on Hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${track.color}40, transparent)`
                }}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center border-2 group-hover:animate-pulse"
                    style={{ borderColor: track.color }}>
                    <i className={`${track.icon} text-3xl sm:text-4xl`} style={{ color: track.color }}></i>
                  </div>
                </div>

                {/* Track Name */}
                <h3 className="font-display text-lg sm:text-xl font-black text-white mb-3 text-center uppercase tracking-tight leading-tight min-h-[50px] sm:min-h-[60px] flex items-center justify-center">
                  {track.name}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-xs sm:text-sm text-center font-medium leading-relaxed">
                  {track.description}
                </p>

                {/* Bottom Bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  style={{ backgroundColor: track.color }}
                ></div>

                {/* Corner Decorations */}
                <div className="absolute top-2 left-2 w-2 h-2 sm:w-3 sm:h-3 border-t-2 border-l-2 opacity-50"
                  style={{ borderColor: track.color }}></div>
                <br></br>
                <div className="absolute bottom-2 right-2 w-2 h-2 sm:w-3 sm:h-3 border-b-2 border-r-2 opacity-50"
                  style={{ borderColor: track.color }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-10 sm:mt-12 text-center px-4">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 bg-white/5 border border-white/10 backdrop-blur-sm">
            <i className="ri-trophy-fill text-[#FFFF00] text-lg sm:text-xl"></i>
            <p className="text-white/80 text-xs sm:text-sm font-medium">
              Track-wise <span className="text-[#39FF14] font-bold">Best Project Awards</span> for outstanding innovations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}