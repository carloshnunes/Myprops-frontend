import React, { useState } from "react";
import { Link } from "react-router-dom";
import curryImage from "../../assets/stephencurrypng.png";

const PlayerDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'player' | 'team'>('player');
  const [selectedPlayer, setSelectedPlayer] = useState("Stephen Curry");
  const [selectedTeam, setSelectedTeam] = useState("Houston Rockets");
  const [showAverages, setShowAverages] = useState(false);

  // Dados mockados dos jogos
  const gameStats = [
    {
      date: "30/04/25",
      arena: "Toyota Center",
      minutes: 23,
      points: 13,
      fieldGoals: "4-12",
      threePoints: "3-9",
      rebounds: 3,
      assists: 7,
      steals: 0,
      blocks: 0
    },
    {
      date: "28/04/25",
      arena: "Chase Center",
      minutes: 32,
      points: 28,
      fieldGoals: "10-18",
      threePoints: "6-12",
      rebounds: 5,
      assists: 8,
      steals: 2,
      blocks: 0
    },
    {
      date: "26/04/25",
      arena: "Crypto.com Arena",
      minutes: 29,
      points: 22,
      fieldGoals: "8-15",
      threePoints: "4-8",
      rebounds: 4,
      assists: 6,
      steals: 1,
      blocks: 0
    },
    {
      date: "23/04/25",
      arena: "Madison Square Garden",
      minutes: 35,
      points: 31,
      fieldGoals: "11-20",
      threePoints: "7-13",
      rebounds: 6,
      assists: 9,
      steals: 2,
      blocks: 1
    },
    {
      date: "20/04/25",
      arena: "FTX Arena",
      minutes: 27,
      points: 19,
      fieldGoals: "7-14",
      threePoints: "3-7",
      rebounds: 3,
      assists: 5,
      steals: 1,
      blocks: 0
    },
    {
      date: "06/04/25",
      arena: "Chase Center",
      minutes: 31,
      points: 25,
      fieldGoals: "9-16",
      threePoints: "5-10",
      rebounds: 4,
      assists: 7,
      steals: 1,
      blocks: 0
    },
    {
      date: "13/02/25",
      arena: "American Airlines Center",
      minutes: 33,
      points: 27,
      fieldGoals: "10-19",
      threePoints: "6-11",
      rebounds: 5,
      assists: 8,
      steals: 2,
      blocks: 0
    },
    {
      date: "11/12/24",
      arena: "Chase Center",
      minutes: 30,
      points: 24,
      fieldGoals: "8-17",
      threePoints: "4-9",
      rebounds: 4,
      assists: 6,
      steals: 1,
      blocks: 0
    }
  ];

  // Calcular médias
  const averages = {
    minutes: Math.round(gameStats.reduce((sum, game) => sum + game.minutes, 0) / gameStats.length),
    points: Math.round((gameStats.reduce((sum, game) => sum + game.points, 0) / gameStats.length) * 10) / 10,
    rebounds: Math.round((gameStats.reduce((sum, game) => sum + game.rebounds, 0) / gameStats.length) * 10) / 10,
    assists: Math.round((gameStats.reduce((sum, game) => sum + game.assists, 0) / gameStats.length) * 10) / 10,
    steals: Math.round((gameStats.reduce((sum, game) => sum + game.steals, 0) / gameStats.length) * 10) / 10,
    blocks: Math.round((gameStats.reduce((sum, game) => sum + game.blocks, 0) / gameStats.length) * 10) / 10,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header da página */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                to="/" 
                className="p-2 rounded-xl text-white hover:bg-white/20 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
              <h1 className="text-2xl font-bold text-white">MyProps</h1>
            </div>
            <div className="text-white font-medium">Minha conta</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Conteúdo principal */}
          <div className="lg:col-span-3">
            {/* Tabs */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-6">
              <div className="flex space-x-1 bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setActiveTab('player')}
                  className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    activeTab === 'player'
                      ? 'bg-white text-orange-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Jogador
                </button>
                <button
                  onClick={() => setActiveTab('team')}
                  className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    activeTab === 'team'
                      ? 'bg-white text-orange-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Time
                </button>
              </div>

              {/* Seleção de jogador vs time */}
              <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
                <div className="flex-1 w-full">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Jogador</label>
                  <select
                    value={selectedPlayer}
                    onChange={(e) => setSelectedPlayer(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-200"
                  >
                    <option value="Stephen Curry">Stephen Curry</option>
                    <option value="LeBron James">LeBron James</option>
                    <option value="Kevin Durant">Kevin Durant</option>
                    <option value="Giannis Antetokounmpo">Giannis Antetokounmpo</option>
                  </select>
                </div>
                
                <div className="flex items-center justify-center w-12 h-12">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold">
                    ×
                  </div>
                </div>

                <div className="flex-1 w-full">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Time</label>
                  <select
                    value={selectedTeam}
                    onChange={(e) => setSelectedTeam(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-200"
                  >
                    <option value="Houston Rockets">Houston Rockets</option>
                    <option value="Golden State Warriors">Golden State Warriors</option>
                    <option value="Los Angeles Lakers">Los Angeles Lakers</option>
                    <option value="Boston Celtics">Boston Celtics</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Tabela de estatísticas */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-orange-50 to-red-50">
                    <tr>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900">Jogo</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900">◇ Arena</th>
                      <th className="text-center py-4 px-6 font-semibold text-gray-900">Min</th>
                      <th className="text-center py-4 px-6 font-semibold text-gray-900">Pts</th>
                      <th className="text-center py-4 px-6 font-semibold text-gray-900">AQ</th>
                      <th className="text-center py-4 px-6 font-semibold text-gray-900">3pt</th>
                      <th className="text-center py-4 px-6 font-semibold text-gray-900">Reb</th>
                      <th className="text-center py-4 px-6 font-semibold text-gray-900">Ast</th>
                      <th className="text-center py-4 px-6 font-semibold text-gray-900">Rdb</th>
                      <th className="text-center py-4 px-6 font-semibold text-gray-900">Blq</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gameStats.map((game, index) => (
                      <tr key={index} className={`border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 ${
                        index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                      }`}>
                        <td className="py-4 px-6 font-medium text-gray-900">{game.date}</td>
                        <td className="py-4 px-6 text-gray-700">{game.arena}</td>
                        <td className="py-4 px-6 text-center text-orange-600 font-semibold">{game.minutes}</td>
                        <td className="py-4 px-6 text-center text-red-600 font-semibold">{game.points}</td>
                        <td className="py-4 px-6 text-center text-gray-700">{game.fieldGoals}</td>
                        <td className="py-4 px-6 text-center text-gray-700">{game.threePoints}</td>
                        <td className="py-4 px-6 text-center text-pink-600 font-semibold">{game.rebounds}</td>
                        <td className="py-4 px-6 text-center text-purple-600 font-semibold">{game.assists}</td>
                        <td className="py-4 px-6 text-center text-green-600 font-semibold">{game.steals}</td>
                        <td className="py-4 px-6 text-center text-blue-600 font-semibold">{game.blocks}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Botão de médias */}
              <div className="p-6 border-t border-gray-200">
                <button
                  onClick={() => setShowAverages(!showAverages)}
                  className="bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-900 transition-colors duration-200 shadow-lg"
                >
                  Médias
                </button>
                
                {showAverages && (
                  <div className="mt-4 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-3">Médias por jogo:</h3>
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-orange-600">{averages.minutes}</div>
                        <div className="text-sm text-gray-600">Min</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-red-600">{averages.points}</div>
                        <div className="text-sm text-gray-600">Pts</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-pink-600">{averages.rebounds}</div>
                        <div className="text-sm text-gray-600">Reb</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-purple-600">{averages.assists}</div>
                        <div className="text-sm text-gray-600">Ast</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-600">{averages.steals}</div>
                        <div className="text-sm text-gray-600">Rdb</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">{averages.blocks}</div>
                        <div className="text-sm text-gray-600">Blq</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar de filtros */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sticky top-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Filtrar</h3>
                <button className="text-orange-600 hover:text-orange-700 font-medium text-sm transition-colors duration-200">
                  Limpar
                </button>
              </div>

              <div className="space-y-6">
                {/* Temporadas */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Temporadas</label>
                  <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-200">
                    <option value="2023-24">2023-24</option>
                    <option value="2022-23">2022-23</option>
                    <option value="2021-22">2021-22</option>
                  </select>
                </div>

                {/* Over */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Over</label>
                  <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-200">
                    <option value="">Selecionar</option>
                    <option value="points">Pontos</option>
                    <option value="assists">Assistências</option>
                    <option value="rebounds">Rebotes</option>
                  </select>
                </div>

                {/* Under */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Under</label>
                  <input
                    type="text"
                    placeholder="Digite um valor..."
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-200 placeholder-gray-400"
                  />
                </div>

                {/* Arena */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Arena</label>
                  <input
                    type="text"
                    placeholder="Nome da arena..."
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-200 placeholder-gray-400"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card com imagem do jogador */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Imagem do Stephen Curry */}
            <div className="flex-shrink-0">
              <div className="relative">
                <img 
                  src={curryImage} 
                  alt="Stephen Curry" 
                  className="w-48 h-48 object-cover rounded-2xl shadow-xl border-4 border-white"
                />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  #30
                </div>
              </div>
            </div>

            {/* Informações do jogador */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Stephen Curry</h2>
              <p className="text-xl text-gray-600 mb-4">Golden State Warriors • Point Guard</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-3 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
                  <div className="text-2xl font-bold text-orange-600 mb-1">29.4</div>
                  <div className="text-sm text-gray-600 font-medium">Pontos</div>
                </div>
                <div className="text-center p-3 bg-gradient-to-br from-red-50 to-red-100 rounded-xl">
                  <div className="text-2xl font-bold text-red-600 mb-1">6.3</div>
                  <div className="text-sm text-gray-600 font-medium">Assistências</div>
                </div>
                <div className="text-center p-3 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl">
                  <div className="text-2xl font-bold text-pink-600 mb-1">6.1</div>
                  <div className="text-sm text-gray-600 font-medium">Rebotes</div>
                </div>
                <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                  <div className="text-2xl font-bold text-purple-600 mb-1">0.9</div>
                  <div className="text-sm text-gray-600 font-medium">Roubos</div>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                Stephen Curry é um dos maiores arremessadores de três pontos da história da NBA. 
                Com sua precisão excepcional e habilidade de criar jogadas, ele revolucionou o jogo 
                e liderou os Warriors para múltiplos títulos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerDetails;
