"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { ArrowRight, Lock, Mail, Eye, EyeOff, Shield, TrendingUp, Zap, Headphones, Check } from "lucide-react";
import Image from "next/image";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const { user, auth } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (user) {
      router.push("/admin");
    }
  }, [user, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (auth) {
        await signInWithEmailAndPassword(auth, email, password);
        router.push("/admin");
      }
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Failed to log in";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background-950 flex">
      {/* Left Section */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=1600&fit=crop"
            alt="Background"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background-950/90 via-background-950/80 to-background-950" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col h-full p-8 w-full">
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none -z-10">
            <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-primary-500/20 blur-[150px]" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col h-full max-w-xl mx-auto w-full">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-12">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-glow-orange-sm">
                <span className="text-2xl font-bold">FC</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">FC DIGITAL</h2>
                <p className="text-text-tertiary text-xs">TECHNOLOGIES</p>
              </div>
            </div>

            {/* Welcome Text */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-px bg-primary-500/50" />
                <span className="text-primary-500 text-sm font-semibold tracking-wider">WELCOME BACK</span>
                <div className="w-6 h-px bg-primary-500/50" />
              </div>

              <h1 className="text-5xl font-bold mb-6">
                Welcome to
                <br />
                <span className="text-primary-500">FC Digital</span> Admin
              </h1>

              <p className="text-text-secondary text-lg mb-12 leading-relaxed">
                Sign in to access your dashboard and manage your business with powerful tools and real-time insights.
              </p>

              {/* Features */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-card-800/70 border border-border-100 flex items-center justify-center backdrop-blur-sm">
                    <Shield size={28} className="text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Secure & Protected</h3>
                    <p className="text-text-tertiary text-sm">Your data is protected with enterprise-grade security</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-card-800/70 border border-border-100 flex items-center justify-center backdrop-blur-sm">
                    <TrendingUp size={28} className="text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Analytics Dashboard</h3>
                    <p className="text-text-tertiary text-sm">Real-time insights and performance metrics at your fingertips</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-card-800/70 border border-border-100 flex items-center justify-center backdrop-blur-sm">
                    <Zap size={28} className="text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Powerful Management</h3>
                    <p className="text-text-tertiary text-sm">Manage products, orders, users and much more efficiently</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Card */}
            <div className="mt-auto">
              <div className="glass-soft rounded-2xl border border-border-100 p-4 flex items-center gap-4 backdrop-blur-md">
                <div className="w-12 h-12 rounded-full bg-card-800 flex items-center justify-center">
                  <Headphones size={24} className="text-primary-500" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Need help?</p>
                  <p className="text-text-tertiary text-sm">Contact our support team</p>
                </div>
                <Button variant="ghost" className="text-primary-500 hover:text-primary-400 gap-2">
                  Get Support
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 text-text-tertiary text-sm">
              © 2025 FC Digital Technologies. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 relative">
        {/* Background glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-background-950 to-card-900" />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 -z-5 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-500 rounded-full animate-pulse" style={{ animationDelay: "0s" }} />
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-primary-500/60 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-primary-500/40 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="w-full max-w-md">
          {/* Lock Icon */}
          <div className="text-center mb-10">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 -m-8 bg-primary-500/20 rounded-full blur-xl" />
              <div className="relative w-24 h-24 rounded-full bg-card-800 border border-border-100 flex items-center justify-center shadow-soft-xl">
                <Lock size={40} className="text-primary-500" />
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-2">Admin Login</h1>
            <p className="text-text-secondary text-lg">Sign in to your account to continue</p>
          </div>

          {error && (
            <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-start gap-3">
              <div className="mt-0.5">⚠️</div>
              <div>{error}</div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-base font-medium mb-3">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary" size={20} />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-card-800 border border-border-100 rounded-xl text-white placeholder-text-tertiary focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div>
              <label className="block text-base font-medium mb-3">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 bg-card-800 border border-border-100 rounded-xl text-white placeholder-text-tertiary focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-text-tertiary hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-3 cursor-pointer">
                <div
                  className={`w-5 h-5 rounded flex items-center justify-center border transition-all ${rememberMe ? 'bg-primary-500 border-primary-500' : 'bg-transparent border-border-100'}`}
                  onClick={() => setRememberMe(!rememberMe)}
                >
                  {rememberMe && <Check size={14} className="text-white" />}
                </div>
                <span className="text-text-secondary text-sm">Remember me</span>
              </label>
              <a href="#" className="text-primary-500 text-sm hover:text-primary-400 transition-colors">
                Forgot password?
              </a>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full shadow-glow-orange text-lg py-6 mt-2"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Signing in...
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  Sign In
                  <ArrowRight size={20} />
                </div>
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-border-100" />
            <span className="text-text-tertiary">or continue with</span>
            <div className="flex-1 h-px bg-border-100" />
          </div>

          {/* Google Sign In */}
          <button
            type="button"
            className="w-full py-4 px-6 bg-card-800 border border-border-100 rounded-xl flex items-center justify-center gap-3 hover:bg-card-700 transition-all"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <span className="text-text-secondary font-medium">Sign in with Google</span>
          </button>

          {/* Create Account */}
          <div className="mt-8 text-center">
            <span className="text-text-secondary">Don't have an account? </span>
            <a href="#" className="text-primary-500 hover:text-primary-400 font-medium">Contact Administrator</a>
          </div>
        </div>
      </div>
    </div>
  );
}
