export default function DashboardHeader() {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-green-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-green-800">Dashboard</h1>
            <div className="hidden sm:block">
              <span className="text-green-600">Welcome back, Tree Guardian!</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Add Tree
            </button>
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">👤</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}