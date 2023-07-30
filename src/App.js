
import './App.css';
import MainPage from './components/Pages/MainPage/MainPage'
import ArticlePage from './components/Pages/ArticlePage/ArticlePage'
import AboutPage from './components/Pages/AboutPage/AboutPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BooksPublishedPage from './components/Pages/BooksPublishedPage/BooksPublishedPage';
import WritingPage from './components/Pages/WritingPage/Writing'

function App() {
return(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/published" element={<BooksPublishedPage />}/>
          <Route path="/writing" element={<WritingPage />}/>
      </Routes>
    </BrowserRouter>
)
}

export default App;
