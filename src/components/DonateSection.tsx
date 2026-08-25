'use client';

import { useState } from 'react';
import { openDonateModal } from '@/components/DonateModal';

export default function DonateSection() {
  const [copied, setCopied] = useState(false);

  const copyAcc = async () => {
    try {
      await navigator.clipboard.writeText('1313392750');
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section className="donate-showcase-section" id="donate">
      <div className="radial-glow-donate"></div>
      
      <div className="container">
        <div className="donate-showcase-grid">
          {/* Text & Pitch */}
          <div className="donate-text-col">
            <span className="section-subtitle gold-subtitle">Direct Community Support</span>
            <h2 className="donate-main-title">
              Partner With Us to Build <br />
              <span className="gold-accent-text">Thriving Communities</span>
            </h2>
            <p className="donate-desc">
              Your donations directly power our mobile health caravans, classroom rehabilitations, 
              youth skills development, and community security programs across all 6 geopolitical zones of Nigeria.
            </p>

            {/* Direct Impact Points */}
            <div className="impact-check-list">
              <div className="check-item">
                <div className="check-icon">✓</div>
                <span><strong>100% Transparency:</strong> Direct funding into verified community initiatives.</span>
              </div>
              <div className="check-item">
                <div className="check-icon">✓</div>
                <span><strong>CAC Registered:</strong> Official Non-Profit CAC/IT Registration No. 7437137.</span>
              </div>
              <div className="check-item">
                <div className="check-icon">✓</div>
                <span><strong>Immediate Action:</strong> Real-time deployment through 100+ active field volunteers.</span>
              </div>
            </div>

            <div className="donate-actions">
              <button className="btn-donate-glow" onClick={openDonateModal}>
                <span className="heart-icon">❤️</span> Open Donation Portal
              </button>
              <button className="btn-secondary-light" onClick={copyAcc}>
                {copied ? '✓ Account Number Copied (1313392750)' : 'Copy Account Number (1313392750)'}
              </button>
            </div>
          </div>

          {/* Interactive Zenith Bank Display Card */}
          <div className="donate-card-col">
            <div className="showcase-bank-card">
              <div className="bank-header">
                <div className="bank-brand-logo">
                  <span className="z-emblem">Z</span>
                  <div>
                    <h3 className="b-title">Zenith Bank</h3>
                    <span className="b-sub">Corporate NGO Account</span>
                  </div>
                </div>
                <span className="ngn-badge">NGN (₦) Transfer</span>
              </div>

              <div className="account-box" onClick={copyAcc} title="Click to copy account number">
                <span className="acc-label">ACCOUNT NUMBER (CLICK TO COPY)</span>
                <div className="acc-num-flex">
                  <span className="acc-number">1313 392 750</span>
                  <button className={`inline-copy-btn ${copied ? 'active' : ''}`} aria-label="Copy account number">
                    {copied ? (
                      <>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Copied!
                      </>
                    ) : (
                      <>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                        Copy
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="account-holder-info">
                <div className="holder-col">
                  <span className="holder-label">ACCOUNT NAME</span>
                  <h4 className="holder-name">Crescent Impact Foundation</h4>
                </div>
                <div className="verified-badge">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3FB53F" strokeWidth="2.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Verified NGO</span>
                </div>
              </div>

              {/* Card Footer Banner */}
              <div className="card-footer-banner">
                <span>Direct transfers via Zenith Bank Mobile App, USSD (*966#), Internet Banking, or any Nigerian Bank App.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .donate-showcase-section {
          background: linear-gradient(135deg, #0F1E36 0%, #0A1424 100%);
          padding: 100px 0;
          position: relative;
          overflow: hidden;
          color: #FFFFFF;
          border-top: 1px solid rgba(63, 181, 63, 0.2);
          border-bottom: 1px solid rgba(63, 181, 63, 0.2);
        }

        .radial-glow-donate {
          position: absolute;
          top: 20%;
          right: 10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(226, 177, 60, 0.12) 0%, rgba(15, 30, 54, 0) 70%);
          pointer-events: none;
        }

        .gold-subtitle {
          color: var(--accent-gold);
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-size: 13px;
          margin-bottom: 12px;
          display: block;
        }

        .donate-main-title {
          font-size: 38px;
          font-weight: 800;
          color: #FFFFFF;
          line-height: 1.25;
          margin-bottom: 20px;
        }

        .gold-accent-text {
          color: var(--accent-gold);
          background: linear-gradient(90deg, #E2B13C 0%, #F5D37E 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .donate-desc {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.78);
          line-height: 1.75;
          margin-bottom: 28px;
        }

        .impact-check-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 36px;
        }

        .check-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14.5px;
          color: rgba(255, 255, 255, 0.9);
        }

        .check-icon {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: rgba(63, 181, 63, 0.2);
          border: 1px solid rgba(63, 181, 63, 0.5);
          color: #3FB53F;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 800;
          flex-shrink: 0;
        }

        .donate-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn-donate-glow {
          background: linear-gradient(90deg, #3FB53F 0%, #2E9C2E 100%);
          color: #FFFFFF;
          border: none;
          padding: 16px 32px;
          border-radius: 50px;
          font-weight: 800;
          font-size: 16px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          box-shadow: 0 8px 30px rgba(63, 181, 63, 0.4);
          transition: var(--transition-normal);
        }

        .btn-donate-glow:hover {
          background: linear-gradient(90deg, #35A335 0%, #258325 100%);
          transform: translateY(-2px);
          box-shadow: 0 12px 36px rgba(63, 181, 63, 0.6);
        }

        .btn-secondary-light {
          background: rgba(255, 255, 255, 0.08);
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 16px 28px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 14.5px;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .btn-secondary-light:hover {
          background: rgba(255, 255, 255, 0.16);
          border-color: rgba(255, 255, 255, 0.4);
        }

        .donate-showcase-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 50px;
          align-items: center;
        }

        /* Bank Card Showcase */
        .showcase-bank-card {
          background: linear-gradient(135deg, #A80000 0%, #D60000 50%, #7D0000 100%);
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 24px;
          padding: 32px;
          box-shadow: 0 20px 50px rgba(168, 0, 0, 0.35), 0 0 30px rgba(0, 0, 0, 0.3);
          position: relative;
          color: #FFFFFF;
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .bank-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .bank-brand-logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .z-emblem {
          width: 44px;
          height: 44px;
          background: #FFFFFF;
          border-radius: 12px;
          color: #D60000;
          font-family: 'Outfit', sans-serif;
          font-weight: 900;
          font-size: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .b-title {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: 22px;
          margin: 0;
          line-height: 1.1;
        }

        .b-sub {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.85);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .ngn-badge {
          background: rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 6px 14px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 700;
        }

        .account-box {
          background: rgba(0, 0, 0, 0.25);
          border: 1.5px dashed rgba(255, 255, 255, 0.35);
          border-radius: 16px;
          padding: 18px 20px;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .account-box:hover {
          background: rgba(0, 0, 0, 0.38);
          border-color: rgba(255, 255, 255, 0.6);
        }

        .acc-label {
          font-size: 10px;
          letter-spacing: 1.5px;
          color: rgba(255, 255, 255, 0.75);
          font-weight: 700;
          display: block;
          margin-bottom: 6px;
        }

        .acc-num-flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .acc-number {
          font-family: 'Outfit', monospace;
          font-size: 30px;
          font-weight: 900;
          letter-spacing: 3.5px;
          color: #FFFFFF;
        }

        .inline-copy-btn {
          background: rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.4);
          color: #FFFFFF;
          padding: 8px 16px;
          border-radius: 30px;
          font-size: 13px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .inline-copy-btn:hover {
          background: #FFFFFF;
          color: #D60000;
        }

        .inline-copy-btn.active {
          background: #3FB53F;
          border-color: #3FB53F;
          color: #FFFFFF;
        }

        .account-holder-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .holder-label {
          font-size: 10px;
          letter-spacing: 1px;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 700;
        }

        .holder-name {
          font-size: 16px;
          font-weight: 800;
          color: #FFFFFF;
          margin: 2px 0 0 0;
          text-transform: uppercase;
        }

        .verified-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.15);
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
        }

        .card-footer-banner {
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          padding-top: 14px;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.4;
        }

        @media (max-width: 992px) {
          .donate-showcase-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .donate-main-title {
            font-size: 30px;
          }
          .acc-number {
            font-size: 24px;
            letter-spacing: 2px;
          }
        }
      `}</style>
    </section>
  );
}
