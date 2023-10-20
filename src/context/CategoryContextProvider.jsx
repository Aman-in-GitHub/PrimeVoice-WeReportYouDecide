import { useState } from 'react';
import CategoryContext from './CategoryContext';

const CategoryContextProvider = ({ children }) => {
  const [category, setCategory] = useState('Trending');
  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContextProvider;
