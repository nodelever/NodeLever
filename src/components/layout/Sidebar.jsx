import React from 'react';
import { User, FolderOpen, BarChart3, CreditCard, Globe, X, LogOut } from 'lucide-react';
import { Link } from '../../utils/Link';

export const Sidebar = ({ currentPath, sidebarOpen, setSidebarOpen, userData, onLogout }) => {
  const navItems = [
    { path: '/profile', label: 'Profile', icon: User },
    { path: '/project', label: 'Projects', icon: FolderOpen },
    { path: '/performance', label: 'Performance', icon: BarChart3 },
    { path: '/payment', label: 'Payment', icon: CreditCard }
  ];

  return (
    <>
      {/* MOBILE OVERLAY */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR CONTAINER */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50 
        w-72 bg-[#0a0a0c]/80 backdrop-blur-xl border-r border-white/10 
        transform transition-all duration-300 ease-in-out flex flex-col
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full flex-grow">
          
          {/* LOGO SECTION & MOBILE CLOSE BUTTON */}
          <div className="flex items-center justify-between px-6 py-8">
            <div className="flex items-center">
              <div className="p-2 bg-purple-500/20 rounded-lg mr-3">
                <Globe className="w-6 h-6 text-purple-400" />
              </div>
              <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Langwage
              </h1>
            </div>
            
            {/* Close button - Only visible on mobile */}
            <button 
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* NAVIGATION ITEMS */}
          <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
            <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Menu
            </p>
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
                        group relative flex items-center px-4 py-3 rounded-xl transition-all duration-200
                        ${isActive 
                          ? 'bg-white/10 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' 
                          : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'
                        }
                      `}
                    >
                      {/* Active Indicator Glow */}
                      {isActive && (
                        <div className="absolute left-0 w-1 h-6 bg-purple-500 rounded-r-full shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
                      )}

                      <Icon className={`
                        w-5 h-5 mr-3 transition-transform duration-200 
                        ${isActive ? 'text-purple-400 scale-110' : 'group-hover:scale-110 group-hover:text-purple-300'}
                      `} />
                      
                      <span className="font-medium">{item.label}</span>
                      
                      {isActive && (
                        <div className="ml-auto flex items-center">
                           <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
                        </div>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* USER PROFILE CARD */}
          <div className="p-4 mt-auto border-t border-white/5">
            <div className="flex items-center justify-between p-3 rounded-2xl bg-gradient-to-b from-white/10 to-transparent border border-white/5 shadow-xl">
              
              {/* User Avatar & Info */}
              <div className="flex items-center flex-1 min-w-0">
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center p-[2px]">
                     <div className="w-full h-full bg-[#121214] rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-purple-300" />
                     </div>
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#121214] rounded-full"></div>
                </div>
                <div className="ml-3 overflow-hidden pr-2">
                  <p className="text-sm font-semibold text-white truncate">
                    {userData ? `${userData.firstName} ${userData.lastName}` : 'Loading...'}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {userData ? userData.email : 'Please wait'}
                  </p>
                </div>
              </div>

              {/* Mobile Log Out Button (Only shows on mobile, since Desktop has it in header) */}
              <button 
                onClick={onLogout}
                className="lg:hidden flex-shrink-0 p-2 text-red-400 hover:bg-red-500/10 rounded-xl transition-colors"
                title="Log Out"
              >
                <LogOut className="w-5 h-5" />
              </button>

            </div>
          </div>

        </div>
      </aside>
    </>
  );
};