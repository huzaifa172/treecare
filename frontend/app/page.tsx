'use client';

import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import UserTypesSection from '../components/sections/UserTypesSection';
import TreeScene3D from '../components/3d/TreeScene3D';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <UserTypesSection />
        <TreeScene3D />
      </main>
      <Footer />
    </div>
  );
}
