'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import Offices from '@/components/Offices';

export default function ContactClient() {
  return (
    <>
      <Navbar />
      <div className="subpage-header islamic-pattern">
        <div className="container">
          <span className="header-subtitle">Locations & Reach</span>
          <h1>Contact Us & Zonal Offices</h1>
        </div>
      </div>

      <main className="contact-page-content">
        {/* Contact Form section */}
        <section className="contact-form-section">
          <ContactForm />
        </section>

        {/* Zonal Offices mapping */}
        <section className="contact-offices-section">
          <Offices />
        </section>

        {/* Map Section */}
        <section className="contact-map-section container">
          <div className="section-title-wrapper">
            <span className="section-subtitle">Find Us</span>
            <h2 className="section-title">Head Office Location</h2>
          </div>
          <div className="map-frame-wrapper">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15752.483955627715!2d7.332304958611116!3d9.143702586111108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e7492c10b7142%3A0xc10bc10b7142c10b!2sKubwa%2C%20Abuja%2C%20Nigeria!5e0!3m2!1sen!2s!4v1784728000000!5m2!1sen!2s" 
              width="100%" 
              height="450" 
              style={{ border: 0, borderRadius: '16px', boxShadow: 'var(--shadow-md)' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        .subpage-header {
          background-color: var(--primary-navy);
          padding: 160px 0 80px 0;
          color: #FFFFFF;
          position: relative;
        }
        .header-subtitle {
          color: var(--secondary-green);
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 12px;
          display: block;
        }
        .subpage-header h1 {
          color: #FFFFFF;
          font-size: 48px;
          margin: 0;
        }
        .contact-page-content {
          background: #FAFBFD;
        }
        .contact-offices-section {
          background: #FFFFFF;
          border-top: 1px solid rgba(0, 0, 0, 0.03);
        }
        .contact-map-section {
          padding: 80px 0;
          background: #FAFBFD;
        }
        .map-frame-wrapper {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: var(--shadow-md);
          border: 1px solid rgba(63, 181, 63, 0.15);
        }

        @media (max-width: 576px) {
          .subpage-header h1 {
            font-size: 36px;
          }
        }
      `}</style>
    </>
  );
}
