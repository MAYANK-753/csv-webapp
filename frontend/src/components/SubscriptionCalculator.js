// frontend/src/components/SubscriptionCalculator.js
import React from 'react';

const SubscriptionCalculator = ({ data, basePrice, pricePerCreditLine, pricePerCreditScorePoint }) => {
    const calculatePrice = (creditScore, creditLines) => {
        return basePrice + (pricePerCreditLine * creditLines) + (pricePerCreditScorePoint * creditScore);
    };

    return (
        <div>
            <h2>Subscription Pricing Calculator</h2>
            <table>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Subscription Price</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>{row.Email}</td>
                            <td>{row.Name}</td>
                            <td>{calculatePrice(row.CreditScore, row.CreditLines).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SubscriptionCalculator;
