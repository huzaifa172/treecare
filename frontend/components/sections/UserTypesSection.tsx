export default function UserTypesSection() {
  const userTypes = [
    {
      type: "Individual",
      icon: "👤",
      title: "Tree Guardians",
      description: "Monitor your personal trees, track growth, and earn rewards for your green contributions.",
      features: [
        "Register personal trees",
        "Monthly care reminders",
        "Earn points & badges",
        "Track environmental impact"
      ],
      cta: "Start Free"
    },
    {
      type: "Organization",
      icon: "🏢",
      title: "Campaign Managers",
      description: "Create and manage large-scale tree planting campaigns with team collaboration.",
      features: [
        "Create campaigns",
        "Manage team members",
        "Assign field agents",
        "Generate reports"
      ],
      cta: "Contact Sales"
    },
    {
      type: "Vendor",
      icon: "👷",
      title: "Field Agents",
      description: "Mobile-first interface for field work, tree registration, and care updates.",
      features: [
        "QR code scanning",
        "GPS photo upload",
        "Offline capability",
        "Care checklists"
      ],
      cta: "Join as Agent"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-4">
            Choose Your Role
          </h2>
          <p className="text-lg text-green-700 max-w-3xl mx-auto">
            GreenGuardian serves different user types with specialized features and dashboards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {userTypes.map((userType, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100"
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{userType.icon}</div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">{userType.title}</h3>
                <p className="text-green-700">{userType.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {userType.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-green-700">
                    <span className="text-green-500 mr-3">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors">
                {userType.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}