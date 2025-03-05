import React from "react";
import "./Login.css";

const Login: React.FC = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <p>Entre na sua conta para salvar estatísticas personalizadas.</p>
        <form className="login-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Senha" required />
          <button type="submit">Entrar</button>
        </form>
        <p className="register-link">Não tem uma conta? <a href="#">Cadastre-se</a></p>
      </div>
    </div>
  );
};

export default Login;