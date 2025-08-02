import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Services: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('services');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: t('services.web.title'),
      description: t('services.web.description'),
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: t('services.mobile.title'),
      description: t('services.mobile.description'),
      gradient: 'from-green-500 to-blue-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: t('services.analytics.title'),
      description: t('services.analytics.description'),
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: t('services.cloud.title'),
      description: t('services.cloud.description'),
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: t('services.features.quality.title'),
      description: t('services.features.quality.description'),
      color: 'text-green-600'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t('services.features.speed.title'),
      description: t('services.features.speed.description'),
      color: 'text-blue-600'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: t('services.features.support.title'),
      description: t('services.features.support.description'),
      color: 'text-purple-600'
    }
  ];

  return (
    <section id="services" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-primary-200/20 to-primary-100/10 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-secondary-200/20 to-secondary-100/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-20 left-20 w-56 h-56 bg-gradient-to-bl from-primary-300/15 to-primary-200/5 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-gradient-to-tl from-secondary-300/15 to-secondary-200/5 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-3000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-600 mb-6">
              {t('services.title')}
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {t('services.description')}
            </p>
          </div>

          {/* Services Grid */}
          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 group cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 leading-relaxed">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Features */}
          <div className={`bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 mb-12 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              {t('services.additionalFeatures.title')}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className={`w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4 ${feature.color}`}>
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className={`text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-8 rounded-3xl text-white shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {t('services.cta.title')}
              </h3>
              <p className="text-base md:text-lg mb-6 opacity-90">
                {t('services.cta.description')}
              </p>
              <button className="bg-white text-primary-600 font-bold px-8 py-3 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                {t('services.cta.button')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 