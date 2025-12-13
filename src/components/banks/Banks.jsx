import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/common.scss';
// import './Banks.scss';

const Banks = () => {
  const canManage = true;        // replace with permission logic
  const isSystemAdmin = true;    // replace with auth logic

  const [activeDropdown, setActiveDropdown] = useState(null);

  // Mock data (matches Rails fields)
  const banks = [
    {
      id: 1,
      bank_name: 'First National Bank',
      primary_contact_name: 'John Carter',
      email: 'john@fnb.com',
      phone_number: '+1 555 234 8899',
      is_active: true
    },
    {
      id: 2,
      bank_name: 'City Bank',
      primary_contact_name: 'Sarah Lee',
      email: 'sarah@citybank.com',
      phone_number: '+1 555 987 1234',
      is_active: false
    }
  ];

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  if (banks.length === 0) {
    return (
      <div className="projects-container">
        <div className="card">
          <div className="card-body no-data-card">
            <div className="text-center">Not found the Lenders.</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="projects-container">
      <div className="card mb-0">
        <div className="card-body pt-1">
          <div className="table-responsive">
            <table className={`table table-hover bank-listing-data-table ${canManage ? 'with-actions' : 'without-actions'}`}>
              <thead>
                <tr>
                  <th className="sortable">Lender</th>
                  <th className="sortable">Contact Person</th>
                  <th className="sortable">Email</th>
                  <th>Phone</th>
                  {canManage && <th className="actions"></th>}
                </tr>
              </thead>

              <tbody>
                {banks.map((bank) => (
                  <tr key={bank.id}>
                    <td className="bank-name">
                      <Link to={`/banks/${bank.id}`} className="text-link">
                        {bank.bank_name}
                      </Link>
                    </td>

                    <td className="contact-name">
                      {bank.primary_contact_name || '-'}
                    </td>

                    <td className="email-id">
                      {bank.email}
                    </td>

                    <td className="phone-number">
                      {bank.phone_number}
                    </td>

                    {canManage && (
                      <td className="actions">
                        <div className={`dropdown ${activeDropdown === bank.id ? 'show' : ''}`}>
                          <button
                            className="btn-icon"
                            onClick={() => toggleDropdown(bank.id)}
                          >
                            <i className="mdi mdi-dots-vertical"></i>
                          </button>

                          <div
                            className={`dropdown-menu ${activeDropdown === bank.id ? 'show' : ''}`}
                            style={{ right: 0, left: 'auto' }}
                          >
                            <Link to={`/banks/${bank.id}/edit`} className="dropdown-item">
                              <i className="mdi mdi-pencil mr-2"></i>
                              Update
                            </Link>

                            {isSystemAdmin && (
                              <>
                                {bank.is_active ? (
                                  <button className="dropdown-item">
                                    <i className="mdi mdi-pause mr-2"></i>
                                    Deactivate
                                  </button>
                                ) : (
                                  <button className="dropdown-item">
                                    <i className="mdi mdi-play mr-2"></i>
                                    Activate
                                  </button>
                                )}

                                <button className="dropdown-item">
                                  <i className="mdi mdi-delete mr-2"></i>
                                  Delete
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination placeholder */}
        <div className="pagination-container">
          <div className="pagination-info">
            Showing {banks.length} entries
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banks;
