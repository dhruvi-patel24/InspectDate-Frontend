import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/common.scss';
// import './ProjectTransfers.scss'; // optional (empty or overrides)

const ProjectTransfers = () => {
  const [activeTab, setActiveTab] = useState('incoming');
  const [incomingProjects, setIncomingProjects] = useState([]);
  const [historyProjects, setHistoryProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIds, setSelectedIds] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Mock data
  const mockIncoming = [
    {
      id: 1,
      project_id: '350000',
      name: 'Downtown Condo',
      address: { line_1: '456 Main St', line_2: 'Unit 4B, Austin, TX' },
      assigned_by: 'Alice Johnson',
      status: 'Requested',
      created_at: '25/10/2023'
    },
    {
      id: 2,
      project_id: '500000',
      name: 'Lakeside Villa',
      address: { line_1: '123 Lake View Dr', line_2: 'Austin, TX' },
      assigned_by: 'Bob Smith',
      status: 'Requested',
      created_at: '26/10/2023'
    }
  ];

  const mockHistory = [
    {
      id: 3,
      project_id: '880022',
      name: 'Riverside Apartments',
      address: { line_1: '321 River Rd', line_2: 'Portland, OR' },
      assigned_to: 'David Wilson',
      status: 'Accepted',
      created_at: '20/10/2023'
    }
  ];

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setIncomingProjects(mockIncoming);
      setHistoryProjects(mockHistory);
      setLoading(false);
    }, 600);
  }, []);

  const projects = activeTab === 'incoming' ? incomingProjects : historyProjects;

  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <div className="projects-container">
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Project Transfers</h3>

          <div className="tabs">
            <button
              className={`btn-icon ${activeTab === 'incoming' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('incoming');
                setSelectedIds([]);
              }}
            >
              Incoming
            </button>
            <button
              className={`btn-icon ${activeTab === 'history' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('history');
                setSelectedIds([]);
              }}
            >
              History
            </button>
          </div>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th className="tick-option">
                    <div className="checkbox-outer">
                      <label className="checkbox-custom">
                        <input
                          type="checkbox"
                          checked={selectedIds.length === projects.length && projects.length > 0}
                          onChange={(e) =>
                            setSelectedIds(
                              e.target.checked ? projects.map((p) => p.id) : []
                            )
                          }
                        />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </th>

                  <th>Project</th>
                  <th>{activeTab === 'incoming' ? 'Assigned By' : 'Assigned To'}</th>
                  <th>Address</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th className="actions"></th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="7" className="text-center">
                      Loading...
                    </td>
                  </tr>
                ) : projects.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center">
                      No transfer requests found.
                    </td>
                  </tr>
                ) : (
                  projects.map((project) => (
                    <tr key={project.id}>
                      <td className="tick-option">
                        <div className="checkbox-outer">
                          <label className="checkbox-custom">
                            <input
                              type="checkbox"
                              checked={selectedIds.includes(project.id)}
                              onChange={() => toggleSelect(project.id)}
                            />
                            <span className="checkmark"></span>
                          </label>
                        </div>
                      </td>

                      <td className="project-name">
                        <Link to={`/projects/${project.id}`} className="text-link">
                          {project.name}
                          <span className="sub-text">#{project.project_id}</span>
                        </Link>
                      </td>

                      <td>
                        {activeTab === 'incoming'
                          ? project.assigned_by
                          : project.assigned_to}
                      </td>

                      <td className="address">
                        {project.address.line_1}
                        <span className="sub-text">{project.address.line_2}</span>
                      </td>

                      <td>
                        <span
                          className={`badge ${
                            project.status === 'Accepted'
                              ? 'badge-info'
                              : project.status === 'Declined'
                              ? 'badge-secondary'
                              : 'badge-warning'
                          }`}
                        >
                          {project.status}
                        </span>
                      </td>

                      <td>{project.created_at}</td>

                      <td className="actions">
                        <div
                          className={`dropdown ${
                            activeDropdown === project.id ? 'show' : ''
                          }`}
                        >
                          <button
                            className="btn-icon"
                            onClick={() => toggleDropdown(project.id)}
                          >
                            <i className="mdi mdi-dots-vertical"></i>
                          </button>

                          <div
                            className={`dropdown-menu ${
                              activeDropdown === project.id ? 'show' : ''
                            }`}
                          >
                            {activeTab === 'incoming' ? (
                              <>
                                <a className="dropdown-item">
                                  <i className="mdi mdi-check mr-2"></i> Accept
                                </a>
                                <a className="dropdown-item">
                                  <i className="mdi mdi-close mr-2"></i> Decline
                                </a>
                              </>
                            ) : (
                              <a className="dropdown-item">
                                <i className="mdi mdi-backup-restore mr-2"></i> Revert
                              </a>
                            )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="pagination-container">
          <div className="pagination-info">
            Showing {projects.length} entries
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTransfers;
