import { Evento } from '@/services/events/interfaces';

// Simula una base de datos con datos de ejemplo
const eventosEjemplo: Evento[] = [
    {
      id: '1',
      nombre: 'Fiesta de la música ligera',
      fecha: '2024-08-01T23:59:00',
      ciudad: 'Córdoba',
      precio: 25000,
      imagenUrl: 'https://imagenes.alpogo.com/eventos/alta_evento_1752168868_686ff9a441423.jpg',
      descripcion: 'Una noche inolvidable con las mejores bandas de rock nacional. Música en vivo, ambiente increíble y mucha energía. BANDA INVITADA: UNO ENTRE MIL TRIBUTO A SODA STEREO.',
    },
    {
      id: '2',
      nombre: 'Festival de Jazz Barcelona',
      fecha: '2024-07-20T19:30:00',
      ciudad: 'Barcelona',
      precio: 35500,
      imagenUrl: 'https://imagenes.alpogo.com/eventos/Vampilivvv.jpg',
      descripcion: 'El mejor jazz internacional en un ambiente íntimo y elegante. Músicos de renombre mundial.',
    },
    {
      id: '3',
      nombre: 'Teatro Clásico en Sevilla',
      fecha: '2024-08-10T18:00:00',
      ciudad: 'Sevilla',
      precio: 28000,
      imagenUrl: 'https://imagenes.alpogo.com/eventos/boysds.jpg',
      descripcion: 'Obras clásicas del teatro español en un entorno histórico único. Una experiencia cultural inolvidable.',
    },
    {
      id: '4',
      nombre: 'Electronic Music Festival',
      fecha: '2024-09-15T22:00:00',
      ciudad: 'Madrid',
      precio: 45000,
      imagenUrl: 'https://imagenes.alpogo.com/eventos/barenrkal%C3%B1es.jpg',
      descripcion: 'El festival de música electrónica más grande del año. DJs internacionales y producción de primer nivel.',
    },
    {
      id: '5',
      nombre: 'Comedia Stand Up',
      fecha: '2024-07-25T20:30:00',
      ciudad: 'Valencia',
      precio: 18000,
      imagenUrl: 'https://imagenes.alpogo.com/eventos/medi.png',
      descripcion: 'Los mejores comediantes del país en una noche llena de risas y diversión.',
    },
    {
      id: '6',
      nombre: 'Opera La Traviata',
      fecha: '2024-08-20T19:00:00',
      ciudad: 'Bilbao',
      precio: 65000,
      imagenUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=240&fit=crop',
      descripcion: 'La obra maestra de Verdi en una producción espectacular con los mejores cantantes líricos.',
    },
  ];

export async function getEventosDisponibles({ page = 1, limit = 6 }: { page: number; limit: number }) {
    const start = (page - 1) * limit;
    const end = start + limit;
    const eventos = eventosEjemplo.slice(start, end);

    return {
        eventos,
        totalCount: eventosEjemplo.length,
    };
}

export async function getEventoById(id: string): Promise<Evento | undefined> {
  console.log(eventosEjemplo.find((evento) => evento.id === id));
  return eventosEjemplo.find((evento) => evento.id === id);
}