function Projetos() {
    return (
        <section
            id="projetos"
            className="snap-start h-screen flex flex-col justify-center items-center bg-gradient-to-b from-violet-200/80 to-blue-200/80 text-black relative overflow-hidden"
        >
            {/* Losango de fundo */}
            <div className="absolute w-60 h-60 bg-purple-400/30 rotate-45 blur-3xl top-[-10%] left-[-10%] rounded-lg pointer-events-none z-0" />
            <div className="absolute w-80 h-80 bg-pink-400/20 rotate-45 blur-2xl bottom-[-20%] right-[-15%] rounded-lg pointer-events-none z-0" />

            {/* Conteúdo acima */}
            <div className="absolute top-0 w-full h-10 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
            <div className="text-center z-10">
                <h1 className="text-5xl font-bold mb-4">Meus Projetos</h1>
                <h2 className="text-xl mb-8">Aqui estão alguns dos meus trabalhos recentes</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 w-full max-w-6xl z-10">
                {/* Exemplo de projeto */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <img src="/projeto1.png" alt="Projeto 1" className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Projeto 1</h3>
                        <p className="text-gray-600 mb-4">Descrição</p>
                        <a href="#" className="text-indigo-600 hover:underline">Ver mais</a>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-sm text-gray-200/70">
                <span className="inline-flex items-center gap-2">
                    <a href="/#sobre">
                        <svg className="w-8 h-8 sm:w-10 sm:h-10 animate-bounce" fill="none" stroke="purple" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </a>
                </span>
            </div>
        </section>

    )
}
export default Projetos;