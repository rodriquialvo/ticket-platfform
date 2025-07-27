import {
  Flex,
  Button,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { FiTrendingUp } from 'react-icons/fi';

interface PaginationProps {
  currentPage: number;
  totalCount: number;
  limit: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export const Pagination = ({ 
  currentPage, 
  totalCount, 
  limit, 
  hasNextPage, 
  hasPrevPage 
}: PaginationProps) => {
  if (!hasNextPage && !hasPrevPage) {
    return null;
  }

  return (
    <Flex 
      justify="center" 
      align="center" 
      gap={4} 
      mt={8}
      direction={{ base: 'column', sm: 'row' }}
    >
      <Button
        disabled={!hasPrevPage}
        variant="outline"
        colorScheme="blue"
      >
        <Icon as={FiTrendingUp} mr={2} />
        Anterior
      </Button>
      
      <HStack gap={2}>
        {Array.from({ length: Math.min(5, Math.ceil(totalCount / limit)) }, (_, i) => {
          const pageNum = i + 1;
          return (
            <Button
              key={pageNum}
              colorScheme={currentPage === pageNum ? "blue" : "gray"}
              variant={currentPage === pageNum ? "solid" : "outline"}
              size="sm"
              minW="40px"
            >
              {pageNum}
            </Button>
          );
        })}
      </HStack>

      <Button
        disabled={!hasNextPage}
        variant="outline"
        colorScheme="blue"
      >
        Siguiente
        <Icon as={FiTrendingUp} ml={2} />
      </Button>
    </Flex>
  );
}; 