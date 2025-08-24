import React, { useState, useEffect, useRef } from 'react';
import { 
  Globe, 
  Gamepad2, 
  Zap, 
  Users, 
  Target, 
  Rocket, 
  Brain, 
  Mic, 
  Shield, 
  Award,
  TrendingUp,
  Heart,
  Star,
  ChevronRight,
  Play,
  Pause
} from 'lucide-react';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('mission');
  const [isVisible, setIsVisible] = useState({});
  const [playingDemo, setPlayingDemo] = useState(false);
  
  const sectionRefs = useRef({});

  useEffect(() => {
    const observers = {};
    
    Object.keys(sectionRefs.current).forEach(key => {
      if (sectionRefs.current[key]) {
        observers[key] = new IntersectionObserver(
          ([entry]) => {
            setIsVisible(prev => ({ ...prev, [key]: entry.isIntersecting }));
          },
          { threshold: 0.1 }
        );
        observers[key].observe(sectionRefs.current[key]);
      }
    });

    return () => {
      Object.values(observers).forEach(observer => observer.disconnect());
    };
  }, []);

  const FloatingElement = ({ children, delay = 0, className = "" }) => (
    <div 
      className={`transform transition-all duration-1000 ${className}`}
      style={{ 
        animationDelay: `${delay}ms`,
        transform: isVisible.hero ? 'translate(0, 0) scale(1)' : 'translate(0, 50px) scale(0.9)',
        opacity: isVisible.hero ? 1 : 0
      }}
    >
      {children}
    </div>
  );

  const stats = [
    { icon: Globe, value: '50+', label: 'Languages Supported', color: 'text-purple-400' },
    { icon: Users, value: '1M+', label: 'Players Connected', color: 'text-cyan-400' },
    { icon: Gamepad2, value: '500+', label: 'Games Integrated', color: 'text-pink-400' },
    { icon: Zap, value: '99.9%', label: 'Uptime Reliability', color: 'text-green-400' }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We pioneer cutting-edge AI solutions that push the boundaries of what\'s possible in multilingual gaming experiences.',
      color: 'from-purple-600 to-pink-600'
    },
    {
      icon: Globe,
      title: 'Global Inclusivity',
      description: 'Breaking down language barriers to create truly inclusive gaming communities where everyone can participate.',
      color: 'from-cyan-600 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Maintaining the highest standards in voice quality, cultural sensitivity, and technical reliability.',
      color: 'from-green-600 to-teal-600'
    },
    {
      icon: Heart,
      title: 'Player-Centric',
      description: 'Every decision we make is driven by enhancing the gaming experience and player satisfaction.',
      color: 'from-pink-600 to-red-600'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CEO & Co-Founder',
      expertise: 'AI Research & Gaming Industry',
      image: '🧑‍💼',
      background: 'Former Google AI researcher with 15+ years in gaming technology'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO & Co-Founder',
      expertise: 'Voice Synthesis & Real-time Processing',
      image: '👨‍💻',
      background: 'Ex-Meta engineer specializing in real-time audio processing'
    },
    {
      name: 'Dr. Yuki Tanaka',
      role: 'Head of Linguistics',
      expertise: 'Computational Linguistics & Cultural Adaptation',
      image: '👩‍🔬',
      background: 'PhD in Computational Linguistics from MIT, polyglot in 12 languages'
    },
    {
      name: 'Alex Johnson',
      role: 'Head of Product',
      expertise: 'Gaming UX & Player Experience',
      image: '🎮',
      background: 'Former Riot Games product lead with deep gaming industry insights'
    }
  ];

  const milestones = [
    { year: '2020', event: 'Company Founded', description: 'Langwage Inc was established with a vision to revolutionize gaming communication' },
    { year: '2021', event: 'First AI Model', description: 'Launched our proprietary multilingual voice synthesis AI' },
    { year: '2022', event: 'Gaming Integration', description: 'Successfully integrated with 100+ popular gaming titles' },
    { year: '2023', event: 'Global Expansion', description: 'Expanded to support 50+ languages and dialects' },
    { year: '2024', event: 'Real-time Innovation', description: 'Achieved sub-100ms latency for real-time dubbing' },
    { year: '2025', event: 'Industry Leadership', description: 'Became the leading AI dubbing solution for gaming' }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section 
        ref={el => sectionRefs.current.hero = el}
        className="relative min-h-screen flex items-center justify-center"
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <FloatingElement delay={0}>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                About
              </span>
              <br />
              <span className="text-white">Langwage Inc</span>
            </h1>
          </FloatingElement>

          <FloatingElement delay={300}>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Pioneering the future of <span className="text-purple-400 font-semibold">multilingual gaming</span> through 
              cutting-edge AI technology that connects players across all languages and cultures.
            </p>
          </FloatingElement>

          <FloatingElement delay={600}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full text-white font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-2xl hover:shadow-purple-500/50">
                Our Story
              </button>
              {/* <button 
                onClick={() => setPlayingDemo(!playingDemo)}
                className="flex items-center gap-3 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-400 hover:text-black transform transition-all duration-300 hover:scale-105"
              >
                {playingDemo ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                {playingDemo ? 'Pause Demo' : 'Watch Demo'}
              </button> */}
            </div>
          </FloatingElement>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <Target className="w-8 h-8 text-purple-400" />
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  To revolutionize the gaming industry by providing cutting-edge dubbing solutions that break language barriers, 
                  allowing players to fully immerse themselves in their favorite games, regardless of their native language.
                </p>
                <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <Rocket className="w-8 h-8 text-cyan-400" />
                  <h2 className="text-3xl font-bold">Our Vision</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  A world where language is never a barrier to gaming experiences. We envision a future where every player, 
                  regardless of their linguistic background, can participate fully in the global gaming community.
                </p>
                <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full" />
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-8 text-center">What We Do</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-purple-600/20">
                    <Mic className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Innovative Multilingual Dubbing Solutions</h3>
                    <p className="text-gray-300">
                      At Langwage Inc, we utilize advanced AI technology to create immersive multilingual dubbing experiences, 
                      enhancing live gaming interactions and ensuring players worldwide can connect and engage seamlessly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-cyan-600/20">
                    <Globe className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Empowering Global Gaming Experiences</h3>
                    <p className="text-gray-300">
                      We bridge cultural and linguistic gaps, creating inclusive gaming environments where players from 
                      different backgrounds can collaborate, compete, and form lasting friendships.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-pink-600/20">
                    <Zap className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Transforming Communication in Gaming</h3>
                    <p className="text-gray-300">
                      Our real-time AI dubbing technology ensures that communication flows naturally, maintaining the 
                      emotional context and gaming atmosphere across all supported languages.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Core Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our culture of innovation and excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group relative">
                <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                  <div className="flex items-start gap-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${value.color} group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 text-white">{value.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Brilliant minds from diverse backgrounds united by a shared passion for innovation in gaming technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 text-center">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-purple-400 font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-cyan-400 mb-4">{member.expertise}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{member.background}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Journey</span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-purple-400 via-cyan-400 to-pink-400" />
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                    {/* <div className="text-2xl font-bold text-purple-400 mb-2">{milestone.year}</div> */}
                    <h3 className="text-xl font-semibold text-white mb-2">{milestone.event}</h3>
                    <p className="text-gray-300">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full border-4 border-black" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Transform</span> Gaming?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join us in revolutionizing the gaming industry. Whether you're a developer, gamer, or industry partner, 
              there's a place for you in our global community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full text-white font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-2xl hover:shadow-purple-500/50 flex items-center gap-2 justify-center">
                Get Started
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-400 hover:text-black transform transition-all duration-300 hover:scale-105">
                Contact Us
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}