import {
  Flex,
  VStack,
  Heading,
  Text,
} from '@chakra-ui/react';

interface EventsHeaderProps {
  eventosCount: number;
  totalCount: number;
}

export const EventsHeader = ({ eventosCount, totalCount }: EventsHeaderProps) => {
  return (
    <Flex 
      w="full" 
      justify="space-between" 
      align="center"
      direction={{ base: 'column', md: 'row' }}
      gap={4}
    >
      <VStack align={{ base: 'center', md: 'flex-start' }} gap={2}>
        <Heading size="lg" color="gray.800">
          Eventos Disponibles
        </Heading>
        <Text color="gray.600" fontSize="sm">
          Mostrando {eventosCount} de {totalCount} eventos
        </Text>
      </VStack>
    </Flex>
  );
}; 