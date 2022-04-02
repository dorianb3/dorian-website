

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import { Home, Blog, Projects, About } from './Components';
// import { Home, Navbar } from './Components';



// includes
import Navbar from './components/inc/Navbar';


// pages
import Home from './components/pages/Home';
import Blog from './components/pages/Blog';
import About from './components/pages/About';
// import { Articles } from './articles';
import { Articles } from './data';
import ArticlePage from './components/pages/ArticlePage';
import { titleToPath } from './components/inc/Utils';

function App() {
  return (

    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' exact element={ <Home/> }/>
        <Route path='/blog' exact element={ <Blog/> }/>
        <Route path='/about' exact element={ <About/> }/>
        {Articles.map((article, key) => {
          return (
            <Route key={ key } path={ titleToPath(article["title"]) } element={ <ArticlePage article={article}/> } />
            )})}
      </Routes>
    </Router>
    

  );
}

export default App;



