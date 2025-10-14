function Sobre() {
    return (
        <section id="sobre" className="relative snap-start h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-500 to-purple-600 text-white">
            <div className="absolute top-0 w-full h-10 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
            <h1 className="text-5xl font-bold mb-4">Bem-vindo ao Meu Portfólio</h1>
            <h2 className="text-xl mb-8">Desenvolvedor Frontend | React | Next.js | Tailwind CSS</h2>
            <a href="#projects" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">Ver Projetos</a>
        </section>
    )
}
export default Sobre;