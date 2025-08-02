import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  const missionPoints = t('about.mission.points', { returnObjects: true }) as string[];
  const whyChooseUsPoints = t('about.whyChooseUs.points', { returnObjects: true }) as string[];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('about.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Mission Section */}
          <div className="space-y-6">
            <div className="bg-primary-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-primary-800 mb-4">
                {t('about.mission.title')}
              </h3>
              <p className="text-gray-700 mb-6">
                {t('about.mission.description')}
              </p>
              <ul className="space-y-3">
                {missionPoints.map((point: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="space-y-6">
            <div className="bg-secondary-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-secondary-800 mb-4">
                {t('about.whyChooseUs.title')}
              </h3>
              <ul className="space-y-4">
                {whyChooseUsPoints.map((point: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-secondary-600 rounded-full flex items-center justify-center mr-4 mt-0.5">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl text-white">
            <div className="text-4xl font-bold mb-2">100%</div>
            <div className="text-lg">Palestinian Developed</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl text-white">
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="text-lg">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl text-white">
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-lg">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 