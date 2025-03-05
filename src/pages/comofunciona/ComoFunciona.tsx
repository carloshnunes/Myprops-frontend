import React from "react";
import "./ComoFunciona.css";

const ComoFunciona: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Pesquise o jogador",
      description: "Digite o nome do jogador que deseja analisar para visualizar as estatísticas.",
    },
    {
      id: 2,
      title: "Escolha o jogador ou time",
      description: "Selecione o jogador ou equipe para ver estatísticas detalhadas.",
    },
    {
      id: 3,
      title: "Veja as estatísticas detalhadas",
      description: "Confira os dados do jogador contra times ou outros jogadores.",
    },
  ];

  return (
    <div className="como-funciona">
      <h2>📊 Como Funciona</h2>
      <p>Pesquise qualquer jogador e veja suas estatísticas mais recentes.</p>
      <div className="steps-container">
        {steps.map((step) => (
          <div key={step.id} className="step-card">
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComoFunciona;