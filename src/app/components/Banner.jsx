"use client";

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
  title = "João Felipe Araújo da Silva",
  subtitle = "Desenvolvedor Frontend | React | Next.js | Tailwind CSS",
  ctaText = "Saiba mais",
  ctaHref = "/#contato",
}) {
  return (
    <section id="home" className="snap-start relative w-full min-h-screen overflow-hidden">
      {/* Background image: usando bg-fixed para efeito de "attachment" */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url(${image})`,
        }}
        aria-hidden="true"
      />

      {/* Overlay escuro para contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/50" />

      {/* Conteúdo */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <h1 className="text-3xl md:text-5xl lg:text-6xl text-white drop-shadow-lg">
          {title}
        </h1>
        <h2 className="mt-4 max-w-3xl text-sm md:text-lg text-gray-200/90">
          {subtitle}
        </h2>

        <a
          href={ctaHref}
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-indigo-600/95 px-6 py-3 text-sm md:text-base font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
        >
          {ctaText}
        </a>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-sm text-gray-200/70">
          <span className="inline-flex items-center gap-2">
            <svg className="w-10 h-10 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
}
