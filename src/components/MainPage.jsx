import React, { useContext } from 'react';

import CategoryContext from '../context/CategoryContext';

import NewsCard from './NewsCard';

function MainPage({ news, q }) {
  const { category } = useContext(CategoryContext);

  if (news.length == 0) {
    return;
  }

  return (
    <>
      <main className="mx-2 lg:mx-24 my-2 font-main">
        <div>
          <h1 className="text-3xl text-primary font-bold underline mb-4">
            {q ? q : category} News
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-4 mx-2 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item, i) => {
            return <NewsCard news={item} key={i} />;
          })}
        </div>
      </main>
    </>
  );
}

export default MainPage;
