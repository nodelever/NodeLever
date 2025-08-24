import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';

import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';

import Home from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LangwageLogin from './pages/LoginPage';
import BlogPage from './pages/BlogPage';
import LangwageRegistration from './pages/RegistrationPage';
import LangwageDashboard from './Dashboard/Dashboard';


const AppContent = () => {
  const location = useLocation();

  // Define paths where Navigation should be hidden
  const hideNavOnRoutes = ['/login', '/reg', '/dash'];

  const shouldShowNavigation = !hideNavOnRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {shouldShowNavigation && <Navigation />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LangwageLogin />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/reg" element={<LangwageRegistration />} />
          <Route path="/dash" element={<LangwageDashboard />} />
          <Route
            path="*"
            element={
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                  <p className="text-gray-600">The page you're looking for doesn't exist.</p>
                </div>
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </Router>
  );
};

export default App;
