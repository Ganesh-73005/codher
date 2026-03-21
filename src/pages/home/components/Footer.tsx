export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0a0e1a] to-[#050810] border-t border-purple-500/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">CodHer'26</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              A nationwide women-only hackathon organized by ACM CEG. Join us for 24 hours of innovation, learning, and collaboration.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400 mb-2">
                Anagha Srikrishna - Chairperson ACM-CEG
              </li>
              <li className="text-gray-400">
                <i className="ri-phone-line text-purple-400 mr-2"></i>
                +91 88257 89933
              </li>
              <li>
                <a
                  href="mailto:acmceg2019@gmail.com"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300 cursor-pointer"
                >
                  <i className="ri-mail-line text-purple-400 mr-2"></i>
                  acmceg2019@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Get In Touch</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/acm.ceg/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
              >
                <i className="ri-facebook-fill text-white"></i>
              </a>
              <a
                href="https://twitter.com/AcmCeg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
              >
                <i className="ri-twitter-fill text-white"></i>
              </a>
              <a
                href="https://www.instagram.com/acmceg/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
              >
                <i className="ri-instagram-fill text-white"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/acm-student-chapter-of-ceg/mycompany/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
              >
                <i className="ri-linkedin-fill text-white"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-500/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <div className="mb-4 md:mb-0">
              © 2026 <strong className="text-purple-400">ACM CEG</strong>. All rights reserved.
            </div>
            <div>
              Made with <i className="ri-heart-fill text-pink-500"></i> by TechOps, ACM CEG
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}