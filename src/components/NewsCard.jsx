import React from 'react';

function NewsCard({ news }) {
  const article = news;
  return (
    <>
      <div
        className="bg-[#f4f4f4] p-3 rounded-sm cursor-pointer font-main dark:bg-[#434343] dark:text-white hover:scale-[1.03] duration-200"
        onClick={() => {
          window.open(article.url, '_blank');
        }}
      >
        <img
          className="lg:h-52 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded-sm w-full object-cover mb-2"
          src={article.urlToImage ? article.urlToImage : './placeholder.jpg'}
          alt={article.title}
          onError={(e) => {
            e.target.src = './placeholder.jpg';
          }}
        />
        <h3 className="text-primary text-xs font-medium title-font">
          By:{' '}
          {article.author
            ? article.author
                .split(' ')
                .slice(0, 2)
                .join(' ')
                .concat(article.author.split(' ').length > 15 ? ' ...' : '')
            : ''}
          {' | '}
          Source:{' '}
          {article.source.name
            ? article.source.name
                .split(' ')
                .slice(0, 2)
                .join(' ')
                .concat(
                  article.source.name.split(' ').length > 15 ? ' ...' : ''
                )
            : ''}
        </h3>
        <h2 className="text-lg font-medium title-font dark:text-white">
          {article.title
            ? article.title
                .split(' ')
                .slice(0, 15)
                .join(' ')
                .concat(article.title.split(' ').length > 15 ? ' ...' : '')
            : ''}
        </h2>
        <p className="leading-relaxed text-base">{article.description}</p>
      </div>
    </>
  );
}

export default NewsCard;
