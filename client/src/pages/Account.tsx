/*
 * Zacks Jersey House — Account Page
 * Design: Clean Premium Retail — Light, teal accents, soft cards
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ShieldLogo } from "@/components/ShieldLogo";

export default function Account() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      toast.success("Login feature coming soon! We're working on it.");
    } else {
      if (formData.password !== formData.confirmPassword) {
        toast.error("Passwords don't match");
        return;
      }
      toast.success("Account feature coming soon! We're working on it.");
    }
  };

  return (
    <div className="min-h-screen bg-white relative">
      <Navbar />
      <main className="pt-24 pb-16 flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="w-full max-w-md mx-4"
        >
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-xl shadow-slate-100 hover:border-teal-200 transition-colors duration-300">
            {/* Logo */}
            <div className="text-center mb-8">
              <div className="mb-4">
                <ShieldLogo size={56} />
              </div>
              <h1 className="font-[var(--font-display)] text-2xl font-bold text-slate-900">
                {isLogin ? "Welcome Back, Fan." : "Join The Squad."}
              </h1>
              <p className="text-slate-500 text-sm mt-2">
                {isLogin
                  ? "Sign in to your account and track your orders."
                  : "Join the Zacks Jersey House community and never miss a drop."}
              </p>
            </div>

            {/* Toggle */}
            <div className="flex bg-slate-100 rounded-xl p-1 mb-6">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isLogin
                    ? "bg-teal-600 text-white shadow-md"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  !isLogin
                    ? "bg-teal-600 text-white shadow-md"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div>
                  <label className="text-slate-700 text-sm font-medium mb-1.5 block">Full Name</label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="text-slate-700 text-sm font-medium mb-1.5 block">Email</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-700 text-sm font-medium mb-1.5 block">Password</label>
                <div className="relative">
                  <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full pl-10 pr-10 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {!isLogin && (
                <div>
                  <label className="text-slate-700 text-sm font-medium mb-1.5 block">Confirm Password</label>
                  <div className="relative">
                    <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
              )}

              {isLogin && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-slate-500">
                    <input type="checkbox" className="rounded border-slate-300 accent-teal-600" />
                    Remember me
                  </label>
                  <a href="#" className="text-teal-600 hover:text-teal-700 transition-colors">
                    Forgot password?
                  </a>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm rounded-xl transition-all duration-200 active:scale-[0.97] flex items-center justify-center gap-2 shadow-lg shadow-teal-500/20 mt-2"
              >
                {isLogin ? "Sign In" : "Create Account"}
                <ArrowRight size={16} />
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center gap-3">
              <div className="flex-1 h-px bg-slate-200" />
              <span className="text-slate-400 text-xs">or continue with</span>
              <div className="flex-1 h-px bg-slate-200" />
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-3">
              <button className="py-2.5 border border-slate-200 rounded-xl text-slate-600 hover:border-teal-300 hover:text-teal-600 transition-all text-sm font-medium">
                Google
              </button>
              <button className="py-2.5 border border-slate-200 rounded-xl text-slate-600 hover:border-emerald-300 hover:text-emerald-600 transition-all text-sm font-medium">
                WhatsApp
              </button>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
