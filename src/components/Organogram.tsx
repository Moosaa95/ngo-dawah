'use client';

import { useState } from 'react';

interface NodeDetail {
  title: string;
  role: string;
  desc: string;
}

export default function Organogram() {
  const [selectedNode, setSelectedNode] = useState<NodeDetail | null>({
    title: 'Board of Trustees Chairman',
    role: 'Imam Shakirullah Badewa',
    desc: 'Leads the Board of Trustees, guiding the global strategy, registration compliance, Islamic governance, and ethical stewardship of Crescent Impact Foundation.',
  });

  const nodeDetails: Record<string, NodeDetail> = {
    botChairman: {
      title: 'Board of Trustees Chairman',
      role: 'Imam Shakirullah Badewa',
      desc: 'Leads the Board of Trustees, guiding the global strategy, registration compliance, Islamic governance, and ethical stewardship of Crescent Impact Foundation.',
    },
    botSecretary: {
      title: 'Board of Trustees Secretary',
      role: 'Saliman Suleiman',
      desc: 'Manages board administrative workflows, legal and CAC compliance, official documentation, statutory compliance, and governance record-keeping for the Board of Trustees.',
    },
    ed: {
      title: 'Executive Director',
      role: 'Qamar’deen Abdulfatai',
      desc: 'Oversees day-to-day operations, coordinates between directors, executes board resolutions, and leads the foundation’s national expansion.',
    },
    programs: {
      title: 'Director of Programs & Projects',
      role: 'Abiola Asamu',
      desc: 'Manages field implementations, NGO co-creations, and guides project delivery across all regions.',
    },
    finance: {
      title: 'Director of Finance',
      role: 'Adewale Mufutau',
      desc: 'Responsible for budgeting, auditing, tax management, and ensuring accountability in donor-funded projects.',
    },
    media: {
      title: 'Director of Media, Communications & Protocol',
      role: 'Qamar’deen Abdulfatai (Acting)',
      desc: 'Coordinates media hubs, branding materials, press releases, and diplomatic communications.',
    },
    hr: {
      title: 'Director of HR & Humanitarian Services',
      role: 'Mustapha K. Adisa',
      desc: 'Oversees staffing, volunteer mobilization, and immediate community relief distributions.',
    },
    health: {
      title: 'Health Technical Team',
      role: 'Dr. Dolamu Jawando (Lead)',
      desc: 'Coordinates clinical programs, sanitation outreach, HIV sensitization, and partnerships with clinics.',
    },
    volunteers: {
      title: 'Volunteer Network',
      role: '100+ Nationwide Volunteers',
      desc: 'Executes ground operations, Zonal office help, distribution logistics, and community coordination.',
    },
  };

  return (
    <section id="organogram" className="organogram-section">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-subtitle">CIF Hierarchy</span>
          <h2 className="section-title">Organizational Structure</h2>
        </div>

        <p className="organogram-help">
          Click on any node in the tree below to view its specific operational mandate.
        </p>

        <div className="organogram-layout">
          {/* Visual Interactive Tree */}
          <div className="tree-container">
            <div className="tree">
              {/* Root Level: BOT Chairman */}
              <div className="tree-level level-1">
                <button
                  onClick={() => setSelectedNode(nodeDetails.botChairman)}
                  className={`tree-node node-bot ${selectedNode?.title === nodeDetails.botChairman.title ? 'active' : ''}`}
                >
                  <div className="node-badge">Governance</div>
                  <h3>BOT Chairman</h3>
                  <span>Imam Shakirullah Badewa</span>
                </button>
              </div>

              <div className="tree-connector-vertical"></div>

              {/* BOT Secretary Level */}
              <div className="tree-level level-1-sec">
                <button
                  onClick={() => setSelectedNode(nodeDetails.botSecretary)}
                  className={`tree-node node-bot ${selectedNode?.title === nodeDetails.botSecretary.title ? 'active' : ''}`}
                >
                  <div className="node-badge">Governance</div>
                  <h3>BOT Secretary</h3>
                  <span>Saliman Suleiman</span>
                </button>
              </div>

              <div className="tree-connector-vertical"></div>

              {/* ED Level */}
              <div className="tree-level level-2">
                <button
                  onClick={() => setSelectedNode(nodeDetails.ed)}
                  className={`tree-node node-ed ${selectedNode?.title === nodeDetails.ed.title ? 'active' : ''}`}
                >
                  <div className="node-badge">Operations</div>
                  <h3>Executive Director</h3>
                  <span>Qamar’deen Abdulfatai</span>
                </button>
              </div>

              <div className="tree-connector-vertical"></div>

              {/* Directors Level */}
              <div className="directors-row">
                <div className="directors-connector-bar"></div>
                <div className="directors-nodes-grid">
                  <div className="director-branch">
                    <div className="branch-line"></div>
                    <button
                      onClick={() => setSelectedNode(nodeDetails.programs)}
                      className={`tree-node node-dir ${selectedNode?.title === nodeDetails.programs.title ? 'active' : ''}`}
                    >
                      <h3>Programs & Projects</h3>
                      <span>Abiola Asamu</span>
                    </button>
                  </div>

                  <div className="director-branch">
                    <div className="branch-line"></div>
                    <button
                      onClick={() => setSelectedNode(nodeDetails.finance)}
                      className={`tree-node node-dir ${selectedNode?.title === nodeDetails.finance.title ? 'active' : ''}`}
                    >
                      <h3>Finance</h3>
                      <span>Adewale Mufutau</span>
                    </button>
                  </div>

                  <div className="director-branch">
                    <div className="branch-line"></div>
                    <button
                      onClick={() => setSelectedNode(nodeDetails.media)}
                      className={`tree-node node-dir ${selectedNode?.title === nodeDetails.media.title ? 'active' : ''}`}
                    >
                      <h3>Media & Comms</h3>
                      <span>Qamar’deen A.</span>
                    </button>
                  </div>

                  <div className="director-branch">
                    <div className="branch-line"></div>
                    <button
                      onClick={() => setSelectedNode(nodeDetails.hr)}
                      className={`tree-node node-dir ${selectedNode?.title === nodeDetails.hr.title ? 'active' : ''}`}
                    >
                      <h3>HR & Humanitarian</h3>
                      <span>Mustapha K. Adisa</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Technical & Volunteer branches */}
              <div className="sub-branches-connector-line"></div>
              <div className="sub-branches-row">
                <div className="sub-branch-node-wrap">
                  <button
                    onClick={() => setSelectedNode(nodeDetails.health)}
                    className={`tree-node node-sub ${selectedNode?.title === nodeDetails.health.title ? 'active' : ''}`}
                  >
                    <h3>Health Technical Team</h3>
                    <span>Dr. Dolamu Jawando (Lead)</span>
                  </button>
                </div>
                <div className="sub-branch-node-wrap">
                  <button
                    onClick={() => setSelectedNode(nodeDetails.volunteers)}
                    className={`tree-node node-sub ${selectedNode?.title === nodeDetails.volunteers.title ? 'active' : ''}`}
                  >
                    <h3>Volunteer Network</h3>
                    <span>100+ Members Nationwide</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Node detail display panel */}
          <div className="node-detail-panel glass-card">
            {selectedNode ? (
              <div className="node-detail-content animate-fade-in">
                <div className="node-detail-role-badge">Mandate Description</div>
                <h2>{selectedNode.title}</h2>
                <div className="node-detail-leader">
                  <strong>Leader/Contact:</strong> {selectedNode.role}
                </div>
                <p className="node-detail-text">{selectedNode.desc}</p>
              </div>
            ) : (
              <div className="node-detail-placeholder">
                <p>Click on any operational area in the tree to read its profile.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .organogram-section {
          background-color: #FFFFFF;
          padding-top: 100px;
          padding-bottom: 100px;
          position: relative;
        }
        .organogram-help {
          text-align: center;
          color: var(--text-secondary);
          margin-bottom: 40px;
          font-size: 15px;
        }
        .organogram-layout {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 40px;
          align-items: start;
        }

        /* Tree container and nodes */
        .tree-container {
          background: #FAFBFD;
          border: 1px solid rgba(0, 0, 0, 0.03);
          border-radius: 20px;
          padding: 40px 20px;
          overflow-x: auto;
          display: flex;
          justify-content: center;
        }
        .tree {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 600px;
        }
        .tree-level {
          display: flex;
          justify-content: center;
          width: 100%;
        }
        .tree-node {
          background: #FFFFFF;
          border: 1px solid rgba(15, 30, 54, 0.08);
          border-radius: 12px;
          padding: 16px 20px;
          text-align: center;
          box-shadow: var(--shadow-sm);
          transition: var(--transition-normal);
          min-width: 200px;
          position: relative;
          z-index: 5;
        }
        .tree-node h3 {
          font-size: 14px;
          color: var(--primary-navy);
          margin-bottom: 4px;
        }
        .tree-node span {
          font-size: 11px;
          color: var(--text-secondary);
          display: block;
        }
        .node-badge {
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--primary-navy);
          color: #FFFFFF;
          font-size: 9px;
          font-weight: 700;
          text-transform: uppercase;
          padding: 2px 8px;
          border-radius: 20px;
        }
        .node-bot .node-badge {
          background: var(--accent-gold);
          color: var(--primary-navy);
        }
        .node-ed .node-badge {
          background: var(--secondary-green);
        }
        
        /* Node statuses */
        .tree-node:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
          border-color: var(--secondary-green);
        }
        .tree-node.active {
          border-color: var(--secondary-green);
          box-shadow: var(--shadow-md), 0 0 12px rgba(63, 181, 63, 0.15);
          background: rgba(63, 181, 63, 0.02);
        }

        /* Connectors */
        .tree-connector-vertical {
          width: 2px;
          height: 32px;
          background: rgba(63, 181, 63, 0.3);
        }

        /* Directors Row connects 4 node columns */
        .directors-row {
          width: 100%;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .directors-connector-bar {
          position: absolute;
          top: 0;
          height: 2px;
          background: rgba(63, 181, 63, 0.3);
          width: 75%;
        }
        .directors-nodes-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          width: 100%;
          padding-top: 24px;
        }
        .director-branch {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }
        .branch-line {
          position: absolute;
          top: -24px;
          width: 2px;
          height: 24px;
          background: rgba(63, 181, 63, 0.3);
        }

        /* Technical & Volunteers Sub Branch styles */
        .sub-branches-connector-line {
          width: 2px;
          height: 36px;
          background: rgba(63, 181, 63, 0.3);
        }
        .sub-branches-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 120px;
          position: relative;
          padding-top: 12px;
        }
        .sub-branches-row::before {
          content: '';
          position: absolute;
          top: -12px;
          left: 25%;
          right: 25%;
          height: 2px;
          background: rgba(63, 181, 63, 0.3);
        }
        .sub-branch-node-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }
        .sub-branch-node-wrap::before {
          content: '';
          position: absolute;
          top: -12px;
          width: 2px;
          height: 12px;
          background: rgba(63, 181, 63, 0.3);
        }

        /* Node Details Panel styles */
        .node-detail-panel {
          padding: 36px;
          background: #FFFFFF;
          border: 1px solid rgba(63, 181, 63, 0.15);
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .node-detail-role-badge {
          background: rgba(63, 181, 63, 0.1);
          color: var(--secondary-green);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 30px;
          align-self: flex-start;
          margin-bottom: 16px;
        }
        .node-detail-content h2 {
          font-size: 24px;
          color: var(--primary-navy);
          margin-bottom: 12px;
        }
        .node-detail-leader {
          font-size: 14px;
          color: var(--primary-navy);
          margin-bottom: 20px;
        }
        .node-detail-text {
          font-size: 15px;
          line-height: 1.6;
          color: var(--text-secondary);
        }
        .node-detail-placeholder {
          text-align: center;
          color: var(--text-secondary);
          font-style: italic;
        }

        @media (max-width: 991px) {
          .organogram-layout {
            grid-template-columns: 1fr;
          }
          .node-detail-panel {
            min-height: 220px;
          }
        }
      `}</style>
    </section>
  );
}
