import React from "react";
import fotoTh from "../../assets/ohomem.png";

const QuemSomos: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header da página */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
            Quem Somos
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Container principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Texto à esquerda */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Nossa paixão pelo basquete nos motivou a criar uma plataforma que oferecesse acesso
              rápido e intuitivo a estatísticas detalhadas dos jogadores da NBA. Queríamos um
              espaço onde fãs e analistas pudessem encontrar informações precisas e tomar decisões
              baseadas em dados reais.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Depois de muitas discussões, surgiu o <span className="font-semibold text-blue-600">MyProps</span> – uma ferramenta
              dedicada a tornar a experiência dos amantes do basquete ainda melhor.
            </p>
          </div>

          {/* Imagem à direita */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={fotoTh} 
                  alt="Basquete" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
                🏀
              </div>
            </div>
          </div>
        </div>

        {/* Seção de conteúdo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Nossa Missão */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200/50">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Nossa Missão</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Proporcionar estatísticas detalhadas e insights sobre o desempenho dos jogadores da NBA,
              ajudando fãs e analistas a tomarem decisões informadas baseadas em dados reais e precisos.
            </p>
          </div>

          {/* Por que usar o MyProps */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200/50">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Por que usar o MyProps?</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-700">
                <span className="text-2xl mr-3">📊</span>
                <span className="font-medium">Dados sempre atualizados</span>
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-2xl mr-3">⚡</span>
                <span className="font-medium">Interface intuitiva e rápida</span>
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-2xl mr-3">🔍</span>
                <span className="font-medium">Comparação entre jogadores e equipes</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuemSomos;
