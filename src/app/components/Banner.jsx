"use client";
import { buttonFullStyle } from "./Styles";
import { buttonOutlineStyle } from "./Styles";
import React from "react";

/**
 * Banner.jsx
 * Componente React (Next.js / Create React App) usando Tailwind
 * Utiliza bg-fixed (background-attachment: fixed) para efeito tipo "parallax" simples
 * Props:
 *  - image: caminho para a imagem (padrão: /banner.jpg)
 *  - title: título principal
 *  - subtitle: subtítulo/descritivo
 *  - ctaText: texto do botão
 *  - ctaHref: href do botão
 */

export default function Banner({
  image = "/banner.jpg",
  title = "Transformando ideias em experiências digitais incríveis",
  subtitle = "Desenvolvedor Frontend | React | Next.js | Tailwind CSS. Vamos criar algo incrível juntos!",
  buttonLeftText = "Entre em contato →",
  buttonLeftHref = "/#contato",
  buttonRightText = "Ver projetos",
  buttonRightHref = "/#projetos",
}) {
  return (
    <section id="home" className="snap-start relative grid grid-cols-2 w-full min-h-screen overflow-hidden">
      <div>
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{
            backgroundImage: `url(${image})`,
          }}
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/50" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-left px-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-white drop-shadow-lg">
            {title}
          </h1>
          <h2 className="mt-4 max-w-3xl text-sm md:text-lg text-gray-200/90">
            {subtitle}
          </h2>
          <div className="grid grid-cols-2 gap-x-20">
            <a
              href={buttonLeftHref}
              className={buttonFullStyle}
            >
              {buttonLeftText}
            </a>
            <a
              href={buttonRightHref}
              className={buttonOutlineStyle}
            >
              {buttonRightText}
            </a>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-sm text-gray-200/70">
          <span className="inline-flex items-center gap-2">
            <a href={buttonRightHref}>
            <svg  className="w-10 h-10 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
