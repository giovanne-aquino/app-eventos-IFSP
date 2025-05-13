import Link from 'next/link';

const eventos = [
    { 
        id: 1, 
        title: "TechWeek",
        status: "PENDING",
        format: "HYBRID",
        location: "R. Maria Cristina, 50 - Casqueiro, Cubatão - SP, 11533-160",
        startDate: new Date("2023-10-01T09:00:00Z"),
        endDate: new Date("2023-10-01T18:00:00Z"),
        complementaryHours: 120,
        maxCapacity: 5000,
        description: "A maior semana de tecnologia do Brasil, com palestras, workshops e networking.",
        banner: "https://example.com/banner1.jpg",
        eventType: "SIMPLE"
    },
    { 
        id: 2, 
        title: "DevCon 2025",
        status: "CONFIRMED",
        format: "ONLINE",
        location: "Plataforma Zoom",
        startDate: new Date("2025-06-15T10:00:00Z"),
        endDate: new Date("2025-06-15T17:00:00Z"),
        complementaryHours: 80,
        maxCapacity: 1000,
        description: "Conferência para desenvolvedores com foco em novas tecnologias e tendências.",
        banner: "https://example.com/banner2.jpg",
        eventType: "SIMPLE"
    },
    { 
        id: 3, 
        title: "Hackathon Global",
        status: "PENDING",
        format: "PRESENTIAL",
        location: "Av. Paulista, 1000 - São Paulo, SP",
        startDate: new Date("2025-07-20T08:00:00Z"),
        endDate: new Date("2025-07-21T20:00:00Z"),
        complementaryHours: 48,
        maxCapacity: 300,
        description: "Um hackathon de 48 horas para criar soluções inovadoras.",
        banner: "https://example.com/banner3.jpg",
        eventType: "COMPETITION"
    },
    { 
        id: 4, 
        title: "Semana de IA",
        status: "CONFIRMED",
        format: "HYBRID",
        location: "R. das Flores, 123 - Campinas, SP",
        startDate: new Date("2025-08-10T09:00:00Z"),
        endDate: new Date("2025-08-14T18:00:00Z"),
        complementaryHours: 200,
        maxCapacity: 2000,
        description: "Uma semana inteira dedicada à inteligência artificial e aprendizado de máquina.",
        banner: "https://example.com/banner4.jpg",
        eventType: "SIMPLE"
    },
    { 
        id: 5, 
        title: "Palestra sobre DevOps",
        status: "CONFIRMED",
        format: "ONLINE",
        location: "Microsoft Teams",
        startDate: new Date("2025-09-05T14:00:00Z"),
        endDate: new Date("2025-09-05T16:00:00Z"),
        complementaryHours: 20,
        maxCapacity: 500,
        description: "Palestra sobre práticas modernas de DevOps e automação.",
        banner: "https://example.com/banner5.jpg",
        eventType: "SIMPLE"
    },
    { 
        id: 6, 
        title: "Curso de Python Avançado",
        status: "PENDING",
        format: "PRESENTIAL",
        location: "R. dos Programadores, 456 - Rio de Janeiro, RJ",
        startDate: new Date("2025-10-01T09:00:00Z"),
        endDate: new Date("2025-10-05T17:00:00Z"),
        complementaryHours: 100,
        maxCapacity: 50,
        description: "Curso intensivo de Python para desenvolvedores experientes.",
        banner: "https://example.com/banner6.jpg",
        eventType: "COURSE"
    },
    { 
        id: 7, 
        title: "Encontro de Startups",
        status: "CONFIRMED",
        format: "PRESENTIAL",
        location: "R. das Startups, 789 - Belo Horizonte, MG",
        startDate: new Date("2025-11-10T09:00:00Z"),
        endDate: new Date("2025-11-10T18:00:00Z"),
        complementaryHours: 50,
        maxCapacity: 100,
        description: "Encontro para networking e troca de ideias entre startups.",
        banner: "https://example.com/banner7.jpg",
        eventType: "NETWORKING"
    },
    { 
        id: 8, 
        title: "Workshop de Design Thinking",
        status: "CONFIRMED",
        format: "HYBRID",
        location: "R. Criatividade, 321 - Curitiba, PR",
        startDate: new Date("2025-12-01T10:00:00Z"),
        endDate: new Date("2025-12-01T16:00:00Z"),
        complementaryHours: 30,
        maxCapacity: 200,
        description: "Workshop prático sobre Design Thinking para resolução de problemas.",
        banner: "https://example.com/banner8.jpg",
        eventType: "WORKSHOP"
    }
];

const Main = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center text-green-700 mb-8">Eventos</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {eventos.map(evento => (
                    <li 
                        key={evento.id} 
                        className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
                    >
                        <Link 
                            href={`/main/${evento.id}`} 
                            className="text-lg font-semibold text-green-600 hover:text-green-800 transition-colors"
                        >
                            {evento.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Main;