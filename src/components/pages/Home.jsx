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
          <h1>Dorian <span className='bg-black box txt-white'>Bonnet</span></h1>
          <h3>Financial Engineer</h3>
          <p>I'm a finance and tech enthousiat and my mission is to constantly learn and try to 
          share the knowledge I gain. </p> 
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti id iure at, modi 
          delectus officia, sed exercitationem laborum doloremque vel labore, velit cupiditate dolorem 
          dolorum itaque? Minima exercitationem voluptatibus debitis.</p>
          <p>Particularly, I'm interested in</p>
          <div className='topics'>
            <span className='bg-lavender box fs-small txt-slateblue'>Finance</span>
            <span className='bg-mistyrose box fs-small txt-palevioletred'>Economics</span>
            <span className='bg-honeydew box fs-small txt-seagreen'>Blockchain</span>
            <span className='bg-cornsilk box fs-small txt-peru'>Data Science</span>
          </div>
          
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

      {/* ------------------------------------------- */}



      <div className='blog-section'>
        <div className='blog-section-header'>
          <h3>Latest Articles</h3>
        </div>


        <div className='accordion'>
          <div className='accordion-item'>
            <div className='accordion-item-header'>
              <div className='dot bg-slateblue'></div>
              <div className='title'>Introduction to ETF</div>
              <div className='date fs-small'>March 3, 2022</div>
            </div>
            <div className='accordion-item-content bg-lavender box fs-small'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum neque quaerat vero labore pariatur libero cum aliquam quae! Rem similique molestias cum asperiores, nisi quos laboriosam necessitatibus dignissimos est ipsa.
            </div>
          </div>

          <div className='accordion-item'>
            <div className='accordion-item-header'>
              <div className='dot bg-seagreen'></div>
              <div className='title'>Understanding Parachain and Bridges</div>
              <div className='date fs-small'>March 17, 2022</div>
            </div>
            <div className='accordion-item-content bg-honeydew box fs-small'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum neque quaerat vero labore pariatur libero cum aliquam quae! Rem similique molestias cum asperiores, nisi quos laboriosam necessitatibus dignissimos est ipsa.
            </div>
          </div>




        </div>
      </div>

      <div className='projects-section'>
        <h3>Projects</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti optio repellendus, voluptatem expedita sapiente maiores saepe commodi magnam inventore id. Quis amet dolore iusto! Facere molestiae saepe nesciunt vitae labore!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti optio repellendus, voluptatem expedita sapiente maiores saepe commodi magnam inventore id. Quis amet dolore iusto! Facere molestiae saepe nesciunt vitae labore!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti optio repellendus, voluptatem expedita sapiente maiores saepe commodi magnam inventore id. Quis amet dolore iusto! Facere molestiae saepe nesciunt vitae labore!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti optio repellendus, voluptatem expedita sapiente maiores saepe commodi magnam inventore id. Quis amet dolore iusto! Facere molestiae saepe nesciunt vitae labore!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti optio repellendus, voluptatem expedita sapiente maiores saepe commodi magnam inventore id. Quis amet dolore iusto! Facere molestiae saepe nesciunt vitae labore!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti optio repellendus, voluptatem expedita sapiente maiores saepe commodi magnam inventore id. Quis amet dolore iusto! Facere molestiae saepe nesciunt vitae labore!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti optio repellendus, voluptatem expedita sapiente maiores saepe commodi magnam inventore id. Quis amet dolore iusto! Facere molestiae saepe nesciunt vitae labore!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti optio repellendus, voluptatem expedita sapiente maiores saepe commodi magnam inventore id. Quis amet dolore iusto! Facere molestiae saepe nesciunt vitae labore!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti optio repellendus, voluptatem expedita sapiente maiores saepe commodi magnam inventore id. Quis amet dolore iusto! Facere molestiae saepe nesciunt vitae labore!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti optio repellendus, voluptatem expedita sapiente maiores saepe commodi magnam inventore id. Quis amet dolore iusto! Facere molestiae saepe nesciunt vitae labore!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti optio repellendus, voluptatem expedita sapiente maiores saepe commodi magnam inventore id. Quis amet dolore iusto! Facere molestiae saepe nesciunt vitae labore!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti optio repellendus, voluptatem expedita sapiente maiores saepe commodi magnam inventore id. Quis amet dolore iusto! Facere molestiae saepe nesciunt vitae labore!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti optio repellendus, voluptatem expedita sapiente maiores saepe commodi magnam inventore id. Quis amet dolore iusto! Facere molestiae saepe nesciunt vitae labore!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti optio repellendus, voluptatem expedita sapiente maiores saepe commodi magnam inventore id. Quis amet dolore iusto! Facere molestiae saepe nesciunt vitae labore!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti optio repellendus, voluptatem expedita sapiente maiores saepe commodi magnam inventore id. Quis amet dolore iusto! Facere molestiae saepe nesciunt vitae labore!</p>
        
        
        
        
        

      </div>

    </div>

  )
}

export default Home