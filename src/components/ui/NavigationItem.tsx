import Link from "next/link";
import { Button, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface NavigationItemProps {
  href?: string;
  icon: IconType;
  label: string;
  onClick?: () => void;
  isMobile?: boolean;
}

export function NavigationItem({ href, icon, label, onClick, isMobile = false }: NavigationItemProps) {
  const buttonProps = {
    variant: "ghost" as const,
    size: isMobile ? "lg" as const : "md" as const,
    _hover: {
      bg: 'rgba(59, 130, 246, 0.1)',
      transform: isMobile ? 'translateX(8px)' : 'translateY(-2px)',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    },
    transition: "all 0.2s ease-in-out" as const,
    fontWeight: "medium" as const,
    ...(isMobile && {
      width: "full",
      justifyContent: "flex-start" as const,
    }),
  };

  const content = (
    <>
      <Icon as={icon} mr={isMobile ? 3 : 2} />
      {label}
    </>
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick}>
        <Button {...buttonProps}>
          {content}
        </Button>
      </Link>
    );
  }

  return (
    <Button {...buttonProps}>
      {content}
    </Button>
  );
} 