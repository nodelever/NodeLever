import React from 'react';
import { Menu, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link for routing

export const Header = ({ currentPath, sidebarOpen, setSidebarOpen, userData, onLogout }) => {
  const navItems = [
    { path: '/profile', label: 'Profile' },
    { path: '/project', label: 'Projects' },
    { path: '/performance', label: 'Performance' },
    { path: '/payment', label: 'Payment' }
  ];

  return (
    <header className="bg-[#0a0a0c]/80 backdrop-blur-xl border-b border-white/10 p-4 lg:p-6 sticky top-0 z-30">
      <div className="flex items-center justify-between">
        
        {/* LEFT SECTION: Hamburger Menu + Page Title */}
        <div className="flex items-center gap-3 lg:gap-0">
          
          {/* Mobile Hamburger Button */}
          {!sidebarOpen && (
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all active:scale-95"
              aria-label="Open sidebar"
            >
              <Menu className="w-6 h-6" />
            </button>
          )}
          
          <div className="text-left">
            <h2 className="text-xl lg:text-2xl font-bold text-white tracking-tight">
              {navItems.find(item => item.path === currentPath)?.label || 'Dashboard'}
            </h2>
            <p className="text-gray-400 text-xs lg:text-sm mt-0.5">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </div>

        {/* RIGHT SECTION: Dynamic User Info or Auth Buttons */}
        <div className="flex items-center gap-4 lg:gap-6">
          
          {userData ? (
            /* --- RENDER IF USER IS LOGGED IN --- */
            <>
              <div className="hidden md:flex flex-col items-end">
                <span className="text-sm font-bold text-white tracking-wide">
                  {`${userData.firstName} ${userData.lastName}`}
                </span>
                <span className="text-xs text-gray-400">
                  {userData.email}
                </span>
              </div>

              <div className="flex items-center gap-3">
                {/* Online Indicator */}
                <div className="hidden sm:flex items-center space-x-2 bg-green-500/10 rounded-full px-4 py-1.5 border border-green-500/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
                  <span className="text-green-400 text-sm font-medium">Online</span>
                </div>

                <div className="hidden sm:block w-px h-8 bg-white/10 mx-1"></div>

                {/* Log Out Button */}
                <button 
                  onClick={onLogout}
                  className="flex items-center gap-2 p-2 sm:px-4 sm:py-2 text-sm font-medium text-red-400 hover:text-white hover:bg-red-500/20 rounded-xl transition-all duration-300 border border-transparent hover:border-red-500/30"
                  title="Log out"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="hidden lg:inline">Log Out</span>
                </button>
              </div>
            </>
          ) : (
            /* --- RENDER IF USER IS NOT LOGGED IN --- */
            <div className="flex items-center gap-3 sm:gap-4">
              <Link 
                to="/login"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors px-2"
              >
                Sign In
              </Link>
              <Link 
                to="/reg"
                className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-5 py-2.5 rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transform hover:-translate-y-0.5"
              >
                Sign Up
              </Link>
            </div>
          )}
          
        </div>
      </div>
    </header>
  );
};