'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Member {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  category: 'bot' | 'management' | 'health' | 'volunteers';
}

export default function Team() {
  const [activeFilter, setActiveFilter] = useState<'bot' | 'management' | 'health' | 'volunteers'>('bot');
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const members: Member[] = [
    // Board of Trustees
    {
      id: 'badewa',
      name: 'Imam Shakirullah Badewa',
      role: 'Board of Trustees Chairman',
      bio: 'Badewa Shakirullah Adesegun hails from Ago-Iwoye, Ijebu North of Ogun State. Imam Badewa is a graduate of the University of Ibadan and moved to Abuja in 1998, where he accumulated years of private-sector experience as a security consultant. He is a prominent community leader and the Muslim community leader in Kubwa, Abuja. He has been active in HIV sensitization training with MESH and other NGOs. Currently, he is the Chief Imam of the Islamic Da\'wah Central Mosque Abuja, utilizing the pulpit to sensitize and empower local youths, and has traveled to several states of the federation leading youth outreach programs.',
      image: '/images/team/badewa.png',
      category: 'bot',
    },
    {
      id: 'suleiman',
      name: 'Saliman Suleiman',
      role: 'Board of Trustees Secretary',
      bio: 'Saliman Suleiman (B.Sc., ANIM, ACIPM) is highly versatile in the field of Human Resources Management with over 17 years of experience. He is currently the Board of Trustees Secretary of the Crescent Impact Foundation (CIF). He is well known for smooth implementation of human resources policies for manpower planning, recruitment, selection, induction, joining and exit formalities, statutory compliance, and performance management in the public sector of the economy. He is also an Associate member of the Nigerian Institute of Management and the Chartered Institute of Personnel Management.',
      image: '/images/team/suleiman.png',
      category: 'bot',
    },
    {
      id: 'qamardeen',
      name: 'Qamar’deen Abdulfatai',
      role: 'BOT Member / Executive Director',
      bio: 'Qamar’deen holds a Bachelor Degree in English Language from the prestigious Adekunle Ajasin University Akungba Akoko, Ondo State (2009) and an M.A. in English from OAU (2014) respectively. He is a media practitioner with 15 years of cognate experience specialized in developmental journalism and content creation. He is also a Printpreneur of 17 years experience in the printing and branding industry. He has been involved in active NGO activities spanning two decades, including the African Youth Union Commission and SDG Ambassadors. He worked in Moonlight Media and PR Nig. Ltd Abuja as Deputy Editor and later as Editor-in-Chief. He also worked as a Content Creator Consultant for GG PR consulting in Lagos. He is a member of the NIPR.',
      image: '/images/team/qamardeen.png',
      category: 'bot',
    },
    {
      id: 'asamu',
      name: 'Asamu Abiola Sheriffdeen',
      role: 'BOT Member / Director of Programs',
      bio: 'Asamu Abiola Sheriffdeen is the Director, Projects and Programs of the Crescent Impact Foundation. He is a graduate of Agricultural Economics and Extension and Environmental Resource Management, and is highly adept in administrative and managerial works. Mr. Sheriffdeen is a digital and result-based administrator with natural strong analytical skills and a great understanding of operational and environmental management, having managed corporate firms across agricultural, financial, and educational exporting sectors.',
      image: '/images/team/asamu.png',
      category: 'bot',
    },
    {
      id: 'adisa',
      name: 'Mustapha K. Adisa',
      role: 'BOT Member / Director of HR & Humanitarian',
      bio: 'Mustapha K. Adisa is a Director/Head of Human resources at Crescent Impact Foundation, he is a Statistician and member of the Royal Statistical Society (RSS) UK, as well as a therapist, educationist, and researcher. With expertise in Data science , Data analytics, Bio-Statistics and Education. Mustapha plays a vital role in driving impactful community initiatives, dedicated to public service, bringing both passion and professionalism to his work.',
      image: '/images/team/adisa.png',
      category: 'bot',
    },
    {
      id: 'monsur',
      name: 'Mufutau Adewale Monsur',
      role: 'BOT Member / Director of Finance',
      bio: 'Mufutau Adewale Monsur (B.Sc., MBA, ACA, AATWA, ACIT) has rich experience in audit, tax, and financial management. He is currently the Director of Finance at Crescent Impact Foundation. Previously, he worked with international audit firms and INGOs, managing donor-funded projects for the UN, Global Fund, FCDO, EU, USAID, and GCERF. He has handled various roles including tax management, auditing, financial reporting, and budgeting. He has over 10 years of experience in the field of accounting and financial management.',
      image: '/images/team/monsur.png',
      category: 'bot',
    },
    
    // Management Team
    {
      id: 'qamardeen-ed',
      name: 'Qamar’deen Abdulfatai',
      role: 'Executive Director & Media Director',
      bio: 'Serving in dual capacities, Qamar\'deen leads the execution of CIF projects, managing donor partnerships, coordinating communications protocols, and supervising overall staff workflow. He has 15+ years of experience in content creation and NGO advocacy.',
      image: '/images/team/qamardeen.png',
      category: 'management',
    },
    {
      id: 'asamu-dir',
      name: 'Abiola Asamu',
      role: 'Director of Programs and Projects',
      bio: 'Coordinates all program designs, co-creations, and tracking across the six Geopolitical zones. He utilizes data-driven indicators to ensure that educational and relief distributions are target-oriented.',
      image: '/images/team/asamu.png',
      category: 'management',
    },
    {
      id: 'adisa-dir',
      name: 'Mustapha K. Adisa',
      role: 'Director of Human Resources & Humanitarian',
      bio: 'Mustapha K. Adisa is a Director/Head of Human resources at Crescent Impact Foundation, he is a Statistician and member of the Royal Statistical Society (RSS) UK, as well as a therapist, educationist, and researcher. With expertise in Data science , Data analytics, Bio-Statistics and Education. Mustapha plays a vital role in driving impactful community initiatives, dedicated to public service, bringing both passion and professionalism to his work.',
      image: '/images/team/adisa.png',
      category: 'management',
    },
    {
      id: 'monsur-dir',
      name: 'Adewale Mufutau',
      role: 'Director of Finance',
      bio: 'Directs the financial strategy of the foundation, ensuring full compliance with local tax regulations, budgeting audits, and managing transparent reporting for national and international donor partners.',
      image: '/images/team/monsur.png',
      category: 'management',
    },

    // Health Technical Team
    {
      id: 'jawando',
      name: 'Dr. Dolamu Jawando',
      role: 'Team Lead, Health Technical Team',
      bio: 'Dr. Dolamu Jawando is a distinguished Nigerian healthcare professional and administrator with over two decades of experience. He holds a Bachelor of Medicine, Bachelor of Surgery (MBBS) degree from the University of Lagos. As a renowned expert in healthcare management and policy development, Dr. Jawando has made significant contributions to Nigeria\'s healthcare sector. He has championed initiatives aimed at improving access to quality healthcare, particularly for vulnerable populations, shaping Nigeria\'s response to HIV/AIDS, malaria, and public health campaigns. He is a member of the Nigerian Medical Association and the MD/CEO of Firm Care Health Facilities in Abuja.',
      image: '/images/team/jawando.png',
      category: 'health',
    },
    {
      id: 'kafayat',
      name: 'Kafayat Bashir',
      role: 'Member, Health Technical Team',
      bio: 'Kafayat is a skilled Health Technician with over 5 years of experience in healthcare delivery, currently serving as a vital member of the Crescent Impact Foundation team. In her role, she provides technical support for CIF\'s health programs, ensuring effective implementation and delivery of quality healthcare services to vulnerable populations. Her expertise spans health education, community outreach, and disease prevention, with a focus on HIV/AIDS, malaria, and maternal/child health, working closely with healthcare professionals and stakeholders.',
      category: 'health',
    },
    {
      id: 'roqeebah',
      name: 'Nurse Roqeebah Basheer',
      role: 'Member, Health Technical Team',
      bio: 'Roqeebah is a skilled nurse and Health Technician with over 5 years of experience in healthcare delivery, currently serving as a vital member of the Crescent Impact Foundation health unit. She supports disease prevention campaigns, maternal-child wellness clinics, and community medical caravans, helping translate health policy into direct primary care solutions for remote regions.',
      category: 'health',
    },

    // Volunteers
    { id: 'v1', name: 'Mrs. Suleiman Salman', role: 'Active Volunteer', bio: 'Assists in project logistics, donation distribution, and community coordination in the North Central zone.', category: 'volunteers' },
    { id: 'v2', name: 'Mrs. T.A Qamarudeen', role: 'Active Volunteer', bio: 'Supports media coverage, community mobilization, and student sponsorship tracking.', category: 'volunteers' },
    { id: 'v3', name: 'Mrs. Asamu A.', role: 'Active Volunteer', bio: 'Coordinates local women empowerment seminars and vocational training sessions.', category: 'volunteers' },
    { id: 'v4', name: 'Mrs. Monsur Adewale', role: 'Active Volunteer', bio: 'Supports administrative workflows and coordinates donor communications.', category: 'volunteers' },
    { id: 'v5', name: 'Mrs. Kamil Mustapha', role: 'Active Volunteer', bio: 'Assists in clinical outreach setups and local health sanitizations.', category: 'volunteers' },
    { id: 'v6', name: 'Mr. Dele Iyanda', role: 'Active Volunteer', bio: 'Coordinates youth leadership workshops and educational support systems.', category: 'volunteers' },
    { id: 'v7', name: 'Mr. Nasiru Ganiyu', role: 'Active Volunteer', bio: 'Assists in Zonal office maintenance, inventory management, and logistic transports.', category: 'volunteers' },
    { id: 'v8', name: 'Mrs. Fatimoh Adeleke', role: 'Active Volunteer', bio: 'Leads local women entrepreneurship programs and charity distributions.', category: 'volunteers' },
    { id: 'v9', name: 'Mrs. Fadilat Olaiya', role: 'Active Volunteer', bio: 'Assists in primary school sponsorships and tutoring programs.', category: 'volunteers' },
    { id: 'v10', name: 'Mr. Atofarati Mukhtar', role: 'Active Volunteer', bio: 'Coordinates local security dialogue meetings and emergency responses.', category: 'volunteers' },
    { id: 'v11', name: 'Mr. Abdulwahab Habeeb', role: 'Active Volunteer', bio: 'Assists in database inputs, data collections, and technology support.', category: 'volunteers' },
  ];

  const filteredMembers = members.filter((m) => m.category === activeFilter);

  const closeModal = () => setSelectedMember(null);

  return (
    <section id="team" className="team-section">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-subtitle">CIF Leaders & Team</span>
          <h2 className="section-title">Our Team & Leadership</h2>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          <button 
            onClick={() => setActiveFilter('bot')} 
            className={`filter-btn ${activeFilter === 'bot' ? 'active' : ''}`}
          >
            Board of Trustees
          </button>
          <button 
            onClick={() => setActiveFilter('management')} 
            className={`filter-btn ${activeFilter === 'management' ? 'active' : ''}`}
          >
            Management Team
          </button>
          <button 
            onClick={() => setActiveFilter('health')} 
            className={`filter-btn ${activeFilter === 'health' ? 'active' : ''}`}
          >
            Health Technical Team
          </button>
          <button 
            onClick={() => setActiveFilter('volunteers')} 
            className={`filter-btn ${activeFilter === 'volunteers' ? 'active' : ''}`}
          >
            Volunteers
          </button>
        </div>

        {/* Team Grid */}
        <div className="team-grid">
          {filteredMembers.map((member) => (
            <div 
              key={member.id} 
              className="team-card glass-card"
              onClick={() => setSelectedMember(member)}
            >
              <div className="avatar-wrapper">
                {member.image ? (
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    width={180}
                    height={180}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <div className="avatar-placeholder">
                    {member.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                  </div>
                )}
              </div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <span className="read-bio-btn">Read Bio &rarr;</span>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup for Bios */}
      {selectedMember && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content glass-card animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="modal-grid">
              <div className="modal-avatar-col">
                {selectedMember.image ? (
                  <Image 
                    src={selectedMember.image} 
                    alt={selectedMember.name}
                    width={220}
                    height={220}
                    style={{ borderRadius: '20px', objectFit: 'cover', width: 'auto', height: 'auto' }}
                  />
                ) : (
                  <div className="modal-avatar-placeholder">
                    {selectedMember.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                  </div>
                )}
              </div>
              
              <div className="modal-info-col">
                <span className="modal-badge">{selectedMember.role}</span>
                <h2>{selectedMember.name}</h2>
                <div className="modal-divider"></div>
                <p className="modal-bio">{selectedMember.bio}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .team-section {
          background-color: #FAFBFD;
          padding-top: 100px;
          padding-bottom: 100px;
          position: relative;
        }
        .filter-tabs {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 50px;
          flex-wrap: wrap;
        }
        .filter-btn {
          background: #FFFFFF;
          border: 1px solid rgba(0, 0, 0, 0.05);
          color: var(--text-secondary);
          padding: 12px 24px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 14px;
          box-shadow: var(--shadow-sm);
          transition: var(--transition-normal);
        }
        .filter-btn:hover {
          color: var(--primary-navy);
          border-color: rgba(63, 181, 63, 0.2);
        }
        .filter-btn.active {
          background: var(--secondary-green);
          color: #FFFFFF;
          border-color: var(--secondary-green);
          box-shadow: 0 4px 12px rgba(63, 181, 63, 0.3);
        }

        /* Team cards grid */
        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .team-card {
          padding: 36px 20px;
          text-align: center;
          cursor: pointer;
          border: 1px solid rgba(63, 181, 63, 0.1);
          background: #FFFFFF;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .avatar-wrapper {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          overflow: hidden;
          margin-bottom: 20px;
          background: rgba(63, 181, 63, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px solid #FFFFFF;
          box-shadow: var(--shadow-sm);
          position: relative;
        }
        .avatar-img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
        .avatar-placeholder {
          font-family: 'Outfit', sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: var(--secondary-green);
        }
        .member-name {
          font-size: 17px;
          color: var(--primary-navy);
          margin-bottom: 6px;
          font-weight: 700;
        }
        .member-role {
          font-size: 13px;
          color: var(--text-secondary);
          margin-bottom: 16px;
          line-height: 1.3;
        }
        .read-bio-btn {
          font-size: 12.5px;
          font-weight: 600;
          color: var(--secondary-green);
          transition: var(--transition-fast);
        }
        .team-card:hover .read-bio-btn {
          color: #35A335;
          transform: translateX(3px);
        }

        /* Modal popup overlay styles */
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(15, 30, 54, 0.6);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 24px;
        }
        .modal-content {
          background: #FFFFFF;
          border: 1px solid rgba(63, 181, 63, 0.2);
          max-width: 720px;
          width: 100%;
          border-radius: 24px;
          padding: 40px;
          position: relative;
          box-shadow: var(--shadow-lg);
          max-height: 90vh;
          overflow-y: auto;
        }
        .close-modal-btn {
          position: absolute;
          top: 24px;
          right: 24px;
          color: var(--text-secondary);
          transition: var(--transition-fast);
          z-index: 10;
        }
        .close-modal-btn:hover {
          color: var(--secondary-green);
          transform: scale(1.1);
        }
        .modal-grid {
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 36px;
          align-items: start;
        }
        .modal-avatar-col {
          display: flex;
          justify-content: center;
        }
        .modal-avatar-img {
          border-radius: 20px;
          object-fit: cover;
          box-shadow: var(--shadow-md);
        }
        .modal-avatar-placeholder {
          width: 220px;
          height: 220px;
          background: rgba(63, 181, 63, 0.08);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Outfit', sans-serif;
          font-size: 54px;
          font-weight: 800;
          color: var(--secondary-green);
        }
        .modal-info-col h2 {
          font-size: 26px;
          color: var(--primary-navy);
          margin-bottom: 8px;
        }
        .modal-badge {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          background: rgba(63, 181, 63, 0.1);
          color: var(--secondary-green);
          padding: 4px 12px;
          border-radius: 30px;
          margin-bottom: 12px;
        }
        .modal-divider {
          height: 2px;
          background: rgba(63, 181, 63, 0.1);
          margin: 16px 0 20px 0;
          width: 50px;
        }
        .modal-bio {
          font-size: 14.5px;
          line-height: 1.65;
          color: var(--text-secondary);
        }

        @media (max-width: 991px) {
          .team-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 768px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .modal-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .modal-content {
            padding: 30px 24px;
          }
        }
        @media (max-width: 480px) {
          .team-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
