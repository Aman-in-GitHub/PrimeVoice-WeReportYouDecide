import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

function SearchResult() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query') || '';

  return (
    <>
      <Navbar q={query} />
    </>
  );
}

export default SearchResult;
