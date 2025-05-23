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
        <div className="container mx-auto p-4 space-y-10">
            <div className="bg-[#36B325] text-white rounded-lg px-5 py-10">
                <p>Confira aqui tudo referente a</p>
                <h1 className="text-3xl font-bold">Eventos e Atividades</h1>
            </div>

            <hr className="bg-[#36B325] h-1 mx-10 md:mx-20 rounded-xl" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {eventos.map((evento) => (
                    <EventoCard key={evento.id} evento={evento} />
                ))}
            </div>
        </div>
    );
};

export default EventosPage;
