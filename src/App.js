import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Auth from './pages/Auth';
import Home from './Home';
import About from './About';
import Games from './Games';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="App-content">
          {/* Qui inserirai il contenuto principale del tuo sito */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
          
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
