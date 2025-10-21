"use client";
import { motion } from "motion/react";
import { gradientText } from "./Styles";

function Sobre() {
  return (
    <section
      id="sobre"
      className="relative snap-start min-h-screen flex flex-col items-center justify-center py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Cabeçalho */}
      <div className="text-center mb-8 sm:mb-12 lg:mb-16 w-full max-w-6xl">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-white"
        >
          Sobre Mim
        </motion.h1>
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
        >
          Desenvolvedor Frontend | React | Next.js | Tailwind CSS
        </motion.h2>
      </div>

      {/* Conteúdo Principal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 w-full max-w-6xl items-start">
        
        {/* Coluna Esquerda - Jornada */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className=" text-left w-full "
        >
          <div className=" flex inline-flex items-center mb-4 sm:mb-6 ">
            <h3 className=" text-xl sm:text-2xl md:text-3xl lg:text-4xl pr-2 text-white ">Minha</h3>
            <h3 className={`${gradientText} text-xl sm:text-2xl md:text-3xl lg:text-4xl`}>
              Jornada
            </h3>
          </div>
          <div className=" backdrop-blur-sm ">
            <p className="text-sm sm:text-base lg:text-lg text-white leading-relaxed sm:leading-loose text-justify ">
              Desde pequeno sempre fui apaixonado por computadores. A curiosidade
              em entender como as coisas funcionavam me levou a explorar diversas
              áreas da tecnologia. Participei por alguns anos de projetos de
              robótica, competindo em torneios regionais e estaduais, e também
              realizei cursos voltados principalmente para hardware.
              <br />
              <br />
              Mais tarde, iniciei a faculdade de Análise e Desenvolvimento de
              Sistemas, e atualmente atuo com automações e gestão de TI. Foi nesse
              caminho que descobri minha verdadeira afinidade pela área de
              frontend — tudo começou ao entender como funcionava um site simples,
              e desde então, mergulhei de vez no desenvolvimento web. Hoje,
              continuo aprimorando minhas habilidades e também crio designs e
              interfaces para sites, unindo lógica e criatividade em cada projeto.
            </p>
          </div>
        </motion.div>

        {/* Coluna Direita - Objetivo */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-left w-full"
        >
          <div className="flex items-center mb-4 sm:mb-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl pr-2 text-white">Meu</h3>
            <h3 className={`${gradientText} text-xl sm:text-2xl md:text-3xl lg:text-4xl`}>
              Objetivo
            </h3>
          </div>
          <div className=" backdrop-blur-sm">
            <p className="text-sm sm:text-base lg:text-lg text-white leading-relaxed sm:leading-loose text-justify">
              Eu sou o João Felipe, tenho 21 anos e sou apaixonado por
              desenvolvimento front-end. Trabalho criando aplicações web modernas
              e funcionais, utilizando frameworks como React, Next.js e Tailwind
              CSS. Aplicações front-end que unem design, performance e
              usabilidade.
              <br />
              <br />
              Meu foco é transformar ideias em experiências digitais intuitivas,
              eficientes e visualmente atraentes, ajudando empresas e projetos a
              se destacarem no mundo digital.
              <br />
              <br />
              Tem um projeto em mente ou quer saber mais sobre meus serviços e
              valores? Vamos conversar e transformar suas ideias em soluções web
              reais! 💻✨
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 xs:bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <span className="inline-flex items-center gap-2">
          <a href="./#contato" className="inline-block">
            <svg
              className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 animate-bounce filter invert"
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
  );
}

export default Sobre;