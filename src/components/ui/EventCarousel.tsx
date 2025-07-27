'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Flex,
  IconButton,
  VStack,
  HStack,
  Text,
  Badge,
  Icon,
} from '@chakra-ui/react';

import { FiChevronLeft, FiChevronRight, FiCalendar, FiMapPin, FiClock } from 'react-icons/fi';
import { Evento } from '@/services/events/interfaces';
import { formatDate, formatTime } from '@/utils';

interface EventCarouselProps {
  eventos: Evento[];
  autoPlay?: boolean;
  interval?: number;
  showIndicators?: boolean;
  showNavigation?: boolean;
}

export const EventCarousel: React.FC<EventCarouselProps> = ({
  eventos,
  autoPlay = true,
  interval = 5000,
  showIndicators = true,
  showNavigation = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % eventos.length);
  }, [eventos.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + eventos.length) % eventos.length);
  }, [eventos.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  if (!eventos.length) {
    return (
      <Box py={16} textAlign="center">
        <Text fontSize="lg" color="gray.600">
          No hay eventos disponibles
        </Text>
      </Box>
    );
  }

  const currentEvento = eventos[currentIndex];

  return (
    <Box
      bgGradient="linear(to-r, yellow.400, orange.500, green.600)"
      w="full"
      alignItems="center"
      justifyContent="center"
      position="relative"
      px={{ base: 4, lg: 300 }}
    // bg="red"
    >
      {/* Background image for mobile */}
      <Box
        display={{ base: 'block', lg: 'none' }}
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgImage={`url(${currentEvento.imagenUrl})`}
        bgSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        opacity="0.3"
        zIndex={1}
      />

      {/* Main content */}
      <Box maxW="full" zIndex={2} py={{ base: 6, lg: 12 }} >
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          align={{ base: 'flex-start', lg: 'center' }}
          justify={{ base: 'flex-end', lg: 'space-between' }}
          gap={8}
          minH={{ base: "200px", lg: "350px" }}
          // position="relative"
          h="full"
          w="full"
        >
          {/* Event information */}
          <VStack
            align={{ base: 'flex-start', lg: 'flex-start' }}
            textAlign={{ base: 'left', lg: 'left' }}
            flex="1"
            gap={{ base: 1, lg: 6 }}
            color="white"
            position={{ base: 'absolute', lg: 'relative' }}
            zIndex={5}
            bottom={{ base: '0', lg: 'auto' }}
            left={{ base: '2', lg: 'auto' }}
            right={{ base: '4', lg: 'auto' }}
          >
            {/* Event title */}
            <Box>
              <Text
                fontSize={{ base: 'md', md: 'lg', lg: '2xl' }}
                fontWeight="extrabold"
                lineHeight="tight"
                textShadow="2px 2px 4px rgba(0,0,0,0.3)"
                display="flex"
                flexDirection={{base: 'row', lg: 'column'}}
              >
                  <Text fontSize={{ base: 'md', md: 'lg', lg: '3xl' }} as="span" color="yellow.300">
                    {currentEvento.nombre.split(' ').slice(0, 2).join(' ') + ' '}
                  </Text>

                  <Text as="span" color={{base: 'yellow.300', lg: 'white'}}>
                    {currentEvento.nombre.split(' ').slice(2).join(' ')}
                  </Text>
              </Text>
            </Box>

            {/* Event details */}
            <Box>
              <Box gap={{ base: 1, lg: 6 }}>
                <HStack gap={2}>
                  <Icon as={FiCalendar} />
                  <Text fontWeight="semibold">{formatDate(currentEvento.fecha)}</Text>
                </HStack>
                <HStack gap={2}>
                  <Icon as={FiMapPin} />
                  <Text fontWeight="semibold">{currentEvento.ciudad}</Text>
                </HStack>
              </Box>
            </Box>
          </VStack>

          {/* Event image for desktop */}
          <Box
            display={{ base: 'none', lg: 'block' }}
            flex="1"
            maxW="400px"
            position="relative"
          >
            <Box
              bgImage={`url(${currentEvento.imagenUrl})`}
              bgSize="cover"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              borderRadius="xl"
              height="300px"
              position="relative"
              overflow="hidden"
              boxShadow="2xl"
            >
              {/* Gradient overlay */}
              <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                bgGradient="linear(to-t, blackAlpha.600, transparent)"
              />
            </Box>
          </Box>
        </Flex>
      </Box>

      {/* Navigation arrows */}
      {showNavigation && eventos.length > 1 && (
        <>
          <IconButton
            aria-label="Previous slide"
            position="absolute"
            left={{ base: 5, md: 20 }}
            top="50%"
            transform="translateY(-50%)"
            onClick={prevSlide}
            colorScheme="whiteAlpha"
            borderRadius="full"
            size="lg"
            zIndex={10}
            _hover={{ bg: 'whiteAlpha.300' }}
          >
            <FiChevronLeft />
          </IconButton>
          <IconButton
            aria-label="Next slide"
            position="absolute"
            right={{ base: 5, md: 20 }}
            top="50%"
            transform="translateY(-50%)"
            onClick={nextSlide}
            colorScheme="whiteAlpha"
            borderRadius="full"
            size="lg"
            zIndex={10}
            _hover={{ bg: 'whiteAlpha.300' }}
          >
            <FiChevronRight />
          </IconButton>
        </>
      )}

      {/* Indicators */}
      {showIndicators && eventos.length > 1 && (
        <HStack
          position="absolute"
          bottom="6"
          left="50%"
          transform="translateX(-50%)"
          gap={2}
          zIndex={10}
          display={{ base: 'none', lg: 'flex' }}
        >
          {eventos.map((_, index) => (
            <Box
              key={index}
              w="3"
              h="3"
              borderRadius="full"
              bg={index === currentIndex ? 'white' : 'whiteAlpha.400'}
              cursor="pointer"
              transition="all 0.3s"
              _hover={{ bg: 'whiteAlpha.600' }}
              onClick={() => goToSlide(index)}
            />
          ))}
        </HStack>
      )}
    </Box>
  );
}; 