# Componentes de Secciones

Esta carpeta contiene los componentes modulares que forman las diferentes secciones de la página principal.

## Estructura

### `HeroSection.tsx`
Componente que renderiza la sección hero de la página principal con el título y descripción.

### `StatsSection.tsx`
Componente que muestra las estadísticas de eventos (total, activos, ciudades).

**Props:**
- `totalCount: number` - Número total de eventos
- `activeEvents: number` - Número de eventos activos

### `EventsSection.tsx`
Componente principal que combina el header, grid y paginación de eventos.

**Props:**
- `eventos: Evento[]` - Array de eventos a mostrar
- `totalCount: number` - Número total de eventos
- `currentPage: number` - Página actual
- `limit: number` - Límite de eventos por página
- `hasNextPage: boolean` - Si hay página siguiente
- `hasPrevPage: boolean` - Si hay página anterior

### `EventsHeader.tsx`
Componente que muestra el encabezado de la sección de eventos.

**Props:**
- `eventosCount: number` - Número de eventos mostrados
- `totalCount: number` - Número total de eventos

### `EventsGrid.tsx`
Componente que renderiza la cuadrícula de eventos o el estado vacío.

**Props:**
- `eventos: Evento[]` - Array de eventos a mostrar

### `Pagination.tsx`
Componente que maneja la paginación de eventos.

**Props:**
- `currentPage: number` - Página actual
- `totalCount: number` - Número total de eventos
- `limit: number` - Límite de eventos por página
- `hasNextPage: boolean` - Si hay página siguiente
- `hasPrevPage: boolean` - Si hay página anterior

## Uso

```tsx
import { 
  HeroSection, 
  StatsSection, 
  EventsSection 
} from '@/components/sections';

// En tu página principal
<HeroSection />
<StatsSection totalCount={100} activeEvents={25} />
<EventsSection 
  eventos={eventos}
  totalCount={100}
  currentPage={1}
  limit={6}
  hasNextPage={true}
  hasPrevPage={false}
/>
```

## Beneficios de la Modularización

1. **Reutilización**: Los componentes pueden ser reutilizados en otras páginas
2. **Mantenibilidad**: Cada componente tiene una responsabilidad específica
3. **Testabilidad**: Es más fácil escribir tests para componentes pequeños
4. **Legibilidad**: El código es más fácil de leer y entender
5. **Escalabilidad**: Facilita agregar nuevas funcionalidades 