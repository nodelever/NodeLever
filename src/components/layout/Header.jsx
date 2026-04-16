// import React from 'react';
// import { Menu, LogOut } from 'lucide-react';
// import { Link } from 'react-router-dom'; // Import Link for routing

// export const Header = ({ currentPath, sidebarOpen, setSidebarOpen, userData, onLogout }) => {
//   const navItems = [
//     { path: '/profile', label: 'Profile' },
//     { path: '/project', label: 'Projects' },
//     { path: '/performance', label: 'Performance' },
//     { path: '/payment', label: 'Payment' }
//   ];

//   return (
//     <header className="bg-[#0a0a0c]/80 backdrop-blur-xl border-b border-white/10 p-4 lg:p-6 sticky top-0 z-30">
//       <div className="flex items-center justify-between">
        
//         {/* LEFT SECTION: Hamburger Menu + Page Title */}
//         <div className="flex items-center gap-3 lg:gap-0">
          
//           {/* Mobile Hamburger Button */}
//           {!sidebarOpen && (
//             <button
//               onClick={() => setSidebarOpen(true)}
//               className="lg:hidden p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all active:scale-95"
//               aria-label="Open sidebar"
//             >
//               <Menu className="w-6 h-6" />
//             </button>
//           )}
          
//           <div className="text-left">
//             <h2 className="text-xl lg:text-2xl font-bold text-white tracking-tight">
//               {navItems.find(item => item.path === currentPath)?.label || 'Dashboard'}
//             </h2>
//             <p className="text-gray-400 text-xs lg:text-sm mt-0.5">
//               {new Date().toLocaleDateString('en-US', { 
//                 weekday: 'long', 
//                 year: 'numeric', 
//                 month: 'long', 
//                 day: 'numeric' 
//               })}
//             </p>
//           </div>
//         </div>

//         {/* RIGHT SECTION: Dynamic User Info or Auth Buttons */}
//         <div className="flex items-center gap-4 lg:gap-6">
          
//           {userData ? (
//             /* --- RENDER IF USER IS LOGGED IN --- */
//             <>
//               <div className="hidden md:flex flex-col items-end">
//                 <span className="text-sm font-bold text-white tracking-wide">
//                   {`${userData.firstName} ${userData.lastName}`}
//                 </span>
//                 <span className="text-xs text-gray-400">
//                   {userData.email}
//                 </span>
//               </div>

//               <div className="flex items-center gap-3">
//                 {/* Online Indicator */}
//                 <div className="hidden sm:flex items-center space-x-2 bg-green-500/10 rounded-full px-4 py-1.5 border border-green-500/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
//                   <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
//                   <span className="text-green-400 text-sm font-medium">Online</span>
//                 </div>

//                 <div className="hidden sm:block w-px h-8 bg-white/10 mx-1"></div>

//                 {/* Log Out Button */}
//                 <button 
//                   onClick={onLogout}
//                   className="flex items-center gap-2 p-2 sm:px-4 sm:py-2 text-sm font-medium text-red-400 hover:text-white hover:bg-red-500/20 rounded-xl transition-all duration-300 border border-transparent hover:border-red-500/30"
//                   title="Log out"
//                 >
//                   <LogOut className="w-5 h-5" />
//                   <span className="hidden lg:inline">Log Out</span>
//                 </button>
//               </div>
//             </>
//           ) : (
//             /* --- RENDER IF USER IS NOT LOGGED IN --- */
//             <div className="flex items-center gap-3 sm:gap-4">
//               <Link 
//                 to="/login"
//                 className="text-sm font-medium text-gray-300 hover:text-white transition-colors px-2"
//               >
//                 Sign In
//               </Link>
//               <Link 
//                 to="/reg"
//                 className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-5 py-2.5 rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transform hover:-translate-y-0.5"
//               >
//                 Sign Up
//               </Link>
//             </div>
//           )}
          
//         </div>
//       </div>
//     </header>
//   );
// };

import React, { useState, useEffect } from 'react';
import { Menu, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

const headerStyles = `
  .nl-header {
    background: rgba(10, 10, 12, 0.8);
    backdrop-filter: blur(20px);
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.1);
    padding: 16px;
    position: sticky;
    top: 0;
    z-index: 30;
    font-family: sans-serif;
  }
  
  @media (min-width: 1024px) {
    .nl-header {
      padding: 24px;
    }
  }

  .nl-header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  /* Left Section */
  .nl-header-left {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  @media (min-width: 1024px) {
    .nl-header-left { gap: 0; }
  }

  .nl-hamburger {
    background: rgba(255, 255, 255, 0.05);
    border: 0.5px solid rgba(255, 255, 255, 0.1);
    color: #fff;
    padding: 8px;
    border-radius: 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
  }
  .nl-hamburger:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  .nl-hamburger:active {
    transform: scale(0.95);
  }
  @media (min-width: 1024px) {
    .nl-hamburger { display: none; }
  }

  .nl-title-group {
    text-align: left;
  }
  .nl-page-title {
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    letter-spacing: -0.5px;
    margin: 0;
  }
  @media (min-width: 1024px) {
    .nl-page-title { font-size: 24px; }
  }
  .nl-page-date {
    font-size: 12px;
    color: #9ca3af;
    margin: 2px 0 0 0;
  }
  @media (min-width: 1024px) {
    .nl-page-date { font-size: 14px; }
  }

  /* Right Section */
  .nl-header-right {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  @media (min-width: 1024px) {
    .nl-header-right { gap: 24px; }
  }

  /* Logged In State */
  .nl-user-meta {
    display: none;
    flex-direction: column;
    align-items: flex-end;
  }
  @media (min-width: 768px) {
    .nl-user-meta { display: flex; }
  }
  .nl-meta-name {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    letter-spacing: 0.5px;
    margin: 0;
  }
  .nl-meta-email {
    font-size: 12px;
    color: #9ca3af;
    margin: 0;
  }

  .nl-actions-group {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .nl-online-badge {
    display: none;
    align-items: center;
    gap: 8px;
    background: rgba(34, 197, 94, 0.1);
    border: 0.5px solid rgba(34, 197, 94, 0.2);
    border-radius: 9999px;
    padding: 6px 16px;
    box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  }
  @media (min-width: 640px) {
    .nl-online-badge { display: flex; }
  }
  .nl-online-dot {
    width: 8px;
    height: 8px;
    background: #4ade80;
    border-radius: 50%;
    box-shadow: 0 0 8px rgba(74, 222, 128, 0.6);
    animation: pulse-dot 2s infinite;
  }
  @keyframes pulse-dot {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
  .nl-online-text {
    color: #4ade80;
    font-size: 14px;
    font-weight: 500;
  }

  .nl-divider {
    display: none;
    width: 1px;
    height: 32px;
    background: rgba(255, 255, 255, 0.1);
    margin: 0 4px;
  }
  @media (min-width: 640px) {
    .nl-divider { display: block; }
  }

  .nl-logout-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px;
    font-size: 14px;
    font-weight: 500;
    color: #f87171;
    background: transparent;
    border: 1px solid transparent;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s;
  }
  @media (min-width: 640px) {
    .nl-logout-btn { padding: 8px 16px; }
  }
  .nl-logout-btn:hover {
    color: #fff;
    background: rgba(239, 68, 68, 0.2);
    border-color: rgba(239, 68, 68, 0.3);
  }
  .nl-logout-text {
    display: none;
  }
  @media (min-width: 1024px) {
    .nl-logout-text { display: inline; }
  }

  /* Logged Out State */
  .nl-auth-group {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  @media (min-width: 640px) {
    .nl-auth-group { gap: 16px; }
  }

  .nl-link-signin {
    font-size: 14px;
    font-weight: 500;
    color: #d1d5db;
    text-decoration: none;
    padding: 0 8px;
    transition: color 0.2s;
  }
  .nl-link-signin:hover {
    color: #fff;
  }

  .nl-link-signup {
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
    background: linear-gradient(to right, #9333ea, #db2777);
    padding: 10px 20px;
    border-radius: 12px;
    transition: all 0.3s;
    box-shadow: 0 0 15px rgba(168, 85, 247, 0.3);
    display: inline-block;
  }
  .nl-link-signup:hover {
    background: linear-gradient(to right, #a855f7, #ec4899);
    box-shadow: 0 0 25px rgba(168, 85, 247, 0.5);
    transform: translateY(-2px);
  }
`;

export const Header = ({ currentPath, sidebarOpen, setSidebarOpen, userData, onLogout }) => {
  const [injected, setInjected] = useState(false);

  useEffect(() => {
    if (!injected) {
      const tag = document.createElement('style');
      tag.textContent = headerStyles;
      document.head.appendChild(tag);
      setInjected(true);
    }
  }, [injected]);

  const navItems = [
    { path: '/profile', label: 'Profile' },
    { path: '/project', label: 'Projects' },
    { path: '/performance', label: 'Performance' },
    { path: '/payment', label: 'Payment' }
  ];

  return (
    <header className="nl-header">
      <div className="nl-header-container">
        
        {/* LEFT SECTION: Hamburger Menu + Page Title */}
        <div className="nl-header-left">
          
          {/* Mobile Hamburger Button */}
          {!sidebarOpen && (
            <button
              onClick={() => setSidebarOpen(true)}
              className="nl-hamburger"
              aria-label="Open sidebar"
            >
              <Menu size={24} />
            </button>
          )}
          
          <div className="nl-title-group">
            <h2 className="nl-page-title">
              {navItems.find(item => item.path === currentPath)?.label || 'Dashboard'}
            </h2>
            <p className="nl-page-date">
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
        <div className="nl-header-right">
          
          {userData ? (
            /* --- RENDER IF USER IS LOGGED IN --- */
            <>
              <div className="nl-user-meta">
                <span className="nl-meta-name">
                  {`${userData.firstName} ${userData.lastName}`}
                </span>
                <span className="nl-meta-email">
                  {userData.email}
                </span>
              </div>

              <div className="nl-actions-group">
                {/* Online Indicator */}
                <div className="nl-online-badge">
                  <div className="nl-online-dot" />
                  <span className="nl-online-text">Online</span>
                </div>

                <div className="nl-divider"></div>

                {/* Log Out Button */}
                <button 
                  onClick={onLogout}
                  className="nl-logout-btn"
                  title="Log out"
                >
                  <LogOut size={20} />
                  <span className="nl-logout-text">Log Out</span>
                </button>
              </div>
            </>
          ) : (
            /* --- RENDER IF USER IS NOT LOGGED IN --- */
            <div className="nl-auth-group">
              <Link 
                to="/login"
                className="nl-link-signin"
              >
                Sign In
              </Link>
              <Link 
                to="/reg"
                className="nl-link-signup"
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