import {
  Box,
  Container,
} from '@chakra-ui/react';
import { EventCarousel } from '@/components/ui/EventCarousel';
import { Evento } from '@/services/events/interfaces';

interface HeroSectionProps {
  eventos?: Evento[];
}

export const HeroSection = ({ eventos = [] }: HeroSectionProps) => {
      return (
      <Box 
        bg="black"
        overflow="hidden"
      >
        <EventCarousel 
          eventos={eventos}
          autoPlay={true}
          interval={5000}
          showIndicators={true}
          showNavigation={true}
        />
    </Box>
  );
}; 