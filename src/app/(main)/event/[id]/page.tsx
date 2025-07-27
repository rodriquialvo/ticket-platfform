import { Box, Heading } from "@chakra-ui/react";
import { getEventoById } from "@/services/events/events";

export default async function EventPage({ params }: { params: { id: string } }) {
    const evento = await getEventoById(params.id);
    console.log(evento);
    return (
        <Box flex={1} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Heading color="white">{evento?.nombre}</Heading>
        </Box>
    );
}