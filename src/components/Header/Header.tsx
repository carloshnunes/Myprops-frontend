import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      {/* Esquerda: Logo + Nome */}
      <div className="header-left">
        <Link to="/" className="logo">MyProps</Link> {/* Logo agora é um link */}
      </div>

      {/* Direita: Links de navegação */}
      <nav className="header-right">
        <Link to="/quem-somos">Quem Somos</Link>
        <Link to="/como-funciona">Como Funciona</Link>
        <Link to="/login" className="login-btn">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
