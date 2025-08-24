import React, { useState, useEffect } from 'react';
import { User, FolderOpen, BarChart3, CreditCard, Menu, X, Globe } from 'lucide-react';

// Simple routing using React state
const useRouter = () => {
  const [currentPath, setCurrentPath] = useState('/profile');
  const navigate = (path) => setCurrentPath(path);
  return { currentPath, navigate };
};

const Link = ({ to, children, className, onClick }) => (
  <button onClick={() => { onClick?.(); window.navigate?.(to); }} className={className}>
    {children}
  </button>
);

// Page Components
const ProfilePage = () => (
  <div className="space-y-6">
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
      <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Profile
      </h1>
      <p className="text-gray-300 mb-6">Manage your account settings and preferences</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-semibold text-white mb-2">Personal Information</h3>
          <p className="text-gray-400">Update your personal details and contact information</p>
        </div>
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-semibold text-white mb-2">Security Settings</h3>
          <p className="text-gray-400">Manage your password and security preferences</p>
        </div>
      </div>
    </div>
  </div>
);

const ProjectPage = () => (
  <div className="space-y-6">
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
      <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        Projects
      </h1>
      <p className="text-gray-300 mb-6">View and manage your active projects</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-2">Project {i}</h3>
            <p className="text-gray-400 mb-4">Description of project {i}</p>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: `${30 + i * 20}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const PerformancePage = () => (
  <div className="space-y-6">
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
      <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
        Performance
      </h1>
      <p className="text-gray-300 mb-6">Track your analytics and performance metrics</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Users', value: '12,345', change: '+12%' },
          { label: 'Revenue', value: '$54,321', change: '+8%' },
          { label: 'Projects', value: '87', change: '+23%' },
          { label: 'Success Rate', value: '94.2%', change: '+5%' }
        ].map((metric, i) => (
          <div key={i} className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-sm font-medium text-gray-400 mb-2">{metric.label}</h3>
            <p className="text-2xl font-bold text-white mb-1">{metric.value}</p>
            <p className="text-green-400 text-sm">{metric.change}</p>
          </div>
        ))}
      </div>
      
      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
        <h3 className="text-xl font-semibold text-white mb-4">Performance Chart</h3>
        <div className="h-40 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg flex items-center justify-center">
          <p className="text-gray-400">Chart visualization would go here</p>
        </div>
      </div>
    </div>
  </div>
);



const PaymentPage = () => {
  const [activeTab, setActiveTab] = useState('payments');

  const renderTabContent = () => {
    switch (activeTab) {
        case 'payments':
      default:
        return (
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Payment Overview
            </h2>
            <p className="text-gray-300 mb-6">Manage your billing and payment methods</p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4">Current Plan</h3>
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-4">
                    <h4 className="text-lg font-bold text-white">Pro Plan</h4>
                    <p className="text-white/80">$29/month</p>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4">Payment Methods</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <span className="text-gray-300">**** **** **** 1234</span>
                      <span className="text-purple-400">Primary</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Billing History</h3>
                <div className="space-y-3">
                  {[
                    { date: 'Jan 15, 2025', amount: '$29.00', status: 'Paid' },
                    { date: 'Dec 15, 2024', amount: '$29.00', status: 'Paid' },
                    { date: 'Nov 15, 2024', amount: '$29.00', status: 'Paid' }
                  ].map((bill, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div>
                        <p className="text-white font-medium">{bill.amount}</p>
                        <p className="text-gray-400 text-sm">{bill.date}</p>
                      </div>
                      <span className="text-green-400 text-sm">{bill.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

    
      
      case 'payment-method':
        return (
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-6 text-white">Payment Methods</h2>
            <div className="space-y-6">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Saved Payment Methods</h3>
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all">
                    Add New
                  </button>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
                        VISA
                      </div>
                      <div>
                        <p className="text-white font-medium">**** **** **** 1234</p>
                        <p className="text-gray-400 text-sm">Expires 12/27</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-purple-400 text-sm">Primary</span>
                      <button className="text-gray-400 hover:text-white">⋯</button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-6 bg-gradient-to-r from-red-500 to-red-600 rounded flex items-center justify-center text-white text-xs font-bold">
                        MC
                      </div>
                      <div>
                        <p className="text-white font-medium">**** **** **** 5678</p>
                        <p className="text-gray-400 text-sm">Expires 08/26</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="text-gray-400 hover:text-white">⋯</button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">Billing Address</h3>
                <div className="space-y-2 text-gray-300">
                  <p>John Doe</p>
                  <p>123 Main Street</p>
                  <p>New York, NY 10001</p>
                  <p>United States</p>
                </div>
                <button className="mt-4 text-purple-400 hover:text-purple-300">Edit Address</button>
              </div>
            </div>
          </div>
        );

          case 'tax-compliance':
        return (
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-6 text-white">Tax Compliance</h2>
            <div className="space-y-6">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">Tax Information</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Tax ID</span>
                    <span className="text-white">12-3456789</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Tax Region</span>
                    <span className="text-white">United States</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">VAT Number</span>
                    <span className="text-white">Not applicable</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">Tax Documents</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-gray-300">2024 Tax Statement</span>
                    <button className="text-purple-400 hover:text-purple-300">Download</button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-gray-300">2023 Tax Statement</span>
                    <button className="text-purple-400 hover:text-purple-300">Download</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      
    }
  };

  return (
    <div className="space-y-6">
      {/* Payment Section Navbar */}
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden">
        <nav className="flex">
          {[
            { id: 'payments', label: 'Payments' },
            { id: 'payment-method', label: 'Payment Method' },
            { id: 'tax-compliance', label: 'Tax Compliance' }
           
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-6 py-4 text-center font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-white border-b-2 border-purple-400'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
};


export default function LangwageDashboard() {
  const { currentPath, navigate } = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.navigate = navigate; // Set global navigate function
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [navigate]);

  const navItems = [
    { path: '/profile', label: 'Profile', icon: User },
    { path: '/project', label: 'Projects', icon: FolderOpen },
    { path: '/performance', label: 'Performance', icon: BarChart3 },
    { path: '/payment', label: 'Payment', icon: CreditCard }
  ];

  const FloatingOrb = ({ delay, size, color }) => (
    <div 
      className="absolute rounded-full blur-xl opacity-20 animate-pulse"
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        animationDelay: `${delay}s`,
        animationDuration: '6s',
        transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
      }}
    />
  );

  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/profile':
        return <ProfilePage />;
      case '/project':
        return <ProjectPage />;
      case '/performance':
        return <PerformancePage />;
      case '/payment':
        return <PaymentPage />;
      default:
        return <ProfilePage />;
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
        <FloatingOrb delay={0} size="400px" color="#8B5CF6" />
        <FloatingOrb delay={2} size="300px" color="#06B6D4" />
        <FloatingOrb delay={4} size="500px" color="#EC4899" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      <div className="relative z-10 flex h-screen">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 text-white"
        >
          {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Sidebar */}
        <div className={`
          fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white/5 backdrop-blur-lg border-r border-white/10 transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="flex flex-col h-full">
            {/* Logo */}
            <div className="flex items-center justify-center p-6 border-b border-white/10">
              <Globe className="w-8 h-8 text-purple-400 mr-3" />
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Langwage
              </h1>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4">
              <ul className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentPath === item.path;
                  
                  return (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        onClick={() => setSidebarOpen(false)}
                        className={`
                          w-full flex items-center px-4 py-3 rounded-xl text-left transition-all duration-300 group
                          ${isActive 
                            ? 'bg-gradient-to-r from-purple-600/50 to-pink-600/50 text-white border border-purple-400/30' 
                            : 'text-gray-300 hover:bg-white/10 hover:text-white'
                          }
                        `}
                      >
                        <Icon className={`w-5 h-5 mr-3 transition-colors ${isActive ? 'text-purple-300' : 'text-gray-400 group-hover:text-purple-400'}`} />
                        <span className="font-medium">{item.label}</span>
                        {isActive && (
                          <div className="ml-auto w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* User Profile */}
            <div className="p-4 border-t border-white/10">
              <div className="flex items-center p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div className="ml-3">
                  <p className="text-white font-medium">John Doe</p>
                  <p className="text-gray-400 text-sm">john@langwage.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black/50 z-30"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-h-screen lg:ml-0">
          {/* Header */}
          <header className="bg-white/5 backdrop-blur-lg border-b border-white/10 p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <div className="lg:hidden" /> {/* Spacer for mobile menu button */}
              <div className="text-center lg:text-left">
                <h2 className="text-2xl font-bold text-white">
                  {navItems.find(item => item.path === currentPath)?.label || 'Dashboard'}
                </h2>
                <p className="text-gray-400 text-sm">
                  {new Date().toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="hidden sm:flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 border border-white/20">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 text-sm font-medium">Online</span>
                </div>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 p-4 lg:p-8 overflow-auto">
            <div className="transition-all duration-500 ease-in-out">
              {renderCurrentPage()}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}