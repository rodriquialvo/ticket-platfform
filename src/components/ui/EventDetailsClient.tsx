'use client'

import { Box, Heading, Text, VStack, HStack, Icon } from "@chakra-ui/react";
import { Evento } from "@/services/events/interfaces";
import { FiCalendar, FiMapPin } from 'react-icons/fi';

interface EventDetailsClientProps {
  evento: Evento;
}

export function EventDetailsClient({ evento }: EventDetailsClientProps) {
  return (
    <Box>
      <VStack align="start" gap={4}>
        <Heading size="lg">{evento.nombre}</Heading>
        <VStack align="start" gap={2}>
          <HStack>
            <Icon as={FiCalendar} />
            <Text>{evento.fecha}</Text>
          </HStack>
          <HStack>
            <Icon as={FiMapPin} />
            <Text>{evento.ciudad}</Text>
          </HStack>
        </VStack>
        <Text>{evento.descripcion}</Text>
      </VStack>
    </Box>
  );
} 