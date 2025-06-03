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

async function getActivityByEventId(eventId) {
    const res = await fetch(`http://localhost:3001/activities/event/${eventId}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Falha ao carregar atividades do evento");
    }
    return res.json();
}

const EventPage = () => {
    const params = useParams();
    const id = params.eventId;

    const [evento, setEvento] = React.useState(null);
    const [atividades, setAtividades] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    useEffect(() => {
        if (id) {
            const fetchEventDetails = async () => {
                try {
                    setLoading(true);
                    const fetchedEvento = await getEventById(id);
                    const fetchedAtividades = await getActivityByEventId(id);
                    setEvento(fetchedEvento);
                    setAtividades(fetchedAtividades);
                } catch (err) {
                    setError(err.message);
                    setEvento(null);
                    setAtividades([]);
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

            <h3 className="text-md xs:text-xl sm:text-2xl font-semibold text-[#034833]">Descrição</h3>

            <p className="text-zinc-700 text-justify">{evento.description}</p>

            <h3 className="text-md xs:text-xl sm:text-2xl font-semibold text-[#034833] mt-8 mb-4">Atividades do Evento</h3>

             {/* {atividades && atividades.length > 0 ? (
                <div className="space-y-4">
                    {atividades.map(activity => (
                        <div key={activity.id || activity.name} className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                            <h4 className="text-lg font-semibold text-[#36B325]">{activity.name}</h4>
                            {activity.description && <p className="text-sm text-zinc-700 mt-1 whitespace-pre-line">{activity.description}</p>}
                            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm text-zinc-600">
                                {activity.startTime && (
                                    <p>
                                        <strong><i className="far fa-clock mr-1"></i>Horário:</strong> {new Date(activity.startTime).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                                        {activity.endTime && ` - ${new Date(activity.endTime).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}`}
                                    </p>
                                )}
                                {activity.speaker && <p><strong><i className="fas fa-user-tie mr-1"></i>Palestrante:</strong> {activity.speaker}</p>}
                                {activity.location && <p><strong><i className="fas fa-map-marker-alt mr-1"></i>Local:</strong> {activity.location}</p>}
                                {activity.format && formatText[activity.format] && <p><strong><i className="fas fa-tag mr-1"></i>Formato:</strong> {formatText[activity.format]}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-zinc-700">Nenhuma atividade programada para este evento no momento.</p>
            )} */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {atividades && atividades.length > 0 ? (
                    atividades.map(activity => (
                            <div key={activity.id || activity.name} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col mb-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                                <div className="bg-gray-300 w-full h-48 relative">
                                    <span className={`absolute bottom-0 left-0 text-white text-xs px-2 rounded-tr-md ${formatColorClass}`}>
                                        {formatText[activity.format]}
                                    </span>
                                </div>

                                <div className="flex-1 p-4 flex flex-col justify-between">
                                    <div className="flex">
                                        <h2 className="font-bold text-lg text-[#36B325] mb-1">{activity.name}</h2>
                                    </div>
                                    <div className="flex flex-col md:flex-row justify-between gap-2">
                                        <div className="text-gray-600 text-sm">
                                            <p>{activity.maxCapacity} vagas</p>
                                            <p>{new Date(activity.startDate).toLocaleTimeString('pt-BR', {hour: '2-digit', minute:'2-digit'})}</p>
                                        </div>

                                        <div className="flex items-center text-center border border-[#36B325] rounded-md p-2">
                                            <h3 className="text-xl font-bold text-[#36B325">
                                                {new Date(activity.startDate).toLocaleDateString('pt-BR', {month: '2-digit', day: '2-digit'})}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                    ))
                ) : (
                    <p className="text-zinc-700">Nenhuma atividade programada para este evento no momento.</p>
                )}
            </div>
        </div>
    );
};

export default EventPage;