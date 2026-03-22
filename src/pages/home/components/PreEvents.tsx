export default function PreEvents() {
  const events = [
    {
      image: 'https://auceg.acm.org/assets/codher/e1.jpg',
      title: 'The Great Internet Treasure Hunt',
      description:
        'Tired of roaming around for clues? This challenge takes place entirely online. Rely on your logic and instincts as you navigate through a series of interconnected links. Each correct step moves you forward, while every mistake brings you closer to elimination.'
    },
    {
      image: 'https://img.freepik.com/free-vector/alert-coming-soon-stay-tuned-background-modern-style_1017-57508.jpg',
      title: 'Deck & Deal',
      description: 'Event description coming soon... stay tuned!!'
    },
    {
      image: 'https://img.freepik.com/free-vector/alert-coming-soon-stay-tuned-background-modern-style_1017-57508.jpg',
      title: 'Memeify Computers',
      description:
        "Launched midway between the above two events, this event will run until CodHer's official launch."
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

        {/* Updated grid */}
        <div className="grid md:grid-cols-3 gap-8">
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
