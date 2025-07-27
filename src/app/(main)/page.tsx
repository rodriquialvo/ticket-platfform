import { getEventosDisponibles } from "@/services/events/events";
import { Box } from '@chakra-ui/react';
import { 
  HeroSection, 
  StatsSection, 
  EventsSection 
} from '@/components/(main)';

export default async function HomePage({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  const page = Number(searchParams['page'] ?? '1');
  const limit = 6;
  const { eventos, totalCount } = await getEventosDisponibles({ page, limit });
  const hasNextPage = (page * limit) < totalCount;
  const hasPrevPage = page > 1;

  // Obtener eventos destacados para el carrusel (primeros 3 eventos)
  const eventosDestacados = eventos.slice(0, 3);

  return (
    <Box>
      <HeroSection eventos={eventosDestacados} />      
      <EventsSection 
        eventos={eventos}
        totalCount={totalCount}
        currentPage={page}
        limit={limit}
        hasNextPage={hasNextPage}
        hasPrevPage={hasPrevPage}
      />
    </Box>
  );
}