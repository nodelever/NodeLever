import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Twitter, 
  Linkedin, 
  Youtube,
  Globe,
  Gamepad2,
  Zap,
  ArrowRight,
  Send
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const footerLinks = {
    Solutions: [
      { name: 'AI Dubbing', href: '/solutions/dubbing' },
      { name: 'Live Gaming', href: '/solutions/gaming' },
      { name: 'Language Processing', href: '/solutions/processing' },
      { name: 'Voice Synthesis', href: '/solutions/synthesis' }
    ],
    Company: [
      // { name: 'About Us', href: '/about' },
      // { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      // { name: 'Press Kit', href: '/press' }
    ],
    Resources: [
      { name: 'Documentation', href: '/docs' },
      // { name: 'API Reference', href: '/api' },
      // { name: 'Blog', href: '/blog' },
      { name: 'Support Center', href: '/support' }
    ],
    Legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      // { name: 'GDPR', href: '/gdpr' }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-gray-300' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-500' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-red-500' }
  ];

  return (
    <footer className="relative bg-black border-t border-purple-500/20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-cyan-900/10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <div className="mb-6">
                <Link to="/" className="text-3xl font-bold group">
                  <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-pink-400 group-hover:to-purple-400 transition-all duration-300">
                    Langwage
                  </span>
                  <span className="text-white ml-2">Inc</span>
                </Link>
              </div>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Revolutionizing gaming with advanced AI technology, creating seamless multilingual experiences that connect players worldwide.
              </p>

              {/* Key Features */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-300">
                  <Globe className="w-5 h-5 text-purple-400" />
                  <span>Global Language Support</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Gamepad2 className="w-5 h-5 text-cyan-400" />
                  <span>Real-time Gaming Integration</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Zap className="w-5 h-5 text-pink-400" />
                  <span>AI-Powered Voice Synthesis</span>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <a 
                  href="mailto:Hey@langwage.live" 
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <Mail className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                  <span>Hey@langwage.live</span>
                </a>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>Homestead, Pennsylvania</span>
                </div>
              </div>
            </div>

            {/* Links Grid */}
            <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="text-white font-semibold text-lg mb-6 relative">
                    {category}
                    <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400" />
                  </h3>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <Link 
                          to={link.href}
                          className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 block"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-2">
              <h3 className="text-white font-semibold text-lg mb-6 relative">
                Stay Updated
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400" />
              </h3>
              
              <p className="text-gray-400 mb-6 text-sm">
                Get the latest updates on our AI dubbing technology and gaming innovations.
              </p>

              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 backdrop-blur-lg border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    required
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 px-6 py-3 rounded-lg text-white font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2 group"
                  disabled={isSubscribed}
                >
                  {isSubscribed ? (
                    <>
                      <span>Subscribed!</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-purple-500/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2025 Langwage Inc. All rights reserved. | Powered by AI Innovation
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <span className="text-gray-400 text-sm hidden md:block">Follow us:</span>
              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className={`p-2 rounded-lg bg-white/5 text-gray-400 ${color} hover:bg-white/10 transition-all duration-300 hover:scale-110 group`}
                  >
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Back to Top */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 hover:scale-105 transform"
            >
              <span className="text-sm">Back to top</span>
              <ArrowRight className="w-4 h-4 rotate-[-90deg]" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
    </footer>
  );
};

export default Footer;