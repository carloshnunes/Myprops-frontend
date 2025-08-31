import React, { useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de login aqui
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 py-12">
      <div className="max-w-md w-full space-y-10">
        {/* Card de Login */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-10">
          {/* Header do Card */}
          <div className="text-center mb-12">
            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-orange-500 via-red-600 to-pink-600 rounded-3xl flex items-center justify-center mb-6 shadow-xl">
              <span className="text-3xl">🏀</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Bem-vindo de volta</h2>
            <p className="text-lg text-gray-600">Entre na sua conta para continuar</p>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Campo Email */}
            <div>
              <label htmlFor="email" className="block text-base font-semibold text-gray-700 mb-3">
                Email
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-2xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-200 placeholder-gray-400 text-lg"
                  placeholder="seu@email.com"
                  required
                />
                <div className="absolute inset-y-0 right-0 pr-6 flex items-center">
                  <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Campo Senha */}
            <div>
              <label htmlFor="password" className="block text-base font-semibold text-gray-700 mb-3">
                Senha
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-2xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-200 placeholder-gray-400 text-lg pr-16"
                  placeholder="Sua senha"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-6 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  {showPassword ? (
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Lembrar senha */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-5 w-5 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-3 block text-base text-gray-700">
                  Lembrar de mim
                </label>
              </div>
              <a href="#" className="text-base text-orange-600 hover:text-orange-500 font-semibold transition-colors duration-200">
                Esqueceu a senha?
              </a>
            </div>

            {/* Botão de Login */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-5 px-6 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-orange-500/20"
            >
              Entrar na conta
            </button>
          </form>

          {/* Divisor */}
          <div className="mt-12">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-base">
                <span className="px-4 bg-white text-gray-500 font-medium">Ou continue com</span>
              </div>
            </div>

            {/* Botões de redes sociais */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <button className="w-full inline-flex justify-center py-4 px-6 border-2 border-gray-300 rounded-2xl shadow-sm bg-white text-base font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-13a1 1 0 100 2 1 1 0 000-2zm0 8a4 4 0 100-8 4 4 0 000 8z" clipRule="evenodd" />
                </svg>
                Google
              </button>
              <button className="w-full inline-flex justify-center py-4 px-6 border-2 border-gray-300 rounded-2xl shadow-sm bg-white text-base font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                </svg>
                Facebook
              </button>
            </div>
          </div>

          {/* Link para cadastro */}
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600">
              Não tem uma conta?{" "}
              <a href="#" className="font-bold text-orange-600 hover:text-orange-500 transition-colors duration-200">
                Cadastre-se aqui
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;