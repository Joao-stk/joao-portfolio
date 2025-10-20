'use client'
import { motion } from "motion/react"
import { projectsAnimation } from "./Styles";

function Projetos() {
    return (
        <section
            id="projetos"
            className="snap-start h-screen flex flex-col justify-center items-center relative overflow-hidden"
        >
            {/* Losango de fundo */}
            <div className="absolute w-[60%] h-60 bg-purple-400/30 rotate-45 blur-3xl top-[-10%] left-[-10%] rounded-lg pointer-events-none z-0" />
            <div className="absolute w-[50%] h-80 bg-pink-400/20 rotate-45 blur-3xl bottom-[-20%] right-[-15%] rounded-lg pointer-events-none z-0" />

            {/* Conteúdo acima */}
            <div className="text-center z-10">
                <h1 className="text-5xl font-bold mb-4">Meus Projetos</h1>
                <h2 className="text-xl mb-8">Aqui estão alguns dos meus trabalhos recentes</h2>
            </div>

            <motion.div {...projectsAnimation} 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 w-full max-w-6xl z-10">
                <div
                    className="cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <img src="/projeto1.png" alt="Projeto 1" className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Projeto 1</h3>
                        <p className="text-gray-600 mb-4">Descrição</p>
                        <a href="#" className="text-indigo-600 hover:underline">Ver mais</a>
                    </div>
                </div>
                <div className="cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <img src="/projeto2.png" alt="Projeto 1" className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Projeto 2</h3>
                        <p className="text-gray-600 mb-4">Descrição</p>
                        <a href="#" className="text-indigo-600 hover:underline">Ver mais</a>
                    </div>
                </div>
                <div className="cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <img src="/projeto3.png" alt="Projeto 1" className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Projeto 3</h3>
                        <p className="text-gray-600 mb-4">Descrição</p>
                        <a href="#" className="text-indigo-600 hover:underline">Ver mais</a>
                    </div>
                </div>
            </motion.div>

            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-sm">
                <span className="inline-flex items-center gap-2">
                    <a href="/#sobre" className="inline-block">
                        <svg
                            className="w-8 h-8 sm:w-10 sm:h-10 animate-bounce filter invert"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke="white"
                                strokeWidth="5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 9l-7 7-7-7"
                                fill="none"
                            />
                            <path
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 9l-7 7-7-7"
                                fill="none"
                            />
                        </svg>
                    </a>
                </span>
            </div>
        </section>

    )
}
export default Projetos;