import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navLinks, companyInfo } from '../../data/mock';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="dark-header">
      <Link to="/" className="logo-link">
        <span className="logo-text">{companyInfo.name}</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="dark-nav desktop-nav">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`dark-nav-link ${location.pathname === link.path ? 'active' : ''}`}
          >
            {link.name}
          </Link>
        ))}
        <Link to="/contact" className="btn-primary header-cta">
          Get Started
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="mobile-menu-btn"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="mobile-nav">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="btn-primary mobile-cta"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Started
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
