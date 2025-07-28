import { getEventoById } from "@/services/events/events";
import { EventPageContainer } from "@/components/ui/EventPageContainer";

export default async function EventPage({ params }: { params: { id: string } }) {
    const evento = await getEventoById(params.id);
    
    if (!evento) {
        return <div>Evento no encontrado</div>;
    }
    
    return <EventPageContainer evento={evento} />;
}