export default function Prizes() {
  const mainPrizes = [
    {
      title: 'Winner',
      amount: '₹15,000',
      icon: 'ri-trophy-fill',
      color: '#39FF14',
      rank: '1st',
      gradient: 'from-[#39FF14]/20 to-transparent',
      borderColor: 'border-[#39FF14]',
      shadowColor: 'shadow-[0_0_50px_rgba(57,255,20,0.4)]',
    },
    {
      title: 'First Runner Up',
      amount: '₹10,000',
      icon: 'ri-medal-fill',
      color: '#FF1493',
      rank: '2nd',
      gradient: 'from-[#FF1493]/20 to-transparent',
      borderColor: 'border-[#FF1493]',
      shadowColor: 'shadow-[0_0_50px_rgba(255,20,147,0.4)]',
    },
    {
      title: 'Second Runner Up',
      amount: '₹6,000',
      icon: 'ri-award-fill',
      color: '#00FFFF',
      rank: '3rd',
      gradient: 'from-[#00FFFF]/20 to-transparent',
      borderColor: 'border-[#00FFFF]',
      shadowColor: 'shadow-[0_0_50px_rgba(0,255,255,0.4)]',
    },
  ];

  const specialPrizes = [
    {
      title: 'Best First Year Team',
      amount: '₹1,500',
      icon: 'ri-user-star-fill',
      color: '#FFFF00',
    },
    {
      title: 'Best Second Year Team',
      amount: '₹1,500',
      icon: 'ri-team-fill',
      color: '#FF6B35',
    },
    {
      title: 'Best UI Design Team',
      amount: '₹1,500',
      icon: 'ri-palette-fill',
      color: '#9D4EDD',
    },
    {
      title: 'Pre Events and Special Prizes',
      amount: '₹4,500',
      icon: 'ri-gift-fill',
      color: '#06FFA5',
    },
    {
      title: 'Individual Track Winners',
      amount: '₹10,000',
      subtitle: '₹2,000 per track - 5 tracks',
      icon: 'ri-roadster-fill',
      color: '#FF006E',
    },
  ];

  return (
    <section id="prizes" className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 bg-[#0a0e1a] overflow-hidden">
      {/* Clean Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      {/* Minimal Decorative Elements */}
      <div className="absolute top-20 right-20 w-3 h-3 bg-[#39FF14]/50 rounded-sm rotate-45 animate-float hidden lg:block"></div>
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-[#FF1493]/50 rounded-sm rotate-45 animate-float hidden lg:block"></div>

      {/* Subtle Gradient Orbs */}
      <div className="absolute top-1/4 right-1/3 w-72 h-72 md:w-96 md:h-96 bg-[#FF1493]/5 rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 md:w-96 md:h-96 bg-[#39FF14]/5 rounded-full filter blur-[100px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#FFFF00]/10 border-2 border-[#FFFF00] rounded-full mb-4 sm:mb-6">
            <span className="w-2 h-2 bg-[#FFFF00] rounded-full animate-pulse"></span>
            <span className="text-[#FFFF00] font-bold text-xs sm:text-sm uppercase tracking-wider">Winning Rewards</span>
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tight leading-none px-4">
            <span className="block">REWARDS &amp;</span>
            <span className="block text-[#FF1493] drop-shadow-[0_0_30px_rgba(255,20,147,0.5)]">PRIZES</span>
          </h2>
          
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto font-medium px-4">
            Win big with <span className="text-[#39FF14] font-bold">₹50,000+</span> in total prizes and cash rewards
          </p>
        </div>

        {/* Main Top 3 Prizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {mainPrizes.map((prize, index) => (
            <div
              key={index}
              className={`group relative bg-[#0D0221] border-2 ${prize.borderColor} p-6 sm:p-8 hover:${prize.shadowColor} transition-all duration-500 transform hover:-translate-y-4 cursor-pointer`}
              style={{ 
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Rank Badge */}
              <div className="absolute -top-4 sm:-top-5 left-1/2 transform -translate-x-1/2 px-3 sm:px-4 py-1 border-2 font-display text-xs sm:text-sm font-black whitespace-nowrap"
                style={{ 
                  backgroundColor: prize.color,
                  color: '#0D0221',
                  borderColor: prize.color
                }}>
                {prize.rank} PLACE
              </div>

              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${prize.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className="mb-4 sm:mb-6 flex justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center border-2 sm:border-4 group-hover:animate-bounce-slow"
                    style={{ borderColor: prize.color }}>
                    <i className={`${prize.icon} text-4xl sm:text-5xl lg:text-6xl`} style={{ color: prize.color }}></i>
                  </div>
                </div>

                {/* Amount */}
                <div className="mb-3 sm:mb-4">
                  <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-black mb-2" style={{ color: prize.color }}>
                    {prize.amount}
                  </div>
                  <div className="text-white/60 text-xs sm:text-sm font-bold uppercase tracking-wider">Cash Prize</div>
                </div>

                {/* Title */}
                <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-black text-white uppercase tracking-tight">
                  {prize.title}
                </h3>

                {/* Decorative Lines */}
                <div className="mt-4 sm:mt-6 flex justify-center gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-6 sm:w-8 h-1" style={{ backgroundColor: prize.color }}></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Prizes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {specialPrizes.map((prize, index) => (
            <div
              key={index}
              className="group relative bg-[#0D0221] border-2 border-white/10 hover:border-white/30 p-5 sm:p-6 transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              style={{ 
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Gradient Background on Hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${prize.color}40, transparent)`
                }}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-4 flex items-start gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center border-2 flex-shrink-0 group-hover:animate-pulse"
                    style={{ borderColor: prize.color }}>
                    <i className={`${prize.icon} text-2xl sm:text-3xl`} style={{ color: prize.color }}></i>
                  </div>

                  <div className="flex-1">
                    {/* Title */}
                    <h3 className="font-display text-base sm:text-lg font-black text-white uppercase tracking-tight leading-tight mb-2">
                      {prize.title}
                    </h3>

                    {/* Subtitle if exists */}
                    {prize.subtitle && (
                      <p className="text-white/60 text-xs font-medium mb-2">
                        {prize.subtitle}
                      </p>
                    )}

                    {/* Amount */}
                    <div className="font-display text-xl sm:text-2xl font-black" style={{ color: prize.color }}>
                      {prize.amount}
                    </div>
                  </div>
                </div>

                {/* Bottom Bar */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  style={{ backgroundColor: prize.color }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Prize Pool Banner */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#39FF14]/20 via-[#FF1493]/20 to-[#00FFFF]/20 filter blur-xl"></div>
            <div className="relative bg-[#0D0221] border-2 border-[#39FF14] px-6 sm:px-8 py-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <i className="ri-money-rupee-circle-fill text-[#39FF14] text-2xl sm:text-3xl lg:text-4xl"></i>
                <div className="text-left">
                  <div className="text-white/60 text-xs sm:text-sm font-bold uppercase tracking-wider">Total Prize Pool</div>
                  <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-[#39FF14]">₹50,000+</div>
                </div>
                <i className="ri-trophy-fill text-[#FF1493] text-2xl sm:text-3xl lg:text-4xl"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-10 sm:mt-12 text-center px-4">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 bg-white/5 border border-white/10 backdrop-blur-sm">
            <i className="ri-information-line text-[#00FFFF] text-lg sm:text-xl"></i>
            <p className="text-white/80 text-xs sm:text-sm font-medium">
              Plus <span className="text-[#FFFF00] font-bold">internship referrals</span> and exclusive <span className="text-[#FF1493] font-bold">coupons from Unstop</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}