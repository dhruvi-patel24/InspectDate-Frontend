import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.scss';
import '../../styles/common.scss';
const Projects = () => {
  // Mock Data
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Lakeside Villa",
      loan_amount: "500000",
      address: { line_1: "123 Lake View Dr", line_2: "Austin, TX" },
      builder: "Dream Builders",
      state: "active",
      inspection_state: 1,
      project_type: "New Construction",
      ebudget_status_date: "12/01/2025",
      lending_pro: "John Doe",
      vendor: "ABC Inspections",
      lender: "First National Bank",
      submittal_date: "11/15/2025",
      created_at: "11/01/2025",
      share_with: "both",
      inspection_documents_count: 3,
      inspection_flow: "Standard Flow",
      builder_company: "Dream Builders Co.",
      borrower_company: "Smith Holdings"
    },
    {
      id: 2,
      name: "Downtown Condo",
      loan_amount: "350000",
      address: { line_1: "456 Main St", line_2: "Unit 4B, Austin, TX" },
      builder: "Urban Living",
      state: "pending",
      inspection_state: 0,
      project_type: "Renovation",
      ebudget_status_date: "-",
      lending_pro: "Jane Smith",
      vendor: "City Inspectors",
      lender: "City Bank",
      submittal_date: "11/20/2025",
      created_at: "11/05/2025",
      share_with: "borrower",
      inspection_documents_count: 0,
      inspection_flow: "Express Flow",
      builder_company: "Urban Living LLC",
      borrower_company: "Doe Enterprises"
    },
    {
      id: 3,
      name: "Hilltop Mansion",
      loan_amount: "1200000",
      address: { line_1: "789 Hill Top Rd", line_2: "Austin, TX" },
      builder: "Luxury Homes",
      state: "archived",
      inspection_state: 2,
      project_type: "New Construction",
      ebudget_status_date: "10/01/2025",
      lending_pro: "Mike Johnson",
      vendor: "Elite Inspections",
      lender: "Global Bank",
      submittal_date: "10/15/2025",
      created_at: "10/01/2025",
      share_with: "builder",
      inspection_documents_count: 5,
      inspection_flow: "Custom Flow",
      builder_company: "Luxury Homes Inc.",
      borrower_company: "Johnson Corp"
    }
  ]);

  const [sortConfig, setSortConfig] = useState({ key: 'created_at', direction: 'desc' });
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Sorting Logic
  const sortedProjects = React.useMemo(() => {
    let sortableItems = [...projects];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        let aValue = a[sortConfig.key];
        let bValue = b[sortConfig.key];

        // Handle nested properties (e.g., address.line_1)
        if (sortConfig.key === 'address') {
          aValue = a.address.line_1;
          bValue = b.address.line_1;
        }

        if (aValue < bValue) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [projects, sortConfig]);

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = sortedProjects.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const toggleDropdown = (id) => {
    if (activeDropdown === id) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(id);
    }
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="projects-container">
      <div className="card">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover projects-data-table">
              <thead>
                <tr>
                  <th className="tick-option">
                    <div className="checkbox-outer">
                      <label className="checkbox-custom">
                        <input type="checkbox" id="checkAll" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </th>
                  <th onClick={() => requestSort('name')} className="sortable">Project</th>
                  <th className="text-center">eBudget</th>
                  <th onClick={() => requestSort('address')} className="sortable">Address</th>
                  <th className="text-center">Status</th>
                  <th className="text-center">Inspection</th>
                  <th className="text-center">Documents</th>
                  <th onClick={() => requestSort('project_type')} className="sortable">Type</th>
                  <th className="text-center">eBudget Status</th>
                  <th className="text-center">Inspection Flow</th>
                  <th onClick={() => requestSort('lending_pro')} className="sortable">Lending Pro</th>
                  <th onClick={() => requestSort('vendor')} className="sortable">Vendor</th>
                  <th onClick={() => requestSort('builder_company')} className="sortable">Builder</th>
                  <th onClick={() => requestSort('borrower_company')} className="sortable">Borrower</th>
                  <th onClick={() => requestSort('lender')} className="sortable">Lender</th>
                  <th onClick={() => requestSort('submittal_date')} className="sortable">Submittal Date</th>
                  <th onClick={() => requestSort('created_at')} className="sortable">Date Added</th>
                  <th className="text-center">Shared</th>
                  <th className="actions"></th>
                </tr>
              </thead>

              <tbody>
                {currentProjects.map((project) => (
                  <tr key={project.id}>
                    <td className="tick-option">
                      <div className="checkbox-outer">
                        <label className="checkbox-custom">
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </td>

                    <td className="project-name">
                      <div className="status-indicator">
                        <span
                          className={`color-dot status ${project.state}`}
                          title={project.state}
                        ></span>
                        <Link to={`/projects/${project.id}`} className="text-link">
                          {project.name}
                          <span className="sub-text">#{project.loan_amount}</span>
                        </Link>
                      </div>
                    </td>

                    <td className="ebudget text-center">
                      <i className="mdi mdi-currency-usd text-muted"></i>
                    </td>

                    <td className="address">
                      {project.address.line_1}
                      <span className="sub-text">{project.address.line_2}</span>
                    </td>

                    <td className="stat text-center">
                      {project.inspection_state > 0 && (
                        <span className="badge badge-info">Single Inspection</span>
                      )}
                    </td>

                    <td className="inspection-status text-center">
                      {project.inspection_state > 0 ? (
                        <span className="badge badge-warning">Requested</span>
                      ) : (
                        <span className="badge badge-secondary">None</span>
                      )}
                    </td>

                    <td className="inspection-documents text-center">
                      {project.inspection_documents_count > 0 ? (
                        <Link
                          to={`/projects/${project.id}/documents`}
                          className="badge badge-primary"
                          style={{ textDecoration: 'none' }}
                        >
                          {project.inspection_documents_count}
                        </Link>
                      ) : (
                        <span className="badge badge-light">0</span>
                      )}
                    </td>

                    <td className="type">{project.project_type}</td>

                    <td className="ebudget-status text-center">
                      {project.ebudget_status_date}
                    </td>

                    <td className="inspection-flow text-center">
                      {project.inspection_flow}
                    </td>

                    <td className="lender">{project.lending_pro}</td>

                    <td className="company-name">{project.vendor}</td>

                    <td className="builder-name">{project.builder_company}</td>

                    <td className="borrower-name">{project.borrower_company}</td>

                    <td className="bank-name">{project.lender}</td>

                    <td className="submittal-date">{project.submittal_date}</td>

                    <td className="date-added">{project.created_at}</td>

                    <td className="shared-with text-center">
                      {project.share_with === 'both' ? (
                        <>
                          <i className="mdi mdi-account-hard-hat mr-1" title="Builder"></i>
                          <i className="mdi mdi-account" title="Borrower"></i>
                        </>
                      ) : project.share_with === 'builder' ? (
                        <i className="mdi mdi-account-hard-hat" title="Builder"></i>
                      ) : (
                        <i className="mdi mdi-account" title="Borrower"></i>
                      )}
                    </td>

                    <td className="actions">
                      <div className={`dropdown ${activeDropdown === project.id ? 'show' : ''}`}>
                        <button
                          className="btn-icon"
                          type="button"
                          onClick={() => toggleDropdown(project.id)}
                        >
                          <i className="mdi mdi-dots-vertical"></i>
                        </button>

                        <div
                          className={`dropdown-menu ${activeDropdown === project.id ? 'show' : ''}`}
                          style={{ right: 0, left: 'auto' }}
                        >
                          <Link to={`/projects/${project.id}/edit`} className="dropdown-item">
                            <i className="mdi mdi-pencil mr-2"></i> Edit
                          </Link>

                          <a href="#" className="dropdown-item">
                            <i className="mdi mdi-archive mr-2"></i> Archive
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination Controls */}
        <div className="pagination-container">
          <div className="pagination-info">
            Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, projects.length)} of {projects.length} entries
          </div>

          <nav>
            <ul className="pagination">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => paginate(currentPage - 1)}>
                  <i className="mdi mdi-chevron-left"></i>
                </button>
              </li>

              {[...Array(totalPages)].map((_, i) => (
                <li
                  key={i}
                  className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}
                >
                  <button className="page-link" onClick={() => paginate(i + 1)}>
                    {i + 1}
                  </button>
                </li>
              ))}

              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => paginate(currentPage + 1)}>
                  <i className="mdi mdi-chevron-right"></i>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Projects;
