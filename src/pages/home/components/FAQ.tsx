import { useState } from 'react';

interface FAQItem {
  category: string;
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      category: 'General',
      question: 'Is CodHer only for women?',
      answer: 'Yes. CodHer is a nationwide women-only hackathon. However, everyone can participate in the pre-events and win exciting cash prizes.'
    },
    {
      category: 'General',
      question: 'What are the perks of attending CodHer?',
      answer: 'Participants will get: A 24-hour hackathon experience, Opportunity to interact with industry mentors from top companies, Prizes worth ₹50,000+, Internship referrals, Exciting coupons from Unstop, and Networking and learning opportunities.'
    },
    {
      category: 'General',
      question: 'What is the duration of the hackathon?',
      answer: 'The hackathon begins at 10:00 AM on April 11th 2026 and ends at 10:00 AM on April 12th 2026, followed by final judging.'
    },
    {
      category: 'Registration',
      question: 'How many participants are allowed per team?',
      answer: 'Each team can have up to 3 members. Individual participation is also allowed.'
    },
    {
      category: 'Registration',
      question: 'Are inter-college teams allowed?',
      answer: 'Yes. You can form teams with students from different colleges.'
    },
    {
      category: 'Registration',
      question: 'Is there a registration fee?',
      answer: 'Yes. The registration fee is ₹200 per team.'
    },
    {
      category: 'Format',
      question: 'What is the mode of the hackathon?',
      answer: 'The hackathon is conducted completely online.'
    },
    {
      category: 'Format',
      question: 'Which platforms will be used?',
      answer: 'Microsoft Teams – Inaugural ceremony, WhatsApp & Google Meet – Communication and mentor interactions, Unstop – Project submissions.'
    },
    {
      category: 'Problem Statements',
      question: 'Is this an open-themed hackathon?',
      answer: 'Participants can choose any problem statement as long as it fits within one of the five tracks listed on the website and Unstop.'
    },
    {
      category: 'Problem Statements',
      question: 'When will the problem statements be released?',
      answer: 'Problem statements will be released during the hackathon.'
    },
    {
      category: 'Mentorship',
      question: 'Will there be review meetings during the hackathon?',
      answer: 'Yes. There will be two review checkpoints before the final submission to track progress and receive mentor feedback.'
    },
    {
      category: 'Mentorship',
      question: 'Who are the mentors?',
      answer: 'Mentors are industry experts from renowned companies such as Microsoft, Wells Fargo, Amazon, VISA and many more. They will guide participants and help them overcome implementation challenges.'
    },
    {
      category: 'Awards',
      question: 'What prizes are available?',
      answer: 'Grand Champion, First Runner-up, Second Runner-up, Track-wise Best Project Awards, Best First Year Team, Best Second Year Team, and Best UI Award.'
    },
    {
      category: 'Awards',
      question: 'Can hackathon winners also win track prizes?',
      answer: 'No. Track prizes are awarded only to teams other than the top three winners.'
    },
    {
      category: 'Awards',
      question: 'What is the Best First Year / Second Year Prize?',
      answer: 'These awards are given to the best teams where all members belong to the same academic year: Best First Year Team → all members must be first years, Best Second Year Team → all members must be second years.'
    },
    {
      category: 'Pre-events',
      question: 'What are the pre-events? Who can participate?',
      answer: 'Pre-events are conducted to build excitement around CodHer. Anyone can participate, regardless of gender. There are two pre-events. Check ACM-CEG\'s official Instagram page for details.'
    },
    {
      category: 'Submission',
      question: 'How do we submit our work?',
      answer: 'Participants must: 1. Upload their project to GitHub, 2. Submit the GitHub repository link, 3. Upload a presentation (PDF/PPT). Submission will be done on Unstop under the "Stages and Timeline" section on the day of the hackathon.'
    },
    {
      category: 'Certificates',
      question: 'Will participants receive certificates?',
      answer: 'Yes. All participants receive Participation Certificates from ACM. Winners receive additional certificates and perks.'
    },
    {
      category: 'Requirements',
      question: 'Are there any mandatory requirements?',
      answer: 'All participants must install and set up Microsoft Teams for the inaugural ceremony on April 11th at 9:00 AM. Subsequent communication will take place via WhatsApp and Google Meet.'
    },
    {
      category: 'Additional',
      question: 'Where can I find more details?',
      answer: 'For more details regarding Rules, Submission criteria, Hackathon stages, and Timeline, please refer to the CodHer listing on Unstop.'
    }
  ];

  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#151a2e] to-[#0a0e1a] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="faq-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="1" fill="white"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#faq-grid)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 px-4">
            Frequently Asked Questions
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 text-xs sm:text-sm px-4">Everything you need to know about CodHer</p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-sm border border-purple-500/20 rounded-lg overflow-hidden hover:border-purple-500/50 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left cursor-pointer"
              >
                <div className="flex-1 pr-3 sm:pr-4">
                  <div className="text-xs text-purple-400 font-semibold mb-1">{item.category}</div>
                  <h3 className="text-sm sm:text-base font-semibold text-white">{item.question}</h3>
                </div>
                <div className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <i className="ri-arrow-down-s-line text-white text-lg sm:text-xl"></i>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 sm:p-8">
          <i className="ri-question-answer-line text-3xl sm:text-4xl text-purple-400 mb-4"></i>
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 px-4">Still have questions?</h3>
          <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6 px-4">Check out the complete guidelines on Unstop or reach out to us!</p>
          <a
            href="https://unstop.com/hackathons/codher26-anna-university-au-chennai-1659638"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm sm:text-base font-semibold rounded-lg hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            View Full Guidelines
          </a>
        </div>
      </div>
    </section>
  );
}