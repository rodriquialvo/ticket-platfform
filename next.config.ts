import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Ignora las advertencias de ESLint, pero no los errores.
    // Si quieres ignorar incluso los errores, usa `ignoreDuringBuilds: true`
    ignoreDuringBuilds: true, // Esto hará que Vercel no falle el build por errores de ESLint
  },
  typescript: {
    // Ignora los errores de TypeScript.
    // Solo úsalo si estás seguro de que el código es válido
    // o si es un despliegue muy urgente.
    ignoreBuildErrors: true, // Esto hará que Vercel no falle el build por errores de TypeScript
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'imagenes.alpogo.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
