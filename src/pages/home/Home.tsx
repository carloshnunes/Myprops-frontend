import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (search.trim()) {
            // Redirecionar para a página de detalhes do jogador
            navigate(`/player/${encodeURIComponent(search.trim())}`);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 px-6 sm:px-8 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        {/* Logo e Título */}
                        <div className="flex justify-center mb-8">
                            <div className="relative">
                                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 via-red-600 to-pink-600 rounded-3xl flex items-center justify-center text-white font-bold text-4xl shadow-2xl">
                                    🏀
                                </div>
                                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
                            </div>
                        </div>
                        
                        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-orange-800 to-red-800 bg-clip-text text-transparent mb-6">
                            MyProps
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                            Descubra estatísticas detalhadas dos jogadores da NBA e explore performances incríveis com nossa plataforma intuitiva.
                        </p>
                        
                        <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full"></div>
                    </div>

                    {/* Seção de Busca */}
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 md:p-12">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    Buscar Jogador
                                </h2>
                                <p className="text-lg text-gray-600">
                                    Digite o nome do jogador para ver suas estatísticas completas
                                </p>
                            </div>
                            
                            <form onSubmit={handleSearch} className="space-y-6">
                                <div className="flex flex-col lg:flex-row gap-4">
                                    <div className="flex-1 relative">
                                        <input
                                            type="text"
                                            placeholder="Ex: Stephen Curry, LeBron James..."
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                            className="w-full px-6 py-4 border-2 border-gray-300 rounded-2xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-200 placeholder-gray-400 text-lg"
                                        />
                                        <div className="absolute inset-y-0 right-0 pr-6 flex items-center">
                                            <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <button 
                                        type="submit"
                                        className="lg:w-auto w-full bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-orange-500/20"
                                    >
                                        Buscar Jogador
                                    </button>
                                </div>
                            </form>

                            {/* Sugestões de jogadores */}
                            <div className="mt-8">
                                <p className="text-center text-gray-600 mb-4">Jogadores populares:</p>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {["Stephen Curry", "LeBron James", "Kevin Durant", "Giannis Antetokounmpo", "Nikola Jokić"].map((player) => (
                                        <button
                                            key={player}
                                            onClick={() => {
                                                setSearch(player);
                                                navigate(`/player/${encodeURIComponent(player)}`);
                                            }}
                                            className="px-4 py-2 bg-gradient-to-r from-orange-50 to-red-50 text-orange-700 rounded-xl font-medium hover:from-orange-100 hover:to-red-100 transition-all duration-200 border border-orange-200 hover:border-orange-300"
                                        >
                                            {player}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seção de Estatísticas */}
            <section className="py-20 px-6 sm:px-8 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Estatísticas Detalhadas
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Acesse dados completos sobre pontuação, assistências, rebotes e muito mais
                        </p>
                    </div>

                    {/* Card de Exemplo */}
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 md:p-12">
                            <div className="flex items-center mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mr-6">
                                    👑
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-gray-900">LeBron James</h3>
                                    <p className="text-gray-600">Los Angeles Lakers • #23</p>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl">
                                    <div className="text-4xl font-bold text-orange-600 mb-2">27.2</div>
                                    <div className="text-gray-700 font-semibold">Pontos por Jogo</div>
                                </div>
                                <div className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl">
                                    <div className="text-4xl font-bold text-red-600 mb-2">7.3</div>
                                    <div className="text-gray-700 font-semibold">Assistências por Jogo</div>
                                </div>
                                <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl">
                                    <div className="text-4xl font-bold text-pink-600 mb-2">7.5</div>
                                    <div className="text-gray-700 font-semibold">Rebotes por Jogo</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seção de Recursos */}
            <section className="py-20 px-6 sm:px-8 lg:px-12 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Por que escolher o MyProps?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Descubra as vantagens de usar nossa plataforma
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Rápido e Intuitivo</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Interface moderna e fácil de usar, com acesso instantâneo aos dados que você precisa.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Dados Precisos</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Estatísticas sempre atualizadas e verificadas, garantindo informações confiáveis.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl p-8 text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Análises Detalhadas</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Compare jogadores, veja tendências e descubra insights valiosos sobre o jogo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
