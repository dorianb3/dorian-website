
import { Link } from 'react-router-dom';

import { Articles } from '../../data';
import { titleToPath } from './Utils';

function ArticleCard({ article }) {
  return (
    <div className='card'>
        <div className='topic'>{article["topic"]}</div>  
        <div className='link_container'>
            <Link to={titleToPath(article["title"])}>
                <h3>{article["title"]}</h3> 
            </Link>
        </div>
        <div className='date'>{article["date"]}</div>
    </div>
  );
};

export function ArticlesCards() {
    return (
        <div className='cards'>
        {Articles.map((article, index) => {
            return <ArticleCard key={index} article={article}/>})}
        </div>
        )}

// ****************************************************************************

export function ProjectsCards() {
    return (
        <div className='projects-cards'>
            <div className='card'>
                <div className='link_container'>
                    <Link to="#here"><h3>QIS Factory</h3></Link>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet magni atque nam culpa veniam aliquid impedit dolore recusandae, explicabo consectetur laborum exercitationem esse beatae eaque blanditiis. Est, nesciunt aut.</p>
            </div>
            <div className='card'>
                <div className='link_container'>
                    <Link to="#here"><h3>DerivatiX</h3></Link>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet magni atque nam culpa veniam aliquid impedit dolore recusandae, explicabo consectetur laborum exercitationem esse beatae eaque blanditiis. Est, nesciunt aut.</p>
            </div>
            <div className='card'>
                <div className='link_container'>
                    <Link to="#here"><h3>Finance3</h3></Link>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet magni atque nam culpa veniam aliquid impedit dolore recusandae, explicabo consectetur laborum exercitationem esse beatae eaque blanditiis. Est, nesciunt aut.</p>
            </div>
        </div>
    )
}