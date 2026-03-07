import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router

export default function EmailVerified() {
  const [countdown, setCountdown] = useState(5);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Countdown and auto-redirect
  useEffect(() => {
    if (countdown === 0) {
      navigate('/login'); // Change to your login route
      return;
    }

    const timer = setTimeout(() => {
      setCountdown(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, navigate]);

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
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center py-12">
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

      {/* Success Card */}
      <div className={`relative z-40 w-full max-w-md mx-auto px-6 transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-10 border border-white/10 shadow-2xl text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <CheckCircle className="w-24 h-24 text-green-400 animate-pulse" />
              <div className="absolute inset-0 w-24 h-24 rounded-full bg-green-400/20 blur-xl animate-ping" />
            </div>
          </div>

          {/* Brand */}
          <div className="mb-6">
            <div className="flex items-center justify-center mb-4">
              <Globe className="w-10 h-10 text-purple-400" />
            </div>
            <h1 className="text-3xl font-bold mb-2">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Langwage
              </span>
            </h1>
          </div>

          {/* Success Message */}
          <h2 className="text-2xl font-bold text-white mb-4">
            Email Verified Successfully!
          </h2>
          <p className="text-gray-300 mb-8">
            Welcome to the future of gaming. Your account is now active and ready to use.
          </p>

          {/* Countdown & Redirect Info */}
          <div className="mb-8">
            <p className="text-gray-400">
              Redirecting you to login in{' '}
              <span className="text-purple-400 font-bold text-lg">{countdown}</span> seconds...
            </p>
          </div>

          {/* Manual Login Button */}
          <button
            onClick={() => navigate('/login')}
            className="group w-full bg-gradient-to-r from-purple-600 to-pink-600 py-4 rounded-xl text-white font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-2xl hover:shadow-purple-500/50 relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Go to Login Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          {/* Optional: Fun note */}
          <p className="text-gray-500 text-sm mt-8">
            Get ready to level up your language gaming experience! 🚀
          </p>
        </div>
      </div>
    </div>
  );
}