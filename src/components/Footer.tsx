'use client';

import Link from 'next/link';
import { openDonateModal } from '@/components/DonateModal';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer islamic-pattern">
      <div className="container footer-grid">
        {/* About column */}
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <svg width="40" height="40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="80" fill="white" stroke="#3FB53F" strokeWidth="6" />
              <path d="M100 135C125 135 145 115 145 90C145 65 125 45 100 45C75 45 55 65 55 90C55 115 75 135 100 135Z" fill="#0A1424" />
              <circle cx="100" cy="80" r="12" fill="#FFFFFF" />
              <path d="M75 120C75 105 85 95 100 95C115 95 125 105 125 120" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
              <circle cx="75" cy="98" r="10" fill="#3FB53F" />
              <path d="M55 130C55 118 63 110 75 110" stroke="#3FB53F" strokeWidth="6" strokeLinecap="round" />
              <circle cx="125" cy="98" r="10" fill="#3FB53F" />
              <path d="M125 110C137 110 145 118 145 130" stroke="#3FB53F" strokeWidth="6" strokeLinecap="round" />
            </svg>
            <div className="footer-logo-text">
              <h3>CIF</h3>
              <span>CRESCENT IMPACT FOUNDATION</span>
            </div>
          </div>
          <p className="footer-desc">
            Crescent Impact Foundation is a proactive force committed to human and capital 
            development, health care, primary education, and community safety in Nigeria.
          </p>
        </div>

        {/* Links column */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/focus">Our Focus</Link></li>
            <li><Link href="/programs">Key Programs</Link></li>
            <li><Link href="/focus#organogram">Structure</Link></li>
            <li><Link href="/team">Leadership</Link></li>
            <li><Link href="/contact">Zonal Offices</Link></li>
          </ul>
        </div>

        {/* Contacts column */}
        <div className="footer-col">
          <h3>Contact Details</h3>
          <ul className="footer-contacts">
            <li>
              <strong>HQ:</strong> 208, Queen Amina Street, Kubwa, Abuja, FCT, Nigeria.
            </li>
            <li>
              <strong>Email:</strong> <a href="mailto:crescentimpactfoundation@gmail.com">crescentimpactfoundation@gmail.com</a>
            </li>
            <li>
              <strong>Helpline:</strong> <a href="tel:+2348033864126">0803 386 4126</a>
            </li>
          </ul>
        </div>

        {/* Donation Bank Info column */}
        <div className="footer-col footer-donate-col">
          <h3>Direct Bank Donation</h3>
          <div className="footer-bank-card" onClick={openDonateModal}>
            <div className="fb-top">
              <span className="fb-bank">Zenith Bank</span>
              <span className="fb-tag">NGO Account</span>
            </div>
            <div className="fb-num">1313 392 750</div>
            <div className="fb-name">Crescent Impact Foundation</div>
            <button className="fb-btn">
              ❤️ Support Our Work &rarr;
            </button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-container">
          <p>
            &copy; {currentYear} Crescent Impact Foundation (CIF). All Rights Reserved. CAC Reg: 7437137
          </p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: var(--primary-navy);
          color: rgba(255, 255, 255, 0.7);
          padding-top: 80px;
          position: relative;
          border-top: 3px solid var(--secondary-green);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.6fr 0.8fr 1fr;
          gap: 36px;
          margin-bottom: 60px;
        }
        .footer-bank-card {
          background: linear-gradient(135deg, rgba(168, 0, 0, 0.9) 0%, rgba(128, 0, 0, 0.95) 100%);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 16px;
          padding: 18px;
          cursor: pointer;
          transition: var(--transition-fast);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }
        .footer-bank-card:hover {
          transform: translateY(-3px);
          border-color: rgba(255, 255, 255, 0.4);
          box-shadow: 0 12px 30px rgba(168, 0, 0, 0.4);
        }
        .fb-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }
        .fb-bank {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: 15px;
          color: #FFFFFF;
        }
        .fb-tag {
          font-size: 10px;
          background: rgba(0, 0, 0, 0.25);
          padding: 3px 8px;
          border-radius: 20px;
          color: rgba(255, 255, 255, 0.85);
        }
        .fb-num {
          font-family: 'Outfit', monospace;
          font-size: 20px;
          font-weight: 900;
          letter-spacing: 2px;
          color: #FFFFFF;
          margin-bottom: 4px;
        }
        .fb-name {
          font-size: 11.5px;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 12px;
          text-transform: uppercase;
        }
        .fb-btn {
          width: 100%;
          background: #3FB53F;
          color: #FFFFFF;
          border: none;
          padding: 9px 14px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 12.5px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .fb-btn:hover {
          background: #35A335;
        }
        .footer-col h3 {
          color: #FFFFFF;
          font-size: 18px;
          margin-bottom: 24px;
          font-weight: 700;
        }
        .brand-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .footer-logo-text h3 {
          font-size: 22px;
          color: #FFFFFF;
          margin: 0;
          letter-spacing: 2px;
          line-height: 1;
        }
        .footer-logo-text span {
          font-size: 10px;
          color: var(--secondary-green);
          font-weight: 700;
          letter-spacing: 0.5px;
        }
        .footer-desc {
          font-size: 14px;
          line-height: 1.6;
        }
        
        /* Links & list styles */
        .footer-links, .footer-contacts {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 14px;
          font-size: 14.5px;
        }
        .footer-links a:hover {
          color: var(--secondary-green);
          padding-left: 4px;
        }
        .footer-contacts li {
          line-height: 1.5;
        }
        .footer-contacts a:hover {
          color: var(--secondary-green);
        }

        /* Footer bottom styles */
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 24px 0;
          font-size: 13px;
        }
        .bottom-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }
        .attribution {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .attr-link {
          color: var(--secondary-green);
        }
        .attr-link:hover {
          color: #35A335;
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .bottom-container {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
