
import './App.css';
import MainPage from './components/Pages/MainPage/MainPage'
import ArticlePage from './components/Pages/ArticlePage/ArticlePage'
import AboutPage from './components/Pages/AboutPage/AboutPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
return(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
)
}

export default App;
