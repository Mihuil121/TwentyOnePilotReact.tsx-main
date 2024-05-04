import React, { createContext, useState, useContext } from 'react';

// Создаем контекст
const NumberContext = createContext({ number: 0, setNumber: () => {} });

// Создаем провайдер контекста
export const NumberProvider = ({ children }) => {
  const [number, setNumber] = useState(0);

  return (
    <NumberContext.Provider value={{ number, setNumber }}>
      {children}
    </NumberContext.Provider>
  );
};

// Создаем хук для удобного использования контекста
export const useNumber = () => {
  const context = useContext(NumberContext);
  if (context === undefined) {
    throw new Error('useNumber must be used within a NumberProvider');
  }
  return context;
};
