"use client";

import EventoCard from "@/components/ui/eventoCard";
import React, { useState, useEffect, useCallback } from "react";

async function getEventos({
    page,
    pageSize,
    format,
    eventType,
    searchTerm,
    category
}) {
    const queryParams = new URLSearchParams();
    queryParams.append("page", page.toString());
    queryParams.append("pageSize", pageSize.toString());

    if (format && format !== "ALL") {
        queryParams.append("format", format);
    }

    if (eventType && eventType !== "ALL") {
        queryParams.append("eventType", eventType);
    }

    if (category && category !== "ALL") {
        queryParams.append("category", category);
    }

    if (searchTerm) {
        queryParams.append("searchTerm", searchTerm);
    }

    try {
        const res = await fetch(`http://localhost:3001/events/manage?${queryParams.toString()}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(`Falha ao carregar eventos: ${errorData.message || res.statusText}`);
        }

        const { events: eventosData, total } = await res.json();

        const eventosComOrganizadores = await Promise.all(
            eventosData.map(async (evento) => {
                try {
                    const organizerRes = await fetch(`http://localhost:3001/users/${evento.organizerId}`);
                    if (!organizerRes.ok) {
                        console.warn(`Falha ao carregar organizador para o evento ${evento.id}: ${organizerRes.statusText}`);
                        return {
                            ...evento,
                            organizerName: "Organizador Desconhecido",
                        };
                    }
                    const organizer = await organizerRes.json();
                    return {
                        ...evento,
                        organizerName: organizer.name,
                    };
                } catch (organizerError) {
                    console.error(`Erro ao buscar organizador para o evento ${evento.id}:`, organizerError);
                    return {
                        ...evento,
                        organizerName: "Erro ao Carregar Organizador",
                    };
                }
            })
        );

        return { events: eventosComOrganizadores, total };
    } catch (err) {
        console.error("Erro na função getEventos:", err);
        throw err;
    }
}

const EventosPage = () => {
    const [eventos, setEventos] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedFormat, setSelectedFormat] = useState("ALL");
    const [selectedEventType, setSelectedEventType] = useState("ALL");
    const [selectedCategory, setSelectedCategory] = useState("ALL");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [showFilters, setShowFilters] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [totalEvents, setTotalEvents] = useState(0);
    const eventsPerPage = 12;

    const formatText = {
        PRESENTIAL: "Presencial",
        ONLINE: "Online",
        HYBRID: "Híbrido",
    };

    const eventTypeText = {
        SIMPLE: 'Simples',
        LARGE: 'Grande',
    };

    const categoryText = {
        TALK: 'Conversa',
        LECTURE: 'Palestra',
        WORKSHOP: 'Workshop',
        SEMINAR: 'Seminário',
        SHORT_COURSE: 'Curso Curto',
        OTHER: 'Outro'
    }

    const fetchEventos = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const { events, total } = await getEventos({
                page: currentPage,
                pageSize: eventsPerPage,
                format: selectedFormat,
                eventType: selectedEventType,
                category: selectedCategory,
                searchTerm: searchTerm,
            });
            setEventos(events);
            setTotalEvents(total);
        } catch (err) {
            setError(err.message || "Ocorreu um erro ao carregar os eventos.");
        } finally {
            setLoading(false);
        }
    }, [currentPage, eventsPerPage, selectedFormat, selectedEventType, selectedCategory, searchTerm]);

    useEffect(() => {
        fetchEventos();
    }, [fetchEventos]);

    const totalPages = Math.ceil(totalEvents / eventsPerPage);

    const paginate = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const handleClearSearch = () => {
        setSearchTerm("");
    };

    const toggleFilters = () => {
        setShowFilters((prev) => !prev);
    };

    const areFiltersApplied = selectedFormat !== "ALL" || selectedEventType !== "ALL" || selectedCategory !== "ALL";

    const getPageNumbers = () => {
        const pageNumbers = [];
        const maxPagesToShow = 5;

        if (totalPages <= maxPagesToShow) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            pageNumbers.push(1);

            let startPage = Math.max(2, currentPage - Math.floor((maxPagesToShow - 3) / 2));
            let endPage = Math.min(totalPages - 1, currentPage + Math.ceil((maxPagesToShow - 3) / 2));

            if (currentPage < maxPagesToShow - 1) {
                endPage = maxPagesToShow - 1;
            }
            if (currentPage > totalPages - (maxPagesToShow - 2)) {
                startPage = totalPages - (maxPagesToShow - 2);
            }

            if (startPage > 2) {
                pageNumbers.push("...");
            }

            for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(i);
            }

            if (endPage < totalPages - 1) {
                pageNumbers.push("...");
            }

            if (!pageNumbers.includes(totalPages)) {
                pageNumbers.push(totalPages);
            }
        }
        return pageNumbers;
    };

    if (loading) {
        return (
            <div className="container mx-auto p-4 flex justify-center items-center h-screen">
                <p className="text-xl text-gray-700">Carregando eventos...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mx-auto p-4 text-center text-red-600 text-xl">
                <p>Erro ao carregar eventos: {error}</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4 space-y-10">
            <div className="bg-[#36B325] text-white rounded-2xl px-5 py-10">
                <p>Confira aqui tudo referente aos seus</p>
                <h1 className="text-3xl font-bold">Eventos</h1>
            </div>

            <hr className="bg-[#36B325] h-1 mx-10 md:mx-20 rounded-xl" />

            <div className="flex flex-row justify-between items-end gap-4">
                <div className="w-full">
                    <label htmlFor="input-search" className="block mb-1 text-sm font-medium text-gray-700">
                        Pesquisar
                    </label>

                    <input
                        type="text"
                        id="input-search"
                        placeholder="Pesquise por nome ou organizador"
                        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#36B325] focus:border-transparent pr-10"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />

                    {searchTerm && (
                        <button
                            onClick={handleClearSearch}
                            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 focus:outline-none"
                            aria-label="Limpar pesquisa"
                        >
                            <svg
                                className="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    )}
                </div>

                <button
                    onClick={toggleFilters}
                    className="p-2 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#36B325] self-end mb-px sm:mb-0"
                    aria-label={areFiltersApplied ? "Filtros aplicados" : "Mostrar filtros"}
                    title={areFiltersApplied ? "Filtros aplicados" : "Mostrar filtros"}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" 
                        fill={areFiltersApplied ? "#36B325" : "black"} // Cor condicional
                    >
                        <rect x="3" y="5" width="26" height="5" rx="2.5"/>
                        <rect x="6" y="13" width="20" height="5" rx="2.5"/>
                        <rect x="10" y="21" width="12" height="5" rx="2.5"/>
                    </svg>
                </button>
            </div>

            {showFilters && (
                <div className="mt-4 p-4 border border-gray-200 rounded-lg shadow-sm flex flex-col md:flex-row justify-between gap-4">
                    <div className="w-full">
                        <label htmlFor="format-select" className="block mb-1 text-sm font-medium text-gray-700">
                            Formato
                        </label>

                        <select
                            id="format-select"
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#36B325] focus:border-transparent"
                            value={selectedFormat}
                            onChange={(e) => {
                                setSelectedFormat(e.target.value);
                                setCurrentPage(1);
                            }}
                        >
                            <option value="ALL">Todos os Formatos</option>
                            {Object.entries(formatText).map(([key, value]) => (
                                <option key={key} value={key}>
                                {value}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="w-full">
                        <label htmlFor="eventType-select" className="block mb-1 text-sm font-medium text-gray-700">Tipo</label>
                        <select
                            id="eventType-select"
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#36B325] focus:border-transparent"
                            value={selectedEventType}
                            onChange={(e) => {
                            setSelectedEventType(e.target.value);
                            setCurrentPage(1);
                            }}
                        >
                            <option value="ALL">Todos os Tipos</option>
                            {Object.entries(eventTypeText).map(([key, value]) => (
                                <option key={key} value={key}>
                                {value}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="w-full">
                        <label htmlFor="category-select" className="block mb-1 text-sm font-medium text-gray-700">Categoria</label>

                        <select
                            id="category-select"
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#36B325] focus:border-transparent"
                            value={selectedCategory}
                            onChange={(e) => {
                                setSelectedCategory(e.target.value);
                                setCurrentPage(1);
                            }}
                        >
                            <option value="ALL">Todas as Categorias</option>
                            {Object.entries(categoryText).map(([key, value]) => (
                                <option key={key} value={key}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {eventos.length > 0 ? (
                    eventos.map((evento) => <EventoCard key={evento.id} evento={evento} />)
                ) : (
                    <p className="text-center text-gray-500 col-span-full">Nenhum evento encontrado.</p>
                )}
            </div>

            {totalEvents > eventsPerPage && (
                <div className="flex flex-col sm:flex-row justify-center mt-8 space-x-2">
                    <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-[#36B325] text-white rounded-lg disabled:opacity-50"
                    >
                        Anterior
                    </button>

                    <div className="flex flex-wrap justify-center space-x-2 py-2 sm:py-0">
                        {getPageNumbers().map((number, index) => (
                            <React.Fragment key={index}>
                                {number === "..." ? (
                                    <span className="px-4 py-2">...</span>
                                ) : (
                                    <button
                                        onClick={() => paginate(number)}
                                        className={`px-4 py-2 rounded-lg ${
                                        currentPage === number
                                            ? "bg-[#36B325] text-white"
                                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                        }`}
                                    >
                                        {number}
                                    </button>
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-[#36B325] text-white rounded-lg disabled:opacity-50"
                    >
                        Próxima
                    </button>
                </div>
            )}
        </div>
    );
};

export default EventosPage;