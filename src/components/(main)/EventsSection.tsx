import {
    Box,
    Container,
    VStack,
} from '@chakra-ui/react';
import { EventsHeader } from './EventsHeader';
import { EventsGrid } from './EventsGrid';
import { Pagination } from './Pagination';
import { Evento } from '@/services/events/interfaces';

interface EventsSectionProps {
    eventos: Evento[];
    totalCount: number;
    currentPage: number;
    limit: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
}

export const EventsSection = ({
    eventos,
    totalCount,
    currentPage,
    limit,
    hasNextPage,
    hasPrevPage
}: EventsSectionProps) => {
    return (
        <Box py={12} w="full" display="flex" justifyContent="center" alignItems="center">
            <Box maxW="7xl" w="full" display="flex" justifyContent="center" alignItems="center">
                <VStack px={{ base: "100", md: "8", lg: "12" }} gap={8} align="center" w="full">
                    <EventsHeader
                        eventosCount={eventos.length}
                        totalCount={totalCount}
                    />
                    <Box w="full" h="1px" />
                    <EventsGrid eventos={eventos} />
                    <Pagination
                        currentPage={currentPage}
                        totalCount={totalCount}
                        limit={limit}
                        hasNextPage={hasNextPage}
                        hasPrevPage={hasPrevPage}
                    />
                </VStack>
            </Box>
        </Box>
    );
};