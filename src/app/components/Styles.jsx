// src/utils/tailwindClasses.js

export const hoverEffect = "transition-transform duration-200 ease-in-out hover:scale-105";
export const iconStyle = "cursor-pointer flex items-center justify-center bg-white rounded-full w-[70px] h-[70px] shadow-lg border-2 border-black text-purple-500";
export const buttonFullStyle = "bg-gradient-to-r from-purple-500 to-rose-500 mt-6 flex justify-center items-center text-center rounded-full px-4 py-2 text-sm md:px-8 md:py-4 md:text-base lg:px-12 lg:text-lg font-bold text-white shadow-lg md:whitespace-nowrap lg:whitespace-nowrap xl:whitespace-nowrap";
export const buttonOutlineStyle = "bg-transparent mt-6 flex justify-center items-center text-center gap-3 rounded-full px-4 py-2 text-sm md:px-8 md:py-4 md:text-base lg:px-12 lg:text-lg font-bold text-white shadow-sm shadow-white active-bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400";
export const buttonTecnologias = "w-30 h-30 text-gray-800 text-white cursor-pointer "
export const iconsAnimation = {
    whileHover: {
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        transition: {
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
        }
    },
    initial:{ scale: 1, rotate: 0, borderRadius: "0%" }
};
export const projectsAnimation = {
          initial:{y:300, opacity: 0, rotate: 30, scale: 0.5 },
          whileInView:{y:0, opacity: 1, rotate: 0, scale: 1 },
          transition:{ duration: 0.5},
          viewport:{ once: true, amount: 0.5 }
};
export const gradientText = "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-rose-500"
