'use client';

import React, { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  FiArrowRight, 
  FiPlay, 
  FiMapPin, 
  FiTrendingUp, 
  FiAward,
  FiUsers,
  FiGlobe,
  FiCamera,
  FiHeart,
  FiShield,
  FiStar,
  FiZap
} from 'react-icons/fi';
import { 
  GiTreeBranch, 
  GiPlantSeed, 
  GiForest,
  GiEarthWorm,
  GiSeedling,
  GiOakLeaf
} from 'react-icons/gi';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

// 3D Tree Component
function Tree() {
  return (
    <group>
      {/* Tree Trunk */}
      <mesh position={[0, -1, 0]}>
        <cylinderGeometry args={[0.3, 0.4, 2, 8]} />
        <meshStandardMaterial color="#8B4513" roughness={0.8} />
      </mesh>
      
      {/* Tree Crown */}
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
        <mesh position={[0, 1, 0]}>
          <sphereGeometry args={[1.5, 12, 8]} />
          <meshStandardMaterial color="#228B22" roughness={0.6} />
        </mesh>
      </Float>
      
      {/* Leaves particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <Float key={i} speed={2 + Math.random()} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh position={[
            (Math.random() - 0.5) * 3,
            Math.random() * 3,
            (Math.random() - 0.5) * 3
          ]}>
            <sphereGeometry args={[0.05, 6, 4]} />
            <meshStandardMaterial color="#90EE90" />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

// 3D Scene Component
function TreeScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#90EE90" />
      
      <Suspense fallback={null}>
        <Tree />
        <Environment preset="forest" />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={1}
        />
      </Suspense>
    </Canvas>
  );
}

// Stats Counter Component
function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span className="counter">{count.toLocaleString()}{suffix}</span>;
}

// Feature Card Component
function FeatureCard({ icon: Icon, title, description, delay = 0 }: {
  icon: any,
  title: string,
  description: string,
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover group"
    >
      <div className="flex items-center justify-center w-16 h-16 bg-forest-gradient rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}

// Main Homepage Component
export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white overflow-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <GiTreeBranch className="w-8 h-8 text-forest-600" />
              <span className="text-2xl font-bold text-gradient">GreenGuardian</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-700 hover:text-forest-600 transition-colors">About</Link>
              <Link href="/features" className="text-gray-700 hover:text-forest-600 transition-colors">Features</Link>
              <Link href="/map" className="text-gray-700 hover:text-forest-600 transition-colors">Explore Map</Link>
              <Link href="/learn" className="text-gray-700 hover:text-forest-600 transition-colors">Learn</Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/login" className="btn-ghost">Login</Link>
              <Link href="/signup" className="btn-primary">Get Started</Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 nature-bg opacity-50" />
        
        {/* Parallax Background */}
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 bg-gradient-to-br from-forest-500/20 to-teal-accent/20"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="inline-flex items-center space-x-2 bg-forest-100 text-forest-800 px-4 py-2 rounded-full text-sm font-medium"
              >
                <GiSeedling className="w-4 h-4" />
                <span>Join 15,000+ Tree Guardians Worldwide</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-5xl lg:text-7xl font-bold leading-tight"
              >
                <span className="text-gradient">Own.</span>{' '}
                <span className="text-gradient">Nurture.</span>{' '}
                <span className="text-gradient">Impact.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-2xl"
              >
                Fighting climate change by empowering individuals to become verified guardians of nature — one tree at a time.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/signup" className="btn-primary group">
                  Start Your Green Journey
                  <FiArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <button className="btn-secondary group">
                  <FiPlay className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="grid grid-cols-3 gap-8 pt-8"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-forest-600">
                    <AnimatedCounter end={15420} />
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Trees Planted</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-forest-600">
                    <AnimatedCounter end={3250} />
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-forest-600">
                    <AnimatedCounter end={25} suffix=" tons" />
                  </div>
                  <div className="text-sm text-gray-600 mt-1">CO₂ Offset</div>
                </div>
              </motion.div>
            </motion.div>

            {/* 3D Tree Scene */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative h-96 lg:h-[600px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-forest-500/10 to-teal-accent/10 rounded-3xl" />
              <TreeScene />
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 bg-white rounded-full p-3 shadow-lg"
              >
                <GiOakLeaf className="w-6 h-6 text-forest-500" />
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-10 bg-white rounded-full p-3 shadow-lg"
              >
                <FiHeart className="w-6 h-6 text-red-500" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-forest-600 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-forest-600 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Tree Guardians Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of environmental heroes making a real difference. Every tree planted creates lasting impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={FiCamera}
              title="Digital Tree Identity"
              description="Every tree gets a unique QR code and digital profile. Track your tree's journey from seedling to forest giant."
              delay={0.1}
            />
            <FeatureCard
              icon={FiMapPin}
              title="Global Tree Map"
              description="See your impact on our interactive world map. Discover trees planted by guardians in your neighborhood."
              delay={0.2}
            />
            <FeatureCard
              icon={FiTrendingUp}
              title="Growth Tracking"
              description="Monthly photo updates, growth measurements, and health monitoring. Watch your environmental impact grow."
              delay={0.3}
            />
            <FeatureCard
              icon={FiAward}
              title="Achievement System"
              description="Earn badges, climb leaderboards, and unlock rewards. Gamified environmental action that's actually fun."
              delay={0.4}
            />
            <FeatureCard
              icon={FiUsers}
              title="Tree Adoption"
              description="Can't care for your tree? Pass it to a nearby guardian. Our adoption system ensures no tree is abandoned."
              delay={0.5}
            />
            <FeatureCard
              icon={FiShield}
              title="Verified Impact"
              description="GPS-verified locations, timestamped photos, and blockchain certificates. Transparent, authentic environmental action."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forest-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-nature-pattern opacity-10" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Become a Tree Guardian?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Join our global community and start making a real environmental impact today. Your first tree is waiting.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup" className="bg-white text-forest-600 font-semibold py-4 px-8 rounded-xl hover:bg-green-50 transition-all duration-300 hover:scale-105">
                Plant Your First Tree
              </Link>
              <Link href="/map" className="border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white hover:text-forest-600 transition-all duration-300">
                Explore the Map
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <GiTreeBranch className="w-8 h-8 text-green-400" />
                <span className="text-2xl font-bold">GreenGuardian</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Fighting climate change by empowering individuals to become verified guardians of nature — one tree at a time.
              </p>
              <div className="flex space-x-4">
                {/* Social icons would go here */}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/features" className="hover:text-white">Features</Link></li>
                <li><Link href="/map" className="hover:text-white">Tree Map</Link></li>
                <li><Link href="/leaderboard" className="hover:text-white">Leaderboard</Link></li>
                <li><Link href="/rewards" className="hover:text-white">Rewards</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GreenGuardian. Made with 💚 for the Planet.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
