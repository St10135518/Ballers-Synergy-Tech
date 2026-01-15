import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/mock';

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">Trusted by Traders Worldwide</h2>
          <p className="section-description">
            Don't just take our word for it. See what our clients have to say about their experience.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="testimonial-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="star-icon" fill="#00FFD1" />
                ))}
              </div>
              <blockquote className="testimonial-quote">
                "{testimonial.quote}"
              </blockquote>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="author-info">
                  <span className="author-name">{testimonial.author}</span>
                  <span className="author-role">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
