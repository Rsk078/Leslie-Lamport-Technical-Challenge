
import React, { useState } from 'react';
import { useSettlement } from './SettlementContext';

const PartyB = () => {
  const { amount, response, setResponse } = useSettlement();
  const [partyBResponse, setPartyBResponse] = useState<string>(response);

  const handleResponse = (response: string) => {
    setPartyBResponse(response);
    setResponse(response);
  };

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Party B</h2>
      <div>
        <strong>Submitted Amount by Party A: </strong> {amount}
      </div>
      <div className="mt-4">
        <button onClick={() => handleResponse('Agreed')} className="bg-green-500 text-white px-4 py-2 rounded">
          Agree
        </button>
        <button onClick={() => handleResponse('Disputed')} className="bg-red-500 text-white px-4 py-2 rounded ml-4">
          Dispute
        </button>
      </div>
      <div className="mt-4">
        <strong>Response: </strong> {partyBResponse}
      </div>
    </div>
  );
};

export default PartyB;
                