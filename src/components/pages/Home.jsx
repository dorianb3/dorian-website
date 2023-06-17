import React from 'react';
// import { Link } from 'react-router-dom';

import profileImg from '../img/profilphoto2.jpeg';
// import github from '../logo/github.svg';
// import linkedin from '../logo/linkedin-black.svg';
// import mail from '../logo/mail_black_24dp.svg';
// import medium from '../logo/medium.svg';
// import arrow_right from '../icons/arrow_right.svg';


import ArticleList from '../inc/Articles';


function Home() {
  return (
    <main>

      <div className='hero'>  
        <div className='box1'>
          <h2>Hello!</h2>
          <h2>I'm Dorian Bonnet.</h2>
          <p>Passionate about many things, here you will find some of 
          my interests and works. I hope you enjoy!</p>
        </div>
        <div className='box2'>
          <img src={ profileImg } className="img" alt="Dorian Bonnet" 
          title="Dorian Bonnet" style={{"width": "14.25rem","height": "14rem"}}/>
        </div>
      </div>

      <ArticleList/>

      {/* <section>
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
      </section> */}

    </main>

  )
}

export default Home

