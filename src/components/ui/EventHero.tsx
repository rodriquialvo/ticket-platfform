import { Box, Flex } from "@chakra-ui/react";
import { Evento } from "@/services/events/interfaces";
import { EventImage } from "./EventImage";
import { EventDetails } from "./EventDetails";

interface EventHeroProps {
  evento: Evento;
}

export function EventHero({ evento }: EventHeroProps) {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="center"
      gap={10}
      w="full"
      px={{ base: 4, md: 0 }}
    >
      <EventImage evento={evento} />
      <EventDetails evento={evento} />
    </Flex>
  );
} 