"use client";
import { isActiveSection } from "../hooks/isActiveSection";
import {motion } from "motion/react"

function Menu() {
  const sectionIds = ["home", "projetos", "sobre", "contato"];
  const activeId = isActiveSection(sectionIds);

  return (
    <motion.nav
    initial={{ y: 200, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-white shadow-lg rounded-l-xl p-4 flex flex-col gap-4 z-99">
      {sectionIds.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={`
            transition-all duration-300 ease-in-out
            ${activeId === id ? "text-indigo-600 font-bold scale-110" : "text-gray-700 font-normal scale-100"}
          `}
        >
          {id.charAt(0).toUpperCase() + id.slice(1)}
        </a>
      ))}
    </motion.nav>
  );
}

export default Menu;
