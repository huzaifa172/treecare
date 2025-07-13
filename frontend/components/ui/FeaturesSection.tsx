export default function FeaturesSection() {
  const features = [
    {
      icon: "🌱",
      title: "Smart Monitoring",
      description: "AI-powered sensors track soil moisture, temperature, and tree health in real-time."
    },
    {
      icon: "📱",
      title: "Mobile App",
      description: "Access your tree data anywhere with our intuitive mobile application."
    },
    {
      icon: "🤖",
      title: "AI Insights",
      description: "Get personalized care recommendations based on tree species and local conditions."
    },
    {
      icon: "📊",
      title: "Analytics Dashboard",
      description: "Comprehensive reports and trends to optimize your tree care strategy."
    },
    {
      icon: "🔔",
      title: "Smart Alerts",
      description: "Receive notifications for watering, pruning, and health issues."
    },
    {
      icon: "🌍",
      title: "Environmental Impact",
      description: "Track your contribution to carbon sequestration and biodiversity."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-4">
            Why Choose TreeCare?
          </h2>
          <p className="text-lg text-green-700 max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge technology with expert knowledge 
            to ensure your trees thrive and contribute to a sustainable future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-green-100"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-green-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Tree Care?
            </h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Join thousands of users who are already monitoring their trees with TreeCare. 
              Start your free trial today and see the difference AI-powered tree care can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 hover:bg-green-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}