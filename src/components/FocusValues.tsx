'use client';

export default function FocusValues() {
  const focusPillars = [
    {
      title: 'Strategy Development',
      desc: 'We support government and organizations to develop iterative, tailored, and evidence-based strategies to address key human and capital development barriers.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      ),
    },
    {
      title: 'Program Implementation',
      desc: 'We support government and organizations to translate strategies into proven solutions and learnings through co-creation, monitoring, and evaluation.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      ),
    },
    {
      title: 'Capacity Building',
      desc: 'We enhance the capacity of government, institutions, organizations, and local communities to achieve short, medium, and long-term social and economic impact goals.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 21a6 6 0 0 0-12 0"></path>
          <circle cx="12" cy="10" r="4"></circle>
          <path d="M22 21a5.07 5.07 0 0 0-3.3-4.56"></path>
          <circle cx="18" cy="6" r="3"></circle>
        </svg>
      ),
    },
    {
      title: 'Data Management & Research',
      desc: 'We enable scientific, evidence-based decisions for partners and government through credible, real-time data collection, management, and research design.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
      ),
    },
  ];

  const coreValues = [
    { name: 'IMPACT', desc: 'Making a tangible, positive difference in underserved communities.' },
    { name: 'EXCELLENCE', desc: 'Striving for the highest quality in project design, execution, and data-backed results.' },
    { name: 'ACCOUNTABILITY', desc: 'Being fully transparent, responsible, and data-driven in our interventions.' },
    { name: 'INTEGRITY', desc: 'Upholding strict ethical principles and moral standards in all partnerships.' },
  ];

  return (
    <section id="focus" className="focus-values-section">
      <div className="container">
        {/* Core Focus Area */}
        <div className="section-title-wrapper">
          <span className="section-subtitle">Pillars of Impact</span>
          <h2 className="section-title">Where We Focus</h2>
        </div>

        <div className="focus-grid">
          {focusPillars.map((pillar, idx) => (
            <div key={idx} className="focus-card glass-card">
              <div className="focus-icon-wrapper">
                {pillar.icon}
              </div>
              <h3 className="focus-card-title">{pillar.title}</h3>
              <p className="focus-card-desc">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Core Values Area */}
        <div className="values-container">
          <div className="section-title-wrapper" style={{ marginBottom: '40px' }}>
            <span className="section-subtitle">Our Foundations</span>
            <h2 className="section-title">Core Values</h2>
          </div>

          <div className="values-grid">
            {coreValues.map((val, idx) => (
              <div key={idx} className="value-card">
                <div className="value-glowing-back"></div>
                <div className="value-inner">
                  <div className="value-index">0{idx + 1}</div>
                  <h3 className="value-title">{val.name}</h3>
                  <p className="value-desc">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .focus-values-section {
          background-color: #FFFFFF;
          padding-top: 100px;
          padding-bottom: 100px;
          position: relative;
        }
        .focus-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-bottom: 90px;
        }
        .focus-card {
          padding: 32px 24px;
          border: 1px solid rgba(63, 181, 63, 0.12);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }
        .focus-icon-wrapper {
          width: 56px;
          height: 56px;
          background: rgba(63, 181, 63, 0.08);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--secondary-green);
          margin-bottom: 24px;
          transition: var(--transition-normal);
        }
        .focus-card:hover .focus-icon-wrapper {
          background: var(--secondary-green);
          color: #FFFFFF;
          transform: scale(1.1);
        }
        .focus-card-title {
          font-size: 18px;
          color: var(--primary-navy);
          margin-bottom: 12px;
          font-weight: 700;
        }
        .focus-card-desc {
          font-size: 14px;
          line-height: 1.55;
          color: var(--text-secondary);
        }

        /* Core Values Styles */
        .values-container {
          margin-top: 60px;
        }
        .values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .value-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          background: var(--primary-navy);
          color: #FFFFFF;
          padding: 32px 24px;
          z-index: 1;
          transition: var(--transition-normal);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .value-glowing-back {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(63,181,63,0.3) 0%, rgba(15,30,54,0) 80%);
          opacity: 0;
          z-index: -1;
          transition: var(--transition-normal);
        }
        .value-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.15);
          border-color: rgba(63, 181, 63, 0.3);
        }
        .value-card:hover .value-glowing-back {
          opacity: 1;
        }
        .value-inner {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .value-index {
          font-family: 'Outfit', sans-serif;
          font-size: 12px;
          font-weight: 800;
          color: var(--secondary-green);
          letter-spacing: 2px;
          margin-bottom: 12px;
        }
        .value-title {
          font-size: 20px;
          color: #FFFFFF;
          margin-bottom: 12px;
          font-weight: 700;
          letter-spacing: 1px;
        }
        .value-desc {
          font-size: 13.5px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7);
        }

        @media (max-width: 991px) {
          .focus-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .values-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .focus-grid {
            grid-template-columns: 1fr;
          }
          .values-grid {
            grid-template-columns: 1fr;
          }
          .value-card {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
}
