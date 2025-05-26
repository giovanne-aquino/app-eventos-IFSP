"use client";

import React, { useEffect } from "react";
import { useParams } from "next/navigation"; // Correct import for useParams

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

    console.log(evento);

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

const EventPage = () => {
    const params = useParams();
    const id = params.eventId;

    const [evento, setEvento] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    useEffect(() => {
        if (id) {
            const fetchEventDetails = async () => {
                try {
                    setLoading(true);
                    const fetchedEvento = await getEventById(id);
                    setEvento(fetchedEvento);
                } catch (err) {
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            };

            fetchEventDetails();
        }
    }, [id]);

    if (loading) {
        return (
            <div className="container mx-auto p-4 flex justify-center items-center h-screen">
                <p className="text-xl text-gray-700">Carregando detalhes do evento...</p>
            </div>
        );
    }

    if (error) {
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
        <div className="container mx-auto p-4 space-y-6 break-words">
            <div className="bg-[#36B325] rounded-2xl px-5 py-10 h-40 md:h-64 lg:h-96"></div>

            <h1 className="text-xl xs:text-3xl sm:text-4xl text-center font-bold text-[#034833]">{evento.name}</h1>

            <div className="flex items-center space-x-2">
                <div className="bg-[#034833] h-0.5 w-14 rounded-xl" />
                <p className="text-zinc-700">{categoryText[evento.category]}</p>
            </div>

            <h2 className="text-lg xs:text-2xl sm:text-3xl font-bold text-[#034833]">Detalhes do evento</h2>

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

            <div className="flex flex-col gap-2">
                <p className="text-zinc-700"><span className="font-semibold text-zinc-900">Status:</span> {statusText[evento.status]}</p>
                <p className="text-zinc-700"><span className="font-semibold text-zinc-900">Formato:</span> {formatText[evento.format]}</p>

                {evento.format !== 'ONLINE' && (
                    <p className="text-zinc-700"><span className="font-semibold text-zinc-900">Local:</span> {evento.location}</p>
                )}

                <p className="text-zinc-700"><span className="font-semibold text-zinc-900">Data e Hora:</span> {new Date(evento.startDate).toLocaleDateString('pt-BR')} às {new Date(evento.startDate).toLocaleTimeString('pt-BR', {hour: '2-digit', minute:'2-digit'})}</p>
                <p className="text-zinc-700"><span className="font-semibold text-zinc-900">Duração: </span>
                    {evento.complementaryHours}
                    { evento.complementaryHours > 1 ? ' horas' : ' hora'}
                </p>
                <p className="text-zinc-700"><span className="font-semibold text-zinc-900">Capacidade:</span> {evento.maxCapacity}</p>
                <p className="text-zinc-700"><span className="font-semibold text-zinc-900">Vagas:</span> --</p>
            </div>

            <h3 className="text-md xs:text-xl sm:text-2xl font-semibold text-[#034833]">Descrição</h3>

            <p className="text-zinc-700 text-justify">{evento.description}</p>
        </div>
    );
};

export default EventPage;