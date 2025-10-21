"use client";
import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "motion/react";
import {
  bgDiv,
  iconStyle,
  hoverEffect,
  buttonFullStyle,
  buttonOutlineStyle,
  gradientText,
} from "./Styles";

function Contato() {
  return (
    <section
      id="contato"
      className="relative min-h-screen flex flex-col justify-center py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Losango de fundo */}
      <div className="absolute w-[80%] sm:w-[70%] h-40 sm:h-48 bg-purple-400/20 rotate-10 blur-2xl top-[-5%] left-[-15%] rounded-lg pointer-events-none z-0" />
      
      {/* Título */}
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-[2%] md:mb-[5%] lg:mb-[10%]"
      >
        Contato
      </motion.h1>

      {/* Container Principal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 w-full max-w-6xl mx-auto">
        
        {/* Coluna Esquerda - Contatos */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:col-span-1 flex flex-col items-center justify-around gap-6"
        >
          {/* WhatsApp */}
          <motion.a
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.2 }}
            href="https://wa.me/5516993330441"
            target="_blank"
            rel="noopener noreferrer"
            className={`${hoverEffect} flex flex-col sm:flex-row items-center text-center sm:text-left p-4 sm:p-6 cursor-pointer w-full bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300`}
          >
            <div className={`${iconStyle} mb-3 sm:mb-0 sm:mr-4 flex-shrink-0`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="text-black w-8 h-8 sm:w-10 sm:h-10"
              >
                <path d="M20.52 3.48A11.89 11.89 0 0 0 12 0C5.37 0 .09 5.27.09 11.78c0 2.08.55 4.11 1.6 5.9L0 24l6.47-1.67a12 12 0 0 0 5.52 1.37h.01c6.63 0 11.91-5.27 11.91-11.78 0-3.15-1.24-6.1-3.39-8.44Zm-8.52 18a9.94 9.94 0 0 1-5.08-1.39l-.36-.21-3.84 1 .98-3.74-.24-.38a9.83 9.83 0 0 1-1.55-5.32C2.91 6.92 7.01 2.9 12 2.9c2.56 0 4.96.99 6.77 2.79a9.47 9.47 0 0 1 2.8 6.7c0 5.03-4.1 9.09-9.57 9.09Zm5.51-7.03c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.93 1.17-.17.2-.34.22-.64.07-.3-.15-1.27-.47-2.43-1.5-.9-.8-1.51-1.79-1.69-2.09-.18-.3-.02-.46.13-.61.14-.14.3-.34.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.65-1.56-.9-2.14-.24-.57-.48-.49-.65-.5h-.56c-.19 0-.5.07-.77.37-.27.3-1.01.98-1.01 2.4s1.03 2.79 1.17 2.98c.15.2 2.03 3.1 4.93 4.35.69.3 1.23.48 1.65.61.69.22 1.31.19 1.8.12.55-.08 1.77-.72 2.02-1.41.25-.69.25-1.28.17-1.41-.08-.13-.27-.2-.57-.35Z" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-1">WhatsApp</h2>
              <p className="text-gray-300 text-sm sm:text-base">+55 (16) 99333-0441</p>
            </div>
          </motion.a>

          {/* GitHub */}
          <motion.a
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            href="https://github.com/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className={`${hoverEffect} flex flex-col sm:flex-row items-center text-center sm:text-left p-4 sm:p-6 cursor-pointer w-full bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300`}
          >
            <div className={`${iconStyle} mb-3 sm:mb-0 sm:mr-4 flex-shrink-0`}>
              <Github className="text-black w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-1">GitHub</h2>
              <p className="text-gray-300 text-sm sm:text-base">@Joao-stk</p>
            </div>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            href="https://linkedin.com/in/seu-perfil"
            target="_blank"
            rel="noopener noreferrer"
            className={`${hoverEffect} flex flex-col sm:flex-row items-center text-center sm:text-left p-4 sm:p-6 cursor-pointer w-full bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300`}
          >
            <div className={`${iconStyle} mb-3 sm:mb-0 sm:mr-4 flex-shrink-0`}>
              <Linkedin className="text-black w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-1">LinkedIn</h2>
              <p className="text-gray-300 text-sm sm:text-base whitespace-nowrap">João Felipe Araújo da Silva</p>
            </div>
          </motion.a>
        </motion.div>

        {/* Coluna Direita - Formulário */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="lg:col-span-2 flex flex-col justify-center"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10 p-6 sm:p-8 lg:p-10">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 text-white"
            >
              Entre em contato
            </motion.h2>
            
            <motion.form
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4 sm:gap-6 w-full"
            >
              <input
                type="text"
                placeholder="Nome"
                className={`${buttonOutlineStyle} text-left rounded-lg px-4 py-3 sm:py-4 text-white placeholder-gray-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
              />
              <input
                type="email"
                placeholder="Email"
                className={`${buttonOutlineStyle} text-left rounded-lg px-4 py-3 sm:py-4 text-white placeholder-gray-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
              />
              <textarea
                placeholder="Mensagem"
                rows={5}
                className={`${buttonOutlineStyle} text-left rounded-lg px-4 py-3 sm:py-4 text-white placeholder-gray-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none min-h-[120px]`}
              ></textarea>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className={`${buttonFullStyle} ${hoverEffect} cursor-pointer py-3 sm:py-4 text-sm sm:text-base font-semibold mt-2 rounded-lg transition-all duration-300`}
              >
                Enviar Mensagem
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contato;