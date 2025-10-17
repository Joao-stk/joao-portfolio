'use client'
import { motion } from "motion/react";

function Sobre() {
    return (
        <section id="sobre" className="relative snap-start h-screen flex flex-col">
            <motion.h1
                animate={{ y: 0, rotate: 0, opacity: 1 }}
                intial={{ y: 500, rotate: 30, opacity: 0 }}
                transition={{ duration: 1.5, type: "spring", stiffness: 80, damping: 12 }}
                className="text-5xl font-bold mb-4 items-center text-center mt-10">Sobre Mim</motion.h1>
            <motion.h2
                whileInView={{ y: 0, rotate: 0, opacity: 1 }}
                animate={{ y: 500, rotate: 30, opacity: 0 }}
                transition={{ duration: 1.5, type: "spring", stiffness: 80, damping: 12 }}
                viewport={{ once: true, amount: 0.5 }}
                className="mb-8 text-center">Desenvolvedor Frontend | React | Next.js | Tailwind CSS</motion.h2>
            <div className="grid grid-cols-2 h-full items-center">
                <motion.div
                    whileInView={{ y: 0, rotate: 0, opacity: 1 }}
                    animate={{ y: 500, rotate: 30, opacity: 0 }}
                    transition={{ duration: 1.5, type: "spring", stiffness: 80, damping: 12 }}
                    viewport={{ once: true, amount: 0 }}
                    className={"bg-white/20 flex flex-col rounded-lg text-left p-5 outline-1 w-full mr-[5%] ml-[5%]"}>
                    <h3>Minha Jornada</h3>
                    <p className="text-justify">Desde pequeno sempre fui apaixonado por computadores. A curiosidade em entender como as coisas funcionavam me levou a explorar diversas áreas da tecnologia. Participei por alguns anos de projetos de robótica, competindo em torneios regionais e estaduais, e também realizei cursos voltados principalmente para hardware.

                        <br /><br />Mais tarde, iniciei a faculdade de Análise e Desenvolvimento de Sistemas, e atualmente atuo com automações e gestão de TI.

                        Foi nesse caminho que descobri minha verdadeira afinidade pela área de frontend — tudo começou ao entender como funcionava um site simples, e desde então, mergulhei de vez no desenvolvimento web. Hoje, continuo aprimorando minhas habilidades e também crio designs e interfaces para sites, unindo lógica e criatividade em cada projeto.</p>

                </motion.div>
            </div>
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-sm">
                <span className="inline-flex items-center gap-2">
                    <a href="/#contato" className="inline-block">
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
export default Sobre;