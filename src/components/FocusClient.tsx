'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Organogram from '@/components/Organogram';
import Image from 'next/image';

export default function FocusClient() {
  const focusPillars = [
    {
      title: 'Strategy Development',
      desc: 'CIF collaborates with governments, Non-Governments and private organizations to develop iterative tailored, evidence-based strategies that address key human and capital development barriers.',
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
      desc: 'We support government and organizations to translate strategies into proven solutions and learning through co-creation, monitoring, and evaluation towards achieving set goals.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      ),
    },
    {
      title: 'Capacity Building',
      desc: 'We enhance capacity of government entities, Non-Governments and private organizations institutions, and community organizations with the skills and resources needed to meet both short- and long-term goals, ultimately driving social and economic impacts.',
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
      desc: 'CIF enables scientific and evidence based decision for government entities, Non-Governments and private organizations institutions, and community organizations through credible data collection, analysis and implementation and conduct of research.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
      ),
    },
  ];

  return (
    <>
      <Navbar />
      <div className="subpage-header islamic-pattern">
        <div className="container">
          <span className="header-subtitle">Our Capabilities</span>
          <h1>Our Focus Areas & Structure</h1>
        </div>
      </div>

      <main className="focus-page-content">
        {/* Focus Areas Grid */}
        <section className="focus-pillars-section">
          <div className="container">
            <div className="section-title-wrapper">
              <span className="section-subtitle">CIF Capabilities</span>
              <h2 className="section-title">Focus Areas</h2>
            </div>

            <div className="focus-grid">
              {focusPillars.map((pillar, idx) => (
                <div key={idx} className="focus-card glass-card">
                  <div className="focus-icon-wrapper">{pillar.icon}</div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Accent Section to split content and look highly premium */}
        <section className="focus-media-section container">
          <div className="media-grid">
            <div className="media-text-col">
              <span className="section-subtitle">Modern Operations</span>
              <h2>Data-Driven Development</h2>
              <p>
                By implementing robust monitoring systems and capturing field statistics in real time, CIF is able to 
                partner with public departments and international entities to make informed, impactful decisions. We 
                rehabilitate educational centers, deploy primary care, and implement sustainable agriculture through 
                well-structured strategic layers.
              </p>
            </div>
            <div className="media-image-col">
              <Image 
                src="/images/sustainable_agriculture.png" 
                alt="CIF Functional Agriculture" 
                width={600} 
                height={400} 
                style={{ width: '100%', height: 'auto', borderRadius: '16px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>

        {/* Structure / Organogram Section */}
        <section className="structure-organogram-section">
          <Organogram />
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
        .focus-page-content {
          background: #FAFBFD;
          padding: 80px 0 0 0;
        }
        .focus-pillars-section {
          margin-bottom: 80px;
        }
        .focus-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }
        .focus-card {
          padding: 40px 32px;
          background: #FFFFFF;
          border: 1px solid rgba(63, 181, 63, 0.12);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
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
          margin-bottom: 8px;
          transition: var(--transition-normal);
        }
        .focus-card:hover .focus-icon-wrapper {
          background: var(--secondary-green);
          color: #FFFFFF;
          transform: scale(1.1);
        }
        .focus-card h3 {
          font-size: 20px;
          color: var(--primary-navy);
          margin: 0;
        }
        .focus-card p {
          font-size: 15px;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        /* Focus Media Section */
        .focus-media-section {
          margin-bottom: 90px;
        }
        .media-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }
        .media-text-col h2 {
          font-size: 32px;
          color: var(--primary-navy);
          margin-top: 8px;
          margin-bottom: 16px;
        }
        .media-text-col p {
          font-size: 15px;
          line-height: 1.65;
          color: var(--text-secondary);
        }
        .media-image-col {
          box-shadow: var(--shadow-md);
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(63, 181, 63, 0.15);
        }

        .structure-organogram-section {
          background: #FFFFFF;
          border-top: 1px solid rgba(0, 0, 0, 0.03);
        }

        @media (max-width: 991px) {
          .media-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }
        @media (max-width: 768px) {
          .focus-grid {
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
