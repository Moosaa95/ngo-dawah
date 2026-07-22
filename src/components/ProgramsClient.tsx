'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

interface Program {
  id: string;
  title: string;
  desc: string;
  icon: string;
  sdgs: number[];
}

export default function ProgramsClient() {
  const [selectedProgram, setSelectedProgram] = useState<string>('health');

  const programs: Program[] = [
    {
      id: 'health',
      title: 'Public Health Care',
      desc: 'Enhancing public health through accessible, affordable, preventive care, community outreach, and public hygiene awareness.',
      icon: '🏥',
      sdgs: [3, 6],
    },
    {
      id: 'education',
      title: 'Quality Education',
      desc: 'Improving quality and accessibility of education to foster long-term growth through school rehabilitations and student support resources.',
      icon: '📚',
      sdgs: [4],
    },
    {
      id: 'empowerment',
      title: 'Youth & Women Empowerment',
      desc: 'Fostering financial independence and vocational self-reliance among women and young people through mentorship, grants, and specialized skill workshops.',
      icon: '👩‍💻',
      sdgs: [5, 8, 10],
    },
    {
      id: 'job-creation',
      title: 'Job Creation',
      desc: 'Supporting aspiring entrepreneurs through hands-on training, business mentorship, and access to funding resources to start and scale local businesses.',
      icon: '💼',
      sdgs: [1, 8, 9],
    },
    {
      id: 'welfare',
      title: 'Sadaqqat, Zakat & Welfare',
      desc: 'Collecting voluntary donations (Sadaqah) from individuals and organizations to support humanitarian projects and emergency relief efforts.',
      icon: '🤲',
      sdgs: [1, 2, 10],
    },
    {
      id: 'fidya',
      title: 'Ramadan Fidya Program',
      desc: 'Feed the poor program is an annual event of CIF to show love to the vulnerable and food-insecure individuals in our societies.',
      icon: '🌙',
      sdgs: [2],
    },
    {
      id: 'qurbani',
      title: 'Eid-li-Adha Qurbani',
      desc: 'An annual program of putting smiles on the less privileged who cannot afford to purchase ram. Here, cows are slaughtered in tens to share meat packages.',
      icon: '🐑',
      sdgs: [2],
    },
    {
      id: 'capital-dev',
      title: 'Capital & Human Development',
      desc: 'Providing the resources, leadership skills, and economic opportunities necessary for sustainable economic growth and personal development.',
      icon: '📈',
      sdgs: [8, 17],
    },
    {
      id: 'agriculture',
      title: 'Ecosystem & Functional Agriculture',
      desc: 'Protecting fresh eco-systems by planting trees, castor plants, and establishing organic community plots to restore and safeguard the natural environment.',
      icon: '🌱',
      sdgs: [13, 15],
    },
    {
      id: 'plwd',
      title: 'People Living With Disabilities (PLWD)',
      desc: 'A foundation initiative poised to associate, uplift, and make positive inclusion impacts with people living with disabilities in our local communities.',
      icon: '♿',
      sdgs: [10],
    },
    {
      id: 'drug-abuse',
      title: 'Campaign Against Drug Abuse',
      desc: 'CIF is actively joining its voice with public campaigns against the abuse of substances and drugs in our neighborhoods and schools.',
      icon: '🚫',
      sdgs: [3],
    },
    {
      id: 'it-training',
      title: 'Information Technology (IT)',
      desc: 'Enrolling students from secondary schools and tertiary institutions to gain essential digital literacy and knowledge in information technology.',
      icon: '💻',
      sdgs: [4, 9],
    },
    {
      id: 'leadership',
      title: 'Leadership Development',
      desc: 'Equipping individuals with the skills, ethical grounding, and governance knowledge necessary to lead effectively and inspire positive change in their communities.',
      icon: '👑',
      sdgs: [4, 16],
    },
    {
      id: 'security',
      title: 'Community Security',
      desc: 'Initiating safety awareness, local conflict mediation, and training programs that enhance the security, safety, and well-being of the communities.',
      icon: '🔒',
      sdgs: [16],
    },
  ];

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

  const programImages: Record<string, string> = {
    health: '/images/health_outreach.png',
    education: '/images/education_support.png',
    agriculture: '/images/sustainable_agriculture.png',
  };

  return (
    <>
      <Navbar />
      <div className="subpage-header islamic-pattern">
        <div className="container">
          <span className="header-subtitle">CIF Key Initiatives</span>
          <h1>Our Programs & UN SDGs Alignment</h1>
        </div>
      </div>

      <main className="programs-page-content">
        <div className="container programs-layout">
          {/* List of 14 programs */}
          <div className="programs-list">
            {programs.map((prog) => {
              const isSelected = selectedProgram === prog.id;
              return (
                <button
                  key={prog.id}
                  onClick={() => setSelectedProgram(prog.id)}
                  className={`program-row-btn ${isSelected ? 'active' : ''}`}
                >
                  <span className="prog-icon-symbol">{prog.icon}</span>
                  <div className="prog-title-cell">
                    <h3>{prog.title}</h3>
                    <p className="short-desc-cell">{prog.desc.substring(0, 65)}...</p>
                  </div>
                  <span className="prog-arrow-cell">&rarr;</span>
                </button>
              );
            })}
          </div>

          {/* Interactive display board */}
          <div className="programs-display-board glass-card">
            {programImages[currentProgram.id] && (
              <div className="program-display-image">
                <Image 
                  src={programImages[currentProgram.id]} 
                  alt={currentProgram.title} 
                  width={600} 
                  height={250} 
                  style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: '12px', marginBottom: '20px' }}
                />
              </div>
            )}
            
            <div className="selected-program-detail">
              <div className="detail-header">
                <span className="detail-icon-circle">{currentProgram.icon}</span>
                <h2>{currentProgram.title}</h2>
              </div>
              <p className="detail-desc">{currentProgram.desc}</p>
            </div>

            {/* UN SDGs Grid */}
            <div className="sdg-widget-wrapper">
              <h3>Aligned UN Sustainable Development Goals</h3>
              <p className="sdg-help-text">Direct targets highlighted dynamically in color based on active program impact.</p>
              
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
        .programs-page-content {
          background: #FAFBFD;
          padding: 80px 0;
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
          max-height: 750px;
          overflow-y: auto;
          padding-right: 12px;
        }
        
        /* Custom Scrollbar for list */
        .programs-list::-webkit-scrollbar {
          width: 6px;
        }
        .programs-list::-webkit-scrollbar-track {
          background: #F1F1F1;
          border-radius: 4px;
        }
        .programs-list::-webkit-scrollbar-thumb {
          background: #CCC;
          border-radius: 4px;
        }

        .program-row-btn {
          display: flex;
          align-items: center;
          background: #FFFFFF;
          border: 1px solid rgba(0, 0, 0, 0.04);
          padding: 16px 20px;
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
        .prog-icon-symbol {
          font-size: 28px;
          margin-right: 16px;
          flex-shrink: 0;
        }
        .prog-title-cell {
          flex: 1;
        }
        .prog-title-cell h3 {
          font-size: 15px;
          margin-bottom: 4px;
          color: var(--primary-navy);
        }
        .short-desc-cell {
          font-size: 12.5px;
          color: var(--text-secondary);
          line-height: 1.4;
        }
        .prog-arrow-cell {
          color: var(--text-secondary);
          opacity: 0.5;
          margin-left: 12px;
          transition: var(--transition-normal);
          font-size: 20px;
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
          gap: 28px;
          min-height: 600px;
        }
        .program-display-image {
          box-shadow: var(--shadow-sm);
          border: 1px solid rgba(63, 181, 63, 0.1);
          border-radius: 12px;
          overflow: hidden;
        }
        .selected-program-detail {
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          padding-bottom: 24px;
        }
        .detail-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }
        .detail-icon-circle {
          font-size: 40px;
        }
        .detail-header h2 {
          font-size: 26px;
          color: var(--primary-navy);
        }
        .detail-desc {
          font-size: 16px;
          line-height: 1.7;
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
          .subpage-header h1 {
            font-size: 36px;
          }
        }
      `}</style>
    </>
  );
}
