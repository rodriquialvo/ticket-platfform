import { Button, VStack } from '@chakra-ui/react';

interface AuthButtonsProps {
  isMobile?: boolean;
}

export function AuthButtons() {

  return (
    <VStack flexDir={{base: 'column', md: 'row'}} gap={3}>
      <Button 
        size={{base: 'sm', md: 'md'}}
        width={{base: 'full'}}
        variant="outline" 
        colorScheme="blue"
        _hover={{
          transform: 'translateY(-1px)',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          bg: 'rgba(59, 130, 246, 0.05)',
        }}
        transition="all 0.2s ease-in-out"
        fontWeight="medium"
      >
        Iniciar Sesión
      </Button>
      <Button 
        size={{base: 'sm', md: 'md'}}
        width={{base: 'full'}}
        colorScheme="blue"
        bgGradient="linear(to-r, blue.500, purple.500)"
        _hover={{
          bgGradient: "linear(to-r, blue.600, purple.600)",
          transform: 'translateY(-1px)',
          boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.3)',
        }}
        transition="all 0.2s ease-in-out"
        fontWeight="medium"
      >
        Registrarse
      </Button>
    </VStack>
  );
} 