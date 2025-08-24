import React, { useState, useEffect } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Globe, User, MapPin, Phone, Languages } from 'lucide-react';

export default function LangwageRegistration() {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    country: '',
    email: '',
    phoneNumber: '',
    languages: [],
    languageRegion: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const availableLanguages = [
    'English', 'Spanish', 'Polish', 'German', 
    'Ukrainian', 'Russian', 'Dutch', 'French'
  ];

  const countries = [
    'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'France',
    'Spain', 'Italy', 'Netherlands', 'Poland', 'Ukraine', 'Russia', 'Other'
  ];

  const languageRegions = [
    'North America', 'Western Europe', 'Eastern Europe', 
    'Asia-Pacific', 'Latin America', 'Other'
  ];

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

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleLanguageToggle = (language) => {
    setFormData(prev => ({
      ...prev,
      languages: prev.languages.includes(language)
        ? prev.languages.filter(lang => lang !== language)
        : [...prev.languages, language]
    }));
  };

  const handleSubmit = () => {
    // Handle registration logic here
    console.log('Registration attempted with:', formData);
  };

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

      {/* Registration Card */}
      <div className={`relative z-40 w-full max-w-2xl mx-auto px-6 transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl">
          {/* Logo/Brand */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Globe className="w-12 h-12 text-purple-400" />
            </div>
            <h1 className="text-3xl font-bold mb-2">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Langwage
              </span>
            </h1>
            <p className="text-gray-400">Join the future of gaming</p>
          </div>

          {/* Registration Form */}
          <div className="space-y-6">
            {/* Full Name */}
            <div className="space-y-2">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-300">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                  required
                />
              </div>
            </div>

            {/* Address & Country Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Address */}
              <div className="space-y-2">
                <label htmlFor="address" className="block text-sm font-medium text-gray-300">
                  Address
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder="Enter your address"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Country */}
              <div className="space-y-2">
                <label htmlFor="country" className="block text-sm font-medium text-gray-300">
                  Country
                </label>
                <div className="relative">
                  <Globe className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    id="country"
                    value={formData.country}
                    onChange={(e) => handleInputChange('country', e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 appearance-none"
                    required
                  >
                    <option value="" className="bg-gray-900">Select your country</option>
                    {countries.map((country) => (
                      <option key={country} value={country} className="bg-gray-900">
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Email & Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-300">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    placeholder="Enter your phone number"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Languages (Select all that apply)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {availableLanguages.map((language) => (
                  <button
                    key={language}
                    type="button"
                    onClick={() => handleLanguageToggle(language)}
                    className={`p-3 rounded-xl border transition-all duration-300 text-sm font-medium ${
                      formData.languages.includes(language)
                        ? 'bg-purple-600/30 border-purple-400 text-purple-300'
                        : 'bg-white/5 border-white/20 text-gray-400 hover:bg-white/10 hover:border-purple-400/50'
                    }`}
                  >
                    {language}
                  </button>
                ))}
              </div>
            </div>

            {/* Language Region */}
            <div className="space-y-2">
              <label htmlFor="languageRegion" className="block text-sm font-medium text-gray-300">
                Language Region
              </label>
              <div className="relative">
                <Languages className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  id="languageRegion"
                  value={formData.languageRegion}
                  onChange={(e) => handleInputChange('languageRegion', e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 appearance-none"
                  required
                >
                  <option value="" className="bg-gray-900">Select language region</option>
                  {languageRegions.map((region) => (
                    <option key={region} value={region} className="bg-gray-900">
                      {region}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Password Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Password */}
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    placeholder="Create password"
                    className="w-full pl-12 pr-12 py-4 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    placeholder="Confirm password"
                    className="w-full pl-12 pr-12 py-4 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="agreeToTerms"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className="w-5 h-5 mt-1 rounded border-gray-600 bg-white/10 text-purple-600 focus:ring-purple-500 focus:ring-offset-0"
                required
              />
              <label htmlFor="agreeToTerms" className="text-sm text-gray-300">
                I agree to the{' '}
                <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                  Terms of Service
                </a>
                {' '}and{' '}
                <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                  Privacy Policy
                </a>
                , and I consent to receive marketing communications from Langwage.
              </label>
            </div>

            {/* Register Button */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!agreeToTerms}
              className="group w-full bg-gradient-to-r from-purple-600 to-pink-600 py-4 rounded-xl text-white font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-2xl hover:shadow-purple-500/50 relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Create Account <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-600" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-black text-gray-400">Or register with</span>
              </div>
            </div>

            {/* Social Registration Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center px-4 py-3 border border-white/20 rounded-xl bg-white/5 text-white hover:bg-white/10 transition-all duration-300"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="ml-2">Google</span>
              </button>
              
              <button
                type="button"
                className="flex items-center justify-center px-4 py-3 border border-white/20 rounded-xl bg-white/5 text-white hover:bg-white/10 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
                <span className="ml-2">Twitter</span>
              </button>
            </div>
          </div>

          {/* Sign In Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Already have an account?{' '}
              <a href="#" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
                Sign in here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}