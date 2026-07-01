"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { ArrowRight, Lock, Mail } from "lucide-react";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
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
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="glass-soft rounded-3xl border border-border-100 p-8 max-w-md w-full shadow-soft-xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4 shadow-glow-orange-sm">
            <span className="text-3xl font-bold">FC</span>
          </div>
          <h1 className="text-2xl font-bold mb-2">Admin Login</h1>
          <p className="text-text-secondary">Sign in to manage your dashboard</p>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary" size={20} />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-card-700 border border-border-100 rounded-xl text-white placeholder-text-tertiary focus:outline-none focus:border-primary-500 transition-all"
                placeholder="admin@fcdigital.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary" size={20} />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-card-700 border border-border-100 rounded-xl text-white placeholder-text-tertiary focus:outline-none focus:border-primary-500 transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full shadow-glow-orange-sm"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In to Dashboard"}
            {!loading && <ArrowRight size={20} className="ml-2" />}
          </Button>
        </form>
      </div>
    </div>
  );
}
