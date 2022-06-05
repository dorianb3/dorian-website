import React from 'react'
import github from '../logo/github.svg';
import linkedin from '../logo/linkedin-black.svg';
import mail from '../logo/mail_black_24dp.svg';
import medium from '../logo/medium.svg';

function Footer() {
  return (
    <footer className='box'>
        <div>
          <a href="mailto: dorianbonet3@gmail.com">
            <img src={mail} className="logo" alt="mail logo"/></a>
          <a href="https://www.linkedin.com/in/dorian-bonnet" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} className="logo" alt="linkedin logo"/></a>
          <a href="https://github.com/dorianbonnet" target="_blank" rel="noopener noreferrer">
            <img src={github} className="logo" alt="github logo"/></a>
          <a href="https://github.com/dorianbonnet" target="_blank" rel="noopener noreferrer">
            <img src={medium} className="logo" alt="medium logo"/></a>
        </div>
        <div className='fs-s'>&#169; Dorian Bonnet</div>
    </footer>
  )
}

export default Footer