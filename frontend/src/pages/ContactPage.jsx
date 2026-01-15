import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { companyInfo } from '../data/mock';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // This will be connected to the backend later
    // For now, simulating a submission
    try {
      // Mock submission - will be replaced with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-wrapper">
      <Header />
      <main className="main-content">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="section-container">
            <span className="section-tag">Contact Us</span>
            <h1 className="page-title">Let's Start a Conversation</h1>
            <p className="page-description">
              Have questions about our trading solutions? We're here to help you find the perfect fit for your needs.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="section-container">
            <div className="contact-grid">
              {/* Contact Info */}
              <div className="contact-info">
                <h2 className="contact-info-title">Get in Touch</h2>
                <p className="contact-info-text">
                  Ready to transform your trading? Reach out to our team for a personalized consultation.
                </p>

                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-icon-wrapper">
                      <MapPin size={20} />
                    </div>
                    <div className="contact-item-content">
                      <span className="contact-item-label">Office Address</span>
                      <span className="contact-item-value">{companyInfo.address}</span>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon-wrapper">
                      <Phone size={20} />
                    </div>
                    <div className="contact-item-content">
                      <span className="contact-item-label">Phone Number</span>
                      <span className="contact-item-value">{companyInfo.phone}</span>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon-wrapper">
                      <Mail size={20} />
                    </div>
                    <div className="contact-item-content">
                      <span className="contact-item-label">Email Address</span>
                      <span className="contact-item-value">{companyInfo.email}</span>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon-wrapper">
                      <Clock size={20} />
                    </div>
                    <div className="contact-item-content">
                      <span className="contact-item-label">Business Hours</span>
                      <span className="contact-item-value">{companyInfo.hours}</span>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="map-container">
                  <iframe
                    title="Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.8876611849583!2d28.05203!3d-26.10758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sSandton%20City!5e0!3m2!1sen!2sza!4v1234567890"
                    width="100%"
                    height="200"
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              {/* Contact Form */}
              <div className="contact-form-wrapper">
                {isSubmitted ? (
                  <div className="success-message">
                    <CheckCircle size={48} className="success-icon" />
                    <h3 className="success-title">Message Sent!</h3>
                    <p className="success-text">
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                    <button 
                      className="btn-secondary"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <h2 className="form-title">Send Us a Message</h2>
                    
                    {error && <div className="form-error">{error}</div>}

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="form-input"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="form-input"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="+27 61 518 4101"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="subject" className="form-label">Subject</label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="form-input form-select"
                        >
                          <option value="">Select a subject</option>
                          <option value="demo">Request a Demo</option>
                          <option value="pricing">Pricing Inquiry</option>
                          <option value="support">Technical Support</option>
                          <option value="partnership">Partnership</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message" className="form-label">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="form-input form-textarea"
                        placeholder="Tell us about your trading needs..."
                        rows="5"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className="btn-primary submit-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={18} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
