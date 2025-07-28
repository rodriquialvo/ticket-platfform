import { Box, Container } from "@chakra-ui/react";
import { Evento } from "@/services/events/interfaces";
import { EventHero } from "./EventHero";

interface EventPageContainerProps {
  evento: Evento;
}

export function EventPageContainer({ evento }: EventPageContainerProps) {
  return (
    <Container maxW="container.xl" py={8} px={{ base: 4, md: 8 }}>
      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <EventHero evento={evento} />
      </Box>
    </Container>
  );
} 