# EventCard Component

Un componente reutilizable y responsive para mostrar tarjetas de eventos en una plataforma de venta de entradas.

## Características

- ✅ **Responsive**: Se adapta a diferentes tamaños de pantalla
- ✅ **Reutilizable**: Múltiples variantes y configuraciones
- ✅ **Escalable**: Fácil de extender y personalizar
- ✅ **Accesible**: Iconos descriptivos y estructura semántica
- ✅ **Interactivo**: Efectos hover y animaciones suaves
- ✅ **Formateo automático**: Fechas, precios y horas en formato español

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `evento` | `Evento` | - | **Requerido**. Objeto con la información del evento |
| `onComprar` | `(eventoId: string) => void` | - | Función callback cuando se hace clic en "Comprar" |
| `variant` | `'default' \| 'compact' \| 'featured'` | `'default'` | Variante visual del componente |
| `showActions` | `boolean` | `true` | Mostrar/ocultar botón de compra |
| `className` | `string` | - | Clases CSS adicionales |

## Variantes

### Default
Tarjeta completa con descripción y todas las acciones.

### Compact
Versión reducida ideal para listas o grids con muchos eventos.

### Featured
Versión destacada con badge especial, ideal para eventos principales.

## Uso Básico

```tsx
import EventCard from '@/components/ui/EventCard';
import { Evento } from '@/services/events/interfaces';

const evento: Evento = {
  id: '1',
  nombre: 'Concierto de Rock',
  fecha: '2024-06-15T20:00:00',
  ciudad: 'Madrid',
  precio: 45.00,
  imagenUrl: 'https://ejemplo.com/imagen.jpg',
  descripcion: 'Una noche inolvidable...',
};

const handleComprar = (eventoId: string) => {
  console.log(`Comprando entrada para: ${eventoId}`);
};

<EventCard 
  evento={evento} 
  onComprar={handleComprar} 
/>
```

## Ejemplos de Uso

### Lista de Eventos
```tsx
<VStack gap="6">
  {eventos.map((evento) => (
    <EventCard
      key={evento.id}
      evento={evento}
      onComprar={handleComprar}
      variant="default"
    />
  ))}
</VStack>
```

### Grid de Eventos Compactos
```tsx
<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="6">
  {eventos.map((evento) => (
    <EventCard
      key={evento.id}
      evento={evento}
      onComprar={handleComprar}
      variant="compact"
    />
  ))}
</SimpleGrid>
```

### Eventos Destacados
```tsx
<HStack gap="6" overflowX="auto">
  {eventosDestacados.map((evento) => (
    <EventCard
      key={evento.id}
      evento={evento}
      onComprar={handleComprar}
      variant="featured"
    />
  ))}
</HStack>
```

### Vista de Solo Lectura
```tsx
<EventCard
  evento={evento}
  showActions={false}
/>
```

## Estructura de Datos

El componente espera un objeto `Evento` con la siguiente estructura:

```typescript
interface Evento {
  id: string;
  nombre: string;
  fecha: string; // ISO 8601 format
  ciudad: string;
  precio: number;
  imagenUrl: string;
  descripcion: string;
}
```

## Formateo Automático

El componente utiliza utilidades de formateo ubicadas en `src/utils/`:

- **Fechas**: Se formatean automáticamente en español (ej: "viernes, 15 de junio de 2024")
- **Horas**: Formato 24h en español (ej: "20:00")
- **Precios**: Formato de moneda española (ej: "45,00 €")

### Utilidades disponibles:

```tsx
import { 
  formatDate, 
  formatTime, 
  formatPrice,
  isToday,
  isFuture,
  formatPriceWithDiscount 
} from '@/utils';
```

## Personalización

### Colores
El componente usa el sistema de colores de Chakra UI y se adapta automáticamente al tema.

### Iconos
Utiliza iconos de `react-icons/fi`:
- 📅 `FiCalendar` - Fecha del evento
- 🕐 `FiClock` - Hora del evento  
- 📍 `FiMapPin` - Ubicación
- 👥 `FiUsers` - Botón de compra

### Responsive
- **Mobile**: Diseño vertical optimizado
- **Tablet**: Layout híbrido
- **Desktop**: Diseño horizontal completo

## Accesibilidad

- Iconos descriptivos para cada información
- Estructura semántica con headings apropiados
- Contraste de colores adecuado
- Estados hover y focus visibles

## Dependencias

- `@chakra-ui/react` - Componentes de UI
- `react-icons/fi` - Iconos
- TypeScript para tipado
- `@/utils` - Utilidades de formateo (fechas, precios, etc.)

## Ejemplo Completo

Ver `EventCardExample.tsx` para un ejemplo completo con todas las variantes y casos de uso. 