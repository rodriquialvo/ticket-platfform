/**
 * Utilidades para formateo de precios y monedas
 */

/**
 * Formatea un precio en formato de moneda española (EUR)
 * @param price - Precio en número
 * @returns Precio formateado (ej: "45,00 €")
 */
export const formatPrice = (price: number): string => {
  // Formatea el número con separador de miles y sin decimales, anteponiendo el símbolo $
  return `$${price.toLocaleString('es-AR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
};

/**
 * Formatea un precio sin símbolo de moneda
 * @param price - Precio en número
 * @returns Precio formateado sin símbolo (ej: "45,00")
 */
export const formatPriceWithoutSymbol = (price: number): string => {
  return new Intl.NumberFormat('es-ES', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
};

/**
 * Formatea un precio con descuento
 * @param originalPrice - Precio original
 * @param discountPercentage - Porcentaje de descuento
 * @returns Objeto con precio original, precio con descuento y ahorro
 */
export const formatPriceWithDiscount = (
  originalPrice: number,
  discountPercentage: number
) => {
  const discountAmount = (originalPrice * discountPercentage) / 100;
  const discountedPrice = originalPrice - discountAmount;

  return {
    originalPrice: formatPrice(originalPrice),
    discountedPrice: formatPrice(discountedPrice),
    discountAmount: formatPrice(discountAmount),
    savings: formatPrice(discountAmount),
  };
};

/**
 * Verifica si un precio es gratuito
 * @param price - Precio en número
 * @returns true si el precio es 0 o menor
 */
export const isFree = (price: number): boolean => {
  return price <= 0;
};

/**
 * Obtiene el texto para un precio gratuito
 * @returns "Gratis" en español
 */
export const getFreeText = (): string => {
  return 'Gratis';
};

/**
 * Formatea un rango de precios
 * @param minPrice - Precio mínimo
 * @param maxPrice - Precio máximo
 * @returns Rango de precios formateado
 */
export const formatPriceRange = (minPrice: number, maxPrice: number): string => {
  if (minPrice === maxPrice) {
    return formatPrice(minPrice);
  }
  return `${formatPrice(minPrice)} - ${formatPrice(maxPrice)}`;
}; 