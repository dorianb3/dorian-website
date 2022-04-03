import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import { Articles } from '../../data';
import { titleToPath, themeColor } from './Utils';

function AccordionItem({ article, active, onToggle }) {
  const contentEl = useRef();
  let height = "0px";
  if (active) {
      height = contentEl.current.scrollHeight
  };
  return (
    <li className={`accordion-item ${active ? "active" : ""}`}>
      <button 
      className={`accordion-header hgroup-space-between`} 
      onClick={onToggle}>
          <div className={'dot bg-' + article["topic"]}></div>
          <h3>{article["title"]}</h3> 
          <div className='fs-xs' style={{"minWidth":"5rem", "margin":"0rem 1rem 0 1rem"}}>{article["date"]}</div>
          <i className={`arrow ${active ? "up" : "down"}`}></i>
      </button>
      <div
        ref={contentEl}
        className={'content border-' + article["topic"]}
        style={{ height: height}}
        > 
          <p className='fs-s'>{article["abstract"]}</p>
          <Link className="arrow-link" to={titleToPath(article["title"])}>
            {arrowRight(themeColor(article["topic"]))}
          </Link>
      </div>
    </li>
  );
};

function Accordion() {
    const [clicked, setClicked] = useState("0");
    const handleToggle = (index) => {
        if (clicked === index) {
        return setClicked("0")
        }
        setClicked(index)
    };
    return (
        <ul className='accordion'>
        {Articles.map((article, index) => {
            return (
              <AccordionItem 
              onToggle={() => handleToggle(index)}
              active={clicked === index}
              key={index} 
              article={article}/>
              )
        })}
        </ul>
    )
    }
export default Accordion;
  



  




function arrowRight(color) {
    
  return (
      <svg 
      xmlns="http://www.w3.org/2000/svg" 
      enableBackground="new 0 0 24 24" 
      height="24px" 
      viewBox="0 0 24 24" 
      width="24px" 
      fill={color}>
      <rect 
      fill="none" 
      height="24" 
      width="24"/>
      <path d="M15,5l-1.41,1.41L18.17,11H2V13h16.17l-4.59,4.59L15,19l7-7L15,5z"/></svg>
  )

}