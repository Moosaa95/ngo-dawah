'use client';

import { useState, useEffect } from 'react';

export default function DonateModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedAcc, setCopiedAcc] = useState(false);
  const [copiedAll, setCopiedAll] = useState(false);
  const [activeTier, setActiveTier] = useState<number | null>(null);

  const bankDetails = {
    bankName: 'Zenith Bank',
    accountNumber: '1313392750',
    formattedAccount: '1313 392 750',
    accountName: 'Crescent Impact Foundation',
    accountType: 'Corporate / NGO Account',
    cacReg: '7437137',
  };

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-donate-modal', handleOpen);
    return () => window.removeEventListener('open-donate-modal', handleOpen);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const copyAccountNumber = async () => {
    try {
      await navigator.clipboard.writeText(bankDetails.accountNumber);
      setCopiedAcc(true);
      setTimeout(() => setCopiedAcc(false), 2500);
    } catch (err) {
      console.error('Failed to copy account number:', err);
    }
  };

  const copyFullDetails = async () => {
    const fullText = `Bank Name: ${bankDetails.bankName}\nAccount Number: ${bankDetails.accountNumber}\nAccount Name: ${bankDetails.accountName}\nCAC Registration: CAC/IT/NO ${bankDetails.cacReg}`;
    try {
      await navigator.clipboard.writeText(fullText);
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 2500);
    } catch (err) {
      console.error('Failed to copy bank details:', err);
    }
  };

  if (!isOpen) return null;

  const impactTiers = [
    { amount: '₦5,000', label: 'Primary Health Care', desc: 'Provides basic clinical medicine & health screening for 1 rural beneficiary.' },
    { amount: '₦15,000', label: 'Education Support', desc: 'Equips 2 students with essential learning materials, books & school kits.' },
    { amount: '₦50,000', label: 'Community Caravan', desc: 'Sponsors a mobile health caravan outreach station in underserved areas.' },
    { amount: '₦100,000+', label: 'Empowerment Grant', desc: 'Funds vocational skills training and micro-enterprise startup packages.' },
  ];

  return (
    <div className="donate-overlay" onClick={() => setIsOpen(false)} role="dialog" aria-modal="true" aria-label="Donate to Crescent Impact Foundation">
      {/* Toast Notification */}
      {(copiedAcc || copiedAll) && (
        <div className="donate-toast">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>{copiedAcc ? 'Account Number (1313392750) Copied!' : 'Full Zenith Bank Details Copied!'}</span>
        </div>
      )}

      <div className="donate-modal glass-modal" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="close-btn" onClick={() => setIsOpen(false)} aria-label="Close modal">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Modal Header */}
        <div className="modal-header-block">
          <div className="header-badge">
            <span className="heart-pulse">❤️</span> Direct Bank Transfer
          </div>
          <h2>Support Crescent Impact Foundation</h2>
          <p>Your contributions directly empower health, education, and human development across Nigeria.</p>
        </div>

        <div className="modal-body-grid">
          {/* Left Column: Bank Card & Copy Tools */}
          <div className="bank-card-container">
            <div className="zenith-card">
              {/* Card Header */}
              <div className="card-top">
                <div className="bank-brand">
                  <div className="zenith-logo-badge">
                    <span className="z-letter">Z</span>
                  </div>
                  <div className="bank-name-text">
                    <span className="b-name">{bankDetails.bankName}</span>
                    <span className="b-type">{bankDetails.accountType}</span>
                  </div>
                </div>
                <div className="card-chip">
                  <svg width="38" height="28" viewBox="0 0 38 28" fill="none">
                    <rect width="38" height="28" rx="5" fill="url(#chip-grad)" />
                    <path d="M0 14H38M14 0V28M24 0V28" stroke="#D19E2B" strokeWidth="1" opacity="0.6" />
                    <defs>
                      <linearGradient id="chip-grad" x1="0" y1="0" x2="38" y2="28" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F4D068" />
                        <stop offset="1" stopColor="#AA7A1E" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Account Number Display */}
              <div className="card-number-wrapper" onClick={copyAccountNumber} title="Click to copy account number">
                <span className="label-sm">ACCOUNT NUMBER</span>
                <div className="number-row">
                  <span className="acc-digits">{bankDetails.formattedAccount}</span>
                  <button className={`copy-badge-btn ${copiedAcc ? 'copied' : ''}`} aria-label="Copy Account Number">
                    {copiedAcc ? (
                      <>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Account Holder Name */}
              <div className="card-bottom">
                <div>
                  <span className="label-sm">ACCOUNT NAME / BENEFICIARY</span>
                  <span className="acc-holder">{bankDetails.accountName}</span>
                </div>
                <div className="cac-badge">
                  <span>CAC Reg: {bankDetails.cacReg}</span>
                </div>
              </div>
            </div>

            {/* Quick Copy Actions */}
            <div className="copy-action-row">
              <button className="btn-copy-primary" onClick={copyAccountNumber}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                {copiedAcc ? 'Account Number Copied!' : 'Copy Account Number (1313392750)'}
              </button>
              <button className="btn-copy-secondary" onClick={copyFullDetails}>
                {copiedAll ? 'Full Details Copied!' : 'Copy Full Bank Info'}
              </button>
            </div>
          </div>

          {/* Right Column: QR Code & Impact Tiers */}
          <div className="modal-info-side">
            {/* QR Visual Card */}
            <div className="qr-visual-card">
              <div className="qr-wrapper">
                {/* SVG Visual QR Graphic */}
                <svg width="110" height="110" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" fill="#FFFFFF" rx="8" />
                  {/* Position detection patterns */}
                  <rect x="6" y="6" width="26" height="26" fill="#0F1E36" rx="4" />
                  <rect x="10" y="10" width="18" height="18" fill="#FFFFFF" rx="2" />
                  <rect x="14" y="14" width="10" height="10" fill="#3FB53F" rx="1" />

                  <rect x="68" y="6" width="26" height="26" fill="#0F1E36" rx="4" />
                  <rect x="72" y="10" width="18" height="18" fill="#FFFFFF" rx="2" />
                  <rect x="76" y="14" width="10" height="10" fill="#3FB53F" rx="1" />

                  <rect x="6" y="68" width="26" height="26" fill="#0F1E36" rx="4" />
                  <rect x="10" y="72" width="18" height="18" fill="#FFFFFF" rx="2" />
                  <rect x="14" y="76" width="10" height="10" fill="#3FB53F" rx="1" />

                  {/* QR Data Grid Dots */}
                  <rect x="36" y="10" width="6" height="6" fill="#0F1E36" />
                  <rect x="46" y="10" width="6" height="6" fill="#3FB53F" />
                  <rect x="56" y="10" width="6" height="6" fill="#0F1E36" />
                  
                  <rect x="36" y="20" width="6" height="6" fill="#3FB53F" />
                  <rect x="46" y="20" width="6" height="6" fill="#0F1E36" />
                  <rect x="56" y="20" width="6" height="6" fill="#E2B13C" />

                  <rect x="10" y="36" width="6" height="6" fill="#3FB53F" />
                  <rect x="20" y="36" width="6" height="6" fill="#0F1E36" />
                  <rect x="30" y="36" width="6" height="6" fill="#0F1E36" />
                  <rect x="40" y="36" width="6" height="6" fill="#3FB53F" />
                  <rect x="50" y="36" width="6" height="6" fill="#0F1E36" />
                  <rect x="60" y="36" width="6" height="6" fill="#3FB53F" />
                  <rect x="70" y="36" width="6" height="6" fill="#0F1E36" />
                  <rect x="84" y="36" width="6" height="6" fill="#3FB53F" />

                  <rect x="10" y="46" width="6" height="6" fill="#0F1E36" />
                  <rect x="24" y="46" width="6" height="6" fill="#3FB53F" />
                  <rect x="34" y="46" width="6" height="6" fill="#0F1E36" />

                  {/* Center Emblem */}
                  <rect x="42" y="42" width="16" height="16" fill="#0F1E36" rx="4" />
                  <circle cx="50" cy="50" r="5" fill="#3FB53F" />

                  <rect x="60" y="46" width="6" height="6" fill="#0F1E36" />
                  <rect x="74" y="46" width="6" height="6" fill="#E2B13C" />
                  <rect x="84" y="46" width="6" height="6" fill="#0F1E36" />

                  <rect x="10" y="56" width="6" height="6" fill="#E2B13C" />
                  <rect x="20" y="56" width="6" height="6" fill="#0F1E36" />
                  <rect x="36" y="56" width="6" height="6" fill="#3FB53F" />
                  <rect x="48" y="56" width="6" height="6" fill="#0F1E36" />
                  <rect x="64" y="56" width="6" height="6" fill="#3FB53F" />
                  <rect x="74" y="56" width="6" height="6" fill="#0F1E36" />
                  <rect x="84" y="56" width="6" height="6" fill="#3FB53F" />

                  <rect x="36" y="68" width="6" height="6" fill="#0F1E36" />
                  <rect x="46" y="68" width="6" height="6" fill="#E2B13C" />
                  <rect x="56" y="68" width="6" height="6" fill="#0F1E36" />
                  <rect x="68" y="68" width="6" height="6" fill="#3FB53F" />
                  <rect x="80" y="68" width="6" height="6" fill="#0F1E36" />

                  <rect x="36" y="78" width="6" height="6" fill="#3FB53F" />
                  <rect x="46" y="78" width="6" height="6" fill="#0F1E36" />
                  <rect x="56" y="78" width="6" height="6" fill="#3FB53F" />
                  <rect x="72" y="78" width="6" height="6" fill="#0F1E36" />

                  <rect x="36" y="86" width="6" height="6" fill="#0F1E36" />
                  <rect x="46" y="86" width="6" height="6" fill="#3FB53F" />
                  <rect x="60" y="86" width="6" height="6" fill="#0F1E36" />
                  <rect x="74" y="86" width="6" height="6" fill="#E2B13C" />
                  <rect x="84" y="86" width="6" height="6" fill="#3FB53F" />
                </svg>
              </div>
              <div className="qr-text">
                <h4>Quick Bank Transfer</h4>
                <p>Scan with your mobile banking app or copy the details to make a transfer.</p>
              </div>
            </div>

            {/* Impact Tiers */}
            <div className="impact-section">
              <h4 className="impact-title">Suggested Giving Impact</h4>
              <div className="tier-grid">
                {impactTiers.map((tier, index) => (
                  <div
                    key={index}
                    className={`tier-card ${activeTier === index ? 'active' : ''}`}
                    onClick={() => setActiveTier(activeTier === index ? null : index)}
                  >
                    <div className="tier-top">
                      <span className="tier-amount">{tier.amount}</span>
                      <span className="tier-label">{tier.label}</span>
                    </div>
                    <p className="tier-desc">{tier.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer-note">
          <div className="guarantee-tag">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            <span>100% Transparency & Direct Community Impact Guarantee</span>
          </div>
          <p>For official donation receipts or corporate partnership inquiries, reach us at <a href="mailto:crescentimpactfoundation@gmail.com">crescentimpactfoundation@gmail.com</a></p>
        </div>
      </div>

      <style jsx>{`
        .donate-overlay {
          position: fixed;
          inset: 0;
          z-index: 10000;
          background: rgba(8, 16, 30, 0.82);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: modalFadeIn 0.25s ease-out;
        }

        @keyframes modalFadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to { opacity: 1; transform: scale(1); }
        }

        .donate-toast {
          position: fixed;
          top: 24px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10001;
          background: #279A27;
          color: #FFFFFF;
          padding: 12px 24px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 14.5px;
          box-shadow: 0 10px 30px rgba(39, 154, 39, 0.4);
          display: flex;
          align-items: center;
          gap: 10px;
          animation: toastSlideDown 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        @keyframes toastSlideDown {
          from { opacity: 0; transform: translate(-50%, -20px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }

        .donate-modal {
          position: relative;
          width: 100%;
          max-width: 900px;
          max-height: 92vh;
          overflow-y: auto;
          background: #0F1E36;
          border: 1px solid rgba(63, 181, 63, 0.3);
          border-radius: 24px;
          padding: 36px;
          color: #FFFFFF;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(63, 181, 63, 0.15);
        }

        .close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .close-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: rotate(90deg);
        }

        .modal-header-block {
          text-align: center;
          margin-bottom: 30px;
        }
        .header-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(63, 181, 63, 0.15);
          border: 1px solid rgba(63, 181, 63, 0.3);
          color: #3FB53F;
          padding: 6px 16px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .heart-pulse {
          animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        .modal-header-block h2 {
          font-size: 28px;
          font-weight: 800;
          color: #FFFFFF;
          margin: 0 0 8px 0;
          letter-spacing: -0.5px;
        }
        .modal-header-block p {
          font-size: 14.5px;
          color: rgba(255, 255, 255, 0.7);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.5;
        }

        .modal-body-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 28px;
          margin-bottom: 28px;
        }

        /* Zenith Bank Card */
        .zenith-card {
          background: linear-gradient(135deg, #A80000 0%, #E60000 45%, #800000 100%);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 26px;
          box-shadow: 0 16px 36px rgba(168, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.4);
          position: relative;
          overflow: hidden;
          color: #FFFFFF;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 230px;
        }
        .zenith-card::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -30%;
          width: 260px;
          height: 260px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .bank-brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .zenith-logo-badge {
          width: 38px;
          height: 38px;
          background: #FFFFFF;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }
        .z-letter {
          font-family: 'Outfit', sans-serif;
          font-weight: 900;
          font-size: 24px;
          color: #E60000;
          line-height: 1;
        }
        .bank-name-text {
          display: flex;
          flex-direction: column;
        }
        .b-name {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: 19px;
          letter-spacing: 0.5px;
          line-height: 1.1;
        }
        .b-type {
          font-size: 10.5px;
          color: rgba(255, 255, 255, 0.85);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 2px;
        }

        .card-number-wrapper {
          margin: 22px 0 16px 0;
          cursor: pointer;
          background: rgba(0, 0, 0, 0.15);
          padding: 12px 16px;
          border-radius: 12px;
          border: 1px dashed rgba(255, 255, 255, 0.3);
          transition: background 0.2s, border-color 0.2s;
        }
        .card-number-wrapper:hover {
          background: rgba(0, 0, 0, 0.28);
          border-color: rgba(255, 255, 255, 0.6);
        }
        .label-sm {
          font-size: 9.5px;
          color: rgba(255, 255, 255, 0.75);
          letter-spacing: 1.5px;
          font-weight: 700;
          display: block;
          margin-bottom: 4px;
        }
        .number-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .acc-digits {
          font-family: 'Outfit', monospace;
          font-size: 26px;
          font-weight: 800;
          letter-spacing: 3px;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        .copy-badge-btn {
          background: rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.4);
          color: #FFFFFF;
          padding: 6px 12px;
          border-radius: 30px;
          font-size: 12px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .copy-badge-btn:hover {
          background: #FFFFFF;
          color: #E60000;
        }
        .copy-badge-btn.copied {
          background: #3FB53F;
          border-color: #3FB53F;
          color: #FFFFFF;
        }

        .card-bottom {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }
        .acc-holder {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.5px;
          display: block;
          color: #FFFFFF;
          text-transform: uppercase;
        }
        .cac-badge {
          font-size: 10.5px;
          background: rgba(0, 0, 0, 0.25);
          padding: 4px 10px;
          border-radius: 20px;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 600;
        }

        /* Copy Buttons */
        .copy-action-row {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 18px;
        }
        .btn-copy-primary {
          width: 100%;
          background: #3FB53F;
          color: #FFFFFF;
          border: none;
          padding: 14px 20px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          cursor: pointer;
          box-shadow: 0 6px 20px rgba(63, 181, 63, 0.35);
          transition: var(--transition-fast);
        }
        .btn-copy-primary:hover {
          background: #35A335;
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(63, 181, 63, 0.5);
        }
        .btn-copy-secondary {
          width: 100%;
          background: rgba(255, 255, 255, 0.06);
          color: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 12px 20px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 13.5px;
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .btn-copy-secondary:hover {
          background: rgba(255, 255, 255, 0.12);
          color: #FFFFFF;
        }

        /* Right Column */
        .modal-info-side {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .qr-visual-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 16px;
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .qr-wrapper {
          background: #FFFFFF;
          padding: 6px;
          border-radius: 12px;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }
        .qr-text h4 {
          font-size: 15px;
          font-weight: 700;
          color: #FFFFFF;
          margin: 0 0 4px 0;
        }
        .qr-text p {
          font-size: 12.5px;
          color: rgba(255, 255, 255, 0.65);
          margin: 0;
          line-height: 1.4;
        }

        .impact-title {
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--accent-gold);
          margin: 0 0 10px 0;
        }
        .tier-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .tier-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 12px;
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .tier-card:hover, .tier-card.active {
          background: rgba(63, 181, 63, 0.12);
          border-color: rgba(63, 181, 63, 0.4);
        }
        .tier-top {
          display: flex;
          flex-direction: column;
          margin-bottom: 4px;
        }
        .tier-amount {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: 16px;
          color: #3FB53F;
        }
        .tier-label {
          font-size: 12px;
          font-weight: 700;
          color: #FFFFFF;
        }
        .tier-desc {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
          line-height: 1.35;
        }

        /* Modal Footer */
        .modal-footer-note {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 20px;
          text-align: center;
        }
        .guarantee-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 6px;
        }
        .modal-footer-note p {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.5);
          margin: 0;
        }
        .modal-footer-note a {
          color: var(--secondary-green);
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .donate-modal {
            padding: 24px 20px;
          }
          .modal-body-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .acc-digits {
            font-size: 21px;
            letter-spacing: 2px;
          }
          .modal-header-block h2 {
            font-size: 22px;
          }
        }
      `}</style>
    </div>
  );
}

export function openDonateModal() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('open-donate-modal'));
  }
}
