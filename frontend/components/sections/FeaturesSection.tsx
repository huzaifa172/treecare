export default function FeaturesSection() {
  const features = [
    {
      icon: "🤖",
      title: "AI TreeVision",
      description: "Advanced AI analyzes tree species, health, and growth patterns with 95% accuracy."
    },
    {
      icon: "📍",
      title: "GeoVerify AI",
      description: "GPS validation ensures accurate tree location tracking and prevents fraud."
    },
    {
      icon: "📱",
      title: "Mobile-First Design",
      description: "PWA app works offline, perfect for field agents and on-the-go monitoring."
    },
    {
      icon: "🎮",
      title: "Gamification",
      description: "Earn points, unlock badges, and climb leaderboards while caring for trees."
    },
    {
      icon: "📊",
      title: "Impact Analytics",
      description: "Track CO2 offset, water usage, and biodiversity impact in real-time."
    },
    {
      icon: "🔐",
      title: "FraudGuard AI",
      description: "Advanced fraud detection prevents fake submissions and ensures data integrity."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-4">
            Why Choose GreenGuardian?
          </h2>
          <p className="text-lg text-green-700 max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge AI technology with expert knowledge 
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
      </div>
    </section>
  );
}