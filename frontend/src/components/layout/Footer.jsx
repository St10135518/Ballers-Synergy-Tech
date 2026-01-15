import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { companyInfo, navLinks } from '../../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-logo">{companyInfo.name}</h3>
            <p className="footer-description">
              {companyInfo.description}
            </p>
            <div className="footer-rating">
              <span className="rating-stars">★★★★★</span>
              <span className="rating-text">{companyInfo.rating} / 5 ({companyInfo.reviewCount} reviews)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <MapPin size={16} className="contact-icon" />
                <span>{companyInfo.address}</span>
              </li>
              <li>
                <Phone size={16} className="contact-icon" />
                <span>{companyInfo.phone}</span>
              </li>
              <li>
                <Mail size={16} className="contact-icon" />
                <span>{companyInfo.email}</span>
              </li>
              <li>
                <Clock size={16} className="contact-icon" />
                <span>{companyInfo.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} {companyInfo.name}. All rights reserved.
            </p>
            <div className="footer-legal">
              <Link to="/privacy" className="legal-link">Privacy Policy</Link>
              <Link to="/terms" className="legal-link">Terms of Service</Link>
              <Link to="/disclaimer" className="legal-link">Risk Disclaimer</Link>
            </div>
          </div>
          <p className="disclaimer-text">
            Trading forex and other financial instruments involves significant risk of loss. Past performance is not indicative of future results.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
