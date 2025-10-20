import React, { useEffect, useState } from 'react';

const Invoices = () => {
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        const fetchInvoices = async () => {
            try {
                const response = await fetch('/api/invoices');
                const data = await response.json();
                setInvoices(data);
            } catch (error) {
                console.error('Error fetching invoices:', error);
            }
        };

        fetchInvoices();
    }, []);

    return (
        <div>
            <h1>Invoices</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {invoices.map(invoice => (
                        <tr key={invoice.id}>
                            <td>{invoice.id}</td>
                            <td>{new Date(invoice.date).toLocaleDateString()}</td>
                            <td>{invoice.amount}</td>
                            <td>{invoice.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Invoices;