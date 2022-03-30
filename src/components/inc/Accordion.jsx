import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Articles } from '../../articles';

function AccordionItem({ article, active, onToggle }) {
    const { bg_color, txt_color, title, date, abstract } = article;
    const contentEl = useRef();
    return (
      <li className={`accordion-item ${active ? "active" : ""}`}>
        <button className={`accordion_button ${active ? bg_color : ""}`} onClick={onToggle}>
            <div className={'dot ' + txt_color} ></div>
            <h3 className='title'>{title}</h3> 
            <div className='fs-small' style={{"min-width":"5rem", "margin":"1.05rem 1rem 0 1rem"}}>{date}</div>
            <i class={`arrow ${active ? "up" : "down"}`}></i>
        </button>
        <div
          ref={contentEl}
          className="abstract-wrapper"
          style={
            active
              ? { height: contentEl.current.scrollHeight }
              : { height: "0px" }
          }
        > 
          <div className="abstract fs-small">
            <div>{abstract}</div>
            <Link className={'article_link box ' + bg_color} to='/about'>see article</Link>
          </div>
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
        {Articles.map((article, index) => (
            <AccordionItem 
            onToggle={() => handleToggle(index)}
            active={clicked === index}
            key={index} article={article}/>
        ))}
        </ul>
    )
    }
export default Accordion;
  
