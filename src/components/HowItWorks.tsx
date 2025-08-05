import { Download, Plus, Bell, BarChart3 } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Download,
    title: "Descarga la App",
    description:
      "Disponible gratis en App Store y Google Play. Instalación en menos de 30 segundos.",
    color: "from-orange-500 to-red-500",
  },
  {
    step: "02",
    icon: Plus,
    title: "Añade tus Suscripciones",
    description:
      "Agrega manualmente o conecta tus cuentas bancarias para importar automáticamente.",
    color: "from-amber-500 to-orange-500",
  },
  {
    step: "03",
    icon: Bell,
    title: "Configura Recordatorios",
    description:
      "Personaliza cuándo y cómo quieres recibir notificaciones de próximos pagos.",
    color: "from-yellow-500 to-amber-500",
  },
  {
    step: "04",
    icon: BarChart3,
    title: "Analiza y Ahorra",
    description:
      "Revisa tus gastos, identifica suscripciones innecesarias y optimiza tu presupuesto.",
    color: "from-orange-600 to-yellow-600",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Cómo funciona
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              en 4 pasos simples
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comenzar es súper fácil. En menos de 5 minutos tendrás todas tus
            suscripciones organizadas y bajo control.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-20 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-orange-200 via-amber-200 to-yellow-200"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
                    {/* Step Number with Icon Combined */}
                    <div className="relative mx-auto w-20 h-20 mb-6">
                      <div
                        className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.color} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                      ></div>
                      <div className="relative flex items-center justify-center w-full h-full">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      {/* Step number badge */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full border-3 border-orange-200 flex items-center justify-center">
                        <span className="text-sm font-bold text-orange-600">
                          {step.step}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed px-2">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-amber-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
            Comenzar Ahora - Es Gratis
          </button>
        </div>
      </div>
    </section>
  );
}
