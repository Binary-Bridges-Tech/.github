import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo2.png';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [isLogoLoaded, setIsLogoLoaded] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setIsLogoLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary blob - larger and more dynamic */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-primary-200/20 to-primary-100/10 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        
        {/* Secondary blob - different timing */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-secondary-200/20 to-secondary-100/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
        
        {/* Third blob - medium size */}
        <div className="absolute top-20 left-20 w-56 h-56 bg-gradient-to-bl from-primary-300/15 to-primary-200/5 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse delay-2000"></div>
        
        {/* Fourth blob - smaller and faster */}
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-gradient-to-tl from-secondary-300/15 to-secondary-200/5 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-3000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo with enhanced animation */}
          <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-block p-6 md:p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 relative">
                <div className={`absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full opacity-30 blur-xl transition-all duration-1000 ${isLogoLoaded ? 'scale-100' : 'scale-0'}`}></div>
                <img 
                  src={logo} 
                  alt="Binary Bridges Logo" 
                  className={`w-full h-full object-contain transition-all duration-1000 ${isLogoLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
                />
              </div>
            </div>
          </div>

          {/* Main Content with enhanced visibility */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-600 mb-6 leading-tight">
              {t('hero.title')}
            </h2>
          </div>
          
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-lg md:text-xl lg:text-2xl text-primary-600 mb-8 font-semibold leading-relaxed">
              {t('hero.subtitle')}
            </h3>
          </div>
          
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-base md:text-lg text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              {t('hero.description')}
            </p>
          </div>

          {/* CTA Buttons with enhanced styling */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-bold text-base px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl active:scale-95 overflow-hidden shadow-lg"
            >
              <span className="relative z-10 flex items-center">
                {t('hero.cta')}
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-secondary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button
              onClick={() => scrollToSection('about')}
              className="group relative bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 font-bold text-base px-6 py-3 rounded-xl border-2 border-primary-200 hover:border-primary-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl active:scale-95 shadow-lg"
            >
              <span className="relative z-10 flex items-center">
                {t('hero.learnMore')}
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </span>
            </button>
          </div>

          {/* Enhanced Scroll indicator */}
          <div className={`mt-12 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col items-center text-gray-600 animate-bounce">
              <span className="text-xs font-medium mb-2">Scroll to explore</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 