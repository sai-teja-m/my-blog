import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import About from './pages/About';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import NavBar from './NavBar';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/articles' element={<ArticleListPage />} />
            <Route path='/article/:articleId' element={<ArticlePage />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element = {<NotFoundPage/>} />            //every URL except mentioned above
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
