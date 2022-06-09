import React from 'react'
import TableOfContents from '../inc/TableOfContents';


function ArticlePage(props) {
    const article = props.article;
    return (
        <main className="article">
            <TableOfContents/>
            <div>

                <header>
                    <h1>{ article["title"] }</h1>
                    <div className='date'>{ article["date"] }</div>
                    <p>{ article["abstract"] }</p>
                    <div>
                        {article["keywords"].map((keyword, index) => {
                            return <span key={index}>{keyword}, </span>
                        })}
                    </div>
                </header>

                <section>
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
        </main>
    )
}

export default ArticlePage