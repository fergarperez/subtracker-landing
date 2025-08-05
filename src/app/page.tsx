import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SubTracker - Controla tus suscripciones desde tu móvil",
  description:
    "La app móvil que te ayuda a gestionar todas tus suscripciones, recibir recordatorios inteligentes y ahorrar dinero cada mes.",
  keywords:
    "suscripciones, app móvil, ahorro, recordatorios, gestión financiera",
  authors: [{ name: "SubTracker Team" }],
  openGraph: {
    title: "SubTracker - Controla tus suscripciones desde tu móvil",
    description:
      "Nunca más olvides un pago. Gestiona todas tus suscripciones y ahorra dinero con nuestra app móvil.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "SubTracker - Controla tus suscripciones desde tu móvil",
    description:
      "Nunca más olvides un pago. Gestiona todas tus suscripciones y ahorra dinero con nuestra app móvil.",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
    </main>
  );
}
