/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,DELETE,PATCH,POST,PUT' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      // Usuarios
      {
        source: '/api/usuarios',
        destination: 'http://micro-usuarios:8004/api/usuarios',
      },
      {
        source: '/api/usuarios/:id',
        destination: 'http://micro-usuarios:8004/api/usuarios/:id',
      },
      // Cursos
      {
        source: '/api/cursos',
        destination: 'http://micro-cursos:8002/api/cursos',
      },
      {
        source: '/api/cursos/:id',
        destination: 'http://micro-cursos:8002/api/cursos/:id',
      },
      {
        source: '/api/cursos/:cursoId/usuarios/:usuarioId',
        destination: 'http://micro-cursos:8002/api/cursos/:cursoId/usuarios/:usuarioId',
      },
      // Inscripciones
      {
        source: '/api/inscripciones',
        destination: 'http://micro-inscripciones:8003/api/inscripciones',
      },
      {
        source: '/api/inscripciones/:id',
        destination: 'http://micro-inscripciones:8003/api/inscripciones/:id',
      }
    ];
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    return config;
  }
};

module.exports = nextConfig; 
