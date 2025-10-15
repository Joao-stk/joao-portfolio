// src/utils/tailwindClasses.js
export const bgDiv = "cursor-pointer ml-[5%] mr-[5%]";
export const hoverEffect = "transition-transform duration-200 ease-in-out hover:scale-105";
export const iconStyle = "cursor-pointer flex items-center justify-center bg-white rounded-full w-[70px] h-[70px] shadow-lg";
export const buttonFullStyle = "bg-gradient-to-r from-purple-500 to-rose-500 mt-6 flex justify-center items-center text-center rounded-full px-4 py-2 text-sm md:px-8 md:py-4 md:text-base lg:px-12 lg:text-lg font-bold text-white shadow-lg md:whitespace-nowrap lg:whitespace-nowrap xl:whitespace-nowrap";
export const buttonOutlineStyle = "bg-transparent border-2 border-purple-300 mt-6 flex justify-center items-center text-center gap-3 rounded-full px-4 py-2 text-sm md:px-8 md:py-4 md:text-base lg:px-12 lg:text-lg font-bold text-purple-500 shadow-lg";
export const buttonTecnologias = "w-30 h-30 text-gray-800 dark:text-white"
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
