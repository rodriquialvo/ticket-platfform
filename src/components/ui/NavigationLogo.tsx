import Link from "next/link";
import { Flex, Text } from '@chakra-ui/react';

export function NavigationLogo() {
  return (
    <Link href="/">
      <Flex 
        align="center" 
        gap={2} 
        _hover={{ 
          transform: 'scale(1.05)',
          transition: 'all 0.2s ease-in-out'
        }}
        transition="all 0.2s ease-in-out"
      >
        <Text 
          fontSize={{ base: 'lg', md: 'xl' }} 
          fontWeight="bold" 
          bgGradient="linear(to-r, blue.600, purple.600)"
          bgClip="text"
        >
          🎟️ Ticket Platform
        </Text>
      </Flex>
    </Link>
  );
} 