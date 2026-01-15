import React from 'react';
import { Target, Eye, Award, Shield } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { aboutData, stats } from '../data/mock';

const valueIcons = [Target, Eye, Award, Shield];

const AboutPage = () => {
  return (
    <div className="page-wrapper">
      <Header />
      <main className="main-content">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="section-container">
            <span className="section-tag">About Us</span>
            <h1 className="page-title">Pioneering the Future of Automated Trading</h1>
            <p className="page-description">
              At Ballers Synergy Tech, we combine cutting-edge technology with deep market expertise to deliver trading solutions that perform.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="about-story">
          <div className="section-container">
            <div className="story-grid">
              <div className="story-content">
                <h2 className="story-title">Our Story</h2>
                <p className="story-text">{aboutData.story}</p>
                <div className="story-stats">
                  {stats.map((stat, index) => (
                    <div key={index} className="story-stat">
                      <span className="story-stat-value">{stat.value}</span>
                      <span className="story-stat-label">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="story-visual">
                <div className="visual-card">
                  <div className="card-glow"></div>
                  <div className="card-content">
                    <div className="card-icon">BST</div>
                    <span className="card-text">Est. 2020</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mission-vision">
          <div className="section-container">
            <div className="mv-grid">
              <div className="mv-card mission-card">
                <div className="mv-icon-wrapper">
                  <Target size={32} />
                </div>
                <h3 className="mv-title">Our Mission</h3>
                <p className="mv-text">{aboutData.mission}</p>
              </div>
              <div className="mv-card vision-card">
                <div className="mv-icon-wrapper">
                  <Eye size={32} />
                </div>
                <h3 className="mv-title">Our Vision</h3>
                <p className="mv-text">{aboutData.vision}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <div className="section-container">
            <div className="section-header">
              <span className="section-tag">Our Values</span>
              <h2 className="section-title">What Drives Us Forward</h2>
            </div>
            <div className="values-grid">
              {aboutData.values.map((value, index) => {
                const IconComponent = valueIcons[index];
                return (
                  <div key={index} className="value-card">
                    <div className="value-icon-wrapper">
                      <IconComponent size={24} />
                    </div>
                    <h4 className="value-title">{value.title}</h4>
                    <p className="value-description">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
