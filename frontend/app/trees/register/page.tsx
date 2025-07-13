import TreeRegistrationForm from '../../../components/trees/TreeRegistrationForm';

export default function TreeRegistrationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-900 mb-2">
            Register Your Tree 🌳
          </h1>
          <p className="text-green-700">
            Add a new tree to your collection and start tracking its growth
          </p>
        </div>
        
        <TreeRegistrationForm />
      </div>
    </div>
  );
}