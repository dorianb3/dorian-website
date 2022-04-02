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
                    <div className='hgroup'>
                        {article["keywords"].map((keyword, index) => {
                            return <span key={index} className='badge fs-s bg-finance'>{keyword}</span>
                        })}
                    </div>
                </div>

                <div className="box">
                    {Object.entries(article["content"]).map(([key, value], i) => {
                        return (
                            <div key={ key } >
                                <h2 id={ "_"+i }>{ key }</h2>
                                { value.map((p, j) => {
                                    return <div key={ j } dangerouslySetInnerHTML={ { __html: p } }/>
                                }) }
                            </div>
                        )})}
                </div>
            </div>
        </div>
    )
}

export default ArticlePage