import React, { useState, useEffect } from 'react';
import { useRouter } from '../utils/useRouter';
import { Background } from '../components/layout/Background';
import { Sidebar } from '../components/layout/Sidebar';
import { Header } from '../components/layout/Header';
import { ProfilePage } from './DashboardPages/Profile/ProfilePage';
import { ProjectPage } from './DashboardPages/ProjectPage';
import { PerformancePage } from './DashboardPages/PerfomancePage';
import { PaymentPage } from './DashboardPages/PaymentPage/Index';

export default function Dashboard() {
  const { currentPath, navigate } = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.navigate = navigate;
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [navigate]);

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
      <Background mousePosition={mousePosition} />

      <div className="relative z-10 flex h-screen">
        <Sidebar currentPath={currentPath} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {sidebarOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black/50 z-30"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <div className="flex-1 flex flex-col min-h-screen lg:ml-0">
          <Header currentPath={currentPath} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

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