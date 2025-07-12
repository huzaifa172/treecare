export default function TreeStats() {
  const stats = [
    {
      title: "Total Trees",
      value: "24",
      change: "+2",
      changeType: "positive",
      icon: "🌳"
    },
    {
      title: "Healthy Trees",
      value: "22",
      change: "+1",
      changeType: "positive", 
      icon: "✅"
    },
    {
      title: "Needs Attention",
      value: "2",
      change: "-1",
      changeType: "negative",
      icon: "⚠️"
    },
    {
      title: "Carbon Sequestered",
      value: "1.2t",
      change: "+0.3t",
      changeType: "positive",
      icon: "🌱"
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold text-green-800 mb-6">Tree Statistics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl">{stat.icon}</span>
              <span className={`text-sm font-medium ${
                stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
            </div>
            <div className="text-2xl font-bold text-green-800 mb-1">{stat.value}</div>
            <div className="text-sm text-green-600">{stat.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}