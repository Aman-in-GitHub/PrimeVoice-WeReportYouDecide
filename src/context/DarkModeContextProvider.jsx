import { useState } from 'react';
import DarkModeContext from './DarkModeContext';

const DarkModeContextProvider = ({ children }) => {
  const [mode, setMode] = useState('light');
  return (
    <DarkModeContext.Provider value={{ mode, setMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;
