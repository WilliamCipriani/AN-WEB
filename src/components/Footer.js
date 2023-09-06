import React from "react";

function Footer() {
    return (
        <footer class="w-full min-h-[28rem] flex items-center justify-center bg-black">
            <div class="md:w-2/3 w-full px-6 text-white flex flex-col">
                <div class="w-full text-7xl font-bold">
                    <h1 class="w-full md:w-2/3">¡Ponerse en contacto!</h1>
                </div>
                <div class="flex mt-8 flex-col md:flex-row md:justify-between">
                    <p class="w-full md:w-2/3 text-gray-400">
                        Descubre cómo nuestros productos pueden ayudarle a ser más productivo.
                    </p>
                    <div class="w-44 pt-6 md:pt-0">
                        <a href="#" class="bg-red-500 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center">
                            Contacto
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
