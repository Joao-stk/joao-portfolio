"use client";
import { buttonFullStyle } from "./Styles";
import { buttonOutlineStyle } from "./Styles";
import React from "react";
import { motion } from "motion/react"

export default function Banner({

  image = "/banner.jpg",
  title = "Transformando ideias em experiências digitais incríveis",
  subtitle = "Desenvolvedor Frontend | React | Next.js | Tailwind CSS. Vamos criar algo incrível juntos!",
  buttonLeftText = "Entre em contato",
  buttonLeftHref = "/#contato",
  buttonRightText = "Ver projetos",
  buttonRightHref = "/#projetos",

}) {

  return (

    <section id="home" className="flex flex-col snap-start relative md:grid md:grid-cols-2 w-full min-h-screen overflow-visible md:overflow-hidden">
      <div className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{
            backgroundImage: `url(${image})`,
          }}
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/50" />

        <motion.div
          initial={{ x: 200, opacity: 0, rotate: 15, scale: 0.9 }}
          whileInView={{ x: 0, opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 80, damping: 12 }}
          viewport={{ once: false, amount: 0.5 }}
          className="relative z-10 flex flex-col h-full items-center justify-center text-left px-3 md:items-start md:px-6 lg:px-9 py-20"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-white drop-shadow-lg">
            {title}
          </h1>

          <h2 className="mt-4 max-w-3xl text-sm md:text-lg text-gray-200/90">
            {subtitle}
          </h2>

          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }} // entra logo depois do título
            className="grid grid-cols-2 gap-x-20 mt-8"
          >
            <motion.a
              initial={{ rotate: 5 }}
              whileHover={{ rotate: 0 }}
              transition={{ duration: 0.2 }}
              href={buttonLeftHref}
              className={buttonFullStyle}
            >
              {buttonLeftText}
            </motion.a>

            <motion.a
              initial={{ rotate: -5 }}
              whileHover={{ rotate: 0 }}
              transition={{ duration: 0.2 }}
              href={buttonRightHref}
              className={buttonOutlineStyle}
            >
              {buttonRightText}
            </motion.a>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-sm text-gray-200/70">
          <span className="inline-flex items-center gap-2">
            <a href={buttonRightHref}>
              <svg className="w-10 h-10 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
