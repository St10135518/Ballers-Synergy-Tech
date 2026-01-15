import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { stats } from '../../data/mock';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        {/* Stats Bar */}
        <div className="stats-bar">
          {stats.map((stat, index) => (
            <div key={index} className="stat-block">
              <span className="stat-value-large">{stat.value}</span>
              <span className="stat-label-small">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="cta-content">
          <h2 className="cta-title">
            Ready to Transform Your Trading?
          </h2>
          <p className="cta-description">
            Join hundreds of traders who have already automated their success. Get started with a free demo today.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-primary cta-btn">
              <span>Request Free Demo</span>
              <ArrowRight size={20} />
            </Link>
            <Link to="/products" className="btn-secondary cta-btn">
              <span>View Products</span>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="cta-bg-glow"></div>
    </section>
  );
};

export default CTASection;
