
import React, { useState } from 'react';
import { useSettlement } from './SettlementContext';

const PartyA = () => {
  const { amount, setAmount, response, setResponse } = useSettlement();
  const [newAmount, setNewAmount] = useState<number>(amount);

  const handleSubmit = () => {
    if (response === 'Pending') {
      setAmount(newAmount);
    } else {
      alert('Party B has responded. Please fetch the latest status before submitting.');
    }
  };

  const handleFetchStatus = () => {
    // Simulate fetching the latest status
    setResponse('Pending');
  };

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Party A</h2>
      <div>
        <label className="block mb-2">Settlement Amount:</label>
        <input
          type="number"
          value={newAmount}
          onChange={(e) => setNewAmount(Number(e.target.value))}
          className="border p-2 mb-4"
        />
      </div>
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
      <button onClick={handleFetchStatus} className="bg-gray-500 text-white px-4 py-2 rounded ml-4">
        Fetch Latest Status
      </button>
      <div className="mt-4">
        <strong>Party B Response: </strong> {response}
      </div>
    </div>
  );
};

export default PartyA;
                