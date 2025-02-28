import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from "./pages/Homepages/Homepages"
import Footer from './components/Footer/Footer';
import Aboutpages from './pages/Aboutpages/Aboutpages';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutpages />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
