"use client"

import { Badge, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface IconBadgeProps {
  icon: IconType;
  children: React.ReactNode;
}

export function IconBadge({ icon, children }: IconBadgeProps) {
  return (
    <Badge colorScheme="whiteAlpha" px={4} py={2} borderRadius="full">
      <Icon as={icon} mr={2} />
      {children}
    </Badge>
  );
}