// import React from 'react';
// import { User, FolderOpen, BarChart3, CreditCard, Globe, X, LogOut } from 'lucide-react';
// import { Link } from '../../utils/Link';

// export const Sidebar = ({ currentPath, sidebarOpen, setSidebarOpen, userData, onLogout }) => {
//   const navItems = [
//     { path: '/profile', label: 'Profile', icon: User },
//     { path: '/project', label: 'Projects', icon: FolderOpen },
//     { path: '/performance', label: 'Performance', icon: BarChart3 },
//     { path: '/payment', label: 'Payment', icon: CreditCard }
//   ];

//   return (
//     <>
//       {/* MOBILE OVERLAY */}
//       {sidebarOpen && (
//         <div 
//           className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       {/* SIDEBAR CONTAINER */}
//       <aside className={`
//         fixed lg:static inset-y-0 left-0 z-50 
//         w-72 bg-[#0a0a0c]/80 backdrop-blur-xl border-r border-white/10 
//         transform transition-all duration-300 ease-in-out flex flex-col
//         ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
//       `}>
//         <div className="flex flex-col h-full flex-grow">
          
//           {/* LOGO SECTION & MOBILE CLOSE BUTTON */}
//           <div className="flex items-center justify-between px-6 py-8">
//             <div className="flex items-center">
//               <div className="p-2 bg-purple-500/20 rounded-lg mr-3">
//                 <Globe className="w-6 h-6 text-purple-400" />
//               </div>
//               <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//                 Langwage
//               </h1>
//             </div>
            
//             {/* Close button - Only visible on mobile */}
//             <button 
//               onClick={() => setSidebarOpen(false)}
//               className="lg:hidden p-2 text-gray-400 hover:text-white"
//             >
//               <X className="w-6 h-6" />
//             </button>
//           </div>

//           {/* NAVIGATION ITEMS */}
//           <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
//             <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
//               Menu
//             </p>
//             <ul className="space-y-2">
//               {navItems.map((item) => {
//                 const Icon = item.icon;
//                 const isActive = currentPath === item.path;
                
//                 return (
//                   <li key={item.path}>
//                     <Link
//                       to={item.path}
//                       onClick={() => setSidebarOpen(false)}
//                       className={`
//                         group relative flex items-center px-4 py-3 rounded-xl transition-all duration-200
//                         ${isActive 
//                           ? 'bg-white/10 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' 
//                           : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'
//                         }
//                       `}
//                     >
//                       {/* Active Indicator Glow */}
//                       {isActive && (
//                         <div className="absolute left-0 w-1 h-6 bg-purple-500 rounded-r-full shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
//                       )}

//                       <Icon className={`
//                         w-5 h-5 mr-3 transition-transform duration-200 
//                         ${isActive ? 'text-purple-400 scale-110' : 'group-hover:scale-110 group-hover:text-purple-300'}
//                       `} />
                      
//                       <span className="font-medium">{item.label}</span>
                      
//                       {isActive && (
//                         <div className="ml-auto flex items-center">
//                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
//                         </div>
//                       )}
//                     </Link>
//                   </li>
//                 );
//               })}
//             </ul>
//           </nav>

//           {/* USER PROFILE CARD */}
//           <div className="p-4 mt-auto border-t border-white/5">
//             <div className="flex items-center justify-between p-3 rounded-2xl bg-gradient-to-b from-white/10 to-transparent border border-white/5 shadow-xl">
              
//               {/* User Avatar & Info */}
//               <div className="flex items-center flex-1 min-w-0">
//                 <div className="relative flex-shrink-0">
//                   <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center p-[2px]">
//                      <div className="w-full h-full bg-[#121214] rounded-full flex items-center justify-center">
//                         <User className="w-5 h-5 text-purple-300" />
//                      </div>
//                   </div>
//                   <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#121214] rounded-full"></div>
//                 </div>
//                 <div className="ml-3 overflow-hidden pr-2">
//                   <p className="text-sm font-semibold text-white truncate">
//                     {userData ? `${userData.firstName} ${userData.lastName}` : 'Loading...'}
//                   </p>
//                   <p className="text-xs text-gray-500 truncate">
//                     {userData ? userData.email : 'Please wait'}
//                   </p>
//                 </div>
//               </div>

//               {/* Mobile Log Out Button (Only shows on mobile, since Desktop has it in header) */}
//               <button 
//                 onClick={onLogout}
//                 className="lg:hidden flex-shrink-0 p-2 text-red-400 hover:bg-red-500/10 rounded-xl transition-colors"
//                 title="Log Out"
//               >
//                 <LogOut className="w-5 h-5" />
//               </button>

//             </div>
//           </div>

//         </div>
//       </aside>
//     </>
//   );
// };

import React, { useState, useEffect } from 'react';
import { User, FolderOpen, BarChart3, CreditCard, Globe, X, LogOut } from 'lucide-react';
import { Link } from '../../utils/Link';

const sidebarStyles = `
  /* Sidebar Container & Overlays */
  .nl-sidebar-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    z-index: 40;
    transition: opacity 0.3s ease;
  }
  
  .nl-sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 280px;
    background: rgba(11, 13, 20, 0.85);
    backdrop-filter: blur(20px);
    border-right: 0.5px solid rgba(255, 255, 255, 0.08);
    z-index: 50;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease-in-out;
    font-family: sans-serif;
  }
  
  @media (min-width: 1024px) {
    .nl-sidebar { position: static; }
  }
  
  .nl-sidebar.open { transform: translateX(0); }
  .nl-sidebar.closed { transform: translateX(-100%); }
  
  @media (min-width: 1024px) {
    .nl-sidebar.closed { transform: translateX(0); }
  }

  /* Header & Brand */
  .nl-sidebar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 32px 24px;
  }
  .nl-brand {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .nl-brand-icon {
    width: 40px;
    height: 40px;
    border-radius: 12px;
    background: rgba(124, 58, 237, 0.12);
    border: 0.5px solid rgba(167, 139, 250, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #a78bfa;
  }
  .nl-brand-text {
    font-size: 22px;
    font-weight: 600;
    background: linear-gradient(135deg, #a78bfa 0%, #38bdf8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;
    letter-spacing: -0.5px;
  }

  .nl-mobile-close {
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.4);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 8px;
    transition: color 0.2s, background 0.2s;
  }
  .nl-mobile-close:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.05);
  }
  @media (min-width: 1024px) {
    .nl-mobile-close { display: none; }
  }

  /* Navigation Links */
  .nl-nav {
    flex: 1;
    padding: 0 16px;
    overflow-y: auto;
  }
  .nl-nav-label {
    padding: 0 16px;
    font-size: 11px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.3);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 16px;
  }
  .nl-nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  .nl-nav-link {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    border-radius: 12px;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.6);
    transition: all 0.2s ease;
    position: relative;
    font-size: 14px;
    font-weight: 500;
  }
  .nl-nav-link:hover {
    background: rgba(255, 255, 255, 0.05);
    color: #fff;
  }
  .nl-nav-link.active {
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.05);
    border: 0.5px solid rgba(255, 255, 255, 0.05);
  }
  .nl-nav-link-icon {
    margin-right: 12px;
    transition: transform 0.2s, color 0.2s;
    color: rgba(255, 255, 255, 0.4);
  }
  .nl-nav-link:hover .nl-nav-link-icon {
    color: #c4b5fd;
    transform: scale(1.1);
  }
  .nl-nav-link.active .nl-nav-link-icon {
    color: #a78bfa;
    transform: scale(1.1);
  }
  
  .nl-active-indicator {
    position: absolute;
    left: -4px;
    width: 4px;
    height: 20px;
    background: linear-gradient(to bottom, #7c3aed, #0ea5e9);
    border-radius: 0 4px 4px 0;
    box-shadow: 0 0 10px rgba(124, 58, 237, 0.5);
  }
  .nl-pulse-dot {
    margin-left: auto;
    width: 6px;
    height: 6px;
    background: #a78bfa;
    border-radius: 50%;
    box-shadow: 0 0 8px rgba(167, 139, 250, 0.6);
    animation: pulse-opacity 2s infinite;
  }
  @keyframes pulse-opacity {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }

  /* User Profile Card */
  .nl-user-card {
    margin-top: auto;
    padding: 24px 16px;
    border-top: 0.5px solid rgba(255, 255, 255, 0.08);
  }
  .nl-user-wrapper {
    display: flex;
    align-items: center;
    padding: 12px;
    background: rgba(255, 255, 255, 0.03);
    border: 0.5px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    backdrop-filter: blur(10px);
  }
  .nl-user-avatar {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(135deg, #7c3aed, #0ea5e9);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
    flex-shrink: 0;
  }
  .nl-user-avatar-inner {
    width: 100%;
    height: 100%;
    background: #0b0d14;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.7);
  }
  .nl-status-dot {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 10px;
    height: 10px;
    background: #10b981;
    border: 2px solid #0b0d14;
    border-radius: 50%;
  }
  
  .nl-user-info {
    margin-left: 12px;
    flex: 1;
    overflow: hidden;
  }
  .nl-user-name {
    font-size: 13px;
    font-weight: 600;
    color: #fff;
    margin: 0 0 2px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .nl-user-email {
    font-size: 11px;
    color: rgba(255, 255, 255, 0.4);
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .nl-mobile-logout {
    background: none;
    border: none;
    padding: 8px;
    color: #ef4444;
    border-radius: 10px;
    cursor: pointer;
    transition: background 0.2s;
    flex-shrink: 0;
  }
  .nl-mobile-logout:hover {
    background: rgba(239, 68, 68, 0.1);
  }
  @media (min-width: 1024px) {
    .nl-mobile-logout { display: none; }
  }
`;

export const Sidebar = ({ currentPath, sidebarOpen, setSidebarOpen, userData, onLogout }) => {
  const [injected, setInjected] = useState(false);

  useEffect(() => {
    if (!injected) {
      const tag = document.createElement('style');
      tag.textContent = sidebarStyles;
      document.head.appendChild(tag);
      setInjected(true);
    }
  }, [injected]);

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
          className="nl-sidebar-overlay lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR CONTAINER */}
      <aside className={`nl-sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        
        {/* LOGO SECTION & MOBILE CLOSE BUTTON */}
        <div className="nl-sidebar-header">
          <div className="nl-brand">
            <div className="nl-brand-icon">
              <Globe size={20} />
            </div>
            <h1 className="nl-brand-text">Nodelever</h1>
          </div>
          
          <button 
            onClick={() => setSidebarOpen(false)}
            className="nl-mobile-close"
          >
            <X size={20} />
          </button>
        </div>

        {/* NAVIGATION ITEMS */}
        <nav className="nl-nav">
          <p className="nl-nav-label">Menu</p>
          <ul className="nl-nav-list">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPath === item.path;
              
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setSidebarOpen(false)}
                    className={`nl-nav-link ${isActive ? 'active' : ''}`}
                  >
                    {isActive && <div className="nl-active-indicator" />}
                    <Icon size={18} className="nl-nav-link-icon" />
                    <span>{item.label}</span>
                    {isActive && <div className="nl-pulse-dot" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* USER PROFILE CARD */}
        <div className="nl-user-card">
          <div className="nl-user-wrapper">
            
            {/* User Avatar */}
            <div className="nl-user-avatar">
              <div className="nl-user-avatar-inner">
                <User size={18} />
              </div>
              <div className="nl-status-dot" />
            </div>
            
            {/* User Info */}
            <div className="nl-user-info">
              <p className="nl-user-name">
                {userData ? `${userData.firstName} ${userData.lastName}` : 'Loading...'}
              </p>
              <p className="nl-user-email">
                {userData ? userData.email : 'Please wait'}
              </p>
            </div>

            {/* Mobile Log Out Button */}
            <button 
              onClick={onLogout}
              className="nl-mobile-logout"
              title="Log Out"
            >
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};