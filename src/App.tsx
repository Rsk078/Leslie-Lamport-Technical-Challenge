
import React from 'react';
import { SettlementProvider } from './components/SettlementContext';
import PartyA from './components/PartyA';
import PartyB from './components/PartyB';

const App = () => {
  return (
    <SettlementProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Settlement System</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PartyA />
          <PartyB />
        </div>
      </div>
    </SettlementProvider>
  );
};

export default App;
            