export default function FlowOfEvent() {
  const platforms = [
    {
      name: 'Microsoft Teams',
      description: 'Inaugural Ceremony',
      time: 'April 11, 9:00 AM',
      icon: 'ri-microsoft-fill',
      color: '#39FF14',
      gradient: 'from-[#39FF14]/20 to-transparent',
      borderColor: 'border-[#39FF14]',
      shadowColor: 'shadow-[0_0_40px_rgba(57,255,20,0.3)]',
    },
    {
      name: 'WhatsApp & Google Meet',
      description: 'Communication & Mentor Interactions',
      time: 'Throughout the event',
      icon: 'ri-chat-4-fill',
      color: '#FF1493',
      gradient: 'from-[#FF1493]/20 to-transparent',
      borderColor: 'border-[#FF1493]',
      shadowColor: 'shadow-[0_0_40px_rgba(255,20,147,0.3)]',
    },
    {
      name: 'Unstop',
      description: 'Project Submissions',
      time: 'Final submission deadline',
      icon: 'ri-upload-cloud-fill',
      color: '#00FFFF',
      gradient: 'from-[#00FFFF]/20 to-transparent',
      borderColor: 'border-[#00FFFF]',
      shadowColor: 'shadow-[0_0_40px_rgba(0,255,255,0.3)]',
    },
  ];

  return (
    <section id="flow" className="relative py-20 px-6 lg:px-12 bg-[#0D0221] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 20, 147, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 20, 147, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00FFFF]/10 rounded-full filter blur-[100px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF1493]/10 border-2 border-[#FF1493] rounded-full mb-6">
            <span className="w-2 h-2 bg-[#FF1493] rounded-full animate-pulse"></span>
            <span className="text-[#FF1493] font-bold text-sm uppercase tracking-wider">Event Timeline</span>
          </div>

          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tight leading-none">
            <span className="block">FLOW OF</span>
            <span className="block text-[#39FF14] drop-shadow-[0_0_30px_rgba(57,255,20,0.5)]">EVENT</span>
          </h2>

          <p className="text-white/70 text-lg max-w-2xl mx-auto font-medium">
            Your journey through <span className="text-[#00FFFF] font-bold">CodHer'26</span> across multiple platforms
          </p>
        </div>

        {/* Timeline Flow */}
        <div className="relative">
          {/* Connection Line - Desktop only */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#39FF14] via-[#FF1493] to-[#00FFFF] transform -translate-y-1/2 z-0"></div>

          {/* Platform Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-6 relative z-10">
            {platforms.map((platform, index) => (
              <div key={index} className="relative group flex flex-col items-stretch">

                {/* Card */}
                <div className={`relative bg-[#0a0e1a] border-2 ${platform.borderColor} p-6 hover:${platform.shadowColor} transition-all duration-500 transform hover:-translate-y-2 cursor-pointer`}>
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 border-2 flex items-center justify-center font-display text-2xl font-black"
                    style={{
                      backgroundColor: platform.color,
                      color: '#0a0e1a',
                      borderColor: platform.color
                    }}>
                    {index + 1}
                  </div>

                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-4 flex justify-center">
                      <div className="w-20 h-20 flex items-center justify-center border-2 group-hover:animate-pulse"
                        style={{ borderColor: platform.color }}>
                        <i className={`${platform.icon} text-5xl`} style={{ color: platform.color }}></i>
                      </div>
                    </div>

                    {/* Platform Name */}
                    <h3 className="font-display text-2xl font-black text-white mb-2 text-center uppercase tracking-tight">
                      {platform.name}
                    </h3>

                    {/* Description */}
                    <p className="text-center font-bold mb-4" style={{ color: platform.color }}>
                      {platform.description}
                    </p>

                    {/* Time */}
                    <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
                      <i className="ri-time-line"></i>
                      <span className="font-medium">{platform.time}</span>
                    </div>

                    {/* Decorative Corner Elements */}
                    <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 opacity-50"
                      style={{ borderColor: platform.color }}></div>
                    <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 opacity-50"
                      style={{ borderColor: platform.color }}></div>
                  </div>
                </div>

                {/* Mobile Arrow — rendered AFTER the card, only between cards */}
                {index < platforms.length - 1 && (
                  <div className="lg:hidden flex justify-center py-4">
                    <div className="flex flex-col items-center gap-1">
                      <div
                        className="w-0.5 h-8"
                        style={{
                          background: `linear-gradient(to bottom, ${platform.color}, ${platforms[index + 1].color})`
                        }}
                      ></div>
                      <i
                        className="ri-arrow-down-line text-2xl"
                        style={{ color: platforms[index + 1].color }}
                      ></i>
                    </div>
                  </div>
                )}

                {/* Desktop Arrow */}
                {index < platforms.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-8 transform -translate-y-1/2 z-20">
                    <i className="ri-arrow-right-line text-4xl font-black"
                      style={{ color: platforms[index + 1].color }}></i>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 backdrop-blur-sm">
            <i className="ri-information-line text-[#FFFF00] text-xl"></i>
            <p className="text-white/80 text-sm font-medium">
              All participants must install <span className="text-[#39FF14] font-bold">Microsoft Teams</span> before the inaugural ceremony
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
