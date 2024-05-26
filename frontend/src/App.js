// frontend/src/App.js
import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import DataTable from './components/DataTable';
import SubscriptionCalculator from './components/SubscriptionCalculator';

const App = () => {
    const [data, setData] = useState([]);
    const basePrice = 100; // Example base price
    const pricePerCreditLine = 20; // Example price per credit line
    const pricePerCreditScorePoint = 0.1; // Example price per credit score point

    return (
        <div className="App">
            <h1>CSV Upload and Subscription Pricing Calculator</h1>
            <FileUpload setData={setData} />
            {data.length > 0 && (
                <>
                    <DataTable data={data} />
                    <SubscriptionCalculator
                        data={data}
                        basePrice={basePrice}
                        pricePerCreditLine={pricePerCreditLine}
                        pricePerCreditScorePoint={pricePerCreditScorePoint}
                    />
                </>
            )}
        </div>
    );
};

export default App;
