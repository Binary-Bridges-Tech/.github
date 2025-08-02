import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 pt-20">
      <div className="container-custom text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <div className="inline-block p-8 bg-white rounded-2xl shadow-xl">
              <div className="w-32 h-32 mx-auto mb-6 relative">
                {/* Bridge Logo SVG */}
                <svg viewBox="0 0 128 128" className="w-full h-full">
                  {/* Central Pillars */}
                  <rect x="48" y="20" width="8" height="60" fill="#1e40af" rx="2"/>
                  <rect x="72" y="20" width="8" height="60" fill="#1e40af" rx="2"/>
                  
                  {/* Pillar Highlights */}
                  <rect x="50" y="22" width="4" height="56" fill="#3b82f6" rx="1"/>
                  <rect x="74" y="22" width="4" height="56" fill="#3b82f6" rx="1"/>
                  
                  {/* Arrows */}
                  <polygon points="52,18 56,18 54,14" fill="#60a5fa"/>
                  <polygon points="76,18 80,18 78,14" fill="#60a5fa"/>
                  
                  {/* Bridge Arches */}
                  <path d="M 52 20 Q 40 30 30 50" stroke="#1e40af" strokeWidth="3" fill="none"/>
                  <path d="M 76 20 Q 88 30 98 50" stroke="#1e40af" strokeWidth="3" fill="none"/>
                  
                  {/* Data Points */}
                  <circle cx="35" cy="45" r="3" fill="#60a5fa"/>
                  <circle cx="45" cy="55" r="3" fill="#60a5fa"/>
                  <circle cx="55" cy="65" r="3" fill="#60a5fa"/>
                  <circle cx="73" cy="45" r="3" fill="#60a5fa"/>
                  <circle cx="83" cy="55" r="3" fill="#60a5fa"/>
                  <circle cx="93" cy="65" r="3" fill="#60a5fa"/>
                  
                  {/* Vertical Lines */}
                  <line x1="35" y1="48" x2="35" y2="80" stroke="#1e40af" strokeWidth="2"/>
                  <line x1="45" y1="58" x2="45" y2="80" stroke="#1e40af" strokeWidth="2"/>
                  <line x1="55" y1="68" x2="55" y2="80" stroke="#1e40af" strokeWidth="2"/>
                  <line x1="73" y1="48" x2="73" y2="80" stroke="#1e40af" strokeWidth="2"/>
                  <line x1="83" y1="58" x2="83" y2="80" stroke="#1e40af" strokeWidth="2"/>
                  <line x1="93" y1="68" x2="93" y2="80" stroke="#1e40af" strokeWidth="2"/>
                  
                  {/* Base Line */}
                  <line x1="20" y1="80" x2="108" y2="80" stroke="#1e40af" strokeWidth="3"/>
                  
                  {/* End Points */}
                  <circle cx="20" cy="80" r="3" fill="#60a5fa"/>
                  <circle cx="108" cy="80" r="3" fill="#60a5fa"/>
                </svg>
              </div>
              
              {/* Company Name */}
              <div className="text-center">
                <h1 className="text-3xl font-bold text-primary-800 mb-2">
                  BINARY BRIDGES
                </h1>
                <div className="w-16 h-0.5 bg-secondary-400 mx-auto mb-2"></div>
                <p className="text-lg font-semibold text-primary-700">
                  TECH
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {t('hero.title')}
          </h2>
          
          <h3 className="text-xl md:text-2xl text-primary-600 mb-8 font-semibold">
            {t('hero.subtitle')}
          </h3>
          
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary text-lg px-8 py-4"
            >
              {t('hero.cta')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="btn-secondary text-lg px-8 py-4"
            >
              {t('hero.learnMore')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 