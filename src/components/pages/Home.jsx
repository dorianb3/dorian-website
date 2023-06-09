import React from 'react';
import { Link } from 'react-router-dom';

import profileImg from '../img/profilphoto2.jpeg';
import github from '../logo/github.svg';
import linkedin from '../logo/linkedin-black.svg';
import mail from '../logo/mail_black_24dp.svg';
import medium from '../logo/medium.svg';
import arrow_right from '../icons/arrow_right.svg';

// import Accordion from '../inc/Accordion';
import { ArticlesCards } from '../inc/Cards';

function Home() {
  return (
    <main>

      <section className="hgroup-space-between">
        <div style={{"maxWidth":"30rem"}}>
          <h1>Dorian Bonnet</h1>          
          <p style={{"marginTop":"3rem"}}>I'm a finance and tech enthousiat and my mission is to constantly learn and try to 
          share the knowledge I gain. </p> 
          <p>!!!</p>
          {/* <p style={{"marginBottom":"3rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti id iure at, modi 
          delectus officia, sed exercitationem laborum doloremque vel labore, velit cupiditate dolorem 
          dolorum itaque? Minima exercitationem voluptatibus debitis.</p> */}
        </div>

        <div className='vgroup'>
          <a href="mailto: dorianbonet3@gmail.com">
            <img src={mail} className="logo" alt="mail logo"/></a>
          <a href="https://www.linkedin.com/in/dorian-bonnet" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} className="logo" alt="linkedin logo"/></a>
          <a href="https://github.com/dorianbonnet" target="_blank" rel="noopener noreferrer">
            <img src={github} className="logo" alt="github logo"/></a>
          <a href="https://github.com/dorianbonnet" target="_blank" rel="noopener noreferrer">
            <img src={medium} className="logo" alt="medium logo"/></a>
        </div>
        <img src={ profileImg } className="img" alt="Dorian Bonnet" title="Dorian Bonnet" style={{"width": "14.25rem","height": "14rem"}}/>
      </section>

      {/* ------------------------------------------- */}

      <section>
        <div className='header'>
          <h2>Lastest Articles</h2>
          <Link to="/blog">
            <img className='icon' src={arrow_right} alt="arrow right"/>
          </Link>
        </div>
        <ArticlesCards/>
      </section>

      <section>
        <h2>Projects</h2>
        <div className='project'>
            <h3>Quantitative Investment</h3>
            <div className="wrapper">
              <div>version</div>
              <div>codecov</div>
              <div>download</div>
              <div>stars</div>
              <div>fork</div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alir nihil consequuntur ut, excepturi tenetur quam nisi consectetur corporis, ratione qui molestiae? Aut repudiandae recusandae commodi laudantium!</p>
        </div>
        <div className='project'>
            <h3>Asset Pricing</h3>
            <div className="wrapper">
              <div>badge1</div>
              <div>badge2</div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias maiores libero laborum aspernatur nihil consequuntur ut, excepturi tenetur quam nisi consectetur corporis, ratione qui molestiae? Aut repudiandae recusandae commodi laudantium!</p>
        </div>
      </section>

    </main>

  )
}

export default Home

