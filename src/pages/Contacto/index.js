import Image from "next/image";
import { useState } from "react";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Contacto() {

    return (
        <>
        <Header />
        <div className="h-full bg-white mt-20">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">Contacta con Nosotros</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">¿Tienes un problema técnico? ¿Quiere enviar comentarios sobre una función beta? ¿Necesita detalles sobre nuestro plan Business? Haznos saber.</p>
                <form action="#" className="space-y-8" >
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Nombre Completo</label>
                    <input
                    type="text"
                    id="name"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                    placeholder="nombre"
                    required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Correo</label>
                    <input
                    type="email"
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                    placeholder="name@gmail.com"
                    required
                    />
                </div>
                <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Asunto</label>
                    <input
                    type="text"
                    id="subject"
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                    placeholder="Permítenos saber en qué te podemos ayudar"
                    required
                    />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">Mensaje</label>
                    <textarea
                    id="message"
                    rows="6"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                    placeholder="Deja un comentario..."
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
                >
                    Enviar
                </button>
                </form>
            </div>
        </div>
        </>
    );
}
