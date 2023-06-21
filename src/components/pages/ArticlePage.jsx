import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import { parseArticle, estimateReadingTime } from '../inc/Utils';
import { TwitterShareButton } from 'react-share';
import schedule_black_24dp from '../logo/schedule_black_24dp.svg';
import CopyIcon from '../logo/content_copy_black_24dp.svg';
import TwitterIcon from '../logo/twitter.svg';




const ArticlePage = () => {
    const { filename } = useParams();
    const [articleContent, setArticleContent] = useState('');
    const [metadata, setMetadata] = useState({});
    const [readingTime, setReadingTime] = useState(0);
    const articleUrl = window.location.href;

    const handleCopy = () => {
        navigator.clipboard.writeText(articleUrl)
        .then(() => {
            console.log('Article URL copied to clipboard');
        })
        .catch((error) => {
            console.error('Failed to copy article URL:', error);
        });
    };
    useEffect(() => {
        const fetchArticleContent = async () => {
            try {
                // Make a request to the API to fetch the article content based on the articleId
                const response = await fetch(`https://api.dorianbonnet.com/articles/${encodeURIComponent(filename)}`);
                if (response.ok) {
                    const data = await response.json();
                    // Assuming the API returns the article content in the 'content' field
                    const { content, metadata } = parseArticle(data);
                    setArticleContent(content);
                    setMetadata(metadata);
                } else {
                    console.error('Failed to fetch article content');
                }
            } catch (error) {
                console.error('Error fetching article content:', error);
            }
        };
        fetchArticleContent();
    }, [filename]);
    useEffect(() => {
        const calculateReadingTime = () => {
            const time = estimateReadingTime(articleContent);
            setReadingTime(time);
        };
        calculateReadingTime();
    }, [articleContent]);
    return (
        <main>
            <div className="article">
                <div className='container-1'> 
                    <div className='wordsBy'>Words by</div>
                    <div className='author'>{metadata.author}</div>
                </div>
                <h1>{metadata.title}</h1>
                <div className='container-2'>
                    <div className='date'>{metadata.date}</div>
                    <div className='shareButtons'>
                        <TwitterShareButton url={articleUrl} >
                            <img src={TwitterIcon} alt="Twitter Icon" />
                        </TwitterShareButton>
                        <div onClick={handleCopy} style={{ cursor: 'pointer' }}>
                            <img src={CopyIcon} alt="Copy Icon" />
                        </div>
                    </div>
                </div>
                <div className='readingTime'>{readingTime} Mins 
                    <img src={schedule_black_24dp} className="logo" alt="reading logo"/>
                </div>
                <div className="abstract">{metadata.abstract}</div>
                <div className="article-content">
                    <ReactMarkdown>{articleContent}</ReactMarkdown>
                </div>
            </div>
        </main>
        );
    };

export default ArticlePage;





// import React from 'react'
// import TableOfContents from '../inc/TableOfContents';


// function ArticlePage(props) {
//     const article = props.article;
//     return (
//         <main className="article">
//             <TableOfContents/>
//             <div>

//                 <header>
//                     <h1>{ article["title"] }</h1>
//                     <div className='date'>{ article["date"] }</div>
//                     <p>{ article["abstract"] }</p>
//                     <div>
//                         {article["keywords"].map((keyword, index) => {
//                             return <span key={index}>{keyword}, </span>
//                         })}
//                     </div>
//                 </header>

//                 <section>
//                     {Object.entries(article["content"]).map(([key, value], i) => {
//                         return (
//                             <div key={ key } >
//                                 <h2 id={ "_"+i }>{ key }</h2>
//                                 { value.map((p, j) => {
//                                     return <div key={ j } dangerouslySetInnerHTML={ { __html: p } }/>
//                                 }) }
//                             </div>
//                         )})}
//                 </section>
//             </div>
//         </main>
//     )
// }

// export default ArticlePage