
import { Link } from 'react-router-dom';

import profileImg from '../img/profilphoto2.jpeg';
import github from '../logo/github.svg';
import linkedin from '../logo/linkedin-black.svg';
import mail from '../logo/mail_black_24dp.svg';
import medium from '../logo/medium.svg';

// import Accordion from '../inc/Accordion';
import { ArticlesCards, ProjectsCards } from '../inc/Cards';

function Home() {
  return (
    <div>

      <div className="box hgroup-space-arround">
        <div style={{"maxWidth":"30rem"}}>
          <h1>Dorian Bonnet AAAA</h1>
          <span className='bg-elegant badge' style={{"margin":"0rem", "fontWeight":"700"}}>Financial Engineer</span>
          
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
      </div>

      {/* ------------------------------------------- */}



      <div className='box' id='#blog'>
        {/* <div>
          <h3>Latest Articles</h3>
        </div> */}
        {/* <Accordion /> */}
        <div className='link_container'><Link to="#here"><h2>Articles</h2></Link></div>
        <div className='hgroup'><ArticlesCards/></div>
      </div>

      <div className='box' id='#projects'>
        <div className='link_container'><Link to="#here"><h2>Projects</h2></Link></div>
        <ProjectsCards/>



        {/* <div className='cards'>
          <div className='card bg-finance'>QIS Factory</div>
          <div className='card bg-economics'>DerivatiX</div>
          <div className='card bg-blockchain'>Finance3</div>
          <div className='card bg-datascience'>Project 4</div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><g><rect fill="#0437F2" height="24" width="24"/></g><g><g><g><path d="M7.5,4C5.57,4,4,5.57,4,7.5S5.57,11,7.5,11S11,9.43,11,7.5S9.43,4,7.5,4z M7.5,9C6.67,9,6,8.33,6,7.5S6.67,6,7.5,6 S9,6.67,9,7.5S8.33,9,7.5,9z M16.5,13c-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5S18.43,13,16.5,13z M16.5,18 c-0.83,0-1.5-0.67-1.5-1.5s0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5S17.33,18,16.5,18z M5.41,20L4,18.59L18.59,4L20,5.41L5.41,20z"/></g></g></g></svg>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="#FF3131"/><path d="M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7V4z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><g><rect fill="#2AAA8A" height="24" width="24" x="0"/></g><g><g><path d="M23,8c0,1.1-0.9,2-2,2c-0.18,0-0.35-0.02-0.51-0.07l-3.56,3.55C16.98,13.64,17,13.82,17,14c0,1.1-0.9,2-2,2s-2-0.9-2-2 c0-0.18,0.02-0.36,0.07-0.52l-2.55-2.55C10.36,10.98,10.18,11,10,11c-0.18,0-0.36-0.02-0.52-0.07l-4.55,4.56 C4.98,15.65,5,15.82,5,16c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2c0.18,0,0.35,0.02,0.51,0.07l4.56-4.55C8.02,9.36,8,9.18,8,9 c0-1.1,0.9-2,2-2s2,0.9,2,2c0,0.18-0.02,0.36-0.07,0.52l2.55,2.55C14.64,12.02,14.82,12,15,12c0.18,0,0.36,0.02,0.52,0.07 l3.55-3.56C19.02,8.35,19,8.18,19,8c0-1.1,0.9-2,2-2S23,6.9,23,8z"/></g></g></svg>
       */}
      </div>

    </div>

  )
}

export default Home

