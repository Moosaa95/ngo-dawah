'use client';

import { useState } from 'react';

interface Office {
  region: string;
  name: string;
  address: string;
  icon: string;
}

export default function Offices() {
  const [activeZone, setActiveZone] = useState<string>('all');

  const offices: Office[] = [
    {
      region: 'HQ',
      name: 'National Headquarters',
      address: '208, Queen Aminat Street, 2/2 Kubwa, Abuja, Nigeria.',
      icon: '🏢',
    },
    {
      region: 'HQ',
      name: 'Liaison Office',
      address: 'Plot 2, Suite D3, NYMEX plaza, Gado Nasko Road, Kubwa, Abuja, Nigeria.',
      icon: '🏢',
    },
    {
      region: 'south-west',
      name: 'South-West Zonal Office',
      address: 'Plot 1 Olayiwola Crescent, Opp. Govt. House, Oke-Fia, Osogbo, Osun State, Nigeria.',
      icon: '📍',
    },
    {
      region: 'south-south',
      name: 'South-South Zonal Office',
      address: 'Plot 2, Road 1, Okporo Street, Mgbuchi, Rupokwu, Port Harcourt, Rivers State, Nigeria.',
      icon: '📍',
    },
    {
      region: 'south-east',
      name: 'South-East Zonal Office',
      address: 'Ukwuoji Perm.site, Govt house, Awka, Anambra State, Nigeria.',
      icon: '📍',
    },
    {
      region: 'north-west',
      name: 'North-West Zonal Office',
      address: 'C16 Gidan Yaya, Yahaya Gusau Road, Sharada Phase II, Kano State, Nigeria.',
      icon: '📍',
    },
    {
      region: 'north-east',
      name: 'North-East Zonal Office',
      address: '14, Bullunkutu Abuja Maiduguri, Borno State, Nigeria.',
      icon: '📍',
    },
    {
      region: 'north-central',
      name: 'North-Central Office A',
      address: '6, Lajorin Off Offa Road, Ebun Oluwa Complex, GRA, Ilorin, Kwara State, Nigeria.',
      icon: '📍',
    },
    {
      region: 'north-central',
      name: 'North-Central Office B',
      address: '5, Temidire Street, Close to Kwara Stadium, Ilorin, Kwara State, Nigeria.',
      icon: '📍',
    },
  ];

  const zones = [
    { id: 'all', label: 'All Locations' },
    { id: 'HQ', label: 'Headquarters' },
    { id: 'south-west', label: 'South-West' },
    { id: 'south-south', label: 'South-South' },
    { id: 'south-east', label: 'South-East' },
    { id: 'north-west', label: 'North-West' },
    { id: 'north-east', label: 'North-East' },
    { id: 'north-central', label: 'North-Central' },
  ];

  const filteredOffices = activeZone === 'all' 
    ? offices 
    : offices.filter(o => o.region === activeZone);

  return (
    <section id="offices" className="offices-section islamic-pattern">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-subtitle">CIF Presence</span>
          <h2 className="section-title">Zonal Offices & Coverage</h2>
        </div>

        {/* Zone Selector Buttons */}
        <div className="zone-selector">
          {zones.map(z => (
            <button
              key={z.id}
              onClick={() => setActiveZone(z.id)}
              className={`zone-tab-btn ${activeZone === z.id ? 'active' : ''}`}
            >
              {z.label}
            </button>
          ))}
        </div>

        {/* Offices Cards Grid */}
        <div className="offices-grid">
          {filteredOffices.map((office, idx) => (
            <div 
              key={idx} 
              className={`office-card glass-card ${office.region === 'HQ' ? 'hq-card' : ''}`}
            >
              <div className="office-card-header">
                <span className="office-icon">{office.icon}</span>
                <span className="office-region-tag">{office.region.toUpperCase()}</span>
              </div>
              <h3 className="office-name">{office.name}</h3>
              <p className="office-address">{office.address}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .offices-section {
          background-color: #FFFFFF;
          padding-top: 100px;
          padding-bottom: 100px;
          position: relative;
        }
        .zone-selector {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-bottom: 48px;
          flex-wrap: wrap;
          background: rgba(15, 30, 54, 0.03);
          padding: 6px;
          border-radius: 50px;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }
        .zone-tab-btn {
          padding: 10px 20px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 600;
          color: var(--text-secondary);
          transition: var(--transition-normal);
        }
        .zone-tab-btn:hover {
          color: var(--primary-navy);
        }
        .zone-tab-btn.active {
          background: #FFFFFF;
          color: var(--secondary-green);
          box-shadow: var(--shadow-sm);
        }

        /* Office cards grid */
        .offices-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .office-card {
          padding: 32px;
          background: #FFFFFF;
          border: 1px solid rgba(63, 181, 63, 0.12);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: var(--transition-normal);
        }
        .hq-card {
          border-color: var(--accent-gold);
          background: linear-gradient(135deg, #FFFFFF 0%, rgba(226, 177, 60, 0.02) 100%);
        }
        .office-card-header {
          display: flex;
          justify-content: space-between;
          width: 100%;
          align-items: center;
          margin-bottom: 18px;
        }
        .office-icon {
          font-size: 28px;
        }
        .office-region-tag {
          font-size: 10px;
          font-weight: 700;
          background: rgba(15, 30, 54, 0.04);
          color: var(--primary-navy);
          padding: 4px 10px;
          border-radius: 30px;
          letter-spacing: 0.5px;
        }
        .hq-card .office-region-tag {
          background: rgba(226, 177, 60, 0.12);
          color: #B2821E;
        }
        .office-name {
          font-size: 18px;
          color: var(--primary-navy);
          margin-bottom: 10px;
          font-weight: 700;
        }
        .office-address {
          font-size: 14.5px;
          line-height: 1.55;
          color: var(--text-secondary);
        }

        @media (max-width: 991px) {
          .offices-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 576px) {
          .offices-grid {
            grid-template-columns: 1fr;
          }
          .zone-selector {
            border-radius: 16px;
            padding: 8px;
          }
          .zone-tab-btn {
            border-radius: 8px;
            flex: 1 1 40%;
          }
        }
      `}</style>
    </section>
  );
}
