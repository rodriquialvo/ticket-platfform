/**
 * Utilidades para formateo de fechas y horas en español
 */

/**
 * Formatea una fecha en formato ISO 8601 a texto legible en español
 * @param dateString - Fecha en formato ISO 8601
 * @returns Fecha formateada en español (ej: "viernes, 15 de junio de 2024")
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

/**
 * Formatea una fecha en formato ISO 8601 a hora legible en español
 * @param dateString - Fecha en formato ISO 8601
 * @returns Hora formateada en español (ej: "20:00")
 */
export const formatTime = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
  });
};

/**
 * Obtiene solo la fecha de una fecha ISO sin la hora
 * @param dateString - Fecha en formato ISO 8601
 * @returns Fecha sin hora (ej: "15/06/2024")
 */
export const formatDateOnly = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
};

/**
 * Verifica si una fecha es hoy
 * @param dateString - Fecha en formato ISO 8601
 * @returns true si la fecha es hoy
 */
export const isToday = (dateString: string): boolean => {
  const date = new Date(dateString);
  const today = new Date();
  return date.toDateString() === today.toDateString();
};

/**
 * Verifica si una fecha es en el futuro
 * @param dateString - Fecha en formato ISO 8601
 * @returns true si la fecha es en el futuro
 */
export const isFuture = (dateString: string): boolean => {
  const date = new Date(dateString);
  const now = new Date();
  return date > now;
};

/**
 * Obtiene la diferencia en días entre una fecha y hoy
 * @param dateString - Fecha en formato ISO 8601
 * @returns Número de días de diferencia
 */
export const getDaysDifference = (dateString: string): number => {
  const date = new Date(dateString);
  const today = new Date();
  const diffTime = date.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}; 