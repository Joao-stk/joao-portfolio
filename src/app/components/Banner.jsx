"use client";
import { buttonFullStyle, hoverEffect } from "./Styles";
import { buttonOutlineStyle } from "./Styles";
import { buttonTecnologias } from "./Styles";
import { iconsAnimation } from "./Styles";
import React from "react";
import { motion } from "motion/react"


export default function Banner({

  title = "Transformando ideias em experiências digitais incríveis",
  subtitle = "Desenvolvedor Frontend | React | Next.js | Tailwind CSS. Vamos criar algo incrível juntos!",
  buttonLeftText = "Entre em contato",
  buttonLeftHref = "/#contato",
  buttonRightText = "Ver projetos",
  buttonRightHref = "/#projetos",
  

}) {

  return (

    <section id="home" className="flex flex-col snap-start relative md:grid md:grid-cols-2 w-full min-h-screen overflow-visible md:overflow-hidden">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        aria-hidden="true"
      />
      <div className="relative min-h-screen">


        <motion.div
          initial={{ x: 200, opacity: 0, rotate: 15, scale: 0.9 }}
          whileInView={{ x: 0, opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 80, damping: 12 }}
          viewport={{ once: true, amount: 0.5 }}
          className="relative z-10 flex flex-col h-full items-center justify-center text-left px-4 sm:px-6 md:items-start md:px-8 lg:px-12 py-12 md:py-20"
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white drop-shadow-lg text-center md:text-left">
            {title}
          </h1>

          <h2 className="mt-4 max-w-3xl text-xs sm:text-sm md:text-lg text-gray-200/90 text-center md:text-left">
            {subtitle}
          </h2>

          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-x-10 md:gap-x-10 mt-8 w-full max-w-md"
          >
            <a
              href={buttonLeftHref}
              className={buttonFullStyle + hoverEffect}
            >
              {buttonLeftText}
            </a>
            <a
              href={buttonRightHref}
              className={buttonOutlineStyle + hoverEffect}
            >
              {buttonRightText}
            </a>
          </motion.div>
        </motion.div>

      </div>
      <motion.div
        initial={{ y: -200, opacity: 0, rotate: -15, scale: 0.9 }}
        whileInView={{ y: 0, opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 1.5, type: "spring", stiffness: 80, damping: 12 }}
        viewport={{ once: true, amount: 0.5 }}
        className="flex min-h-screen items-center justify-center bg-transparent mb-0 md:mb-[5%] px-2 sm:px-4 z-90"
      >
        <div className="w-full h-full bg-gradient-to-tr from-black to-blue-900/60 flex flex-col items-center gap-8 sm:gap-10 px-2 sm:px-6 py-8 sm:py-10">
          <h2 className="text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-rose-500 font-medium text-center">Experiências</h2>
          <div className="w-full max-w-md p-4 sm:p-8 flex flex-col items-center gap-4 sm:gap-6 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
              <div className=" flex flex-col items-center rounded-xl p-3 sm:p-4 shadow ">
                <p className="text-3xl sm:text-4xl font-extrabold text-purple-700 mb-1">1+</p>
                <p className="text-sm sm:text-base text-white font-medium text-center">Ano de<br />Experiência</p>
              </div>
              <div className=" flex flex-col items-center rounded-xl p-3 sm:p-4 shadow ">
                <p className="text-3xl sm:text-4xl font-extrabold text-purple-700 mb-1">39K+</p>
                <p className="text-sm sm:text-base text-white font-medium text-center">Xícaras de Café<br />Tomadas</p>
              </div>
            </div>
            <div className="flex flex-col items-center rounded-xl p-3 sm:p-4 shadow w-full sm:w-2/3 mx-auto">
              <p className="text-3xl sm:text-4xl font-extrabold text-purple-700 mb-1">10+</p>
              <p className="text-sm sm:text-base text-white font-medium text-center">Clientes<br />Satisfeitos</p>
            </div>
          </div>
          {/* Tecnologias */}
          <div className="flex flex-col items-center gap-2 sm:gap-4 w-full mt-8 sm:mt-[30%]">
            <p className="text-lg sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-rose-500 font-medium text-center">Tecnologias:</p>
            <div className="flex gap-4 sm:gap-8 flex-wrap justify-center">
              <motion.a
                {...iconsAnimation}
                href="https://react.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className={buttonTecnologias + " w-8 h-8 sm:w-10 sm:h-10"}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >

                  {/* React */} <path d="M21.718 12c0-1.429-1.339-2.681-3.467-3.5.029-.18.077-.37.1-.545.217-2.058-.273-3.543-1.379-4.182-1.235-.714-2.983-.186-4.751 1.239C10.45 3.589 8.7 3.061 7.468 3.773c-1.107.639-1.6 2.124-1.379 4.182.018.175.067.365.095.545-2.127.819-3.466 2.071-3.466 3.5 0 1.429 1.339 2.681 3.466 3.5-.028.18-.077.37-.095.545-.218 2.058.272 3.543 1.379 4.182.376.213.803.322 1.235.316a5.987 5.987 0 0 0 3.514-1.56 5.992 5.992 0 0 0 3.515 1.56 2.44 2.44 0 0 0 1.236-.316c1.106-.639 1.6-2.124 1.379-4.182-.019-.175-.067-.365-.1-.545 2.132-.819 3.471-2.071 3.471-3.5Zm-6.01-7.548a1.5 1.5 0 0 1 .76.187c.733.424 1.055 1.593.884 3.212-.012.106-.043.222-.058.33-.841-.243-1.7-.418-2.57-.523a16.165 16.165 0 0 0-1.747-1.972 4.9 4.9 0 0 1 2.731-1.234Zm-7.917 8.781c.172.34.335.68.529 1.017.194.337.395.656.6.969a14.09 14.09 0 0 1-1.607-.376 14.38 14.38 0 0 1 .478-1.61Zm-.479-4.076a14.085 14.085 0 0 1 1.607-.376c-.205.313-.405.634-.6.969-.195.335-.357.677-.529 1.017-.19-.527-.35-1.064-.478-1.61ZM8.3 12a19.32 19.32 0 0 1 .888-1.75c.33-.568.69-1.118 1.076-1.65.619-.061 1.27-.1 1.954-.1.684 0 1.333.035 1.952.1a19.63 19.63 0 0 1 1.079 1.654c.325.567.621 1.15.887 1.746a18.869 18.869 0 0 1-1.953 3.403 19.218 19.218 0 0 1-3.931 0 20.169 20.169 0 0 1-1.066-1.653A19.324 19.324 0 0 1 8.3 12Zm7.816 2.25c.2-.337.358-.677.53-1.017.191.527.35 1.065.478 1.611a14.48 14.48 0 0 1-1.607.376c.202-.314.404-.635.597-.97h.002Zm.53-3.483c-.172-.34-.335-.68-.53-1.017a20.214 20.214 0 0 0-.6-.97c.542.095 1.078.22 1.606.376a14.111 14.111 0 0 1-.478 1.611h.002ZM12.217 6.34c.4.375.777.773 1.13 1.193-.37-.02-.746-.033-1.129-.033s-.76.013-1.131.033c.353-.42.73-.817 1.13-1.193Zm-4.249-1.7a1.5 1.5 0 0 1 .76-.187 4.9 4.9 0 0 1 2.729 1.233A16.253 16.253 0 0 0 9.71 7.658c-.87.105-1.728.28-2.569.524-.015-.109-.047-.225-.058-.331-.171-1.619.151-2.787.885-3.211ZM3.718 12c0-.9.974-1.83 2.645-2.506.218.857.504 1.695.856 2.506-.352.811-.638 1.65-.856 2.506C4.692 13.83 3.718 12.9 3.718 12Zm4.25 7.361c-.734-.423-1.056-1.593-.885-3.212.011-.106.043-.222.058-.331.84.243 1.697.418 2.564.524a16.37 16.37 0 0 0 1.757 1.982c-1.421 1.109-2.714 1.488-3.494 1.037Zm3.11-2.895c.374.021.753.034 1.14.034.387 0 .765-.013 1.139-.034a14.4 14.4 0 0 1-1.14 1.215 14.248 14.248 0 0 1-1.139-1.215Zm5.39 2.895c-.782.451-2.075.072-3.5-1.038a16.248 16.248 0 0 0 1.757-1.981 16.41 16.41 0 0 0 2.565-.523c.015.108.046.224.058.33.175 1.619-.148 2.789-.88 3.212Zm1.6-4.854A16.563 16.563 0 0 0 17.216 12c.352-.812.638-1.65.856-2.507 1.671.677 2.646 1.607 2.646 2.507 0 .9-.975 1.83-2.646 2.507h-.004Z" />
                                  <path d="M12.215 13.773a1.792 1.792 0 1 0-1.786-1.8v.006a1.787 1.787 0 0 0 1.786 1.794Z" />
                </svg>
              </motion.a>

              <motion.a
                {...iconsAnimation}
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className={buttonTecnologias + " w-8 h-8 sm:w-10 sm:h-10"}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                >
                  {/* Next.js */}
                  <path
                    fill="white"
                    d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"
                  />
                </svg>
              </motion.a>

              <motion.a
                {...iconsAnimation}
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className={buttonTecnologias + " w-8 h-8 sm:w-10 sm:h-10"}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* Tailwind */}
                  <path d="M11.782 5.72a4.773 4.773 0 0 0-4.8 4.173 3.43 3.43 0 0 1 2.741-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.934-2.865 3.137-3.921-.969 1.379-2.44 2.207-4.259 1.231-1.253-.673-2.19-3.438-5.959-3.318ZM6.8 11.979A4.772 4.772 0 0 0 2 16.151a3.431 3.431 0 0 1 2.745-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.933-2.865 3.137-3.921-.97 1.379-2.44 2.208-4.259 1.231-1.253-.673-2.19-3.443-5.963-3.317Z" />
                </svg>
              </motion.a>

            </div>
          </div>
        </div>
      </motion.div>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-sm z-99">
        <span className="inline-flex items-center gap-2">
          <a href={buttonRightHref} className="inline-block">
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
  );
}
