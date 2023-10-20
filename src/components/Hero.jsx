import React, { useEffect, useState, useContext } from 'react';

import CategoryContext from '../context/CategoryContext';

import MainPage from './MainPage';

import { v4 as uuidv4 } from 'uuid';

function Hero({ q }) {
  const { category, setCategory } = useContext(CategoryContext);
  const [pageNo, setPageNo] = useState(1);

  const [heroNews, setHeroNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    async function fetchNews() {
      try {
        // const res = await fetch(
        //   `https://newsapi.org/v2/everything?q=${category}&sortBy=popularity&apiKey=${
        //     import.meta.env.VITE_API_KEY
        //   }`
        // );

        let res;

        if (q != '') {
          res = await fetch(
            `https://newsapi.org/v2/everything?q=${q}&sortBy=popularity&page=${pageNo}&apiKey=${
              import.meta.env.VITE_API_KEY_2
            }`
          );
        } else {
          res = await fetch(
            `https://newsapi.org/v2/everything?q=${category}&sortBy=popularity&page=${pageNo}&apiKey=${
              import.meta.env.VITE_API_KEY_2
            }`
          );
        }

        const data = await res.json();

        setHeroNews(data.articles);

        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    }

    fetchNews();
  }, [category, pageNo, q]);

  function updatePage(opr) {
    setPageNo((prev) => prev + opr);
  }

  if (isLoading || !heroNews) {
    return (
      <div className="lg:mx-24 flex justify-center items-center mt-36">
        <div
          aria-label="Orange and tan hamster running in a metal wheel"
          role="img"
          className="wheel-and-hamster"
        >
          <div className="wheel"></div>
          <div className="hamster">
            <div className="hamster__body">
              <div className="hamster__head">
                <div className="hamster__ear"></div>
                <div className="hamster__eye"></div>
                <div className="hamster__nose"></div>
              </div>
              <div className="hamster__limb hamster__limb--fr"></div>
              <div className="hamster__limb hamster__limb--fl"></div>
              <div className="hamster__limb hamster__limb--br"></div>
              <div className="hamster__limb hamster__limb--bl"></div>
              <div className="hamster__tail"></div>
            </div>
          </div>
          <div className="spoke"></div>
        </div>
      </div>
    );
  }

  const heroSection = heroNews.slice(0, 6) || [];
  const mainSection = heroNews.slice(8) || [];

  return (
    <>
      <header className="font-main lg:mx-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {heroSection.map((article) => {
            return (
              <div
                key={uuidv4()}
                className="relative flex h-64 cursor-pointer"
                onClick={() => {
                  window.open(article.url, '_blank');
                }}
              >
                <div className="absolute bottom-6">
                  <p className="text-lg text-white px-4 font-bold">
                    {article.title
                      ? article.title
                          .split(' ')
                          .slice(0, 15)
                          .join(' ')
                          .concat(
                            article.title.split(' ').length > 15 ? ' ...' : ''
                          )
                      : ''}
                  </p>
                  <p className="flex items-center gap-4 text-white px-4 font-semibold">
                    <span>
                      {article.author
                        ? article.author
                            .split(' ')
                            .slice(0, 2)
                            .join(' ')
                            .concat(
                              article.author.split(' ').length > 20
                                ? ' ...'
                                : ''
                            )
                        : ''}
                    </span>
                    <span className="font-semibold text-white">
                      Source:{' '}
                      {article.source.name
                        ? article.source.name
                            .split(' ')
                            .slice(0, 2)
                            .join(' ')
                            .concat(
                              article.source.name.split(' ').length > 15
                                ? ' ...'
                                : ''
                            )
                        : ''}
                    </span>
                  </p>
                </div>

                <img
                  src={
                    article.urlToImage
                      ? article.urlToImage
                      : './placeholder.jpg'
                  }
                  alt={article.title}
                  className="w-full object-cover"
                  onError={(e) => {
                    e.target.src = './placeholder.jpg';
                  }}
                />

                <div className="absolute w-full h-16 bottom-0 bg-gradient-to-t from-black to-transparent"></div>
              </div>
            );
          })}
        </div>
      </header>
      <MainPage news={mainSection} q={q} />
      <div className="flex items-center justify-between mx-2 lg:mx-24 my-2 font-main px-3">
        {pageNo > 1 ? (
          <button
            className="bg-primary text-white px-4 py-2 text-xl md:text-2xl font-semibold rounded-sm"
            onClick={() => updatePage(-1)}
          >
            Previous News
          </button>
        ) : (
          <div></div>
        )}

        <button
          className="bg-primary text-white px-4 py-2 text-xl md:text-2xl font-semibold rounded-sm"
          onClick={() => updatePage(1)}
        >
          See More
        </button>
      </div>
    </>
  );
}

export default Hero;
