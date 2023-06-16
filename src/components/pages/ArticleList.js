import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ArticleList = () => {
  // Your existing code for fetching and rendering the article list
  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    fetch('https://api.dorianbonnet.com/articles')
      .then(response => response.json())
      .then(data => {
          const parsedArticles = data.articles.map(article => parseArticle(article));
          const sortedArticles = parsedArticles.sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date));
          setArticles(sortedArticles);
      });
  }, []);

  const parseArticle = article => {
    const { filename, content } = article;
    const regex = /---\n([\s\S]+?)\n---/;
    const metadataString = content.match(regex)[1].trim();
    const metadata = {};
    metadataString.split('\n').forEach(line => {
      const [key, value] = line.split(':').map(str => str.trim());
      metadata[key] = value;
    });
    console.log(articles);
    return { filename, content, metadata };
  };
  
  return (
    <div className='cards'>
      {articles.map((article, index) => (
        <div key={article.id}>
            <Link className='card' to={`/articles/${article.id}`}>
                <h2 className='title'>{article.metadata.title}</h2>
                <p className='date'>{article.metadata.date}</p>
                <p className='abstract'>{article.metadata.abstract}</p>
                <p className='topic'>{article.metadata.keywords}</p>
            </Link>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
