const paths = {
    // Ruta para la página de inicio
    home() {
      return '/';
    },
    
    // Función para la ruta dinámica de detalle de evento
    event(id: string) {
      return `/event/${id}`;
    },
    
    // Ejemplo de otras rutas que podrías tener
    cart() {
      return '/cart';
    },
  
    dashboard() {
      return '/dashboard';
    }
  };
  
  export default paths;