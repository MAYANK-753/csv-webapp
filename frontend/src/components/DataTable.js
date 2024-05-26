// frontend/src/components/DataTable.js
import React, { useState } from 'react';

const DataTable = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 20;

    const handleChangePage = (newPage) => {
        setCurrentPage(newPage);
    };

    const startIndex = (currentPage - 1) * rowsPerPage;
    const paginatedData = data.slice(startIndex, startIndex + rowsPerPage);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Name</th>
                        <th>CreditScore</th>
                        <th>CreditLines</th>
                        <th>MaskedPhoneNumber</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedData.map((row, index) => (
                        <tr key={index}>
                            <td>{row.Email}</td>
                            <td>{row.Name}</td>
                            <td>{row.CreditScore}</td>
                            <td>{row.CreditLines}</td>
                            <td>{row.MaskedPhoneNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <button onClick={() => handleChangePage(currentPage - 1)} disabled={currentPage === 1}>
                    Previous
                </button>
                <button onClick={() => handleChangePage(currentPage + 1)} disabled={currentPage === Math.ceil(data.length / rowsPerPage)}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default DataTable;
