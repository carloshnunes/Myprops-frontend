import React from "react";
import "./QuemSomos.css";

const QuemSomos: React.FC = () => {
  return (
    <div className="quem-somos">
      <h1>Quem Somos</h1>
      <div className="quem-somos-container">
        {/* Texto à esquerda */}
        <div className="quem-somos-text">
          <p>
            Nossa paixão pelo basquete nos motivou a criar uma plataforma que oferecesse acesso
            rápido e intuitivo a estatísticas detalhadas dos jogadores da NBA. Queríamos um
            espaço onde fãs e analistas pudessem encontrar informações precisas e tomar decisões
            baseadas em dados reais. Depois de muitas discussões, surgiu o MyProps – uma ferramenta
            dedicada a tornar a experiência dos amantes do basquete ainda melhor.
          </p>
        </div>
      </div>

      {/* Imagem separada à direita */}
      <div className="quem-somos-image">
        <img src="/assets/basketball-generic.jpg" alt="Basquete" />
      </div>

      <section className="quem-somos-content">
        <h2>Nossa Missão</h2>
        <p>
          Proporcionar estatísticas detalhadas e insights sobre o desempenho dos jogadores da NBA,
          ajudando fãs e analistas a tomarem decisões informadas.
        </p>
        <h2>Por que usar o MyProps?</h2>
        <ul>
          <li>📊 Dados sempre atualizados</li>
          <li>⚡ Interface intuitiva e rápida</li>
          <li>🔍 Comparação entre jogadores e equipes</li>
        </ul>
      </section>
    </div>
  );
};

export default QuemSomos;