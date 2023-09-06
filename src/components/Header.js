import React from "react";
import { useState } from "react";

function Header() {

    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleNavToggle = () => {
        setIsNavOpen(!isNavOpen);
    };


    return (
        <header className="bg-slate-50 border-b border-gray-200 fixed w-full z-20 top-0 left-0  ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div  className="flex items-center flex-shrink-0">
                    <img src="/next.svg" className="h-8 mr-3" alt="AN Logo" />
                </div>
                <div className="flex md:order-2 justify-end">
                    <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-950 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded={isNavOpen} onClick={handleNavToggle}>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div className={`items-center justify-between ${isNavOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-cta">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-slate-50  md:light:bg-gray-900 light:border-gray-700">
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-slate-950 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-slate-950 dark:hover:bg-gray-700 dark:hover:text-slate-950 md:dark:hover:bg-transparent dark:border-gray-700" >INICIO</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-slate-950 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-slate-950 dark:hover:bg-gray-700 dark:hover:text-slate-950 md:dark:hover:bg-transparent dark:border-gray-700">ANÁLISIS DE DATOS</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-slate-950 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-slate-950 dark:hover:bg-gray-700 dark:hover:text-slate-950 md:dark:hover:bg-transparent dark:border-gray-700">DESARROLLO WEB</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-slate-950 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-slate-950 dark:hover:bg-gray-700 dark:hover:text-slate-950 md:dark:hover:bg-transparent dark:border-gray-700">ARQUITECTURA DE REDES</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-slate-950 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-slate-950 dark:hover:bg-gray-700 dark:hover:text-slate-950 md:dark:hover:bg-transparent dark:border-gray-700">DATA CENTER</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-slate-950 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-slate-950 dark:hover:bg-gray-700 dark:hover:text-slate-950 md:dark:hover:bg-transparent dark:border-gray-700">DESARROLLO SOFTWARE</a>
                        </li>
                    </ul>
                </div>
                
            </div>
        </header>
    );
}

export default Header;
