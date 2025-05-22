import EventoCard from "@/components/ui/eventoCard";
import React from "react";

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

const EventosPage = async () => {
    const eventos = await getEventos();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Eventos</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {eventos.map((evento) => (
                    <EventoCard key={evento.id} evento={evento} />
                ))}
            </div>
        </div>
    );
};

export default EventosPage;
