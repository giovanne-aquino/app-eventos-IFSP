import React from "react";
import EventoCard from "@/components/ui/eventoCard";


const eventosMock = [
    {
        id: 1,
        name: 'Workshop React',
        organizerName: 'John Doe',
        format: 'ONLINE',
        maxCapacity: '20',
        startDate: '22 NOV',
    },
    {
        id: 2,
        name: 'Palestra UX Design',
        organizerName: 'Jane Smith',
        format: 'PRESENTIAL',
        maxCapacity: '30',
        startDate: '25 NOV',
    },
    {
        id: 3,
        name: 'Curso de Node.js',
        organizerName: 'Alice Johnson',
        format: 'HYBRID',
        maxCapacity: '50',
        startDate: '28 NOV',
    },
    {
        id: 4,
        name: 'Seminário de IA',
        organizerName: 'Bob Brown',
        format: 'ONLINE',
        maxCapacity: '100',
        startDate: '30 NOV',
    },
    {
        id: 5,
        name: 'Hackathon 2025',
        organizerName: 'Charlie Davis',
        format: 'PRESENTIAL',
        maxCapacity: '200',
        startDate: '05 DEC',
    },
    {
        id: 6,
        name: 'Workshop de Design Thinking',
        organizerName: 'Diana Evans',
        format: 'HYBRID',
        maxCapacity: '40',
        startDate: '10 DEC',
    },
    {
        id: 7,
        name: 'Palestra sobre DevOps',
        organizerName: 'Ethan Wilson',
        format: 'ONLINE',
        maxCapacity: '60',
        startDate: '15 DEC',
    },
    {
        id: 8,
        name: 'Curso de Python Avançado',
        organizerName: 'Fiona Green',
        format: 'PRESENTIAL',
        maxCapacity: '25',
        startDate: '20 DEC',
    },
    {
        id: 9,
        name: 'Seminário de Segurança Cibernética',
        organizerName: 'George Harris',
        format: 'HYBRID',
        maxCapacity: '80',
        startDate: '22 DEC',
    },
    {
        id: 10,
        name: 'Encontro de Startups',
        organizerName: 'Hannah Lee',
        format: 'PRESENTIAL',
        maxCapacity: '150',
        startDate: '25 DEC',
    },
];

const EventosPage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Eventos</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {eventosMock.map((evento) => (

                    <EventoCard key={evento.id} evento={evento} />
                ))}
            </div>
        </div>
    );
};

export default EventosPage;