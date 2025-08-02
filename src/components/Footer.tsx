import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('footer');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

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
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="footer" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-br from-primary-200/8 to-primary-100/5 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-gradient-to-tr from-secondary-200/8 to-secondary-100/5 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`py-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <a 
                href="https://github.com/Binary-Bridges-Tech/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent mb-4 inline-block hover:underline"
              >
                Binary Bridges Tech
              </a>
              <p className="text-gray-300 mb-6 max-w-lg text-sm leading-relaxed">
                {t('footer.description')}
              </p>
              <div className="flex space-x-4">
                {/* Social media icons remain unchanged */}
                {/* ... */}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">
                {t('footer.quickLinks.title')}
              </h3>
              <ul className="space-y-2">
                {['home', 'about', 'services', 'contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item)}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                    >
                      <div className="w-2 h-2 bg-primary-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-200"></div>
                      {t(`footer.quickLinks.${item}`)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-4">
                {t('footer.services.title')}
              </h3>
              <ul className="space-y-2">
                {['web', 'mobile', 'analytics', 'cloud'].map((service) => (
                  <li key={service}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                      {t(`footer.services.${service}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear}  <a 
                href="https://github.com/Binary-Bridges-Tech/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 transition-colors duration-200"
              >
                Binary Bridges Tech
              </a>. {t('footer.copyright')}
            </p>
            <button
              onClick={scrollToTop}
              className="mt-4 md:mt-0 w-10 h-10 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 transform hover:shadow-lg"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
