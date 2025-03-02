import { useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="container">
      {/* Cabeçalho */}
      <header className="header">
        <h1>MyProps</h1>
        <p>Estatísticas de jogadores da NBA</p>
      </header>

      {/* Barra de busca */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar jogador..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>Buscar</button>
      </div>

      {/* Exemplo de estatística */}
      <div className="player-card">
        <h2>LeBron James</h2>
        <p>Pontos por jogo: 27.2</p>
        <p>Assistências por jogo: 7.3</p>
        <p>Rebotes por jogo: 7.5</p>
      </div>
    </div>
  );
}

export default App;
