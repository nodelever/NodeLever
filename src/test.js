import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronUp,  Linkedin, Mail } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const ColorPalette = {
  primary: '#004095',
  secondary: '#005BC5',
  accent: '#0070F3',
  light: '#E8F1FF',
  dark: '#002B66'
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const sections = ['home', 'about', 'portfolio', 'contact'];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold"
              style={{ color: ColorPalette.primary }}
            >
              Portfolio
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {sections.map((section) => (
                <motion.button
                  key={section}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`capitalize ${
                    activeSection === section ? 'text-blue-600' : 'text-gray-600'
                  } hover:text-blue-500`}
                  onClick={() => setActiveSection(section)}
                >
                  {section}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-4"
            >
              {sections.map((section) => (
                <motion.button
                  key={section}
                  whileTap={{ scale: 0.95 }}
                  className="block w-full text-left px-4 py-2 capitalize text-gray-600 hover:bg-gray-100"
                  onClick={() => {
                    setActiveSection(section);
                    setIsMenuOpen(false);
                  }}
                >
                  {section}
                </motion.button>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center px-4"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              style={{ color: ColorPalette.primary }}
            >
              Welcome to My Portfolio
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Senior Software Developer specializing in React & Modern Web Technologies
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full text-white font-semibold"
              style={{ backgroundColor: ColorPalette.accent }}
            >
              View My Work
            </motion.button>
          </motion.div>
        </section>

        {/* Portfolio Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <motion.h2
              {...fadeIn}
              className="text-3xl font-bold mb-12 text-center"
              style={{ color: ColorPalette.primary }}
            >
              Featured Projects
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((project) => (
                <motion.div
                  key={project}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="h-48 bg-gray-200" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                    <p className="text-gray-600">
                      A brief description of the project and its key features.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <motion.h2
              {...fadeIn}
              className="text-3xl font-bold mb-12 text-center"
              style={{ color: ColorPalette.primary }}
            >
              Get In Touch
            </motion.h2>
            <div className="flex justify-center space-x-8">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="p-3 rounded-full"
                style={{ backgroundColor: ColorPalette.light }}
              >
                <FaGithub size={24} color={ColorPalette.primary} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="p-3 rounded-full"
                style={{ backgroundColor: ColorPalette.light }}
              >
                <Linkedin size={24} color={ColorPalette.primary} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="p-3 rounded-full"
                style={{ backgroundColor: ColorPalette.light }}
              >
                <Mail size={24} color={ColorPalette.primary} />
              </motion.a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
          <p>© 2025 Portfolio. All rights reserved.</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 p-3 rounded-full shadow-lg"
        style={{ backgroundColor: ColorPalette.primary }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ChevronUp size={24} color="white" />
      </motion.button>
    </div>
  );
};

export default App;