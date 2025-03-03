import { useState } from "react";
import "./Home.css"; // Importando o CSS

const Home: React.FC = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="home">
      {/* Seção de busca */}
      <section className="search-section">
        <input
          type="text"
          placeholder="Buscar jogador..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <button className="search-button">Buscar</button>
      </section>

      {/* Seção de estatísticas */}
      <section className="player-stats">
        <h2>🏀 Estatísticas do Jogador</h2>
        <div className="player-card">
          <h3>LeBron James</h3>
          <p>Pontos por jogo: <strong>27.2</strong></p>
          <p>Assistências por jogo: <strong>7.3</strong></p>
          <p>Rebotes por jogo: <strong>7.5</strong></p>
        </div>
      </section>
    </div>
  );
};

export default Home;
