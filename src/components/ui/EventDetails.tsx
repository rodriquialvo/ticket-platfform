import { Evento } from "@/services/events/interfaces";
import { EventDetailsClient } from "./EventDetailsClient";

interface EventDetailsProps {
  evento: Evento;
}

export function EventDetails({ evento }: EventDetailsProps) {
  return <EventDetailsClient evento={evento} />;
} 