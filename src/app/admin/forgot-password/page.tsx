"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { Mail, ArrowLeft, Lock, Shield, Zap, Headphones, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AdminForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user, sendPasswordReset } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (user) {
      router.push("/admin");
    }
  }, [user, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(true);

    try {
      await sendPasswordReset(email);
      setSuccess(true);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Failed to send reset email";
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
                <span className="text-primary-500 text-sm font-semibold tracking-wider">RESET PASSWORD</span>
                <div className="w-6 h-px bg-primary-500/50" />
              </div>

              <h1 className="text-5xl font-bold mb-6">
                Welcome
                <br />
                <span className="text-primary-500">Back!</span>
              </h1>

              <p className="text-text-secondary text-lg mb-12 leading-relaxed">
                No worries! Reset your password and regain access to your dashboard to continue managing your business.
              </p>

              {/* Features */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-card-800/70 border border-border-100 flex items-center justify-center backdrop-blur-sm">
                    <Shield size={28} className="text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Secure & Protected</h3>
                    <p className="text-text-tertiary text-sm">Your data is encrypted and always protected.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-card-800/70 border border-border-100 flex items-center justify-center backdrop-blur-sm">
                    <Zap size={28} className="text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Quick Recovery</h3>
                    <p className="text-text-tertiary text-sm">Reset your password in just a few clicks.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-card-800/70 border border-border-100 flex items-center justify-center backdrop-blur-sm">
                    <Headphones size={28} className="text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">24/7 Support</h3>
                    <p className="text-text-tertiary text-sm">Our support team is always here to help you.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 text-text-tertiary text-sm">
              © 2025 FC Digital Technologies. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Forgot Password Form */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-8 relative">
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
                <div className="absolute inset-0 rounded-full border-2 border-primary-500/20 animate-ping" style={{ animationDuration: "3s" }} />
                <div className="absolute inset-2 rounded-full border-2 border-primary-500/30" />
                <div className="relative">
                  <Lock size={40} className="text-primary-500" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary-500 rounded-full animate-pulse" />
                </div>
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-2">Forgot Password?</h1>
            <p className="text-text-secondary text-lg">Enter your registered email address and we'll send you a link to reset your password.</p>
          </div>

          {error && (
            <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-start gap-3">
              <div className="mt-0.5">⚠️</div>
              <div>{error}</div>
            </div>
          )}

          {success && (
            <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm flex items-start gap-3">
              <CheckCircle size={20} className="mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Reset email sent successfully!</p>
                <p className="text-xs text-green-300 mt-1">Please check your inbox and follow the instructions to reset your password.</p>
              </div>
            </div>
          )}

          {!success && (
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

              <Button
                type="submit"
                size="lg"
                className="w-full shadow-glow-orange text-lg py-6 mt-2"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Mail size={20} />
                    Send Reset Link
                  </div>
                )}
              </Button>
            </form>
          )}

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-border-100" />
            <span className="text-text-tertiary">or</span>
            <div className="flex-1 h-px bg-border-100" />
          </div>

          {/* Back to Login */}
          <Link href="/admin/login" className="w-full">
            <Button
              variant="ghost"
              className="w-full text-primary-500 hover:text-primary-400 hover:bg-primary-500/10 text-base py-6"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Login
            </Button>
          </Link>

          {/* Support Card */}
          {success && (
            <div className="mt-8 glass-soft rounded-2xl border border-primary-500/30 p-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-card-800 flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={28} className="text-primary-500" />
                </div>
                <div>
                  <p className="font-medium">Didn't receive the email?</p>
                  <p className="text-text-tertiary text-sm mt-1">
                    Check your spam folder or <button onClick={() => setSuccess(false)} className="text-primary-500 hover:text-primary-400 font-medium">click here</button> to try again.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
