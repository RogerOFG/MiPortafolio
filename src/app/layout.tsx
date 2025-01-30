import "./globals.css";
import type { Metadata } from "next";
import { barlowSC } from "./ui/fonts";

// Component
import { Header } from "./components/Header";

// Agregar el "/" para probar localmente, quitar el "/" antes de subirlo al repositorio
const patch = 'img'; 

export const metadata: Metadata = {
  title: "Roger Florez | Frontend Developer",
  description: "Este es mi portafolio personal, donde muestro mis habilidades como desarrollador frontend.",
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
      </head>

      <body id="start" className={`${barlowSC.className} relative antialiased`}>
        <Header patch={patch} />

        <main>
          {children}
        </main>

        <footer className="flex items-center justify-center py-6">
          <p className="text-sm font-medium">Developed and designed by Roger Florez. ©2025.</p>
        </footer>
      </body>
    </html>
  );
}
