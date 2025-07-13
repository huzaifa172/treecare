'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  FiMail, 
  FiLock, 
  FiUser, 
  FiEye, 
  FiEyeOff,
  FiArrowRight,
  FiCheck,
  FiAlertCircle
} from 'react-icons/fi';
import { GiTreeBranch, GiSeedling } from 'react-icons/gi';
import { useAuth } from '../../hooks/useAuth';

// Validation schema
const signupSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50, 'Name must be less than 50 characters'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
  confirmPassword: z.string(),
  agreeToTerms: z.boolean().refine(val => val === true, 'You must agree to the terms and conditions')
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});

type SignupForm = z.infer<typeof signupSchema>;

// Password strength indicator
function PasswordStrength({ password }: { password: string }) {
  const checks = [
    { label: 'At least 8 characters', test: password.length >= 8 },
    { label: 'One uppercase letter', test: /[A-Z]/.test(password) },
    { label: 'One lowercase letter', test: /[a-z]/.test(password) },
    { label: 'One number', test: /[0-9]/.test(password) }
  ];

  const score = checks.filter(check => check.test).length;
  const strength = score === 0 ? 'weak' : score <= 2 ? 'fair' : score === 3 ? 'good' : 'strong';

  return (
    <div className="mt-2 space-y-2">
      <div className="flex space-x-1">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded ${
              i < score 
                ? strength === 'weak' ? 'bg-red-500' 
                  : strength === 'fair' ? 'bg-yellow-500'
                  : strength === 'good' ? 'bg-blue-500'
                  : 'bg-green-500'
                : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
      <div className="space-y-1">
        {checks.map((check, i) => (
          <div key={i} className="flex items-center space-x-2 text-xs">
            {check.test ? (
              <FiCheck className="w-3 h-3 text-green-500" />
            ) : (
              <div className="w-3 h-3 rounded-full border border-gray-300" />
            )}
            <span className={check.test ? 'text-green-600' : 'text-gray-500'}>
              {check.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { signup, isSignupLoading } = useAuth();

  const { register, handleSubmit, formState: { errors }, watch } = useForm<SignupForm>({
    resolver: zodResolver(signupSchema)
  });

  const password = watch('password', '');

  const onSubmit = async (data: SignupForm) => {
    const { confirmPassword, agreeToTerms, ...signupData } = data;
    signup(signupData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-50 flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md"
        >
          {/* Logo */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-forest-gradient rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                <GiTreeBranch className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gradient">GreenGuardian</span>
            </Link>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Join the Green Revolution
            </h1>
            <p className="text-gray-600">
              Start your journey as a verified tree guardian
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiUser className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  {...register('name')}
                  type="text"
                  className="form-input pl-10"
                  placeholder="Enter your full name"
                />
              </div>
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-1 text-sm text-red-600 flex items-center space-x-1"
                >
                  <FiAlertCircle className="w-4 h-4" />
                  <span>{errors.name.message}</span>
                </motion.p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  {...register('email')}
                  type="email"
                  className="form-input pl-10"
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-1 text-sm text-red-600 flex items-center space-x-1"
                >
                  <FiAlertCircle className="w-4 h-4" />
                  <span>{errors.email.message}</span>
                </motion.p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  {...register('password')}
                  type={showPassword ? 'text' : 'password'}
                  className="form-input pl-10 pr-10"
                  placeholder="Create a secure password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <FiEyeOff className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <FiEye className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
              {password && <PasswordStrength password={password} />}
              {errors.password && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-1 text-sm text-red-600 flex items-center space-x-1"
                >
                  <FiAlertCircle className="w-4 h-4" />
                  <span>{errors.password.message}</span>
                </motion.p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  {...register('confirmPassword')}
                  type={showConfirmPassword ? 'text' : 'password'}
                  className="form-input pl-10 pr-10"
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showConfirmPassword ? (
                    <FiEyeOff className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <FiEye className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-1 text-sm text-red-600 flex items-center space-x-1"
                >
                  <FiAlertCircle className="w-4 h-4" />
                  <span>{errors.confirmPassword.message}</span>
                </motion.p>
              )}
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start space-x-3">
              <input
                {...register('agreeToTerms')}
                type="checkbox"
                className="mt-1 w-4 h-4 text-forest-600 border-gray-300 rounded focus:ring-forest-500"
              />
              <div className="text-sm">
                <span className="text-gray-700">
                  I agree to the{' '}
                  <Link href="/terms" className="text-forest-600 hover:text-forest-700 font-medium">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy" className="text-forest-600 hover:text-forest-700 font-medium">
                    Privacy Policy
                  </Link>
                </span>
              </div>
            </div>
            {errors.agreeToTerms && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-red-600 flex items-center space-x-1"
              >
                <FiAlertCircle className="w-4 h-4" />
                <span>{errors.agreeToTerms.message}</span>
              </motion.p>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSignupLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full btn-primary group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSignupLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Creating your account...</span>
                </div>
              ) : (
                <>
                  <span>Start Your Green Journey</span>
                  <FiArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link href="/login" className="text-forest-600 hover:text-forest-700 font-medium">
                Sign in here
              </Link>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Right Side - Visual */}
      <div className="hidden lg:flex flex-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-forest-gradient opacity-90" />
        <div className="absolute inset-0 bg-nature-pattern opacity-20" />
        
        <div className="relative z-10 flex flex-col justify-center items-center text-white p-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center max-w-lg"
          >
            <div className="mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-24 h-24 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-6"
              >
                <GiSeedling className="w-12 h-12 text-white" />
              </motion.div>
            </div>
            
            <h2 className="text-4xl font-bold mb-6">
              Plant. Track. Impact.
            </h2>
            <p className="text-xl text-green-100 leading-relaxed mb-8">
              Join 15,000+ guardians who have planted over 50,000 trees and offset 25 tons of CO₂
            </p>
            
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold">15,420</div>
                <div className="text-green-200 text-sm">Trees Planted</div>
              </div>
              <div>
                <div className="text-3xl font-bold">3,250</div>
                <div className="text-green-200 text-sm">Active Users</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center"
        >
          <GiSeedling className="w-8 h-8 text-white" />
        </motion.div>
        
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-20 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center"
        >
          <GiTreeBranch className="w-6 h-6 text-white" />
        </motion.div>
      </div>
    </div>
  );
}