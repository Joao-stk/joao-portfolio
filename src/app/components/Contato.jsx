import { Mail } from "lucide-react";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { bgDiv, iconStyle, hoverEffect } from "./Styles";


function Contato() {
    return (
        <section id="contato" className="relative snap-start h-screen flex flex-col justify-center bg-gradient-to-b from-purple-200 to-blue-200 text-black">
            <div className="absolute top-0 w-full h-10 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
            <h1 className="ml-auto mr-auto">Contato</h1>
            <div className="grid grid-cols-2 mt-10 ml-[5%]">
                <div>
                    <div className="flex flex-row items-center rounded-xl p-2 bg-gradient-to-r from-purple-500 to-blue-500 outline-black outline-2 shadow-2xl">
                        <div className={iconStyle + hoverEffect}>
                            <Mail className="text-black" size={40} />
                        </div>

                        <div>
                            <div className={bgDiv + hoverEffect}>
                                <h2>Email</h2>
                                <p>joaoufelipe@hotmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row items-center rounded-xl p-2 bg-gradient-to-r from-purple-500 to-blue-500 outline-black outline-2 shadow-2xl">
                        <div className={iconStyle + hoverEffect}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="text-black-500 w-10 h-10"
                            >
                                <path d="M20.52 3.48A11.89 11.89 0 0 0 12 0C5.37 0 .09 5.27.09 11.78c0 2.08.55 4.11 1.6 5.9L0 24l6.47-1.67a12 12 0 0 0 5.52 1.37h.01c6.63 0 11.91-5.27 11.91-11.78 0-3.15-1.24-6.1-3.39-8.44Zm-8.52 18a9.94 9.94 0 0 1-5.08-1.39l-.36-.21-3.84 1 .98-3.74-.24-.38a9.83 9.83 0 0 1-1.55-5.32C2.91 6.92 7.01 2.9 12 2.9c2.56 0 4.96.99 6.77 2.79a9.47 9.47 0 0 1 2.8 6.7c0 5.03-4.1 9.09-9.57 9.09Zm5.51-7.03c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.75.97-.93 1.17-.17.2-.34.22-.64.07-.3-.15-1.27-.47-2.43-1.5-.9-.8-1.51-1.79-1.69-2.09-.18-.3-.02-.46.13-.61.14-.14.3-.34.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.65-1.56-.9-2.14-.24-.57-.48-.49-.65-.5h-.56c-.19 0-.5.07-.77.37-.27.3-1.01.98-1.01 2.4s1.03 2.79 1.17 2.98c.15.2 2.03 3.1 4.93 4.35.69.3 1.23.48 1.65.61.69.22 1.31.19 1.8.12.55-.08 1.77-.72 2.02-1.41.25-.69.25-1.28.17-1.41-.08-.13-.27-.2-.57-.35Z" />
                            </svg>
                        </div>


                        <div>
                            <div className={bgDiv + hoverEffect}>
                                <h2>Whatsapp</h2>
                                <p className="whitespace-nowrap">+55 (16) 99333-0441</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row items-center rounded-xl p-2 bg-gradient-to-r from-purple-500 to-blue-500 outline-black outline-2 shadow-2xl">
                        <div className={iconStyle + hoverEffect}>
                            <Github className="text-black" size={40} />
                        </div>

                        <div>
                            <div className={bgDiv + hoverEffect}>
                                <h2>Github</h2>
                                <p>Github</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row items-center rounded-xl p-2 bg-gradient-to-r from-purple-500 to-blue-500 outline-black outline-2 shadow-2xl">
                        <div className={iconStyle + hoverEffect}>
                            <Linkedin className="text-black" size={40} />
                        </div>

                        <div>
                            <div className={bgDiv + hoverEffect}>
                                <h2>LinkedIn</h2>
                                <p className="whitespace-nowrap">João Felipe Araújo da Silva</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}
export default Contato;