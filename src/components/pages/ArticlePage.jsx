import React from 'react'
import TableOfContents from '../inc/TableOfContents';


function ArticlePage(props) {
    const article = props.article;
    return (
        <div className='invisible_box'>
            <TableOfContents/>
            <div className="article">

                <header className="box">
                    <h1>{ article["title"] }</h1>
                    <div className='date'>{ article["date"] }</div>
                    <p>{ article["abstract"] }</p>
                    <div className='hgroup'>
                        {article["keywords"].map((keyword, index) => {
                            return <span key={index} className={'badge fs-s bg-' + article["topic"]}>{keyword}</span>
                        })}
                    </div>
                </header>

                <section className="box">
                    {Object.entries(article["content"]).map(([key, value], i) => {
                        return (
                            <div key={ key } >
                                <h2 id={ "_"+i }>{ key }</h2>
                                { value.map((p, j) => {
                                    return <div key={ j } dangerouslySetInnerHTML={ { __html: p } }/>
                                }) }
                            </div>
                        )})}
                </section>
            </div>
        </div>
    )
}

export default ArticlePage