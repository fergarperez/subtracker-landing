import { Bell, BarChart3, Shield, Smartphone } from "lucide-react";

const features = [
  {
    icon: Bell,
    title: "Recordatorios Inteligentes",
    description:
      "Recibe notificaciones 3, 2 y 1 día antes de cada pago para nunca olvidar una suscripción.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: BarChart3,
    title: "Análisis Detallado",
    description:
      "Visualiza tus gastos por categoría y descubre patrones para optimizar tu presupuesto.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Smartphone,
    title: "Diseño Móvil",
    description:
      "Interfaz optimizada para móviles con gestos intuitivos y navegación fluida.",
    color: "from-yellow-500 to-amber-500",
  },
  {
    icon: Shield,
    title: "Datos Seguros",
    description:
      "Tus datos están protegidos con encriptación de nivel bancario y nunca compartimos tu información.",
    color: "from-orange-600 to-red-600",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Todo lo que necesitas para
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              controlar tus suscripciones
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestra app móvil te ofrece todas las herramientas necesarias para
            gestionar tus suscripciones de manera inteligente y eficiente.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
