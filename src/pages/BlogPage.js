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
  Clock,
  Headphones,
  MessageCircle,
  Settings,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Layers,
  Cpu,
  Volume2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import EnterprisePricingSection from '../components/sections/pricing';

export default function SolutionsPage() {
  const [activeTab, setActiveTab] = useState('real-time');
  const [isVisible, setIsVisible] = useState({});
  // const [playingDemo, setPlayingDemo] = useState(null);
  const [hoveredSolution, setHoveredSolution] = useState(null);
  
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

  const solutions = [
    {
      id: 'real-time',
      icon: Zap,
      title: 'Real-Time Dubbing',
      subtitle: 'Instant multilingual communication',
      description: 'Our flagship solution delivers sub-100ms latency dubbing for live gaming sessions, enabling seamless real-time communication across 50+ languages.',
      features: [
        'Sub-100ms latency for real-time performance',
        'Voice tone and emotion preservation',
        'Contextual gaming terminology adaptation',
        'Multi-platform integration support'
      ],
      color: 'from-purple-600 to-pink-600',
      bgColor: 'from-purple-900/20 to-pink-900/20',
      accent: 'purple-400'
    },
    {
      id: 'ai-powered',
      icon: Brain,
      title: 'AI-Powered Dubbing',
      subtitle: 'Advanced neural network processing',
      description: 'Leverage cutting-edge AI technology that learns from gaming contexts to deliver natural, contextually appropriate dubbing experiences.',
      features: [
        'Advanced neural language models',
        'Contextual understanding of gaming scenarios',
        'Continuous learning and improvement',
        'Cultural sensitivity and localization'
      ],
      color: 'from-cyan-600 to-blue-600',
      bgColor: 'from-cyan-900/20 to-blue-900/20',
      accent: 'cyan-400'
    },
    {
      id: 'immersive',
      icon: Headphones,
      title: 'Immersive Gaming Solutions',
      subtitle: 'Complete gaming ecosystem integration',
      description: 'Transform your entire gaming experience with our comprehensive dubbing solutions that integrate seamlessly with popular gaming platforms.',
      features: [
        'Complete gaming platform integration',
        'Customizable voice profiles',
        'Team communication enhancement',
        'Tournament and esports support'
      ],
      color: 'from-green-600 to-teal-600',
      bgColor: 'from-green-900/20 to-teal-900/20',
      accent: 'green-400'
    },
    {
      id: 'live-events',
      icon: Users,
      title: 'Live Gaming Events',
      subtitle: 'Scalable event broadcasting',
      description: 'Power large-scale gaming events with our enterprise-grade dubbing infrastructure that scales to support millions of concurrent users.',
      features: [
        'Enterprise-grade scalability',
        'Multi-language broadcast support',
        'Real-time audience analytics',
        'Professional event management tools'
      ],
      color: 'from-pink-600 to-red-600',
      bgColor: 'from-pink-900/20 to-red-900/20',
      accent: 'pink-400'
    }
  ];

  const features = [
    {
      icon: Clock,
      title: 'Ultra-Low Latency',
      description: 'Sub-100ms processing time ensures real-time communication without delays',
      color: 'text-purple-400'
    },
    {
      icon: Globe,
      title: '50+ Languages',
      description: 'Comprehensive language support covering major gaming markets worldwide',
      color: 'text-cyan-400'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade encryption and privacy protection for all communications',
      color: 'text-green-400'
    },
    {
      icon: Cpu,
      title: 'AI Processing',
      description: 'Advanced neural networks for natural, contextual dubbing',
      color: 'text-pink-400'
    },
    {
      icon: Volume2,
      title: 'Voice Preservation',
      description: 'Maintains emotional tone and speaker characteristics',
      color: 'text-yellow-400'
    },
    {
      icon: Settings,
      title: 'Easy Integration',
      description: 'Simple API integration with existing gaming infrastructure',
      color: 'text-blue-400'
    }
  ];

  const testimonials = [
    {
      name: 'Alex Johnson',
      location: 'New York',
      feedback: 'Langwage Inc. transformed our gaming experience with seamless multilingual dubbing. Highly recommended!',
      rating: 5,
      avatar: '🎮',
      company: 'Pro Gaming Team'
    },
    {
      name: 'Maria Lopez',
      location: 'Los Angeles',
      feedback: 'The immersive dubbing solutions have significantly improved our live gaming sessions, making them more engaging for players across different languages.',
      rating: 5,
      avatar: '🏆',
      company: 'Esports Organization'
    },
    {
      name: 'Chen Wei',
      location: 'Tokyo',
      feedback: 'Outstanding technology that breaks down language barriers in gaming. The real-time dubbing is incredibly natural.',
      rating: 5,
      avatar: '🌟',
      company: 'Gaming Studio'
    }
  ];

  // const pricingPlans = [
  //   {
  //     name: 'Starter',
  //     price: '$99',
  //     period: '/month',
  //     description: 'Perfect for individual streamers and small gaming groups',
  //     features: [
  //       'Up to 10 concurrent users',
  //       '20 hours of dubbing per month',
  //       '10 supported languages',
  //       'Basic analytics',
  //       'Email support'
  //     ],
  //     popular: false,
  //     color: 'from-purple-600 to-pink-600'
  //   },
  //   {
  //     name: 'Professional',
  //     price: '$299',
  //     period: '/month',
  //     description: 'Ideal for gaming organizations and content creators',
  //     features: [
  //       'Up to 100 concurrent users',
  //       'Unlimited dubbing hours',
  //       '30 supported languages',
  //       'Advanced analytics',
  //       'Priority support',
  //       'Custom voice profiles'
  //     ],
  //     popular: true,
  //     color: 'from-cyan-600 to-blue-600'
  //   },
  //   {
  //     name: 'Enterprise',
  //     price: 'Custom',
  //     period: '',
  //     description: 'For large-scale gaming events and platforms',
  //     features: [
  //       'Unlimited concurrent users',
  //       'Unlimited dubbing hours',
  //       'All 50+ supported languages',
  //       'Real-time analytics dashboard',
  //       '24/7 dedicated support',
  //       'Custom integrations',
  //       'White-label solutions'
  //     ],
  //     popular: false,
  //     color: 'from-green-600 to-teal-600'
  //   }
  // ];

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
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <FloatingElement delay={0}>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Solutions
              </span>
              <br />
              <span className="text-white">That Scale</span>
            </h1>
          </FloatingElement>

          <FloatingElement delay={300}>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive suite of <span className="text-purple-400 font-semibold">AI-powered dubbing solutions</span> designed 
              to transform gaming experiences and connect players across all languages.
            </p>
          </FloatingElement>

          <FloatingElement delay={600}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* <button className="group bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full text-white font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-2xl hover:shadow-purple-500/50">
                Explore Solutions
              </button> */}
              {/* <button 
                onClick={() => setPlayingDemo(playingDemo ? null : 'main')}
                className="flex items-center gap-3 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-400 hover:text-black transform transition-all duration-300 hover:scale-105"
              >
                {playingDemo === 'main' ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                {playingDemo === 'main' ? 'Pause Demo' : 'Watch Demo'}
              </button> */}
            </div>
          </FloatingElement>
        </div>
      </section>

      {/* Key Features Overview */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Our Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built for the modern gaming ecosystem with enterprise-grade performance and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full hover:scale-105">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className={`w-8 h-8 ${feature.color}`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">{feature.title}</h3>
                  <p className="text-gray-300 text-center leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Showcase */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI dubbing solutions designed for every gaming scenario.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div 
                key={solution.id} 
                className="group relative"
                onMouseEnter={() => setHoveredSolution(solution.id)}
                onMouseLeave={() => setHoveredSolution(null)}
              >
                <div className={`bg-gradient-to-br ${solution.bgColor} backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 h-full`}>
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${solution.color} group-hover:scale-110 transition-transform duration-300`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{solution.title}</h3>
                      <p className={`text-${solution.accent} font-semibold mb-4`}>{solution.subtitle}</p>
                      <p className="text-gray-300 leading-relaxed mb-6">{solution.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className={`w-5 h-5 text-${solution.accent} flex-shrink-0`} />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Link to="/about">
                    <button className={`flex gap-4 flex-1 bg-gradient-to-r ${solution.color} px-6 py-3 rounded-full text-white font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg`}>
                     
                      Learn More
                      
                    </button>
                    </Link>
                    {/* <button 
                      onClick={() => setPlayingDemo(playingDemo === solution.id ? null : solution.id)}
                      className={`px-6 py-3 rounded-full border-2 border-${solution.accent} text-${solution.accent} font-semibold hover:bg-${solution.accent} hover:text-black transform transition-all duration-300 flex items-center gap-2`}
                    >
                      {playingDemo === solution.id ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      Demo
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our solutions enhance multilingual gaming experiences for users worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300 h-full hover:scale-105">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.feedback}"</p>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{testimonial.avatar}</div>
                    <div>
                      <div className="font-bold text-white">{testimonial.name}</div>
                      <div className="text-purple-400 text-sm">{testimonial.company}</div>
                      <div className="text-gray-400 text-sm">{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      {/* <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Plan</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your gaming needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`group relative ${plan.popular ? 'scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full text-white font-bold text-sm">
                    Most Popular
                  </div>
                )}
                
                <div className={`bg-white/5 backdrop-blur-lg rounded-3xl p-8 border ${plan.popular ? 'border-purple-400/50' : 'border-white/10'} hover:border-white/20 transition-all duration-300 h-full`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full bg-gradient-to-r ${plan.color} px-6 py-4 rounded-full text-white font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-lg`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <EnterprisePricingSection/>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Get Started</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your gaming experience today with our cutting-edge AI dubbing solutions. 
              Join thousands of satisfied customers worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full text-white font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-2xl hover:shadow-purple-500/50 flex items-center gap-2 justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </button> */}
              {/* <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-400 hover:text-black transform transition-all duration-300 hover:scale-105">
                Schedule Demo
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}