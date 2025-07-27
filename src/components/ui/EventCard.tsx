'use client';

import React from 'react';
import {
  Box,
  Image,
  Text,
  Button,
  Badge,
  Flex,
  VStack,
  HStack,
  Icon,
  Link,
} from '@chakra-ui/react';
import { FiCalendar, FiMapPin, FiClock, FiUsers, FiHeart, FiShare2 } from 'react-icons/fi';
import { Evento } from '@/services/events/interfaces';
import { formatDate, formatTime, formatPrice } from '@/utils';
import paths from '@/constants/routes';

interface EventCardProps {
  evento: Evento;
  className?: string;
}

export const EventCard: React.FC<EventCardProps> = ({
  evento,
  className,
}) => {



  return (
    <Link href={paths.event(evento.id)}>
      <Box
        maxW="lg"
        bg="white"
        border="1px"
        borderColor="gray.200"
        borderRadius="md"
        overflow="hidden"
        className={className}
        position="relative"
        cursor="pointer"
        h="full"
        display="flex"
        flexDirection="column"
      >
        <Box position="relative" className="group">
          <Image
            src={evento.imagenUrl}
            alt={evento.nombre}
            height="260px"
            width="100%"
            objectFit="cover"
            transition="transform 0.3s"
            _groupHover={{ transform: 'scale(1.05)' }}
          />
          {/* Gradient overlay */}
          <Box
            position="absolute"
            bottom="0"
            left="0"
            right="0"
            height="60px"
            bgGradient="linear(to-t, blackAlpha.600, transparent)"
          />
        </Box>

        <Box p="6" pb="0" flex="1" display="flex" flexDirection="column">
          <VStack gap="1" align="stretch" display={"flex"} justifyContent={"space-between"} flex={1}>
            <Text
              fontSize={{ base: "sm", md: "md" }}
              fontWeight="bold"
              color="gray.800"
              lineHeight="tight"
              overflow="hidden"
            >
              {evento.nombre}
            </Text>

            <VStack alignContent="flex-end" gap="1" align="stretch" display={"flex"}>
              <Flex align="center" gap={1}>
                <Icon as={FiCalendar} color="blue.500" />
                <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600" fontWeight="medium">
                  {formatDate(evento.fecha)}
                </Text>
              </Flex>

              <Flex align="center" gap={1}>
                <Icon as={FiClock} color="green.500" />
                <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600" fontWeight="medium">
                  {formatTime(evento.fecha)}
                </Text>
              </Flex>

              <Flex align="center" gap={1}>
                <Icon as={FiMapPin} color="red.500" />
                <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600" fontWeight="medium">
                  {evento.ciudad}
                </Text>
              </Flex>
            </VStack>
          </VStack>
        </Box>
        <Box
          pt="4"
          pb="6"
          px="6"
          borderTop="1px"
          borderColor="gray.100"
        >
          <Flex
            w="100%"
            justify="space-between"
            align="center"
            direction={'row'}
            gap="3"
          >
            <Button
              colorScheme="blue"
              size="sm"
              px="2"
              fontWeight="semibold"
              _hover={{
                transform: 'scale(1.05)',
                shadow: 'lg',
              }}
              _active={{
                transform: 'scale(0.95)',
              }}
              transition="all 0.2s"
            >
              Comprar desde {formatPrice(evento.precio)}
            </Button>
            <Text as="span" color="gray.500">ATP</Text>
          </Flex>
        </Box>
      </Box>
    </Link>
  );
};

export default EventCard;
