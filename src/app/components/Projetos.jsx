"use client";
import { motion } from "motion/react";
import { hoverEffect, projectsAnimation } from "./Styles";

function Projetos() {
  return (
    <section
      id="projetos"
      className="snap-start min-h-screen flex flex-col justify-center items-center relative overflow-hidden py-8 sm:py-12 lg:py-16 px-4 sm:px-6"
    >
      {/* Losango de fundo simplificado */}
      <div className="absolute w-[90%] h-32 bg-purple-400/20 rotate-45 blur-2xl top-[-5%] left-[-10%] rounded-lg pointer-events-none z-0" />
      <div className="absolute w-[80%] h-40 bg-pink-400/15 rotate-45 blur-2xl bottom-[-10%] right-[-15%] rounded-lg pointer-events-none z-0" />

      {/* Conteúdo acima */}
      <div className="text-center z-10 mb-6 sm:mb-8 lg:mb-12 w-full max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 text-white"
        >
          Meus Projetos
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-sm sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
        >
          Aqui estão alguns dos meus trabalhos recentes
        </motion.h2>
      </div>

      {/* Container dos projetos com altura fixa e scroll */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className=" w-full max-w-6xl z-10 flex-1 flex items-center "
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 w-full">
          {/* Projeto 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
            }}
            viewport={{ once: true }}
            className={
              hoverEffect +
              " cursor-pointer bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-lg overflow-hidden border border-white/20 hover:border-white/30 transition-all duration-200 min-h-[280px] flex flex-col "
            }
          >
            <div className="w-full h-32 sm:h-36 md:h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-white text-base sm:text-lg font-semibold">
                Projeto 1
              </span>
            </div>
            <div className="p-3 sm:p-4 flex-1 flex flex-col">
              <h3 className="text-base sm:text-lg font-semibold mb-2 text-white">
                Landing Page Moderna
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed flex-1">
                Site responsivo com design moderno e otimizado para SEO.
              </p>
              <a
                href="#"
                className="text-purple-400 hover:text-purple-300 font-medium text-xs sm:text-sm transition-colors duration-200 inline-flex items-center gap-1 mt-3"
              >
                Ver mais
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Projeto 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
            }}
            viewport={{ once: true }}
            className={
              hoverEffect +
              " cursor-pointer bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-lg overflow-hidden border border-white/20 hover:border-white/30 transition-all duration-200 min-h-[280px] flex flex-col "
            }
          >
            <div className="w-full h-32 sm:h-36 md:h-40 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-white text-base sm:text-lg font-semibold">
                Projeto 2
              </span>
            </div>
            <div className="p-3 sm:p-4 flex-1 flex flex-col">
              <h3 className="text-base sm:text-lg font-semibold mb-2 text-white">
                E-commerce
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed flex-1">
                Plataforma de vendas online com carrinho e checkout.
              </p>
              <a
                href="#"
                className="text-purple-400 hover:text-purple-300 font-medium text-xs sm:text-sm transition-colors duration-200 inline-flex items-center gap-1 mt-3"
              >
                Ver mais
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Projeto 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
            }}
            viewport={{ once: true }}
            className={
              hoverEffect +
              " cursor-pointer bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-lg overflow-hidden border border-white/20 hover:border-white/30 transition-all duration-200 min-h-[280px] flex flex-col sm:col-span-2 xl:col-span-1"
            }
          >
            <div className="w-full h-32 sm:h-36 md:h-40 bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-white text-base sm:text-lg font-semibold">
                Projeto 3
              </span>
            </div>
            <div className="p-3 sm:p-4 flex-1 flex flex-col">
              <h3 className="text-base sm:text-lg font-semibold mb-2 text-white">
                Dashboard Admin
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed flex-1">
                Painel administrativo com gráficos e relatórios em tempo real.
              </p>
              <a
                href="#"
                className="text-purple-400 hover:text-purple-300 font-medium text-xs sm:text-sm transition-colors duration-200 inline-flex items-center gap-1 mt-3"
              >
                Ver mais
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 xs:bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <span className="inline-flex items-center gap-2">
          <a href="./#sobre" className="inline-block">
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

export default Projetos;
