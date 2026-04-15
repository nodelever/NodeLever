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
  Pause,
  Code2,
  Cpu
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
    { icon: Users, value: '1M+', label: 'Nodes Processed', color: 'text-cyan-400' },
    { icon: Code2, value: '500+', label: 'APIs Integrated', color: 'text-pink-400' },
    { icon: Zap, value: '99.9%', label: 'Uptime Reliability', color: 'text-green-400' }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We pioneer cutting-edge AI solutions that push the boundaries of what\'s possible in real-time technical evaluation.',
      color: 'from-purple-600 to-pink-600'
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Breaking down geographical barriers to create truly decentralized expert networks where talent meets opportunity.',
      color: 'from-cyan-600 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Unrivaled Quality',
      description: 'Maintaining the highest standards in data integrity, security, and technical precision for every node.',
      color: 'from-green-600 to-teal-600'
    },
    {
      icon: Heart,
      title: 'Expert-Centric',
      description: 'Every decision we make is driven by enhancing the workflow and financial rewards for our global contributors.',
      color: 'from-pink-600 to-red-600'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CEO & Co-Founder',
      expertise: 'AI Research & Data Engineering',
      image: '👩‍💼',
      background: 'Former Google AI researcher with 15+ years in data architecture'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO & Co-Founder',
      expertise: 'Systems Architecture',
      image: '👨‍💻',
      background: 'Ex-Meta engineer specializing in high-concurrency real-time systems'
    },
    {
      name: 'Dr. Yuki Tanaka',
      role: 'Head of Analytics',
      expertise: 'Computational Logic',
      image: '👩‍🔬',
      background: 'PhD in Computer Science from MIT, expert in automated verification'
    },
    {
      name: 'Alex Johnson',
      role: 'Head of Product',
      expertise: 'Developer Experience',
      image: '⚙️',
      background: 'Former Stripe product lead with deep insights into developer tools'
    }
  ];

  const milestones = [
    { year: '', event: 'NodeLever Founded', description: 'Established with a vision to revolutionize high-fidelity AI training' },
    { year: '', event: 'Alpha Engine', description: 'Launched our proprietary real-time task distribution network' },
    { year: '', event: 'Scale Phase', description: 'Successfully integrated with 100+ enterprise AI partners' },
    { year: '', event: 'Global Expansion', description: 'Expanded to support specialized coding tracks in 12+ frameworks' },
    { year: '', event: 'Latency Peak', description: 'Achieved sub-100ms synchronization for real-time collaboration' },
    { year: '', event: 'Market Leadership', description: 'Became the leading evaluation solution for frontier models' }
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-50 overflow-hidden">
      {/* Hero Section */}
      <section 
        ref={el => sectionRefs.current.hero = el}
        className="relative min-h-[80vh] flex items-center justify-center"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-[#0f172a] to-cyan-900/10" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <FloatingElement delay={0}>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Behind
              </span>
              <br />
              <span className="text-white">NodeLever</span>
            </h1>
          </FloatingElement>

          <FloatingElement delay={300}>
            <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              We are building the backbone of <span className="text-purple-400 font-semibold">AI reliability</span> through 
              an elite network of human experts and cutting-edge verification technology.
            </p>
          </FloatingElement>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative bg-[#0b1121]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-full bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="bg-slate-800/40 backdrop-blur-lg rounded-3xl p-8 border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <Target className="w-8 h-8 text-purple-400" />
                  <h2 className="text-3xl font-bold">The Mission</h2>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  To provide the highest-fidelity training data for frontier models by connecting elite technical talent 
                  with the world's most complex AI challenges.
                </p>
                <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
              </div>

              <div className="bg-slate-800/40 backdrop-blur-lg rounded-3xl p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <Cpu className="w-8 h-8 text-cyan-400" />
                  <h2 className="text-3xl font-bold">The Vision</h2>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  A future where AI systems are safe, accurate, and aligned, powered by a decentralized workforce 
                  of specialized experts operating at the speed of thought.
                </p>
                <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full" />
              </div>
            </div>

            <div className="bg-slate-800/20 backdrop-blur-lg rounded-3xl p-8 border border-slate-700/50">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">What We Engineer</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-purple-600/20">
                    <Zap className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">High-Throughput Verification</h3>
                    <p className="text-slate-400">
                      Our engines process thousands of data points per second, ensuring real-time feedback loops between humans and models.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-cyan-600/20">
                    <Globe className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Decentralized Expert Nodes</h3>
                    <p className="text-slate-400">
                      We've built a global infrastructure that allows developers from 150+ countries to contribute specialized code audits.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-pink-600/20">
                    <Shield className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Security-First Evaluation</h3>
                    <p className="text-slate-400">
                      Safety isn't an afterthought. Every task is filtered through our multi-layer security and bias-detection protocols.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 relative bg-[#0b1121]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Foundation <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group relative">
                <div className="bg-slate-800/40 backdrop-blur-lg rounded-3xl p-8 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 h-full">
                  <div className="flex items-start gap-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${value.color} group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 text-white">{value.title}</h3>
                      <p className="text-slate-400 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              The <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Architects</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-slate-800/40 backdrop-blur-lg rounded-3xl p-6 border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 text-center">
                  <div className="text-6xl mb-4 grayscale group-hover:grayscale-0 transition-all">{member.image}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-purple-400 font-semibold mb-1">{member.role}</p>
                  <p className="text-xs text-cyan-400 mb-4 uppercase tracking-widest">{member.expertise}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{member.background}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 relative bg-[#0b1121]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              The <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Journey</span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-purple-500/50 via-cyan-500/50 to-pink-500/50" />
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-slate-800/40 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300">
                    <div className="text-sm font-bold text-purple-400 mb-1">{milestone.year}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{milestone.event}</h3>
                    <p className="text-slate-400 text-sm">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full border-4 border-[#0b1121]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 backdrop-blur-lg rounded-3xl p-12 border border-slate-700/50 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Build</span> with us?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join the future of high-precision AI training. Whether you're an expert or a partner, we're ready to scale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-10 py-4 rounded-full text-white font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-xl flex items-center gap-2 justify-center">
                Explore Tracks
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}