import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageChange = () => {
    const newLang = currentLanguage === 'ar' ? 'en' : 'ar';
    changeLanguage(newLang);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 30; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo with proper spacing */}
          <div className="flex items-center">
            <div className="text-lg font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Binary Bridges Tech
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('home')}
              className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 hover:text-primary-600 ${
                activeSection === 'home' 
                  ? 'text-primary-600' 
                  : 'text-gray-700'
              }`}
            >
              {t('nav.home')}
              {activeSection === 'home' && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full"></div>
              )}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 hover:text-primary-600 ${
                activeSection === 'about' 
                  ? 'text-primary-600' 
                  : 'text-gray-700'
              }`}
            >
              {t('nav.about')}
              {activeSection === 'about' && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full"></div>
              )}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 hover:text-primary-600 ${
                activeSection === 'services' 
                  ? 'text-primary-600' 
                  : 'text-gray-700'
              }`}
            >
              {t('nav.services')}
              {activeSection === 'services' && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full"></div>
              )}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 hover:text-primary-600 ${
                activeSection === 'contact' 
                  ? 'text-primary-600' 
                  : 'text-gray-700'
              }`}
            >
              {t('nav.contact')}
              {activeSection === 'contact' && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full"></div>
              )}
            </button>
            
            {/* Language Toggle */}
            <button
              onClick={handleLanguageChange}
              className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95"
            >
              {currentLanguage === 'ar' ? 'EN' : 'عربي'}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary-600 focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-80 opacity-100' 
            : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="px-2 pt-2 pb-4 space-y-2 bg-white/95 backdrop-blur-md border-t border-gray-200/50 rounded-b-xl shadow-lg">
            <button
              onClick={() => scrollToSection('home')}
              className={`block w-full text-right px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                activeSection === 'home'
                  ? 'bg-primary-100 text-primary-600'
                  : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`block w-full text-right px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                activeSection === 'about'
                  ? 'bg-primary-100 text-primary-600'
                  : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`block w-full text-right px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                activeSection === 'services'
                  ? 'bg-primary-100 text-primary-600'
                  : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              {t('nav.services')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`block w-full text-right px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                activeSection === 'contact'
                  ? 'bg-primary-100 text-primary-600'
                  : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              {t('nav.contact')}
            </button>
            
            {/* Language Toggle for Mobile */}
            <button
              onClick={handleLanguageChange}
              className="block w-full text-right px-3 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg text-sm font-semibold hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              {currentLanguage === 'ar' ? 'EN' : 'عربي'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 