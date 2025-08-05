import { Bell, BarChart3, Shield, Smartphone } from "lucide-react";

const features = [
  {
    icon: Bell,
    title: "Smart Reminders",
    description:
      "Receive notifications 3, 2 and 1 day before each payment to never forget a subscription.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: BarChart3,
    title: "Detailed Analytics",
    description:
      "Visualize your expenses by category and discover patterns to optimize your budget.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Design",
    description:
      "Mobile-optimized interface with intuitive gestures and smooth navigation.",
    color: "from-yellow-500 to-amber-500",
  },
  {
    icon: Shield,
    title: "Secure Data",
    description:
      "Your data is protected with bank-level encryption and we never share your information.",
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
            Everything you need to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              control your subscriptions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our mobile app offers you all the necessary tools to manage your
            subscriptions intelligently and efficiently.
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
