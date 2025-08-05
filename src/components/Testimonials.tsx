import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Gonzalez",
    role: "Freelance Designer",
    avatar: "👩‍💻",
    rating: 5,
    text: "SubTracker helped me discover I was paying for 3 streaming services I wasn't using. I saved $45 per month effortlessly.",
    highlight: "Saved $45 per month",
  },
  {
    name: "Carlos Ruiz",
    role: "Entrepreneur",
    avatar: "👨‍💼",
    rating: 5,
    text: "The app is super intuitive and the reminders have saved me from several unexpected charges. I recommend it 100%.",
    highlight: "Super intuitive",
  },
  {
    name: "Ana Martin",
    role: "Student",
    avatar: "👩‍🎓",
    rating: 5,
    text: "As a student, every dollar counts. This app helps me keep my expenses under control and I never forget to cancel free trials again.",
    highlight: "Every dollar counts",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What our users
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              are saying
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thousands of people are already saving money and time with
            SubTracker. Read their real experiences.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative group hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-full p-3">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4 pt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Highlight */}
              <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-lg p-3 mb-6">
                <p className="text-orange-800 font-semibold text-center">
                  💡 {testimonial.highlight}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center">
                <div className="text-3xl mr-4">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 fill-current mr-2" />
              <span className="font-semibold">4.9/5 on App Store</span>
            </div>
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 fill-current mr-2" />
              <span className="font-semibold">4.8/5 on Google Play</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold">50,000+ downloads</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
