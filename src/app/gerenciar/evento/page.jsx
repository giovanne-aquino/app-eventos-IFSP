import EventoCard from "@/components/ui/eventoCard";
import React from "react";

const EventosPage = async () => {
    const res = await fetch("http://localhost:3001/events", { cache: "no-store" });
    const eventos = await res.json();

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
