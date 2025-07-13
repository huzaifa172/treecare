import DashboardHeader from '../../components/ui/DashboardHeader';
import DashboardOverview from '../../components/dashboard/DashboardOverview';
import TreeStats from '../../components/ui/TreeStats';
import HealthOverview from '../../components/ui/HealthOverview';
import RecentActivity from '../../components/ui/RecentActivity';
import AIDashboard from '../../components/AIDashboard';
import ProtectedRoute from '../../components/auth/ProtectedRoute';

export default function Dashboard() {
  return (
    <ProtectedRoute requiredRole="user">
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
        <DashboardHeader />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Main Dashboard Overview */}
          <DashboardOverview />
          
          <div className="mt-8 space-y-8">
            {/* AI Dashboard */}
            <AIDashboard />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <TreeStats />
                <HealthOverview />
              </div>
              
              {/* Sidebar */}
              <div className="space-y-8">
                <RecentActivity />
              </div>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}