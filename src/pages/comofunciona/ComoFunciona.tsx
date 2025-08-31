import React from "react";

const ComoFunciona: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Pesquise o jogador",
      description: "Digite o nome do jogador que deseja analisar para visualizar as estatísticas.",
      icon: "🔍",
      color: "from-blue-600 to-purple-600"
    },
    {
      id: 2,
      title: "Escolha o jogador ou time",
      description: "Selecione o jogador ou equipe para ver estatísticas detalhadas.",
      icon: "👤",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 3,
      title: "Veja as estatísticas detalhadas",
      description: "Confira os dados do jogador contra times ou outros jogadores.",
      icon: "📊",
      color: "from-green-600 to-blue-600"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header da página */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-6 shadow-lg">
            <span className="text-3xl">📊</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
            Como Funciona
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pesquise qualquer jogador e veja suas estatísticas mais recentes de forma simples e intuitiva.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Card do Step */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200/50 h-full relative">
                {/* Número do step */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {step.id}
                </div>
                
                {/* Ícone */}
                <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                  <span className="text-2xl">{step.icon}</span>
                </div>
                
                {/* Conteúdo */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>

              {/* Seta conectora (apenas entre os cards) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Seção de benefícios */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200/50">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Por que escolher o MyProps?</h2>
            <p className="text-gray-600 text-lg">Descubra as vantagens de usar nossa plataforma</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Rápido</h3>
              <p className="text-gray-600 text-sm">Acesso instantâneo aos dados</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Preciso</h3>
              <p className="text-gray-600 text-sm">Dados sempre atualizados</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Intuitivo</h3>
              <p className="text-gray-600 text-sm">Interface fácil de usar</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Seguro</h3>
              <p className="text-gray-600 text-sm">Seus dados protegidos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComoFunciona;