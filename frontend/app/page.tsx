import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/ui/HeroSection';
import FeaturesSection from '../components/ui/FeaturesSection';
import TreeScene3D from '../components/3d/TreeScene3D';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Navbar />
      <main>
        <HeroSection />
        <TreeScene3D />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}
