'use client';

import { useState } from 'react';

type TabKey = 'who' | 'vision' | 'mission';

export default function About() {
  const [activeTab, setActiveTab] = useState<TabKey>('who');

  return (
    <section id="about" className="about-section islamic-pattern">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-subtitle">Who We Are</span>
          <h2 className="section-title text-navy">About Crescent Impact Foundation</h2>
        </div>

        <div className="about-grid">
          {/* Timeline side */}
          <div className="history-wrapper">
            <h3 className="about-subtitle">Our Journey</h3>
            
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-badge">2019</div>
                <div className="timeline-card">
                  <h4>Foundation Established</h4>
                  <p>
                    Formed by visionary leaders and philanthropists to provide immediate socio-economic relief 
                    in health, food, and clothing distributions to underserved communities in Abuja.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-badge">2024</div>
                <div className="timeline-card">
                  <h4>CAC Registration</h4>
                  <p>
                    Duly registered under the Corporate Affairs Commission (Reg No. 7437137). Established 
                    headquarters at 208, Queen Amina Street, Kubwa, Abuja.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-badge">Present</div>
                <div className="timeline-card">
                  <h4>National Presence</h4>
                  <p>
                    Grown to establish operational presences in six geo-political zones of Nigeria, expanding 
                    programs to long-term health, education, and social welfare systems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Vision/Mission Toggles */}
          <div className="statements-wrapper">
            <h3 className="about-subtitle">Pillars of CIF</h3>

            <div className="tab-buttons">
              <button 
                onClick={() => setActiveTab('who')} 
                className={`tab-btn ${activeTab === 'who' ? 'active' : ''}`}
              >
                Who We Are
              </button>
              <button 
                onClick={() => setActiveTab('vision')} 
                className={`tab-btn ${activeTab === 'vision' ? 'active' : ''}`}
              >
                Our Vision
              </button>
              <button 
                onClick={() => setActiveTab('mission')} 
                className={`tab-btn ${activeTab === 'mission' ? 'active' : ''}`}
              >
                Our Mission
              </button>
            </div>

            <div className="tab-content-wrapper glass-card">
              {activeTab === 'who' && (
                <div className="tab-pane animate-fade-in">
                  <div className="tab-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h3>Addressing Barriers to Growth</h3>
                  <p>
                    Crescent Impact Foundation (CIF) is a Nigeria-based Non-Governmental Organization 
                    that supports individuals, organizations, and government entities. 
                  </p>
                  <p>
                    We actively work to address complex structural barriers hindering human and capital 
                    development through <strong>co-creation, system thinking, problem solving,</strong> and 
                    the <strong>real-time collection and management of data</strong> for use and action.
                  </p>
                </div>
              )}

              {activeTab === 'vision' && (
                <div className="tab-pane animate-fade-in">
                  <div className="tab-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </div>
                  <h3>A Vision of Prosperity</h3>
                  <p className="highlight-text">
                    "A Nigeria where every community thrives with access to health, education, security, 
                    and a quality life, powered by sustainable human and capital development."
                  </p>
                  <p>
                    Our vision drives us to design systems that are not just short-term aids, but 
                    long-lasting engines of socio-economic progress for generations to come.
                  </p>
                </div>
              )}

              {activeTab === 'mission' && (
                <div className="tab-pane animate-fade-in">
                  <div className="tab-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                  <h3>Systems of Transformation</h3>
                  <p className="highlight-text">
                    "To design and implement innovative systems that accelerate human and capital development, 
                    optimizing health outcomes, improving education quality, and enhancing community security 
                    to foster social and economic advancement."
                  </p>
                  <p>
                    We implement this by working closely with community structures and utilizing real-time 
                    clinical and demographic data to maximize program efficacy and accountability.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          background-color: #FAFBFD;
          position: relative;
          padding-top: 100px;
          padding-bottom: 100px;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }
        .about-subtitle {
          font-size: 24px;
          color: var(--primary-navy);
          margin-bottom: 30px;
          font-weight: 700;
          position: relative;
          padding-bottom: 8px;
        }
        .about-subtitle::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 3px;
          background: var(--secondary-green);
          border-radius: 1px;
        }
        .text-navy {
          color: var(--primary-navy);
        }

        /* Timeline Styles */
        .timeline {
          position: relative;
          border-left: 2px solid rgba(63, 181, 63, 0.2);
          padding-left: 32px;
          margin-left: 10px;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .timeline-item {
          position: relative;
        }
        .timeline-badge {
          position: absolute;
          left: -47px;
          top: 0;
          background: var(--secondary-green);
          color: #FFFFFF;
          font-family: 'Outfit', sans-serif;
          font-size: 13px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 30px;
          box-shadow: 0 4px 10px rgba(63, 181, 63, 0.3);
          border: 2px solid #FAFBFD;
          transition: var(--transition-normal);
        }
        .timeline-card {
          background: #FFFFFF;
          border-radius: 12px;
          padding: 24px;
          box-shadow: var(--shadow-sm);
          border: 1px solid rgba(0, 0, 0, 0.03);
          transition: var(--transition-normal);
        }
        .timeline-card:hover {
          transform: translateX(5px);
          box-shadow: var(--shadow-md);
          border-color: rgba(63, 181, 63, 0.25);
        }
        .timeline-item:hover .timeline-badge {
          transform: scale(1.15);
          background-color: var(--accent-gold);
          color: var(--primary-navy);
          box-shadow: 0 6px 16px rgba(226, 177, 60, 0.4);
        }
        .timeline-card h4 {
          font-size: 18px;
          color: var(--primary-navy);
          margin-bottom: 8px;
        }
        .timeline-card p {
          font-size: 14px;
          line-height: 1.55;
          color: var(--text-secondary);
        }

        /* Statements / Tabs Styles */
        .tab-buttons {
          display: flex;
          gap: 8px;
          margin-bottom: 24px;
          background: rgba(15, 30, 54, 0.03);
          padding: 6px;
          border-radius: 50px;
        }
        .tab-btn {
          flex: 1;
          padding: 12px 18px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          color: var(--text-secondary);
          transition: var(--transition-normal);
          text-align: center;
        }
        .tab-btn:hover {
          color: var(--primary-navy);
        }
        .tab-btn.active {
          background: #FFFFFF;
          color: var(--secondary-green);
          box-shadow: var(--shadow-sm);
        }
        .tab-content-wrapper {
          min-height: 380px;
          padding: 40px;
          border: 1px solid rgba(63, 181, 63, 0.15);
        }
        .tab-pane {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .tab-icon {
          width: 60px;
          height: 60px;
          background: rgba(63, 181, 63, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--secondary-green);
          margin-bottom: 12px;
        }
        .tab-pane h3 {
          font-size: 22px;
          color: var(--primary-navy);
        }
        .tab-pane p {
          font-size: 15px;
          line-height: 1.6;
          color: var(--text-secondary);
        }
        .highlight-text {
          font-size: 18px !important;
          font-weight: 500;
          color: var(--primary-navy) !important;
          line-height: 1.5;
          font-style: italic;
          border-left: 4px solid var(--secondary-green);
          padding-left: 16px;
          margin: 10px 0;
        }

        @media (max-width: 991px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 50px;
          }
        }
        @media (max-width: 576px) {
          .tab-buttons {
            flex-direction: column;
            border-radius: 16px;
            padding: 8px;
          }
          .tab-btn {
            padding: 10px;
            border-radius: 8px;
          }
          .tab-content-wrapper {
            padding: 24px;
          }
          .timeline {
            padding-left: 20px;
          }
          .timeline-badge {
            left: -32px;
            font-size: 11px;
            padding: 2px 6px;
          }
        }
      `}</style>
    </section>
  );
}
