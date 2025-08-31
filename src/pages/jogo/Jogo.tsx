import React, { useState, useEffect } from "react";

interface Player {
  id: number;
  name: string;
  team: string;
  era: string;
  image?: string;
}

const Jogo: React.FC = () => {
  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);
  const [ranking, setRanking] = useState<Player[]>([]);
  const [isRanking, setIsRanking] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  // Lista de jogadores históricos
  const allPlayers: Player[] = [
    { id: 1, name: "Michael Jordan", team: "Chicago Bulls", era: "1984-2003" },
    { id: 2, name: "LeBron James", team: "Los Angeles Lakers", era: "2003-presente" },
    { id: 3, name: "Kareem Abdul-Jabbar", team: "Los Angeles Lakers", era: "1969-1989" },
    { id: 4, name: "Magic Johnson", team: "Los Angeles Lakers", era: "1979-1996" },
    { id: 5, name: "Larry Bird", team: "Boston Celtics", era: "1979-1992" },
    { id: 6, name: "Kobe Bryant", team: "Los Angeles Lakers", era: "1996-2016" },
    { id: 7, name: "Shaquille O'Neal", team: "Los Angeles Lakers", era: "1992-2011" },
    { id: 8, name: "Tim Duncan", team: "San Antonio Spurs", era: "1997-2016" },
    { id: 9, name: "Bill Russell", team: "Boston Celtics", era: "1956-1969" },
    { id: 10, name: "Wilt Chamberlain", team: "Philadelphia 76ers", era: "1959-1973" },
    { id: 11, name: "Oscar Robertson", team: "Milwaukee Bucks", era: "1960-1974" },
    { id: 12, name: "Jerry West", team: "Los Angeles Lakers", era: "1960-1974" },
    { id: 13, name: "Hakeem Olajuwon", team: "Houston Rockets", era: "1984-2002" },
    { id: 14, name: "Karl Malone", team: "Utah Jazz", era: "1985-2004" },
    { id: 15, name: "John Stockton", team: "Utah Jazz", era: "1984-2003" },
  ];

  // Selecionar 3 jogadores aleatórios
  const selectRandomPlayers = () => {
    const shuffled = [...allPlayers].sort(() => 0.5 - Math.random());
    setSelectedPlayers(shuffled.slice(0, 3));
    setIsRanking(false);
    setShowConfetti(false);
  };

  // Carregar ranking salvo
  useEffect(() => {
    const savedRanking = localStorage.getItem('playerRanking');
    if (savedRanking) {
      setRanking(JSON.parse(savedRanking));
    }
    selectRandomPlayers();
  }, []);

  // Salvar ranking
  const saveRanking = (newRanking: Player[]) => {
    setRanking(newRanking);
    localStorage.setItem('playerRanking', JSON.stringify(newRanking));
  };

  // Função para rankear jogadores
  const rankPlayer = (player: Player, position: number) => {
    const newRanking = [...ranking];
    
    // Remove o jogador se já estiver no ranking
    const existingIndex = newRanking.findIndex(p => p.id === player.id);
    if (existingIndex !== -1) {
      newRanking.splice(existingIndex, 1);
    }
    
    // Adiciona na posição correta
    newRanking.splice(position - 1, 0, player);
    
    saveRanking(newRanking);
    setIsRanking(true);
    setShowConfetti(true);
    
    // Remove o confetti após 3 segundos
    setTimeout(() => setShowConfetti(false), 3000);
  };

  // Função para remover jogador do ranking
  const removeFromRanking = (playerId: number) => {
    const newRanking = ranking.filter(p => p.id !== playerId);
    saveRanking(newRanking);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent mb-4">
            🏆 Quem é o Melhor?
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Escolha a posição de cada jogador e construa seu ranking personalizado dos maiores da NBA!
          </p>
        </div>

        {/* Jogadores Selecionados */}
        {!isRanking && selectedPlayers.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Escolha a posição de cada jogador:
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {selectedPlayers.map((player, index) => (
                <div key={player.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                      {player.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{player.name}</h3>
                    <p className="text-gray-600 mb-1">{player.team}</p>
                    <p className="text-sm text-gray-500 mb-6">{player.era}</p>
                    
                    <div className="space-y-3">
                      <button
                        onClick={() => rankPlayer(player, 1)}
                        className="w-full px-4 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                      >
                        🥇 1º Lugar
                      </button>
                      <button
                        onClick={() => rankPlayer(player, 2)}
                        className="w-full px-4 py-3 bg-gradient-to-r from-gray-400 to-gray-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                      >
                        🥈 2º Lugar
                      </button>
                      <button
                        onClick={() => rankPlayer(player, 3)}
                        className="w-full px-4 py-3 bg-gradient-to-r from-orange-600 to-red-700 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                      >
                        🥉 3º Lugar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Confetti Animation */}
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none z-50">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${1 + Math.random() * 2}s`,
                }}
              >
                {['🏆', '🎉', '⭐', '🏀', '🔥'][Math.floor(Math.random() * 5)]}
              </div>
            ))}
          </div>
        )}

        {/* Botão para nova rodada */}
        {isRanking && (
          <div className="text-center mb-12">
            <button
              onClick={selectRandomPlayers}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              🎲 Nova Rodada
            </button>
          </div>
        )}

        {/* Ranking do Usuário */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Seu Ranking Personalizado
          </h2>
          
          {ranking.length === 0 ? (
            <p className="text-center text-gray-500 text-lg">
              Comece a jogar para construir seu ranking!
            </p>
          ) : (
            <div className="space-y-4">
              {ranking.map((player, index) => (
                <div key={player.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{player.name}</h3>
                      <p className="text-gray-600">{player.team} • {player.era}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromRanking(player.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
                  >
                    Remover
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jogo;
