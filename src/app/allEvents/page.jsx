import EventCard from "@/components/events/EventCard";


export default function AllEventsPage() {
  return (
    <div>

      <EventCard cardType={"LARGE"} eventType="LARGE" title="Título do Evento" titleLargeEvent="Título do Evento Grande" titleActivity="Título Atividade" type="Tipo Evento" user="Usuário Organizador" capacity="XXX Vagas" capacityLargeEvent="10 Atividades" format="Online" startDay="22" endDay="25" startMounth="NOV" endMounth="OUT" startHours="00:00" endHours="00:00" eventOrigin="Evento TechWeek" button="Inscrever-se"/>  

    </div>
  );
}

