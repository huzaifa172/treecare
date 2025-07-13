export default function RecentActivity() {
  const activities = [
    {
      type: "watering",
      tree: "Oak Tree #1",
      time: "2 hours ago",
      icon: "💧",
      description: "Automatic watering completed"
    },
    {
      type: "health_check",
      tree: "Pine Tree #2", 
      time: "3 hours ago",
      icon: "🔍",
      description: "Health check detected minor stress"
    },
    {
      type: "pruning",
      tree: "Maple Tree #3",
      time: "1 day ago",
      icon: "✂️",
      description: "Pruning recommendation sent"
    },
    {
      type: "planting",
      tree: "New Sapling",
      time: "2 days ago",
      icon: "🌱",
      description: "New tree added to monitoring"
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold text-green-800 mb-6">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start space-x-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-100">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm">{activity.icon}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-green-800 truncate">{activity.tree}</h3>
                <span className="text-xs text-green-600">{activity.time}</span>
              </div>
              <p className="text-sm text-green-700 mt-1">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-green-200">
        <button className="w-full text-green-600 hover:text-green-800 text-sm font-medium transition-colors">
          View All Activity →
        </button>
      </div>
    </div>
  );
}