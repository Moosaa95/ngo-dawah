'use client';

import { useState } from 'react';

interface Program {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  sdgs: number[]; // Array of SDG numbers this program supports
}

export default function Programs() {
  const [selectedProgram, setSelectedProgram] = useState<string>('health');

  const programs: Program[] = [
    {
      id: 'health',
      title: 'Public Health',
      desc: 'Enhancing public health through accessible, affordable, and preventive clinical care, free local medical checkups, community sanitation outreach, and public hygiene campaigns.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      ),
      sdgs: [3, 6],
    },
    {
      id: 'education',
      title: 'Quality Education',
      desc: 'Improving quality and accessibility of education to foster long-term growth. Restoring basic primary school classrooms, supporting student sponsorships, and teacher-resource development.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      ),
      sdgs: [4],
    },
    {
      id: 'empowerment',
      title: 'Empowerment & Job Creation',
      desc: 'Creating opportunities and training for sustainable economic growth and self-reliance. Setting up vocational programs, business grants, and smallholder farming assistance.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      ),
      sdgs: [1, 8],
    },
    {
      id: 'security',
      title: 'Community Security',
      desc: 'Initiating safety awareness, local conflict mediation, and training programs that enhance the security, physical safety, and socio-emotional well-being of local neighborhoods.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      ),
      sdgs: [16],
    },
    {
      id: 'welfare',
      title: 'Sadaqat, Zakat & Social Welfare',
      desc: 'Supporting extremely vulnerable widows, orphans, and displaced individuals through targeted financial support, monthly food baskets, clothing distributions, and social assistance.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
      sdgs: [1, 2, 10],
    },
    {
      id: 'capital',
      title: 'Capital & Human Development',
      desc: 'Fostering long-term capacity in human capital. Aligning government agencies, civil organizations, and leaders to support talent incubation, policy designs, and institution building.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 8l-4 4h8zM12 16l-4-4h8z"></path>
        </svg>
      ),
      sdgs: [8, 9, 17],
    },
    {
      id: 'leadership',
      title: 'Leadership Development',
      desc: 'Empowering future-focused leaders with ethical training, civic responsibility resources, governance workshops, and community mobilization skills to guide societal progress.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="8.5" cy="7" r="4"></circle>
          <polyline points="17 11 19 13 23 9"></polyline>
        </svg>
      ),
      sdgs: [4, 16],
    },
  ];

  // The 17 UN SDGs with names & colors
  const sdgsList = [
    { num: 1, name: 'No Poverty', color: '#E5243B' },
    { num: 2, name: 'Zero Hunger', color: '#DDA63A' },
    { num: 3, name: 'Good Health & Well-being', color: '#4C9F38' },
    { num: 4, name: 'Quality Education', color: '#C5192D' },
    { num: 5, name: 'Gender Equality', color: '#FF3A21' },
    { num: 6, name: 'Clean Water & Sanitation', color: '#26BDE2' },
    { num: 7, name: 'Affordable & Clean Energy', color: '#FCC30B' },
    { num: 8, name: 'Decent Work & Economic Growth', color: '#A21942' },
    { num: 9, name: 'Industry, Innovation & Infrastructure', color: '#FD6925' },
    { num: 10, name: 'Reduced Inequalities', color: '#DD1367' },
    { num: 11, name: 'Sustainable Cities & Communities', color: '#FD9D24' },
    { num: 12, name: 'Responsible Consumption & Production', color: '#C9932B' },
    { num: 13, name: 'Climate Action', color: '#3F7E44' },
    { num: 14, name: 'Life Below Water', color: '#0A97D9' },
    { num: 15, name: 'Life On Land', color: '#56C02B' },
    { num: 16, name: 'Peace, Justice & Strong Institutions', color: '#00689D' },
    { num: 17, name: 'Partnerships for the Goals', color: '#19486A' },
  ];

  const currentProgram = programs.find((p) => p.id === selectedProgram) || programs[0];

  return (
    <section id="programs" className="programs-section islamic-pattern">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-subtitle">CIF Key Programs</span>
          <h2 className="section-title">Programs & UN SDG Impact</h2>
        </div>

        <div className="programs-layout">
          {/* Program list */}
          <div className="programs-list">
            {programs.map((prog) => {
              const isSelected = selectedProgram === prog.id;
              return (
                <button
                  key={prog.id}
                  onClick={() => setSelectedProgram(prog.id)}
                  className={`program-row-btn ${isSelected ? 'active' : ''}`}
                >
                  <div className="prog-icon-cell">{prog.icon}</div>
                  <div className="prog-title-cell">
                    <h3>{prog.title}</h3>
                    <p className="short-desc-cell">{prog.desc.substring(0, 75)}...</p>
                  </div>
                  <div className="prog-arrow-cell">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive display board */}
          <div className="programs-display-board glass-card">
            <div className="selected-program-detail">
              <div className="detail-header">
                <div className="detail-icon-wrap">{currentProgram.icon}</div>
                <h2>{currentProgram.title}</h2>
              </div>
              <p className="detail-desc">{currentProgram.desc}</p>
            </div>

            {/* Matching UN SDGs highlight widget */}
            <div className="sdg-widget-wrapper">
              <h3>Aligned UN Sustainable Development Goals</h3>
              <p className="sdg-help-text">Below are the 17 UN SDGs. Green highlights show targets directly addressed by this program.</p>
              
              <div className="sdg-grid">
                {sdgsList.map((sdg) => {
                  const isSupported = currentProgram.sdgs.includes(sdg.num);
                  return (
                    <div
                      key={sdg.num}
                      className={`sdg-tile ${isSupported ? 'active' : 'inactive'}`}
                      style={{
                        '--sdg-color': sdg.color,
                      } as React.CSSProperties}
                    >
                      <div className="sdg-num">{sdg.num}</div>
                      <div className="sdg-title-tooltip">{sdg.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .programs-section {
          background-color: #FAFBFD;
          padding-top: 100px;
          padding-bottom: 100px;
          position: relative;
        }
        .programs-layout {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 40px;
          align-items: start;
        }
        .programs-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .program-row-btn {
          display: flex;
          align-items: center;
          background: #FFFFFF;
          border: 1px solid rgba(0, 0, 0, 0.04);
          padding: 20px 24px;
          border-radius: 14px;
          text-align: left;
          width: 100%;
          box-shadow: var(--shadow-sm);
          transition: var(--transition-normal);
        }
        .program-row-btn:hover {
          transform: translateX(6px);
          border-color: rgba(63, 181, 63, 0.25);
          box-shadow: var(--shadow-md);
        }
        .program-row-btn.active {
          border-color: var(--secondary-green);
          background: rgba(63, 181, 63, 0.03);
          box-shadow: var(--shadow-md);
        }
        .prog-icon-cell {
          width: 44px;
          height: 44px;
          background: rgba(15, 30, 54, 0.03);
          color: var(--primary-navy);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 16px;
          flex-shrink: 0;
          transition: var(--transition-normal);
        }
        .program-row-btn.active .prog-icon-cell {
          background: var(--secondary-green);
          color: #FFFFFF;
        }
        .prog-title-cell {
          flex: 1;
        }
        .prog-title-cell h3 {
          font-size: 16px;
          margin-bottom: 4px;
          color: var(--primary-navy);
        }
        .short-desc-cell {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.4;
        }
        .prog-arrow-cell {
          color: var(--text-secondary);
          opacity: 0.5;
          margin-left: 12px;
          transition: var(--transition-normal);
        }
        .program-row-btn.active .prog-arrow-cell {
          color: var(--secondary-green);
          opacity: 1;
          transform: translateX(4px);
        }

        /* Detail Board Styles */
        .programs-display-board {
          padding: 44px;
          border: 1px solid rgba(63, 181, 63, 0.15);
          background: #FFFFFF;
          display: flex;
          flex-direction: column;
          gap: 36px;
          min-height: 580px;
        }
        .selected-program-detail {
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          padding-bottom: 28px;
        }
        .detail-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }
        .detail-icon-wrap {
          width: 52px;
          height: 52px;
          background: rgba(63, 181, 63, 0.1);
          color: var(--secondary-green);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .detail-header h2 {
          font-size: 24px;
          color: var(--primary-navy);
        }
        .detail-desc {
          font-size: 15px;
          line-height: 1.65;
          color: var(--text-secondary);
        }

        /* SDG grid styles */
        .sdg-widget-wrapper h3 {
          font-size: 16px;
          color: var(--primary-navy);
          margin-bottom: 4px;
        }
        .sdg-help-text {
          font-size: 12.5px;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }
        .sdg-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 10px;
        }
        .sdg-tile {
          position: relative;
          aspect-ratio: 1;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 18px;
          cursor: help;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .sdg-tile.inactive {
          background: rgba(15, 30, 54, 0.03);
          color: rgba(15, 30, 54, 0.15);
          border: 1px dashed rgba(15, 30, 54, 0.08);
          filter: grayscale(90%) opacity(40%) blur(0.5px);
        }
        .sdg-tile.inactive:hover {
          filter: none opacity(100%);
          border-color: var(--secondary-green);
          background: #FFFFFF;
        }
        .sdg-tile.active {
          background-color: var(--sdg-color);
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.2);
          animation: activePulse 2.5s infinite ease-in-out;
        }
        @keyframes activePulse {
          0% {
            transform: scale(1.1);
            box-shadow: 0 4px 14px var(--sdg-color);
          }
          50% {
            transform: scale(1.15);
            box-shadow: 0 8px 24px var(--sdg-color);
          }
          100% {
            transform: scale(1.1);
            box-shadow: 0 4px 14px var(--sdg-color);
          }
        }
        .sdg-num {
          font-family: 'Outfit', sans-serif;
        }

        /* Tooltip */
        .sdg-title-tooltip {
          position: absolute;
          bottom: calc(100% + 8px);
          background: var(--primary-navy);
          color: #FFFFFF;
          font-size: 11px;
          padding: 6px 10px;
          border-radius: 4px;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          transform: translateY(4px);
          transition: var(--transition-fast);
          z-index: 50;
          box-shadow: var(--shadow-sm);
        }
        .sdg-title-tooltip::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-width: 5px;
          border-style: solid;
          border-color: var(--primary-navy) transparent transparent transparent;
        }
        .sdg-tile:hover .sdg-title-tooltip {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 991px) {
          .programs-layout {
            grid-template-columns: 1fr;
          }
          .programs-display-board {
            min-height: auto;
          }
        }
        @media (max-width: 576px) {
          .programs-display-board {
            padding: 24px;
          }
          .sdg-grid {
            grid-template-columns: repeat(4, 1fr);
          }
          .detail-header h2 {
            font-size: 20px;
          }
          .program-row-btn {
            padding: 16px;
          }
        }
      `}</style>
    </section>
  );
}
