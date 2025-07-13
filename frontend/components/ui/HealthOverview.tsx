export default function HealthOverview() {
  const healthData = [
    {
      name: "Oak Tree #1",
      health: 95,
      status: "Excellent",
      lastCheck: "2 hours ago",
      location: "Front Yard"
    },
    {
      name: "Maple Tree #3", 
      health: 87,
      status: "Good",
      lastCheck: "4 hours ago",
      location: "Back Garden"
    },
    {
      name: "Pine Tree #2",
      health: 72,
      status: "Needs Attention",
      lastCheck: "1 hour ago", 
      location: "Side Yard"
    },
    {
      name: "Apple Tree #1",
      health: 91,
      status: "Excellent",
      lastCheck: "6 hours ago",
      location: "Orchard"
    }
  ];

  const getHealthColor = (health: number) => {
    if (health >= 90) return "text-green-600";
    if (health >= 70) return "text-yellow-600";
    return "text-red-600";
  };

  const getStatusColor = (status: string) => {
    if (status === "Excellent") return "bg-green-100 text-green-800";
    if (status === "Good") return "bg-blue-100 text-blue-800";
    return "bg-red-100 text-red-800";
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold text-green-800 mb-6">Health Overview</h2>
      <div className="space-y-4">
        {healthData.map((tree, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-100">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🌳</span>
              </div>
              <div>
                <h3 className="font-semibold text-green-800">{tree.name}</h3>
                <p className="text-sm text-green-600">{tree.location}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className={`text-lg font-bold ${getHealthColor(tree.health)}`}>
                  {tree.health}%
                </div>
                <div className="text-xs text-green-600">Health Score</div>
              </div>
              
              <div className="text-right">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(tree.status)}`}>
                  {tree.status}
                </span>
                <div className="text-xs text-green-600 mt-1">{tree.lastCheck}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}