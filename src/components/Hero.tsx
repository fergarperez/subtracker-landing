import { ArrowRight, Smartphone, Bell, TrendingDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 via-amber-400/10 to-yellow-400/10" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200/30 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-amber-200/20 rounded-full blur-2xl animate-pulse delay-1000" />
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-yellow-200/40 rounded-full blur-lg animate-pulse delay-500" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-800 text-sm font-medium mb-6">
              <Smartphone className="w-4 h-4 mr-2" />
              New Mobile App Available
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Control your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                subscriptions
              </span>
              from your mobile
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Never forget a payment again. Manage all your subscriptions,
              receive smart reminders and save money with our mobile app
              designed for modern life.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">$127</div>
                <div className="text-sm text-gray-500">
                  Average savings/month
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">98%</div>
                <div className="text-sm text-gray-500">On-time payments</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">50K+</div>
                <div className="text-sm text-gray-500">Active users</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#download"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-amber-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Download Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>

              <Link
                href="#demo"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-orange-300 hover:bg-orange-50 transition-all duration-200"
              >
                Watch Demo
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Free forever
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                No credit card required
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Secure data
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-80 h-[640px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="h-6 bg-gray-50 flex items-center justify-between px-6 text-xs font-medium text-gray-900">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-2 border border-gray-400 rounded-sm">
                        <div className="w-3 h-1 bg-green-500 rounded-sm m-0.5"></div>
                      </div>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 h-full">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <p className="text-gray-600 text-sm">Good morning,</p>
                        <p className="text-gray-900 font-bold text-lg">
                          Maria! 👋
                        </p>
                      </div>
                      <div className="relative">
                        <Bell className="w-6 h-6 text-gray-600" />
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                      </div>
                    </div>

                    {/* Balance Card */}
                    <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
                      <p className="text-gray-600 text-sm mb-2">
                        Monthly spending
                      </p>
                      <p className="text-3xl font-bold text-gray-900 mb-2">
                        $89.97
                      </p>
                      <div className="flex items-center">
                        <TrendingDown className="w-4 h-4 text-green-500 mr-1" />
                        <span className="text-green-500 text-sm font-medium">
                          15% less than last month
                        </span>
                      </div>
                    </div>

                    {/* Subscriptions */}
                    <div className="space-y-3">
                      <p className="font-semibold text-gray-900">
                        Upcoming payments
                      </p>

                      <div className="bg-white rounded-xl p-4 flex items-center">
                        <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-white font-bold">N</span>
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">Netflix</p>
                          <p className="text-gray-500 text-sm">Tomorrow</p>
                        </div>
                        <p className="font-bold text-gray-900">$15.99</p>
                      </div>

                      <div className="bg-white rounded-xl p-4 flex items-center">
                        <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-white font-bold">S</span>
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">Spotify</p>
                          <p className="text-gray-500 text-sm">Dec 15</p>
                        </div>
                        <p className="font-bold text-gray-900">$9.99</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg animate-bounce">
                <Bell className="w-6 h-6 text-orange-500" />
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-lg animate-pulse">
                <TrendingDown className="w-6 h-6 text-green-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
