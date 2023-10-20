import React, { useState, useContext, useEffect, useRef } from 'react';

import { useNavigate } from 'react-router-dom';

import CategoryContext from '../context/CategoryContext';

import { v4 as uuidv4 } from 'uuid';

import DarkModeContext from '../context/DarkModeContext';

import Hero from './Hero';

function Navbar({ q = '' }) {
  const { category, setCategory } = useContext(CategoryContext);
  const { mode, setMode } = useContext(DarkModeContext);
  const query = useRef('');
  const navigate = useNavigate();

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(mode);
  }, [mode]);

  function toggleMode() {
    if (mode == 'dark') {
      setMode('light');
    } else {
      setMode('dark');
    }
  }

  const categories = [
    'Trending',
    'Sports',
    'Weather',
    'Politics',
    'Science',
    'Lifestyle'
  ];

  return (
    <>
      <nav className="bg-[f4f4f4] select-none font-sub">
        <div className="flex items-center justify-between mx-3 lg:mx-24 py-1">
          <div>
            <a href="" className="flex items-center gap-1 md:gap-4">
              <div className="w-[60px] md:w-20">
                <img
                  src="./logo.svg"
                  alt="Prime Voice Logo"
                  className="w-[60px] md:w-20"
                />
              </div>

              <span className="md:text-7xl text-[25px] font-black text-primary font-sub">
                P V
              </span>
            </a>
          </div>
          <div className="flex items-center gap-3 md:gap-8">
            <form
              className="relative rounded-sm w-48 md:w-60 bg-red-50 dark:bg-[#434343] dark:text-white font-main"
              onSubmit={(e) => {
                e.preventDefault();
                navigate(`/search-result?query=${query.current}`);
              }}
            >
              <input
                type="text"
                className="bg-transparent md:text-lg px-3 w-[170px] md:w-[218px] md:w-50 outline-none py-1 selection:bg-primary selection:text-white caret-primary dark:placeholder:text-[#f4f4f4]"
                placeholder="Search News"
                defaultValue={q}
                onChange={(e) => (query.current = e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-[8px] top-[50%] translate-y-[-50%] cursor-pointer active:scale-95 duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#ff4848"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
            </form>
            <button
              className="duration-200 active:scale-95"
              onClick={toggleMode}
            >
              <img
                className="md:scale-125 lg:scale-150"
                src={`./${mode == 'dark' ? 'sun.svg' : 'moon.svg'}`}
                alt="Dark Mode Toggle"
              />
            </button>
          </div>
        </div>
        {!q ? (
          <div className="bg-primary text-white font-semibold grid grid-cols-3 justify-between items-center lg:grid-cols-6 lg:mx-24">
            {categories.map((item) => {
              return (
                <span
                  className="text-center text-xl py-2 md:py-8 md:text-3xl cursor-pointer hover:bg-red-600 duration-100"
                  style={{
                    backgroundColor: category == item ? 'rgb(220 38 38)' : null
                  }}
                  key={uuidv4()}
                  onClick={() => {
                    setCategory(item);
                  }}
                >
                  {item}
                </span>
              );
            })}
          </div>
        ) : null}
      </nav>
      <Hero q={q} />
    </>
  );
}

export default Navbar;
