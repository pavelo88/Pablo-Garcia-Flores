export const metadata = {
  title: 'Pablo García Flores',
  description: 'Ingeniero especialista en Control Patrimonial Estatal y Arquitecto Full-Stack',
}

import '../index.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://pavelo88.github.io/#person",
                  "name": "Pablo Fabricio García Flores",
                  "jobTitle": [
                    "Analista de Activos Fijos",
                    "Desarrollador de Software Avanzado",
                    "Ingeniero en Administración de Empresas"
                  ],
                  "description": "Ingeniero especialista en Control Patrimonial Estatal y Arquitecto Full-Stack enfocado en orquestación de agentes autónomos."
                }
              ]
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
