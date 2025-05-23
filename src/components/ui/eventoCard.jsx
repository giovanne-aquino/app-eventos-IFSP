import React from 'react';
import Link from 'next/link';

const EventoCard = ({ evento }) => {
    const formatColors = {
        PRESENTIAL: 'bg-[#36B325]',
        ONLINE: 'bg-blue-500',
        HYBRID: 'bg-yellow-500',
    }
    const formatColorClass = formatColors[evento.format] || 'bg-gray-500';

    const formatText = {
        PRESENTIAL: 'Presencial',
        ONLINE: 'Online',
        HYBRID: 'Híbrido',
    }

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col mb-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <Link href={`/gerenciar/evento/${evento.id}`}>
                <div className="bg-gray-300 w-full h-48 relative">
                    {/* Espaço reservado para imagem */}

                    <span className={`absolute bottom-0 left-0 text-white text-xs px-2 py-1 rounded-tr-md ${formatColorClass}`}>
                        {formatText[evento.format]}
                    </span>
                </div>

                <div className="flex-1 p-4 flex flex-col">
                    <div className="flex">
                        <h2 className="font-bold text-lg text-[#36B325] mb-1">{evento.name}</h2>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between">
                        <div>
                            <p className="text-gray-600 text-sm">{evento.organizerName}</p>
                            <p className="text-gray-600 text-sm">{evento.maxCapacity} vagas</p>    
                        </div>

                        <div className="text-center border border-[#36B325] rounded-md p-2 mt-2 sm:mt-0">
                            <h3 className="text-xl font-bold text-[#36B325]">
                                {new Date(evento.startDate).toLocaleDateString('pt-BR')}
                            </h3>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default EventoCard;
