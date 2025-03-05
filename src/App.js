import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from "./pages/Homepages/Homepages"
import Footer from './components/Footer/Footer';
import Aboutpages from './pages/Aboutpages/Aboutpages';
import Contactpages from './pages/Contactpages/Contactpages';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutpages />} />
          <Route path="/contact-us" element={<Contactpages />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
