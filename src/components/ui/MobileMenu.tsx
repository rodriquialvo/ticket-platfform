import {
  Box,
  Flex,
  Text,
  IconButton,
  Icon,
  VStack,
} from '@chakra-ui/react';
import { FiX } from 'react-icons/fi';
import { NavigationItem } from './NavigationItem';
import { AuthButtons } from './AuthButtons';
import { IconType } from 'react-icons';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: Array<{
    href?: string;
    icon: IconType;
    label: string;
  }>;
}

export function MobileMenu({ isOpen, onClose, navItems }: MobileMenuProps) {
  return (
    <>
      {/* Mobile Menu Overlay */}
      {isOpen && (
        <Box
          position="fixed"
          top={0}
          right={0}
          bottom={0}
          left={0}
          bg="rgba(0, 0, 0, 0.5)"
          backdropFilter="blur(10px)"
          zIndex={2000}
          onClick={onClose}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <Box
        position="fixed"
        top={0}
        right={0}
        bottom={0}
        width="300px"
        bg="rgba(255, 255, 255, 0.95)"
        backdropFilter="blur(20px)"
        zIndex={3000}
        transform={isOpen ? 'translateX(0)' : 'translateX(100%)'}
        transition="transform 0.3s ease-in-out"
        boxShadow="0 25px 50px -12px rgba(0, 0, 0, 0.25)"
        borderLeft="1px"
        borderColor="gray.200"
      >
        <Flex justify="space-between" align="center" p={6} borderBottom="1px" borderColor="gray.200">
          <Text 
            fontSize="xl" 
            fontWeight="bold"
            bgGradient="linear(to-r, blue.600, purple.600)"
            bgClip="text"
          >
            🎟️ Ticket Platform
          </Text>
          <IconButton
            aria-label="Cerrar menú"
            variant="ghost"
            onClick={onClose}
            size="sm"
            _hover={{
              bg: 'rgba(239, 68, 68, 0.1)',
              transform: 'scale(1.1)',
            }}
            transition="all 0.2s ease-in-out"
          >
            <Icon as={FiX} />
          </IconButton>
        </Flex>
        
        <Box p={6}>
          <VStack gap={4} align="stretch">
            {navItems.map((item, index) => (
              <NavigationItem
                key={index}
                href={item.href}
                icon={item.icon}
                label={item.label}
                onClick={onClose}
                isMobile={true}
              />
            ))}
            
            <Box pt={6} borderTopWidth="1px" borderColor="gray.200">
              <AuthButtons isMobile={true} />
            </Box>
          </VStack>
        </Box>
      </Box>
    </>
  );
} 