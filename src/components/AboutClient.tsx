'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

type TabKey = 'who' | 'vision' | 'mission';

export default function AboutClient() {
  const [activeTab, setActiveTab] = useState<TabKey>('who');

  const coreValues = [
    { name: 'Impact', desc: 'Striving for measurable and meaningful change in every project.', icon: '🎯' },
    { name: 'Excellence', desc: 'Upholding high standards in all operations and engagements.', icon: '💎' },
    { name: 'Integrity', desc: 'Maintaining ethical standards in all interactions and partnerships.', icon: '🛡️' },
    { name: 'Transparency', desc: 'Ensuring fairness, openness and honesty in all communications, interactions and actions.', icon: '👁️' },
    { name: 'Accountability', desc: 'To be responsible and answerable in all our dealings.', icon: '🤝' },
  ];

  return (
    <>
      <Navbar />
      <div className="subpage-header islamic-pattern">
        <div className="container">
          <span className="header-subtitle">Get to Know Us</span>
          <h1>About Us</h1>
        </div>
      </div>

      <main className="about-page-content">
        {/* Who, Vision, Mission Section */}
        <section className="about-statements-section">
          <div className="container statement-container">
            <div className="tab-navigation glass-card">
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

            <div className="statement-display glass-card">
              {activeTab === 'who' && (
                <div className="tab-pane animate-fade-in">
                  <div className="pane-icon">👥</div>
                  <h2>Crescent Impact Foundation (CIF)</h2>
                  <p className="pane-desc">
                    Crescent Impact Foundation (CIF) is a Nigeria based Non-Governmental Organization 
                    that supports individuals, organizations and government to address barriers 
                    hindering human and capital development through co-creation, system thinking, 
                    problem solving and real time collection of data for use and action.
                  </p>
                </div>
              )}

              {activeTab === 'vision' && (
                <div className="tab-pane animate-fade-in">
                  <div className="pane-icon">🎯</div>
                  <h2>Our Vision</h2>
                  <p className="pane-desc highlight-text">
                    "A country where every community thrives with access to health, education, 
                    security, and quality life, powered by sustainable human and capital development."
                  </p>
                </div>
              )}

              {activeTab === 'mission' && (
                <div className="tab-pane animate-fade-in">
                  <div className="pane-icon">🚀</div>
                  <h2>Our Mission</h2>
                  <p className="pane-desc highlight-text">
                    "To design and implement innovative systems that accelerate human and capital development, 
                    optimizing health outcomes, improving education quality, and enhancing community security 
                    to foster social and economic advancement."
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Media Feature Section to break up text and increase engagement */}
        <section className="about-media-section container">
          <div className="media-grid">
            <div className="media-image-wrapper">
              <Image 
                src="/images/health_outreach.png" 
                alt="CIF Public Health Outreach" 
                width={600} 
                height={400} 
                style={{ width: '100%', height: 'auto', borderRadius: '16px', objectFit: 'cover' }}
              />
            </div>
            <div className="media-text-wrapper">
              <span className="section-subtitle">Real Impact</span>
              <h2>On-The-Ground Community Service</h2>
              <p>
                We believe that human and capital development cannot be solved in isolation. By working directly with 
                local clinical staff, primary school teachers, and grassroots leaders, CIF brings healthcare caravans, 
                clean water initiatives, and vocational resources straight to those who need them most.
              </p>
              <div className="media-stat-callout">
                <div className="stat-callout-num">6+</div>
                <div>
                  <h4>Geopolitical Coverage</h4>
                  <p>Active support networks across all zones of Nigeria.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="core-values-section">
          <div className="container">
            <div className="section-title-wrapper">
              <span className="section-subtitle">CIF Philosophy</span>
              <h2 className="section-title">Our Core Values</h2>
            </div>

            <div className="values-deck">
              {coreValues.map((val, idx) => (
                <div key={idx} className="value-card glass-card">
                  <div className="card-icon">{val.icon}</div>
                  <h3>{val.name}</h3>
                  <p>{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="history-section">
          <div className="container">
            <div className="section-title-wrapper">
              <span className="section-subtitle">CIF Journey</span>
              <h2 className="section-title">Timeline of Expansion</h2>
            </div>

            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-badge">2019</div>
                <div className="timeline-card">
                  <h4>Foundation Established</h4>
                  <p>
                    CIF was formed by a group of visionary leaders and philanthropists to provide immediate relief 
                    in health, food, and clothing to underserved communities in Abuja.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-badge">2024</div>
                <div className="timeline-card">
                  <h4>CAC Registration</h4>
                  <p>
                    Duly registered under the Corporate Affairs Commission (Reg No: 7437137) with headquarters 
                    established in Kubwa, Abuja.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-badge">Present</div>
                <div className="timeline-card">
                  <h4>National Operations</h4>
                  <p>
                    Established operations and offices in six geo-political zones of Nigeria, coordinating 
                    community development, agricultural restoration, and tech-skills training.
                  </p>
                </div>
              </div>
            </div>
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
        .about-page-content {
          padding: 80px 0;
          background: #FAFBFD;
        }
        .about-statements-section {
          margin-bottom: 90px;
        }
        .statement-container {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 40px;
          align-items: start;
        }
        .tab-navigation {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 24px;
          background: #FFFFFF;
          border: 1px solid rgba(63, 181, 63, 0.1);
        }
        .tab-btn {
          width: 100%;
          text-align: left;
          padding: 16px 20px;
          font-size: 16px;
          font-weight: 600;
          color: var(--text-secondary);
          border-radius: 8px;
          transition: var(--transition-normal);
        }
        .tab-btn:hover {
          color: var(--primary-navy);
          background: rgba(63, 181, 63, 0.03);
        }
        .tab-btn.active {
          background: var(--secondary-green);
          color: #FFFFFF;
          box-shadow: 0 4px 12px rgba(63, 181, 63, 0.2);
        }
        .statement-display {
          padding: 48px;
          background: #FFFFFF;
          border: 1px solid rgba(63, 181, 63, 0.1);
          min-height: 300px;
          display: flex;
          align-items: center;
        }
        .tab-pane {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .pane-icon {
          font-size: 48px;
        }
        .tab-pane h2 {
          font-size: 28px;
          color: var(--primary-navy);
        }
        .pane-desc {
          font-size: 16px;
          line-height: 1.7;
          color: var(--text-secondary);
        }
        .highlight-text {
          font-size: 20px;
          font-weight: 500;
          color: var(--primary-navy);
          line-height: 1.5;
          font-style: italic;
          border-left: 4px solid var(--secondary-green);
          padding-left: 20px;
        }

        /* Media Section */
        .about-media-section {
          margin-bottom: 90px;
        }
        .media-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }
        .media-image-wrapper {
          box-shadow: var(--shadow-md);
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(63, 181, 63, 0.15);
        }
        .media-text-wrapper h2 {
          font-size: 32px;
          color: var(--primary-navy);
          margin-top: 8px;
          margin-bottom: 16px;
        }
        .media-text-wrapper p {
          font-size: 15px;
          line-height: 1.65;
          color: var(--text-secondary);
          margin-bottom: 24px;
        }
        .media-stat-callout {
          display: flex;
          gap: 16px;
          align-items: center;
          background: #FFFFFF;
          padding: 16px 24px;
          border-radius: 12px;
          box-shadow: var(--shadow-sm);
          border-left: 4px solid var(--secondary-green);
        }
        .stat-callout-num {
          font-family: 'Outfit', sans-serif;
          font-size: 36px;
          font-weight: 800;
          color: var(--secondary-green);
        }
        .media-stat-callout h4 {
          font-size: 15px;
          color: var(--primary-navy);
          margin-bottom: 2px;
        }
        .media-stat-callout p {
          font-size: 12.5px;
          color: var(--text-secondary);
          margin: 0;
        }

        /* Core Values */
        .core-values-section {
          margin-bottom: 90px;
          background: #FFFFFF;
          padding: 80px 0;
          border-top: 1px solid rgba(0, 0, 0, 0.03);
          border-bottom: 1px solid rgba(0, 0, 0, 0.03);
        }
        .values-deck {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }
        .value-card {
          padding: 32px 24px;
          text-align: center;
          background: #FFFFFF;
          border: 1px solid rgba(63, 181, 63, 0.12);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .card-icon {
          font-size: 36px;
        }
        .value-card h3 {
          font-size: 18px;
          color: var(--primary-navy);
          margin: 0;
        }
        .value-card p {
          font-size: 13.5px;
          line-height: 1.55;
          color: var(--text-secondary);
        }

        /* Timeline Section */
        .history-section {
          padding: 40px 0;
        }
        .timeline {
          position: relative;
          border-left: 2px solid rgba(63, 181, 63, 0.2);
          padding-left: 32px;
          margin-left: 10px;
          display: flex;
          flex-direction: column;
          gap: 40px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
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

        @media (max-width: 1199px) {
          .values-deck {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 991px) {
          .statement-container {
            grid-template-columns: 1fr;
          }
          .media-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .values-deck {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 576px) {
          .values-deck {
            grid-template-columns: 1fr;
          }
          .subpage-header h1 {
            font-size: 36px;
          }
        }
      `}</style>
    </>
  );
}
