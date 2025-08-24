import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Globe, Gamepad2, Zap, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';


export default function LangwageHero() {
  const [email, setEmail] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const FloatingOrb = ({ delay, size, color }) => (
    <div 
      className={`absolute rounded-full blur-xl opacity-30 animate-pulse`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        animationDelay: `${delay}s`,
        animationDuration: '4s',
        transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
      }}
    />
  );

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
        <FloatingOrb delay={0} size="400px" color="#8B5CF6" />
        <FloatingOrb delay={1} size="300px" color="#06B6D4" />
        <FloatingOrb delay={2} size="500px" color="#EC4899" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      
      {/* Hero Content */}
      <div className="relative z-40 max-w-7xl mx-auto px-6 pt-32">
        <div className={`text-center transition-all duration-1500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Immerse
            </span>
            <br />
            <span className="text-white">the World</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Explore the next frontier where artificial intelligence seamlessly blends languages in gaming — 
            setting the stage for <span className="text-purple-400 font-semibold">true global interaction</span>.
          </p>

          {/* CTA Buttons */}

          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <button className="group bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full text-white font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-2xl hover:shadow-purple-500/50 relative overflow-hidden">
             <Link to="/about">
              <span className="relative z-10 flex items-center gap-2">
                Learn More <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </button>
            {/* <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-400 hover:text-black transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25">
              Join the Revolution
            </button> */}
          </div>
        </div>

        {/* Feature Cards */}
        <div className={`grid md:grid-cols-3 gap-8 mb-20 transition-all duration-1500 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 group">
            <Globe className="w-12 h-12 text-purple-400 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold text-white mb-4">Innovative Multilingual Dubbing Solutions</h3>
            <p className="text-gray-300 leading-relaxed">
              At Langwage Inc, we harness AI to create immersive multilingual dubbing for live gaming, 
              enhancing player experiences across diverse languages and cultures.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 group">
            <Gamepad2 className="w-12 h-12 text-cyan-400 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold text-white mb-4">About Langwage Inc</h3>
            <p className="text-gray-300 leading-relaxed">
              Our mission is to revolutionize gaming with advanced AI technology, ensuring seamless 
              multilingual experiences that connect players worldwide through immersive dubbing solutions.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-pink-400/50 transition-all duration-300 hover:scale-105 group">
            <Zap className="w-12 h-12 text-pink-400 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Dubbing</h3>
            <p className="text-gray-300 leading-relaxed">
              Innovative AI solutions for multilingual gaming experiences that break down language barriers 
              and create truly global gaming communities.
            </p>
          </div>
        </div>

        {/* Email Signup */}
        <div className={`max-w-2xl mx-auto text-center transition-all duration-1500 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h3 className="text-3xl font-bold text-white mb-4">Join Our Dubbing Solution</h3>
          <p className="text-gray-300 mb-8">
            For more info: <a href="mailto:Hey@langwage.live" className="text-purple-400 hover:text-purple-300 transition-colors">Hey@langwage.live</a>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
            />
            <button 
              className="bg-gradient-to-r from-purple-600 to-cyan-600 px-8 py-4 rounded-full text-white font-bold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-purple-500/25 flex items-center gap-2 justify-center"
              onClick={() => setEmail('')}
            >
              <Mail className="w-5 h-5" />
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-2000 delay-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <ChevronDown className="w-8 h-8 text-white/50 animate-bounce" />
      </div>
    </div>
  );
}