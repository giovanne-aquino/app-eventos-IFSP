import React from 'react';

const EventoCard = ({ evento }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col mb-6">
            {/* Imagem do evento */}
            <div className="bg-gray-300 w-full h-48">
                {/* Espaço reservado para imagem */}
            </div>

            {/* Informações do evento */}
            <div className="flex-1 p-4 flex flex-col">
                <span className="self-end w-fit bg-yellow-500 text-white text-xs px-2 py-1 rounded-md mb-2">
                    {evento.tipo}
                </span>

                <div className="flex flex-row justify-between">
                    <div>
                        <h2 className="font-bold text-lg text-green-700 mb-1">{evento.titulo}</h2>
                        <p className="text-gray-600 text-sm">{evento.organizador}</p>
                        <p className="text-gray-600 text-sm">{evento.tipo}</p>
                        <p className="text-gray-600 text-sm">{evento.vagas} vagas</p>
                    </div>

                    {/* Data e Inscrição */}
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex flex-col text-center border border-green-700 rounded-md p-2">
                            <h3 className="text-2xl font-bold text-green-700">{evento.data}</h3>
                            <p className="text-sm text-gray-600">{evento.horario}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventoCard;
