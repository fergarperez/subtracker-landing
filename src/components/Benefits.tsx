import { TrendingDown, Clock, Shield } from "lucide-react";

const benefits = [
  {
    icon: TrendingDown,
    stat: "$127",
    label: "Ahorro promedio mensual",
    description:
      "Los usuarios ahorran en promedio $127 al mes identificando suscripciones innecesarias.",
    color: "text-green-600",
  },
  {
    icon: Clock,
    stat: "5 min",
    label: "Tiempo de configuración",
    description:
      "Configura toda la app y añade tus primeras suscripciones en menos de 5 minutos.",
    color: "text-blue-600",
  },
  {
    icon: Shield,
    stat: "100%",
    label: "Datos protegidos",
    description:
      "Encriptación de nivel bancario y cumplimiento total con regulaciones de privacidad.",
    color: "text-purple-600",
  },
];

export default function Benefits() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Resultados que
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              hablan por sí solos
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Miles de usuarios ya están ahorrando dinero y tiempo con SubTracker.
            Únete a la comunidad que tiene el control total de sus
            suscripciones.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-white border-2 border-gray-200 shadow-lg hover:shadow-2xl hover:shadow-orange-200/30 hover:border-orange-300 transition-all duration-300 group hover:transform hover:-translate-y-2"
              >
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 border border-gray-200`}
                >
                  <Icon className={`w-8 h-8 ${benefit.color}`} />
                </div>

                <div className={`text-4xl font-bold ${benefit.color} mb-2`}>
                  {benefit.stat}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {benefit.label}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
