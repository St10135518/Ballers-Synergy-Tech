import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { heroData } from '../../data/mock';

const Spline = lazy(() => import('@splinetool/react-spline'));

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>Trusted by 500+ Traders</span>
          </div>
          
          <h1 className="hero-headline">
            {heroData.headline}
          </h1>
          
          <p className="hero-subheadline">
            {heroData.subheadline}
          </p>
          
          <div className="hero-cta-group">
            <Link to="/contact" className="btn-primary hero-btn">
              <span>{heroData.primaryCta}</span>
              <ArrowRight size={20} />
            </Link>
            <Link to="/contact" className="btn-secondary hero-btn">
              <Play size={18} />
              <span>{heroData.secondaryCta}</span>
            </Link>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-value">99.9%</span>
              <span className="stat-label">Uptime</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">24/7</span>
              <span className="stat-label">Trading</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">5.0★</span>
              <span className="stat-label">Rating</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <Suspense fallback={
            <div className="spline-loader">
              <div className="loader-ring"></div>
            </div>
          }>
            <Spline 
              scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode"
              className="spline-scene"
            />
          </Suspense>
        </div>
      </div>

      {/* Background Elements */}
      <div className="hero-bg-gradient"></div>
      <div className="hero-grid-overlay"></div>
    </section>
  );
};

export default HeroSection;
