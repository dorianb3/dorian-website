
import { Link } from 'react-router-dom';

import { Articles } from '../../data';
import { titleToPath } from './Utils';

function ArticleCard({ article }) {
  return (
    <Link className='card' to={titleToPath(article["title"])}>
        <div className='topic'>{article["topic"]}</div>  
        <div className="title">{article["title"]}</div> 
        <div className='date'>{article["date"]}</div>
    </Link>
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
// export function ProjectsCards() {
//     return (
//         <div className='cards'>
//             <div className='card' style={{"width":"30rem"}} >
//                 <div className='title'>Quantitative Investment Framework</div>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet magni atque nam culpa veniam aliquid impedit dolore recusandae, explicabo consectetur laborum exercitationem esse beatae eaque blanditiis. Est, nesciunt aut.</p>
//             </div>
//             <div className='card' style={{"width":"30rem"}}>
//                 <div className='title'>Asset Pricing</div>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet magni atque nam culpa veniam aliquid impedit dolore recusandae, explicabo consectetur laborum exercitationem esse beatae eaque blanditiis. Est, nesciunt aut.</p>
//             </div>
//         </div>
//         )}

