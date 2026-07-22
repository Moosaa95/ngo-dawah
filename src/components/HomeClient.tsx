'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function HomeClient() {
  const focusTeasers = [
    { title: 'Strategy Development', desc: 'Developing tailored, evidence-based strategies to address critical human barriers.', icon: '🎯' },
    { title: 'Program Implementation', desc: 'Translating strategic indicators into proven solutions through co-creation and M&E.', icon: '⚙️' },
    { title: 'Capacity Building', desc: 'Equipping governments and local communities with key operational resources.', icon: '💪' },
    { title: 'Data Management & Research', desc: 'Enabling scientific decisions through credible real-time data analysis.', icon: '📊' },
  ];

  const programTeasers = [
    { title: 'Public Health Care', desc: 'Accessible and affordable preventive clinical care caravans.', icon: '🏥' },
    { title: 'Quality Education', desc: 'Classroom rehabilitations, scholarships, and sponsorships.', icon: '📚' },
    { title: 'Youth & Women Empowerment', desc: 'Vocational skills workshops and micro-finance grants.', icon: '👩‍💻' },
  ];

  return (
    <>
      <Navbar />
      <Hero />
      
      <main className="home-content islamic-pattern">
        {/* About Teaser */}
        <section className="home-section-card container">
          <div className="teaser-grid">
            <div className="teaser-text-col">
              <span className="teaser-tag">CIF Identity</span>
              <h2>Who We Are</h2>
              <p>
                Crescent Impact Foundation (CIF) is a Nigeria based Non-Governmental Organization 
                that supports individuals, organizations and government to address barriers 
                hindering human and capital development through co-creation, system thinking, 
                problem solving and real time data implementation.
              </p>
              <div className="teaser-links">
                <Link href="/about" className="btn-primary">
                  Learn More About Us &rarr;
                </Link>
              </div>
            </div>
            <div className="teaser-stats-col glass-card">
              <div className="teaser-stat-item">
                <span className="teaser-stat-icon">🎯</span>
                <div>
                  <h4>Our Vision</h4>
                  <p>A country where every community thrives with access to health, education, and security.</p>
                </div>
              </div>
              <div className="teaser-stat-item">
                <span className="teaser-stat-icon">🚀</span>
                <div>
                  <h4>Our Mission</h4>
                  <p>To design and implement innovative systems that accelerate personal and personal development.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Focus Areas Teaser */}
        <section className="home-section-card bg-white-card">
          <div className="container">
            <div className="section-title-wrapper">
              <span className="section-subtitle">Pillars of Impact</span>
              <h2 className="section-title">Areas of Focus</h2>
            </div>
            
            <div className="focus-teaser-grid">
              {focusTeasers.map((focus, idx) => (
                <div key={idx} className="teaser-focus-card glass-card">
                  <span className="teaser-focus-icon">{focus.icon}</span>
                  <h3>{focus.title}</h3>
                  <p>{focus.desc}</p>
                </div>
              ))}
            </div>

            <div className="center-action">
              <Link href="/focus" className="btn-secondary">
                View Our Work & Structure &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* Programs Teaser */}
        <section className="home-section-card container">
          <div className="section-title-wrapper">
            <span className="section-subtitle">CIF Key Initiatives</span>
            <h2 className="section-title">Featured Programs</h2>
          </div>

          <div className="programs-teaser-grid">
            {programTeasers.map((prog, idx) => (
              <div key={idx} className="teaser-prog-card glass-card">
                <span className="teaser-prog-icon">{prog.icon}</span>
                <h3>{prog.title}</h3>
                <p>{prog.desc}</p>
              </div>
            ))}
          </div>

          <div className="center-action">
            <Link href="/programs" className="btn-primary">
              Explore All 14 Programs & SDGs &rarr;
            </Link>
          </div>
        </section>

        {/* Team Teaser */}
        <section className="home-section-card bg-white-card">
          <div className="container teaser-team-block">
            <div className="teaser-team-info">
              <span className="section-subtitle">CIF Leaders</span>
              <h2>Our Leadership & Team</h2>
              <p>
                CIF is steered by a dedicated Board of Trustees, an experienced Management Team, 
                and a highly skilled Health Technical unit coordinating over 50 active volunteers.
              </p>
              <Link href="/team" className="btn-secondary">
                Meet the Team &rarr;
              </Link>
            </div>
            <div className="teaser-team-visual glass-card">
              <div className="visual-badge-grid">
                <div className="badge-card">
                  <span>BOT</span>
                  <p>Board of Trustees</p>
                </div>
                <div className="badge-card">
                  <span>MGT</span>
                  <p>Management</p>
                </div>
                <div className="badge-card">
                  <span>HLT</span>
                  <p>Health Unit</p>
                </div>
                <div className="badge-card">
                  <span>VOL</span>
                  <p>Volunteers</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />

      <style jsx>{`
        .home-content {
          background-color: #FAFBFD;
        }
        .home-section-card {
          padding: 100px 0;
        }
        .bg-white-card {
          background: #FFFFFF;
          border-top: 1px solid rgba(0, 0, 0, 0.03);
          border-bottom: 1px solid rgba(0, 0, 0, 0.03);
        }
        
        /* Teaser layouts */
        .teaser-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .teaser-tag {
          color: var(--secondary-green);
          font-weight: 700;
          font-size: 14px;
          text-transform: uppercase;
          margin-bottom: 12px;
          display: block;
          letter-spacing: 1px;
        }
        .teaser-text-col h2 {
          font-size: 36px;
          color: var(--primary-navy);
          margin-bottom: 20px;
        }
        .teaser-text-col p {
          font-size: 16px;
          line-height: 1.65;
          color: var(--text-secondary);
          margin-bottom: 30px;
        }
        .teaser-stats-col {
          padding: 40px;
          background: #FFFFFF;
          border: 1px solid rgba(63, 181, 63, 0.1);
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        .teaser-stat-item {
          display: flex;
          gap: 16px;
        }
        .teaser-stat-icon {
          font-size: 32px;
          flex-shrink: 0;
        }
        .teaser-stat-item h4 {
          font-size: 16px;
          color: var(--primary-navy);
          margin-bottom: 4px;
        }
        .teaser-stat-item p {
          font-size: 13.5px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        /* Focus Area Teasers */
        .focus-teaser-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-bottom: 40px;
        }
        .teaser-focus-card {
          padding: 32px 24px;
          background: #FFFFFF;
          border: 1px solid rgba(63, 181, 63, 0.1);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        .teaser-focus-icon {
          font-size: 36px;
        }
        .teaser-focus-card h3 {
          font-size: 16px;
          color: var(--primary-navy);
          margin: 0;
        }
        .teaser-focus-card p {
          font-size: 13px;
          line-height: 1.5;
          color: var(--text-secondary);
        }
        .center-action {
          display: flex;
          justify-content: center;
          margin-top: 30px;
        }

        /* Programs Teasers */
        .programs-teaser-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 40px;
        }
        .teaser-prog-card {
          padding: 36px 24px;
          background: #FFFFFF;
          border: 1px solid rgba(63, 181, 63, 0.1);
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .teaser-prog-icon {
          font-size: 32px;
        }
        .teaser-prog-card h3 {
          font-size: 18px;
          color: var(--primary-navy);
          margin: 0;
        }
        .teaser-prog-card p {
          font-size: 14px;
          line-height: 1.55;
          color: var(--text-secondary);
        }

        /* Team Teasers */
        .teaser-team-block {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .teaser-team-info h2 {
          font-size: 36px;
          color: var(--primary-navy);
          margin-bottom: 20px;
        }
        .teaser-team-info p {
          font-size: 16px;
          line-height: 1.65;
          color: var(--text-secondary);
          margin-bottom: 30px;
        }
        .teaser-team-visual {
          padding: 40px;
          background: #FFFFFF;
          border: 1px solid rgba(63, 181, 63, 0.1);
        }
        .visual-badge-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .badge-card {
          background: rgba(15, 30, 54, 0.03);
          border-radius: 12px;
          padding: 24px 16px;
          text-align: center;
          transition: var(--transition-normal);
        }
        .badge-card:hover {
          background: rgba(63, 181, 63, 0.08);
          transform: translateY(-2px);
        }
        .badge-card span {
          font-family: 'Outfit', sans-serif;
          font-size: 20px;
          font-weight: 800;
          color: var(--secondary-green);
          display: block;
          margin-bottom: 4px;
        }
        .badge-card p {
          font-size: 12.5px;
          font-weight: 500;
          color: var(--text-secondary);
          margin: 0;
        }

        @media (max-width: 991px) {
          .teaser-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .teaser-team-block {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .focus-teaser-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .programs-teaser-grid {
            grid-template-columns: 1fr;
            max-width: 500px;
            margin-left: auto;
            margin-right: auto;
          }
        }
        @media (max-width: 576px) {
          .focus-teaser-grid {
            grid-template-columns: 1fr;
          }
          .home-section-card {
            padding: 60px 0;
          }
          .teaser-text-col h2, .teaser-team-info h2 {
            font-size: 28px;
          }
        }
      `}</style>
    </>
  );
}
