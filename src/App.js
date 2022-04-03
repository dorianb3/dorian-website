import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// includes
import Navbar from './components/inc/Navbar';
import Footer from './components/inc/Footer';

// pages
import Home from './components/pages/Home';
import Blog from './components/pages/Blog';
import About from './components/pages/About';

// articles
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
      <Footer/>
    </Router>
    

  );
}

export default App;



