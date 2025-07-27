import {
  Box,
  Container,
  Text,
  SimpleGrid,
} from '@chakra-ui/react';

interface StatsSectionProps {
  totalCount: number;
  activeEvents: number;
}

export const StatsSection = ({ totalCount, activeEvents }: StatsSectionProps) => {
  return (
    <Box py={8} bg="white" borderBottom="1px" borderColor="gray.200">
      <Container maxW="7xl">
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
          <Box textAlign="center">
            <Text color="gray.600" fontSize="sm">Total Eventos</Text>
            <Text color="blue.500" fontSize="3xl" fontWeight="bold">{totalCount}</Text>
            <Text fontSize="xs" color="gray.500">
              ↑ 12% más que el mes pasado
            </Text>
          </Box>
          <Box textAlign="center">
            <Text color="gray.600" fontSize="sm">Eventos Activos</Text>
            <Text color="green.500" fontSize="3xl" fontWeight="bold">{activeEvents}</Text>
            <Text fontSize="xs" color="gray.500">
              ↑ 8% más que la semana pasada
            </Text>
          </Box>
          <Box textAlign="center">
            <Text color="gray.600" fontSize="sm">Ciudades</Text>
            <Text color="purple.500" fontSize="3xl" fontWeight="bold">15+</Text>
            <Text fontSize="xs" color="gray.500">
              Nuevas ciudades agregadas
            </Text>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}; 