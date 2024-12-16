import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Troy Eatz Convenience Store',
    short_name: 'Troy Eatz Convenience Store',
    description: 'Stop by for the best snacks, drinks, and lottery.',
    start_url: '/',
    display: 'standalone',
    background_color: '#020912',
    theme_color: '#020912',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}