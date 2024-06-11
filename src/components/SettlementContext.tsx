
import React, { createContext, useState, ReactNode, useContext } from 'react';

interface SettlementContextType {
  amount: number;
  response: string;
  setAmount: (amount: number) => void;
  setResponse: (response: string) => void;
}

const SettlementContext = createContext<SettlementContextType | undefined>(undefined);

export const SettlementProvider = ({ children }: { children: ReactNode }) => {
  const [amount, setAmount] = useState<number>(0);
  const [response, setResponse] = useState<string>('Pending');

  return (
    <SettlementContext.Provider value={{ amount, response, setAmount, setResponse }}>
      {children}
    </SettlementContext.Provider>
  );
};

export const useSettlement = () => {
  const context = useContext(SettlementContext);
  if (!context) {
    throw new Error('useSettlement must be used within a SettlementProvider');
  }
  return context;
};
                