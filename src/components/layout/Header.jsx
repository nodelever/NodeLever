import React from 'react';
import { Menu } from 'lucide-react';

export const Header = ({ currentPath, sidebarOpen, setSidebarOpen }) => {
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
          
          {/* Mobile Hamburger Button - Hidden on desktop, hidden when sidebar is open */}
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

        {/* RIGHT SECTION: Status / Actions */}
        <div className="flex items-center">
          <div className="hidden sm:flex items-center space-x-2 bg-green-500/10 rounded-full px-4 py-1.5 border border-green-500/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
            <span className="text-green-400 text-sm font-medium">Online</span>
          </div>
        </div>
        
      </div>
    </header>
  );
};