function Sobre() {
    return (
        <section id="sobre" className="relative snap-start h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-500 to-purple-600 text-white">
            <div className="absolute top-0 w-full h-10 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
            <h1 className="text-5xl font-bold mb-4">Bem-vindo ao Meu Portfólio</h1>
            <h2 className="text-xl mb-8">Desenvolvedor Frontend | React | Next.js | Tailwind CSS</h2>
            <a href="#projects" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">Ver Projetos</a>
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-sm text-gray-200/70">
                <span className="inline-flex items-center gap-2">
                    <a href="/#contato">
                        <svg className="w-8 h-8 sm:w-10 sm:h-10 animate-bounce" fill="none" stroke="purple" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </a>
                </span>
            </div>
        </section>
    )
}
export default Sobre;