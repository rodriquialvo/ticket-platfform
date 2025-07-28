import { useState, useEffect } from 'react';

export type ScrollDirection = 'up' | 'down' | null;

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('up');
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > prevScrollY && currentScrollY > 80) {
        setScrollDirection('down');
      } else if (currentScrollY < prevScrollY) {
        setScrollDirection('up');
      }
      
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  // Retornar 'up' durante la hidratación para evitar diferencias
  return isClient ? scrollDirection : 'up';
} 