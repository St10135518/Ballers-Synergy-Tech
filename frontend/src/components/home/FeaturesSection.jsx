import React from 'react';
import { Bot, Zap, Clock, BarChart3 } from 'lucide-react';
import { features } from '../../data/mock';

const iconMap = {
  Bot: Bot,
  Zap: Zap,
  Clock: Clock,
  BarChart3: BarChart3
};

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Why Choose Us</span>
          <h2 className="section-title">Powerful Features for Modern Traders</h2>
          <p className="section-description">
            Our suite of tools combines cutting-edge technology with intuitive design to give you the edge in today's markets.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div 
                key={feature.id} 
                className="feature-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="feature-icon-wrapper">
                  <IconComponent size={28} className="feature-icon" />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <div className="feature-line"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
