import {
  Box,
  SimpleGrid,
  Center,
  VStack,
  Text,
  Icon,
} from '@chakra-ui/react';
import { FiCalendar } from 'react-icons/fi';
import { EventCard } from '@/components/ui/EventCard';
import { Evento } from '@/services/events/interfaces';

interface EventsGridProps {
  eventos: Evento[];
}

export const EventsGrid = ({ eventos }: EventsGridProps) => {
  if (eventos.length === 0) {
    return (
      <Center py={12}>
        <VStack gap={4}>
          <Icon as={FiCalendar} w={16} h={16} color="gray.400" />
          <Text fontSize="lg" color="gray.600">
            No hay eventos disponibles en este momento
          </Text>
          <Text fontSize="sm" color="gray.500">
            Vuelve más tarde para ver nuevos eventos
          </Text>
        </VStack>
      </Center>
    );
  }

  return (
    <SimpleGrid 
      columns={{ base: 1, md: 2, lg: 4 }} 
      gap={8} 
      w="full"
      // px={{ base: 4, md: 8, lg: 12 }}
    >
      {eventos.map((evento) => (
        <EventCard 
          key={evento.id} 
          evento={evento}
        />
      ))}
    </SimpleGrid>
  );
}; 