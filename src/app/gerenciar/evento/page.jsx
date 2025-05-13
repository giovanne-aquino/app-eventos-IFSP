import React from "react";
import EventoCard from "@/components/ui/eventoCard";

const eventosMock = [
    {
        id: 1,
        titulo: 'Workshop React',
        organizador: 'John Doe',
        tipo: 'Online',
        vagas: '20',
        data: '22 NOV',
        horario: '10:00 - 12:00',
    },
    {
        id: 2,
        titulo: 'Palestra UX Design',
        organizador: 'Jane Smith',
        tipo: 'Presencial',
        vagas: '30',
        data: '25 NOV',
        horario: '14:00 - 16:00',
    },
];

const EventosPage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Meus Eventos</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {eventosMock.map((evento) => (
                    <EventoCard key={evento.id} evento={evento} />
                ))}
            </div>
        </div>
    );
};

export default EventosPage;