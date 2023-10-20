import Home from './pages/Home';

import DarkModeContextProvider from './context/DarkModeContextProvider';

import CategoryContextProvider from './context/CategoryContextProvider';

function App() {
  return (
    <DarkModeContextProvider>
      <CategoryContextProvider>
        <Home />
      </CategoryContextProvider>
    </DarkModeContextProvider>
  );
}

export default App;
