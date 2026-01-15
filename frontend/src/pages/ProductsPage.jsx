import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Bot, Cpu, BarChart3, Shield } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { products } from '../data/mock';

const productIcons = [Bot, Cpu, BarChart3, Shield];

const ProductsPage = () => {
  return (
    <div className="page-wrapper">
      <Header />
      <main className="main-content">
        {/* Hero Section */}
        <section className="products-hero">
          <div className="section-container">
            <span className="section-tag">Products & Solutions</span>
            <h1 className="page-title">Trading Technology That Delivers Results</h1>
            <p className="page-description">
              Explore our suite of professional-grade trading tools designed to automate, analyze, and optimize your trading performance.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="products-section">
          <div className="section-container">
            <div className="products-grid">
              {products.map((product, index) => {
                const IconComponent = productIcons[index];
                return (
                  <div key={product.id} className="product-card">
                    <div className="product-header">
                      <div className="product-icon-wrapper">
                        <IconComponent size={28} />
                      </div>
                      <span className="product-category">{product.category}</span>
                    </div>
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <ul className="product-features">
                      {product.features.map((feature, i) => (
                        <li key={i} className="product-feature">
                          <Check size={16} className="check-icon" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="product-cta">
                      <span>Learn More</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="products-cta">
          <div className="section-container">
            <div className="products-cta-content">
              <h2 className="products-cta-title">Need a Custom Solution?</h2>
              <p className="products-cta-text">
                Our team can build tailored trading solutions to match your specific requirements and strategies.
              </p>
              <Link to="/contact" className="btn-primary">
                <span>Contact Our Team</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
