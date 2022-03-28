import profileImg from '../img/profilphoto2.jpeg';
import github from '../logo/github.svg';
import linkedin from '../logo/linkedin-black.svg';
import mail from '../logo/mail_black_24dp.svg';
import medium from '../logo/medium.svg';


function Home() {
  return (
    <div className='home'>

      <div className="hero-section">
        <div className='profil'>
          <h1>Dorian <span className='dark'>Bonnet</span></h1>
          <h3>Financial Engineer</h3>
          <p>I'm a finance and tech enthousiat and my mission is to constantly learn and try to 
          share the knowledge I gain. </p> 
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti id iure at, modi 
          delectus officia, sed exercitationem laborum doloremque vel labore, velit cupiditate dolorem 
          dolorum itaque? Minima exercitationem voluptatibus debitis.</p>
        </div>

        <div className='contact-logos'>
          <a href="mailto: dorianbonet3@gmail.com">
            <img src={mail} className="logo" alt="mail logo"/>
          </a>
          <a href="https://www.linkedin.com/in/dorian-bonnet" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} className="logo" alt="linkedin logo"/>
          </a>
          <a href="https://github.com/dorianbonnet" target="_blank" rel="noopener noreferrer">
            <img src={github} className="logo" alt="github logo"/>
          </a>
          <a href="https://github.com/dorianbonnet" target="_blank" rel="noopener noreferrer">
            <img src={medium} className="logo" alt="medium logo"/>
          </a>
        </div>
        <div className='container'>
          <img src={ profileImg } className="profile-img" alt="Dorian Bonnet" title="Dorian Bonnet"/>
        </div>
      </div>

      <div className='blog-section'>
        <h2>Blog</h2>
      </div>

      <div className='projects-section'>
        <h2>Projects</h2>
      </div>

    </div>

  )
}

export default Home