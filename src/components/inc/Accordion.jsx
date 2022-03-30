import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Articles } from '../../articles';


function arrowRight(color) {
    
    return (
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        enable-background="new 0 0 24 24" 
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

function AccordionItem({ article, active, onToggle }) {
    const { primary_color, secondary_color, title, date, abstract } = article;
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
            <div className='dot' style={{"background-color":secondary_color}}></div>
            <h3>{title}</h3> 
            <div className='fs-small' style={{"min-width":"5rem", "margin":"0rem 1rem 0 1rem"}}>{date}</div>
            <i class={`arrow ${active ? "up" : "down"}`}></i>
        </button>
        <div
          ref={contentEl}
          className={"content"}
          style={{ height: height, "border-color":secondary_color}}
        //   style={active ? { height: contentEl.current.scrollHeight, 
        //   "background-color": primary_color,
        //   "border-color":secondary_color
        //   } : { height: "0px" }}
          > 
            <div>{abstract}</div>
            <Link className="arrow-link" to='/about'>{arrowRight(secondary_color)}</Link>
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
  
