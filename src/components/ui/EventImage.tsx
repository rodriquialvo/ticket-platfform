import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Evento } from "@/services/events/interfaces";

interface EventImageProps {
  evento: Evento;
  width?: number;
  height?: number;
}

export function EventImage({ evento, width = 400, height = 400 }: EventImageProps) {
  return (
    <Box w="full" maxW={{ base: "full", md: "500px" }}>
      <Image
        src={evento.imagenUrl}
        alt={evento.nombre}
        width={width}
        height={height}
        style={{ 
          objectFit: "cover",
          width: "100%",
          height: "auto"
        }}
      />
    </Box>
  );
} 