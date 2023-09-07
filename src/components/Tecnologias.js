import React from 'react';

const Tecnologia = ({ nombre, imagen }) => {
  return (
    <div className="grid grid-cols-1 gap-2 mt-8 xl:mt-12 xl:gap-4 sm:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3">
        <div className="flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center mb-2">
            <img src={imagen} alt={nombre} className="w-12 h-12" />
            </div>
            <p>{nombre}</p>
        </div>
    </div>

  );
};

export default Tecnologia;
