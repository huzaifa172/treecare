export default function HeroSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-green-900 mb-6">
            🌿 GreenGuardian
            <span className="block text-green-600">Smart Tree Care Platform</span>
          </h1>
          <p className="text-xl text-green-700 mb-8 max-w-3xl mx-auto">
            Join the revolution in tree care. Monitor, manage, and maintain your trees with AI-powered insights. 
            Track environmental impact and earn rewards for your green contributions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl">
              Get Started Free
            </button>
            <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">50,000+</div>
            <div className="text-green-700">Trees Monitored</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">10,000+</div>
            <div className="text-green-700">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-green-700">Organizations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
            <div className="text-green-700">AI Monitoring</div>
          </div>
        </div>
      </div>
    </section>
  );
}