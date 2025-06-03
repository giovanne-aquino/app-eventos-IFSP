"use client";

import React, { useEffect } from "react";
import { useParams } from "next/navigation";

async function getEventById(id) {
    const res = await fetch(`http://localhost:3001/events/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Falha ao carregar evento");
    }
    const evento = await res.json();
    const organizerRes = await fetch(`http://localhost:3001/users/${evento.organizerId}`);
    if (!organizerRes.ok) {
        throw new Error("Falha ao carregar organizador");
    }
    const organizer = await organizerRes.json();

    return {
        id: evento.id,
        name: evento.name,
        organizerName: organizer.name,
        format: evento.format,
        maxCapacity: evento.maxCapacity,
        startDate: evento.startDate,
        endDate: evento.endDate,
        location: evento.location,
        complementaryHours: evento.complementaryHours,
        description: evento.description,
        banner: evento.banner,
        status: evento.status,
        category: evento.category,
    }
}

async function getActivityByEventId(eventId, page = 1, pageSize = 6) {
    const res = await fetch(`http://localhost:3001/activities/event/${eventId}?page=${page}&&pageSize=${pageSize}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Falha ao carregar atividades do evento");
    }
    return res.json();
}

function truncateWords(text, limit) {
    if (!text) {
        return '';
    }
    const words = text.split(' ');
    if (words.length > limit) {
        return words.slice(0, limit).join(' ') + '...';
    }
    return text;
}

// Sua função getPageNumbers (mantida como você forneceu)
const getPageNumbers = (currentPage, totalPages, pageNeighbours = 1) => {
    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages <= totalBlocks) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const page = []; // Nome da variável como no seu código
    const startpage = Math.max(2, currentPage - pageNeighbours); // Nome da variável como no seu código
    const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);

    page.push(1);

    if (startpage > 2) {
        page.push('...');
    }

    for (let i = startpage; i <= endPage; i++) {
        page.push(i);
    }

    if (endPage < totalPages - 1) {
        page.push('...');
    }

    page.push(totalPages);

    return page;
}

const EventPage = () => {
    const params = useParams();
    const id = params.eventId;

    const [evento, setEvento] = React.useState(null);
    const [atividades, setAtividades] = React.useState([]);
    
    const [loadingEvento, setLoadingEvento] = React.useState(true);
    const [loadingActivities, setLoadingActivities] = React.useState(true);
    const [error, setError] = React.useState(null);

    const [currentPage, setCurrentPage] = React.useState(1);
    const [pageSize, setPageSize] = React.useState(6); // Mantido, embora não usado diretamente em getPageNumbers, é usado para calcular totalPages
    const [totalActivities, setTotalActivities] = React.useState(0);

    useEffect(() => {
        if (id) {
            setLoadingEvento(true);
            setError(null);

            getEventById(id)
                .then(fetchedEvento => {
                    setEvento(fetchedEvento);
                })
                .catch(err => {
                    setError(err.message);
                    setEvento(null);
                })
                .finally(() => {
                    setLoadingEvento(false);
                });
        }
    }, [id]);

    useEffect(() => {
        if (id) {
            setLoadingActivities(true);

            getActivityByEventId(id, currentPage, pageSize)
                .then(data => {
                    setAtividades(data.activities);
                    setTotalActivities(data.total);
                })
                .catch(err => {
                    console.error("Falha ao carregar atividades: ", err.message);
                    setError("Falha ao carregar atividades: " + err.message);
                    setAtividades([]);
                    setTotalActivities(0);
                })
                .finally(() => {
                    setLoadingActivities(false);
                })
        }
    }, [id, currentPage, pageSize]);

    const totalPages = Math.ceil(totalActivities / pageSize);

    const handlePreviousPage = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    }

    const handleNextPage = () => {
        setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
    }

    // ****** INÍCIO DAS ALTERAÇÕES NA PAGINAÇÃO ******
    const paginate = (pageNumber) => {
        // Verifica se pageNumber é realmente um número antes de atualizar o estado,
        // para evitar problemas caso '...' seja clicado (embora não deva ser clicável como botão)
        if (typeof pageNumber === 'number') {
            setCurrentPage(pageNumber);
        }
    };
    // ****** FIM DAS ALTERAÇÕES NA PAGINAÇÃO ******


    if (loadingEvento) {
        return (
            <div className="container mx-auto p-4 flex justify-center items-center h-screen">
                <p className="text-xl text-gray-700">Carregando detalhes do evento...</p>
            </div>
        );
    }

    if (error && !evento) {
        return (
            <div className="container mx-auto p-4 text-center text-red-600 text-xl">
                <p>Erro ao carregar os detalhes do evento: {error}</p>
            </div>
        );
    }

    if (!evento) {
        return (
            <div className="container mx-auto p-4 text-center text-gray-700 text-xl">
                <p>Evento não encontrado.</p>
            </div>
        );
    }

    const formatColors = {
        PRESENTIAL: 'bg-[#36B325]',
        ONLINE: 'bg-blue-500',
        HYBRID: 'bg-yellow-500',
    }

    const formatText = {
        PRESENTIAL: 'Presencial',
        ONLINE: 'Online',
        HYBRID: 'Híbrido',
    };

    const categoryText = {
        TALK: 'Palestra',
        LECTURE: 'Palestra',
        WORKSHOP: 'Workshop',
        SEMINAR: 'Seminário',
        SHORT_COURSE: 'Curso',
        OTHER: 'Outro',
    };

    const statusText = {
        PENDING: 'Pendente',
        CONFIRMED: 'Confirmado',
        CANCELED: 'Cancelado',
    }

    return (
        <div className="container mx-auto p-4 space-y-10 break-words">
            <div className="bg-[#36B325] rounded-2xl px-5 py-10 h-40 md:h-64 lg:h-96"></div>

            <h1 className="text-xl xs:text-3xl sm:text-4xl text-center font-bold text-[#034833]">{evento.name}</h1>

            <div className="flex items-center space-x-2">
                <div className="bg-[#034833] h-0.5 w-14 rounded-xl" />
                <p className="text-zinc-700">{categoryText[evento.category]}</p>
            </div>

            <h2 className="text-lg xs:text-2xl sm:text-3xl font-bold text-[#034833]">Detalhes do evento</h2>

            <div className="flex flex-col gap-5">
                <div className="flex flex-wrap gap-2">
                    <div className="px-4 py-2 bg-[#36B325] text-white rounded-lg m">
                        tag 1
                    </div>
                    <div className="px-4 py-2 bg-[#36B325] text-white rounded-lg">
                        tag 1
                    </div>
                    <div className="px-4 py-2 bg-[#36B325] text-white rounded-lg">
                        tag 1
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                    <div className="flex flex-col gap-2 w-full">
                        <p className="text-zinc-700"><span className="font-semibold text-zinc-900">Status:</span> {statusText[evento.status]}</p>
                        <p className="text-zinc-700"><span className="font-semibold text-zinc-900">Formato:</span> {formatText[evento.format]}</p>

                        {evento.format !== 'ONLINE' && (
                            <p className="text-zinc-700"><span className="font-semibold text-zinc-900">Local:</span> {evento.location}</p>
                        )}

                        <p className="text-zinc-700"><span className="font-semibold text-zinc-900">Data e Hora:</span> {new Date(evento.startDate).toLocaleDateString('pt-BR')} às {new Date(evento.startDate).toLocaleTimeString('pt-BR', {hour: '2-digit', minute:'2-digit'})}</p>
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                        <p className="text-zinc-700"><span className="font-semibold text-zinc-900">Duração: </span>
                            {evento.complementaryHours}
                            { evento.complementaryHours > 1 ? ' horas' : ' hora'}
                        </p>
                        <p className="text-zinc-700"><span className="font-semibold text-zinc-900">Capacidade:</span> {evento.maxCapacity}</p>
                        <p className="text-zinc-700"><span className="font-semibold text-zinc-900">Vagas:</span> --</p> 
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <h3 className="text-md xs:text-xl sm:text-2xl font-semibold text-[#034833]">Descrição</h3>
                <p className="text-zinc-700 text-justify">{evento.description}</p>
            </div>

            {loadingActivities ? (
                <p className="text-zinc-700 text-center py-4">Carregando atividades...</p>
            ) : atividades && atividades.length > 0 ? (
                <div className="flex flex-col">
                    <h3 className="text-md xs:text-xl sm:text-2xl font-semibold text-[#034833] mt-8 mb-4">Atividades do Evento</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {atividades.map(activity => (
                            <div key={activity.id || activity.name} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-lg gap-2">                            
                                <div className="w-full relative">
                                    <span className={`absolute top-0 right-0 text-white text-xs px-2 py-1 rounded-tr-md rounded-bl-md ${formatColors[activity.format] || 'bg-gray-500'}`}>{formatText[activity.format]}</span>
                                </div>

                                <div className="flex-1 p-4 flex flex-col justify-between gap-2">
                                    <div>
                                        <h2 className="font-bold text-lg text-[#36B325]" title={activity.name}>{activity.name}</h2>
                                    </div>

                                    <div>                                   
                                        <h3>
                                            {new Date(activity.startDate).toLocaleDateString('pt-BR', { year: '2-digit', month: '2-digit', day: '2-digit' })} ás {new Date(activity.startDate).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                                        </h3>
                                    </div>

                                    <div className="text-gray-600 text-sm">
                                        {truncateWords(activity.description, 15)}   
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {totalPages > 1 && (
                        <div className="flex flex-col sm:flex-row justify-center mt-8 space-x-2"> {/* Mantive space-x-2 para o container principal dos botões */}
                            <button
                                onClick={handlePreviousPage}
                                disabled={currentPage === 1 || loadingActivities}
                                className="px-4 py-2 bg-[#36B325] text-white rounded-lg disabled:opacity-50"
                            >
                                Anterior
                            </button>

                            {/* ****** INÍCIO DAS ALTERAÇÕES NA PAGINAÇÃO ****** */}
                            <div className="flex flex-wrap justify-center space-x-2 py-2 sm:py-0">
                                {/* Chamada corrigida para getPageNumbers, passando os argumentos necessários */}
                                {getPageNumbers(currentPage, totalPages).map((number, index) => (
                                    <React.Fragment key={index}>
                                        {number === "..." ? (
                                            <span className="px-4 py-2">...</span>
                                        ) : (
                                            <button
                                                // onClick corrigido para chamar a função paginate definida
                                                onClick={() => paginate(number)}
                                                className={`px-4 py-2 rounded-lg ${
                                                currentPage === number
                                                    ? "bg-[#36B325] text-white" // Estilo mantido como no seu código
                                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300" // Estilo mantido
                                                }`}
                                                disabled={loadingActivities} // Adicionado para desabilitar durante o carregamento
                                            >
                                                {number}
                                            </button>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                            {/* ****** FIM DAS ALTERAÇÕES NA PAGINAÇÃO ****** */}

                            <button
                                onClick={handleNextPage}
                                disabled={currentPage === totalPages || loadingActivities}
                                className="px-4 py-2 bg-[#36B325] text-white rounded-lg disabled:opacity-50"
                            >
                                Próxima
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                 <p className="text-zinc-700 text-center py-4">Nenhuma atividade programada para este evento no momento.</p>
            )}
        </div>
    );
};

export default EventPage;