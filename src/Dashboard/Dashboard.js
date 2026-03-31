import React, { useState, useEffect } from 'react';
import { useRouter } from '../utils/useRouter';
import { useAuth } from '../contexts/AuthContext'; // Import your auth context for logout
import { Background } from '../components/layout/Background';
import { Sidebar } from '../components/layout/Sidebar';
import { Header } from '../components/layout/Header';
import { ProfilePage } from './DashboardPages/Profile/ProfilePage';
import { ProjectPage } from './DashboardPages/ProjectPage';
import { PerformancePage } from './DashboardPages/PerfomancePage';
import { PaymentPage } from './DashboardPages/PaymentPage/Index';

export default function Dashboard() {
  const { currentPath, navigate } = useRouter();
  const { logout } = useAuth(); // Destructure logout from your context
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // State to hold the registered user's data
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.navigate = navigate;
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [navigate]);

  // GET REQUEST: Pull user data on mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return;

        const response = await fetch('http://localhost:5000/api/user/me', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  // Handle Logout Execution
  const handleLogout = () => {
    if (logout) logout(); // Use context logout if available
    localStorage.removeItem('token'); // Ensure token is destroyed
    window.location.href = '/login'; // Redirect to login page
  };

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
       <Sidebar 
          currentPath={currentPath} 
          sidebarOpen={sidebarOpen} 
          setSidebarOpen={setSidebarOpen} 
          userData={userData}        // <-- Add this so the sidebar profile card updates
          onLogout={handleLogout}    // <-- Add this for the mobile logout button
        />

        {sidebarOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black/50 z-30"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <div className="flex-1 flex flex-col min-h-screen lg:ml-0">
          {/* Pass userData and handleLogout down to the Header */}
          <Header 
            currentPath={currentPath} 
            sidebarOpen={sidebarOpen} 
            setSidebarOpen={setSidebarOpen} 
            userData={userData}
            onLogout={handleLogout}
          />

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