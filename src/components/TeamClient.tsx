'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Team from '@/components/Team';

export default function TeamClient() {
  return (
    <>
      <Navbar />
      <div className="subpage-header islamic-pattern">
        <div className="container">
          <span className="header-subtitle">CIF Officers & Helpers</span>
          <h1>Our Leadership & Team</h1>
        </div>
      </div>

      <main className="team-page-content">
        <Team />
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
        .team-page-content {
          background: #FAFBFD;
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
