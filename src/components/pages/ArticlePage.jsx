import React from 'react'
import TableOfContents from '../inc/TableOfContents';

function ArticlePage(props) {
    const article = props.article;
    
    
    

    return (
        <div className='box'>
            <TableOfContents/>
            <div className="article">
                <div className="box article-header">
                    <h1>{ article["title"] }</h1>
                    <div className='date'>{ article["date"] }</div>
                    <p className='abstract'>{ article["abstract"] }</p>
                </div>

                <div className="box">
                    { Object.entries(article["content"]).map(([key, value], i) => {
                        return (
                            <div key={ i }>
                                <h2 id={key} key={key}>{key}</h2>
                                {value.map((paragraph, i) => {
                                    return <p key={ i }>{ paragraph }</p>
                                    })}
                            </div>
                            
                            
                            )
                    }) }
                </div>
            </div>
        </div>
    
    )
}

export default ArticlePage