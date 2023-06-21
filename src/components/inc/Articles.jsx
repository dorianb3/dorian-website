import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { parseArticle } from './Utils';

const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const [selectedTopic, setSelectedTopic] = useState('');

    useEffect(() => {
        fetch('https://api.dorianbonnet.com/articles')
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to fetch articles');
            }
            return response.json();
          })
          .then(data => {
            const parsedArticles = data.articles.map(article => parseArticle(article));
            const sortedArticles = parsedArticles.sort(
              (a, b) => new Date(b.metadata.date) - new Date(a.metadata.date)
            );
            setArticles(sortedArticles);
          })
          .catch(error => {
            console.error('Error fetching articles:', error);
          });
      }, []);

      const handleTopicFilter = topic => {
        setSelectedTopic(topic);
      };
      const handleResetFilter = () => {
        setSelectedTopic('');
      };

      // Get unique topics from the articles
      const uniqueTopics = [...new Set(articles.map((article) => article.metadata.topic))];

      // const filteredArticles = selectedTopic
      //   ? articles.filter(article => article.metadata.topic === selectedTopic)
      //   : articles;

        const filteredArticles = selectedTopic
        ? articles.filter(
          (article) => article.metadata.topic === selectedTopic && article.metadata.status !== 'canceled'
          )
          : articles.filter((article) => article.metadata.status !== 'canceled');

    return (
        <div className='articleSection'>
            <div className='topicList'>
                <div 
                className={selectedTopic === '' ? 'active' : ''}
                onClick={handleResetFilter}>Show All</div>
                {/* Render topic buttons */}
                {uniqueTopics.map((topic, index) => (
                  <div
                    className={selectedTopic === topic ? 'active' : ''}
                    key={index}
                    onClick={() => handleTopicFilter(topic)}
                  >
                    {'#' + topic}
                  </div>
                ))}
                
            </div>
            <div className='articleList'>
                {filteredArticles.map((article, index) => (
                <div key={index} className='card' > 
                    <Link to={`articles/${article.filename}`}>
                        <h2 className='title'>{article.metadata.title}</h2>
                        <div className='date'>{article.metadata.date}</div>
                        {/* <p>{article.metadata.author}</p> */}
                        <p className='abstract'>{article.metadata.abstract}</p>
                        <div className='topic'>{article.metadata.topic}</div>
                    </Link>
                </div>
                ))}
            </div>
        </div>
    );
  };
  
  
export default ArticleList
