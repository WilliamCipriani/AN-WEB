import React from "react";

function Header() {
    return (
        <header className="bg-slate-50 text-white p-4 flex justify-around items-center">
            <div className="flex-shrink-0">
                <img src="/next.svg" alt="Logo" className="h-8 w-auto" />
            </div>
            <nav className="flex-grow flex items-center justify-center space-x-6">
                <a href="#" className="text-slate-950 hover:text-gray-400 text-sm">
                    INICIO
                </a>
                <a href="#" className="text-slate-950 hover:text-gray-400 text-sm">
                    ANÁLISIS DE DATOS
                </a>
                <a href="#" className="text-slate-950 hover:text-gray-400 text-sm">
                    DESARROLLO WEB
                </a>
                <a href="#" className="text-slate-950 hover:text-gray-400 text-sm">
                    ARQUITECTURA DE REDES
                </a>
                <a href="#" className="text-slate-950 hover:text-gray-400 text-sm">
                    DATA CENTER
                </a>
                <a href="#" className="text-slate-950 hover:text-gray-400 text-sm">
                    DESARROLLO SOFTWARE
                </a>
            </nav>
            <div className="flex-shrink-0"></div>
        </header>
    );
}

export default Header;
