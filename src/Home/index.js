import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate('/auth');
  };

  return (
    <div className="home">
      <section className="welcome-banner">
        <h2>Bentornato su GiovaBin!</h2>
        <p>Il tuo sito di scommesse con criptovalute preferito</p>
      </section>

      <section className="about">
        <h3>Cos'è GiovaBin?</h3>
        <p>GiovaBin è una piattaforma di scommesse online che utilizza criptovalute. Offriamo una vasta gamma di giochi emozionanti e premi generosi. Unisciti a noi e vivi l'emozione delle scommesse con criptovalute!</p>
      </section>

      <section className="featured-games">
        <h3>Giochi in evidenza</h3>
        <div className="game-list">
          {/* Aggiungi qui le informazioni sui giochi in evidenza */}
        </div>
      </section>

      <section className="testimonials">
        <h3>Cosa dicono i nostri utenti</h3>
        <div className="testimonial-list">
          {/* Aggiungi qui le testimonianze degli utenti */}
        </div>
      </section>

      <section className="cta">
        <h3>Pronto a giocare?</h3>
        <p>Registrati ora e scopri i nostri fantastici giochi!</p>
        <button onClick={handleJoinClick}>Unisciti a GiovaBin</button>
      </section>
    </div>
  );
};

export default Home;
