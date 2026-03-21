export default function PreEvents() {
  const events = [
    {
      image: 'https://codher24.vercel.app/assets/logicLinkPoster.jpeg',
      title: 'LogicLink - Digital Expedition',
      description: 'LogicLink-Digital Expedition invites participants to embark on an individual coding adventure, facing challenges sequentially. The primary goal is to navigate the digital expedition, overcoming coding challenges at each level.'
    },
    {
      image: 'https://codher24.vercel.app/assets/PixelPoster.jpeg',
      title: 'Pixel Perfect!',
      description: 'Event merges art and web-dev into one. Participants try to craft the best art pieces they can within the stipulated time limit... with a twist!'
    }
  ];

  return (
    <section id="pre-events" className="py-20 bg-gradient-to-b from-[#0a0e1a] to-[#151a2e] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Pre-Events
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            Open to everyone! Win exciting cash prizes before the main hackathon begins
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 rounded-lg overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="h-64 w-full overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}