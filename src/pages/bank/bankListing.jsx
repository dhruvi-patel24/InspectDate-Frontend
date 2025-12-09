import React, { useEffect, useState } from "react";
import api from '../../api';

export default function BankListing() {
  const [banks, setBanks] = useState([]);

  useEffect(() => {
    api.get("/banks")
      .then((response) => {
        setBanks(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching banks:', error);
      });
  }, []);

  return (
    <>
      <div className="row col-12">
        <h2>Bank List</h2>
        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {banks.map((bank) => (
              <tr key={bank.id}>
                <td>{bank.name}</td>
                <td>{bank.email}</td>
                <td>{bank.phone_number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
