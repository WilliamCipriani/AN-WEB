import React from "react";

function Footer() {
    return (
        <footer style={{ backgroundColor: '#E3EBFC' }} className=" text-black p-6 flex flex-col md:flex-row justify-between items-center">
            <div className="w-1/2 mb-6 md:mb-0 text-center">
                <h2 className="text-4xl font-bold mb-2 ">¡Ponerse en contacto!</h2>
                <p className="mb-4">
                    Descubre cómo nuestros productos pueden ayudarle <br/> a ser más productivo.
                </p>
                <a
                href="#"
                className="bg-blue-500 text-white py-4 px-20 rounded mb-4 inline-block text-lg"
                >
                    Contacto
                </a>
                <p className="font-bold text-2xl">Teléfono <span className="text-xl  mr-5">99999999</span></p>
                <p className="font-bold text-2xl">Email <span  className="text-xl  mr-5">contacto@gmail.com</span></p>
            </div>
            <div className="w-1/2">
                <img
                src="/image/Footer/footer.jpg"
                alt="imagen del pie de pagina"
                className="h-96 w-80 object-cover"
                />
            </div>
        </footer>
    );
}

export default Footer;
