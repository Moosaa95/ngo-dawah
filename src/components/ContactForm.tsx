'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: '',
      });
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-container">
        {/* Info Column */}
        <div className="contact-info-col">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title text-left">Connect With CIF</h2>
          <p className="contact-intro">
            Partner with us, join our volunteer network, or request support. 
            We are dedicated to human and capital development across all zones in Nigeria.
          </p>

          <div className="contact-methods">
            <div className="contact-method-item">
              <div className="method-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="method-details">
                <h4>Email Address</h4>
                <a href="mailto:crescentimpactfoundation@gmail.com" className="method-link">
                  crescentimpactfoundation@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-method-item">
              <div className="method-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="method-details">
                <h4>Helpline Numbers</h4>
                <div className="phone-list">
                  <span>08033864126, 08056061168, 08167223472</span>
                  <span>07034243999, 07030124655, 07033339699</span>
                </div>
              </div>
            </div>

            <div className="contact-method-item">
              <div className="method-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="method-details">
                <h4>Headquarters</h4>
                <span>208, Queen Aminat Street, 2/2 Kubwa, Abuja, Nigeria.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="contact-form-col">
          <form onSubmit={handleSubmit} className="contact-form glass-card">
            <h3>Send Us a Message</h3>
            
            <div className="form-group">
              <label htmlFor="name">Your Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select id="subject" name="subject" value={formData.subject} onChange={handleChange}>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Volunteer Application">Volunteer Application</option>
                <option value="Partnership Proposal">Partnership Proposal</option>
                <option value="Support Request">Support Request</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Describe how we can work together..."
              ></textarea>
            </div>

            <button type="submit" className="btn-primary form-submit-btn" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <span className="spinner"></span> Sending...
                </>
              ) : (
                <>Submit Inquiry</>
              )}
            </button>

            {submitStatus === 'success' && (
              <div className="submit-feedback success animate-fade-in">
                <span>✓</span> Your message was sent successfully! We will get back to you shortly.
              </div>
            )}
          </form>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          background-color: #FAFBFD;
          padding-top: 100px;
          padding-bottom: 100px;
          position: relative;
        }
        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }
        .text-left {
          text-align: left;
        }
        .text-left::after {
          left: 30px;
          transform: none;
        }
        .contact-intro {
          font-size: 15px;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 40px;
        }

        /* Contact methods info */
        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        .contact-method-item {
          display: flex;
          gap: 16px;
        }
        .method-icon {
          width: 44px;
          height: 44px;
          background: rgba(63, 181, 63, 0.1);
          color: var(--secondary-green);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .method-details h4 {
          font-size: 15px;
          color: var(--primary-navy);
          margin-bottom: 4px;
        }
        .method-details span, .method-link {
          font-size: 14px;
          color: var(--text-secondary);
          display: block;
          line-height: 1.5;
        }
        .method-link:hover {
          color: var(--secondary-green);
        }
        .phone-list {
          display: flex;
          flex-direction: column;
        }

        /* Contact form styles */
        .contact-form {
          background: #FFFFFF;
          border: 1px solid rgba(63, 181, 63, 0.15);
          padding: 40px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .contact-form h3 {
          font-size: 20px;
          color: var(--primary-navy);
          margin-bottom: 8px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .form-group label {
          font-size: 13px;
          font-weight: 600;
          color: var(--primary-navy);
        }
        .form-group input, .form-group textarea, .form-group select {
          padding: 12px 16px;
          border-radius: 8px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          outline: none;
          background: #FAFBFD;
          transition: var(--transition-fast);
        }
        .form-group input:focus, .form-group textarea:focus, .form-group select:focus {
          border-color: var(--secondary-green);
          background: #FFFFFF;
          box-shadow: 0 0 0 3px rgba(63, 181, 63, 0.1);
        }
        .form-submit-btn {
          width: 100%;
          justify-content: center;
          padding: 14px 20px;
          margin-top: 10px;
        }
        .spinner {
          width: 18px;
          height: 18px;
          border: 2.5px solid rgba(255,255,255,0.3);
          border-top-color: #FFFFFF;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          display: inline-block;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .submit-feedback {
          padding: 12px 16px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 500;
        }
        .submit-feedback.success {
          background: rgba(63, 181, 63, 0.12);
          color: #2F7C2F;
          border: 1px solid rgba(63, 181, 63, 0.2);
        }

        @media (max-width: 991px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 50px;
          }
        }
        @media (max-width: 576px) {
          .contact-form {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
}
