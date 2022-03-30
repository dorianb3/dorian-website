import profileImg from '../img/profilphoto2.jpeg';
import github from '../logo/github.svg';
import linkedin from '../logo/linkedin-black.svg';
import mail from '../logo/mail_black_24dp.svg';
import medium from '../logo/medium.svg';

import Accordion from '../inc/Accordion';

function Home() {
  return (
    <div className='home'>

      <div className="hero-section box hgroup-space-arround">
        <div style={{"max-width":"30rem"}}>
          <h1>Dorian<span className='bg-black badge txt-white'>Bonnet</span></h1>
          <h3>Financial Engineer</h3>
          <p>I'm a finance and tech enthousiat and my mission is to constantly learn and try to 
          share the knowledge I gain. </p> 
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti id iure at, modi 
          delectus officia, sed exercitationem laborum doloremque vel labore, velit cupiditate dolorem 
          dolorum itaque? Minima exercitationem voluptatibus debitis.</p>
          <p>Particularly, I'm interested in</p>
          <div className='hgroup'>
            <span className='badge fs-small' style={{"background-color":"#1266F1"}}>Finance</span>
            <span className='badge fs-small' style={{"background-color":"#F93154"}}>Economics</span>
            <span className='badge fs-small' style={{"background-color":"#00B74A"}}>Blockchain</span>
            <span className='badge fs-small' style={{"background-color":"#FFA900"}}>Data Science</span>
          </div>
          
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
        <img src={ profileImg } className="profile-img" alt="Dorian Bonnet" title="Dorian Bonnet"/>
      </div>

      {/* ------------------------------------------- */}



      <div className='box'>
        <div className='blog-section-header'>
          <h3>Latest Articles</h3>
        </div>
        <Accordion />

      </div>

      <div className='box'>
        <h3>Projects</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ad labore blanditiis, aliquam minima asperiores deleniti explicabo enim distinctio natus voluptate architecto cupiditate nostrum magni aperiam cum repudiandae omnis? Totam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ad labore blanditiis, aliquam minima asperiores deleniti explicabo enim distinctio natus voluptate architecto cupiditate nostrum magni aperiam cum repudiandae omnis? Totam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ad labore blanditiis, aliquam minima asperiores deleniti explicabo enim distinctio natus voluptate architecto cupiditate nostrum magni aperiam cum repudiandae omnis? Totam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ad labore blanditiis, aliquam minima asperiores deleniti explicabo enim distinctio natus voluptate architecto cupiditate nostrum magni aperiam cum repudiandae omnis? Totam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ad labore blanditiis, aliquam minima asperiores deleniti explicabo enim distinctio natus voluptate architecto cupiditate nostrum magni aperiam cum repudiandae omnis? Totam!</p>

        
        
        

      </div>

    </div>

  )
}

export default Home

