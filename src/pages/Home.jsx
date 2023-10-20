import React, { useEffect, useState } from 'react';

import { Route, Routes } from 'react-router-dom';

import Navbar from '../components/Navbar.jsx';
import SearchResult from '../components/SearchResult.jsx';

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/search-result" element={<SearchResult />} />
      </Routes>
      <button
        id="goToTop"
        onClick={goToTop}
        className={`bg-primary h-12 w-12 md:h-16 md:w-16 fixed bottom-16 md:bottom-12 md:right-6 right-5 flex justify-center items-center rounded-[100vmax] duration-200 active:scale-95 hover:bg-red-400 shadow ${
          isVisible ? 'visible' : 'hidden'
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="white"
          className="bi bi-arrow-up-short md:scale-125"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
          />
        </svg>
      </button>
    </>
  );
}

export default Home;
