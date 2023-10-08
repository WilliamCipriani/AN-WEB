import Link from "next/link";
import React, { useState } from "react";


function Social() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div data-dial-init className="fixed right-6 bottom-6 group">
                <div id="speed-dial-menu-default" className={`flex flex-col items-center ${isMenuOpen ? 'block' : 'hidden'} mb-4 space-y-2`}>
                    <Link 
                        href="https://wa.me/943980740?text=Hola!%20Me%20gustaría%20obtener%20más%20información."
                        target="_blank" 
                        rel="noopener noreferrer"
                        data-tooltip-target="tooltip-share" 
                        data-tooltip-placement="left" 
                        className="flex justify-center items-center w-[60px] h-[60px] text-gray-500 hover:text-gray-900  rounded-full  shadow-sm dark:hover:text-gr dark:text-gray-400 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 focus:outline-none"
                    >
                        <img src="/image/social.png" className="w-15"/>
                        <span className="sr-only">Whatsapp</span>
                    </Link>
                    <div id="tooltip-share" role="tooltip" className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-gray transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        Whatsapp
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </div>
                <button 
                    type="button" 
                    onClick={() => setMenuOpen(!isMenuOpen)}
                    aria-controls="speed-dial-menu-default" 
                    aria-expanded={isMenuOpen} 
                    className="flex items-center justify-center text-white bg-blue-700 rounded-full w-20 h-20 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
                >
                    <svg className="w-7 h-7 transition-transform group-hover:rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                    </svg>
                    <span className="sr-only">Open actions menu</span>
                </button>
            </div>
        </>
    );
}

export default Social;
