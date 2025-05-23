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
    }, [searchTerm, selectedFormat, eventos]);

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

            <div className="flex justify-between px-4">
                <input 
                    type="text"
                    placeholder="Pesquise por nome ou organizador"
                    className="w-full max-w-lg p-3 border border-gray-300 rounded-lg shadow-sm focus:outline0none focus:ring-2 focus:ring-[#36B325] focus:border-transparent" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                
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
                {/* {eventos.map((evento) => (
                    <EventoCard key={evento.id} evento={evento} />
                ))} */}

                {filteredEventos.length > 0 ? (
                    filteredEventos.map((evento) => (
                        <EventoCard key={evento.id} evento={evento} />
                    ))
                ) : (
                    <p className="text-center text-gray-500 col-span-full">Nenhum evento encontrado para "{searchTerm}".</p>
                )}
            </div>
        </div>
    );
};

export default EventosPage;
