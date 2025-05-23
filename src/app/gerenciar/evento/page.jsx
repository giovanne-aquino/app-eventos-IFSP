"use client";

import EventoCard from "@/components/ui/eventoCard";
import React, { useState, useEffect } from "react";

async function getEventos() {
    const res = await fetch("http://localhost:3001/events", {
        cache: "no-store",
    });
    if (!res.ok) {
        throw new Error("Falha ao carregar eventos");
    }
    const eventosJson = await res.json();

    const eventos = await Promise.all(eventosJson.map(async (evento) => {
        const organizerRes = await fetch(`http://localhost:3001/users/${evento.organizerId}`);
        const organizer = await organizerRes.json();
        
        return {
            id: evento.id,
            name: evento.name,
            organizerName: organizer.name,
            format: evento.format,
            maxCapacity: evento.maxCapacity,
            startDate: evento.startDate,
        };
    }));

    return eventos;
}

const EventosPage = () => {
    const [eventos, setEventos] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedFormat, setSelectedFormat] = useState("ALL");
    const [filteredEventos, setFilteredEventos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    // Número de eventos por página
    const eventsPerPage = 12;

    const formatText = {
        PRESENTIAL: 'Presencial',
        ONLINE: 'Online',
        HYBRID: 'Híbrido',
    };

    useEffect(() => {
        const fetchEventos = async () => {
            try {
                const fetchedEventos = await getEventos();
                setEventos(fetchedEventos);
                setFilteredEventos(fetchedEventos);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEventos();
    }, []);

    useEffect(() => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        
        const results = eventos.filter((evento) => {
            const matchesSearchTerm = 
                evento.name.toLowerCase().includes(lowerCaseSearchTerm) ||
                evento.organizerName.toLowerCase().includes(lowerCaseSearchTerm);

            const matchesFormat = 
                selectedFormat === "ALL" || evento.format === selectedFormat;
            
            return matchesSearchTerm && matchesFormat;
        });
        setFilteredEventos(results);
        setCurrentPage(1);
    }, [searchTerm, selectedFormat, eventos]);

    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
    const currentEvents = filteredEventos.slice(indexOfFirstEvent, indexOfLastEvent);

    const totalPages = Math.ceil(filteredEventos.length / eventsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleClearSearch = () => {
        setSearchTerm("");
    };

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
                startPage = totalPages - (maxPagesToShow -2);
            }

            if (startPage > 2) {
                pageNumbers.push('...');
            }

            for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(i);
            }

            if (endPage < totalPages - 1) {
                pageNumbers.push('...');
            }

            if (!pageNumbers.includes(totalPages)) {
                pageNumbers.push(totalPages);
            }
        }
        return pageNumbers;
    }

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
        )
    }

    return (
        <div className="container mx-auto p-4 space-y-10">
            <div className="bg-[#36B325] text-white rounded-lg px-5 py-10">
                <p>Confira aqui tudo referente aos seus</p>
                <h1 className="text-3xl font-bold">Eventos</h1>
            </div>

            <hr className="bg-[#36B325] h-1 mx-10 md:mx-20 rounded-xl" />

            <div className="flex flex-col sm:flex-row md:justify-between space-y-4 sm:space-y-0 space-x-0 sm:space-x-4">
            <div className="relative w-full max-w-lg">
                    <input
                        type="text"
                        placeholder="Pesquise por nome ou organizador"
                        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline0none focus:ring-2 focus:ring-[#36B325] focus:border-transparent pr-10"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {searchTerm && (
                        <button
                            onClick={handleClearSearch}
                            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 focus:outline-none"
                            aria-label="Limpar pesquisa"
                        >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                    )}
                </div>
                
                <select 
                    id="format-select"
                    className="w-full sm:w-auto p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#36B325] focus:border-transparent"
                    value={selectedFormat}
                    onChange={(e) => setSelectedFormat(e.target.value)}
                >
                    <option value="ALL">Todos os Formatos</option>
                    {Object.entries(formatText).map(([key, value]) => (
                        <option key={key} value={key}>
                            {value}
                        </option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentEvents.length > 0 ? (
                    currentEvents.map((evento) => (
                        <EventoCard key={evento.id} evento={evento} />
                    ))
                ) : (
                    <p className="text-center text-gray-500 col-span-full">Nenhum evento encontrado para "{searchTerm}".</p>
                )}
            </div>

            {filteredEventos.length > eventsPerPage && (
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
                                {number === '...' ? (
                                    <span className="px-4 py-2">...</span>
                                ) : (
                                    <button
                                        onClick={() => paginate(number)}
                                        className={`px-4 py-2 rounded-lg ${
                                            currentPage === number ? 'bg-[#36B325] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
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
