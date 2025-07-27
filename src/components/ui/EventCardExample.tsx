'use client';

import React from 'react';
import { Box, VStack, HStack, Heading, Text } from '@chakra-ui/react';
import EventCard from './EventCard';
import { Evento } from '@/services/events/interfaces';
import { formatDate, formatTime, formatPrice } from '@/utils';


export const EventCardExample: React.FC = () => {
  const handleComprar = (eventoId: string) => {
    console.log(`Comprando entrada para evento: ${eventoId}`);
    // Aquí implementarías la lógica de compra
  };

  return (
    <Box p="6" bg="gray.50" minH="100vh">
      <VStack gap="8" align="stretch">
        {/* Sección de eventos destacados */}
        <Box>
          <Heading size="lg" mb="4" color="gray.800">
            Eventos Destacados
          </Heading>
          <HStack gap="6" overflowX="auto" pb="4">
            {eventosEjemplo.map((evento) => (
              <Box key={evento.id} minW="300px">
                <EventCard
                  evento={evento}
                  onComprar={handleComprar}
                  variant="featured"
                />
              </Box>
            ))}
          </HStack>
        </Box>

        {/* Sección de eventos regulares */}
        <Box>
          <Heading size="lg" mb="4" color="gray.800">
            Todos los Eventos
          </Heading>
          <VStack gap="6" align="stretch">
            {eventosEjemplo.map((evento) => (
              <EventCard
                key={evento.id}
                evento={evento}
                onComprar={handleComprar}
                variant="default"
              />
            ))}
          </VStack>
        </Box>

        {/* Sección de eventos compactos */}
        <Box>
          <Heading size="lg" mb="4" color="gray.800">
            Vista Compacta
          </Heading>
          <HStack gap="4" overflowX="auto" pb="4">
            {eventosEjemplo.map((evento) => (
              <Box key={evento.id} minW="250px">
                <EventCard
                  evento={evento}
                  onComprar={handleComprar}
                  variant="compact"
                />
              </Box>
            ))}
          </HStack>
        </Box>

        {/* Sección sin acciones */}
        <Box>
          <Heading size="lg" mb="4" color="gray.800">
            Vista de Solo Lectura
          </Heading>
          <HStack gap="6" overflowX="auto" pb="4">
            {eventosEjemplo.map((evento) => (
              <Box key={evento.id} minW="300px">
                <EventCard
                  evento={evento}
                  variant="default"
                  showActions={false}
                />
              </Box>
            ))}
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default EventCardExample; 