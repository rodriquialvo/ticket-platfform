'use client';

import {
  Box,
  Flex,
  HStack,
  Container,
  Icon,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { FiHome, FiBarChart, FiSearch, FiUser, FiMenu } from 'react-icons/fi';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { NavigationLogo } from './NavigationLogo';
import { NavigationItem } from './NavigationItem';
import { AuthButtons } from './AuthButtons';
import { MobileMenu } from './MobileMenu';

export function Navigation() {
  const { open, onOpen, onClose } = useDisclosure();
  const scrollDirection = useScrollDirection();
  
  const bgColor = 'rgba(255, 255, 255, 0.95)';
  const borderColor = 'gray.200';
  const textColor = 'gray.800';

  const navItems = [
    { href: '/', icon: FiHome, label: 'Inicio' },
    { href: '/dashboard', icon: FiBarChart, label: 'Dashboard' },
    { icon: FiSearch, label: 'Buscar' },
    { icon: FiUser, label: 'Mi Cuenta' },
  ];

  // Determinar si la navegación debe estar visible
  const isVisible = scrollDirection !== 'down' || scrollDirection === null;

  return (
    <>
      <Box 
        as="nav" 
        bg={bgColor}
        borderBottom="1px" 
        borderColor={borderColor}
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={1000}
        backdropFilter="blur(20px)"
        backdropBlur="20px"
        boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
        transition="all 0.3s ease-in-out"
        transform={isVisible ? 'translateY(0)' : 'translateY(-100%)'}
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bg: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(20px)',
          zIndex: -1,
        }}
      >
        <Container maxW="7xl" px={{ base: 4, md: 6 }}>
          <Flex justify="space-between" align="center" py={4}>
            {/* Logo */}
            <NavigationLogo />

            {/* Desktop Navigation */}
            <HStack gap={6} display={{ base: 'none', lg: 'flex' }}>
              {navItems.map((item, index) => (
                <NavigationItem
                  key={index}
                  href={item.href}
                  icon={item.icon}
                  label={item.label}
                />
              ))}
            </HStack>

            {/* Desktop Auth Buttons */}
            <Box display={{ base: 'none', lg: 'flex' }}>
              <AuthButtons  />
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              display={{  lg: 'none' }}
              aria-label="Abrir menú"
              onClick={onOpen}
              size="md"
              color={textColor}
              variant="ghost"
              _hover={{
                bg: 'rgba(59, 130, 246, 0.1)',
                transform: 'scale(1.1)',
              }}
              transition="all 0.2s ease-in-out"
            >
              <Icon as={FiMenu} />
            </IconButton>
          </Flex>
        </Container>
      </Box>

      {/* Spacer para compensar la navegación fija */}
      {/* <Box height="20px" /> */}

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={open} 
        onClose={onClose} 
        navItems={navItems} 
      />
    </>
  );
} 