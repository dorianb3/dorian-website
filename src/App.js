import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// includes
import Navbar from './components/inc/Navbar';
import Footer from './components/inc/Footer';

// pages
import Home from './components/pages/Home';
// import Blog from './components/pages/Blog';
import Resume from './components/pages/Resume';

// articles
// import { Articles } from './data';
// import ArticlePage from './components/pages/ArticlePage';
// import { titleToPath } from './components/inc/Utils';



import ArticleList from './components/pages/ArticleList';
import ArticlePage from './components/pages/ArticlePage';


function App() {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/resume' exact element={<Resume />}/>
        <Route path='/articles' element={<ArticleList />} />
        <Route path='/articles/:filename' element={<ArticlePage />} />
        {/* {Articles.map((article, key) => {
          return (
            <Route key={key} path={titleToPath(article["title"])} element={<ArticlePage article={article}/>}/>
            )})} */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;



