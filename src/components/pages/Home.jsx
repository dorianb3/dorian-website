
// import { Link } from 'react-router-dom';

import profileImg from '../img/profilphoto2.jpeg';
import github from '../logo/github.svg';
import linkedin from '../logo/linkedin-black.svg';
import mail from '../logo/mail_black_24dp.svg';
import medium from '../logo/medium.svg';

// import Accordion from '../inc/Accordion';
import { ArticlesCards, ProjectsCards } from '../inc/Cards';

function Home() {
  return (
    <main>

      <section className="hgroup-space-between">
        <div style={{"maxWidth":"30rem"}}>
          <h1>Dorian Bonnet</h1>          
          <p style={{"marginTop":"3rem"}}>I'm a finance and tech enthousiat and my mission is to constantly learn and try to 
          share the knowledge I gain. </p> 
          <p style={{"marginBottom":"3rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti id iure at, modi 
          delectus officia, sed exercitationem laborum doloremque vel labore, velit cupiditate dolorem 
          dolorum itaque? Minima exercitationem voluptatibus debitis.</p>
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
        <h2>Articles</h2>
        <ArticlesCards/>
      </section>

      <section>
        <h2>Projects</h2>
        <ProjectsCards/>
      </section>

    </main>

  )
}

export default Home

