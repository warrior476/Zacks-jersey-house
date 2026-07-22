/*
 * Zacks Jersey House — About Page
 * Design: Clean Premium Retail — Light, teal accents, soft cards
 */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, Globe, Award, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ShieldLogo } from "@/components/ShieldLogo";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: <Users size={24} />, value: "5,000+", label: "Happy Customers" },
    { icon: <Globe size={24} />, value: "50+", label: "Club Jerseys" },
    { icon: <Award size={24} />, value: "4.9", label: "Average Rating" },
    { icon: <Heart size={24} />, value: "100%", label: "Authentic Quality" },
  ];

  return (
    <div className="min-h-screen bg-white relative">
      <Navbar />
      <main className="relative pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-20 relative bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="max-w-3xl relative"
            >
              <div className="mb-6 opacity-30">
                <ShieldLogo size={80} />
              </div>
              <span className="text-teal-600 text-sm font-semibold uppercase tracking-[0.2em]">
                Our Story
              </span>
              <h1 className="font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mt-3">
                Built By Fans.
                <br />
                <span className="text-gradient-teal">For Fans.</span>
              </h1>
              <p className="text-slate-600 text-lg mt-6 leading-relaxed max-w-2xl">
                Zacks Jersey House was born from a simple belief: every football fan deserves 
                to wear their team's colors with pride, without breaking the bank. We source 
                premium quality jerseys from the world's biggest clubs and deliver them right 
                to your doorstep across Ghana.
              </p>
              <p className="text-slate-500 text-base mt-4 leading-relaxed max-w-2xl">
                From match day in Accra to kickoff in Madrid — we bring the energy of the 
                world's greatest football clubs directly to you. No compromises. No imitations. 
                Just pure jersey excellence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section ref={ref} className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
                  className="p-6 bg-white border border-slate-100 rounded-2xl text-center hover:border-teal-200 hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <p className="font-[var(--font-display)] text-3xl font-bold text-slate-900">{stat.value}</p>
                  <p className="text-slate-500 text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold text-slate-900">
                What Drives Us
              </h2>
              <p className="text-slate-500 mt-4 max-w-lg mx-auto">
                We're not just selling jerseys — we're building a community of passionate football fans who refuse to settle for less.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 bg-slate-50 border border-slate-100 rounded-2xl hover:border-teal-200 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-[var(--font-display)] text-2xl font-bold text-slate-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  To make premium football jerseys accessible to every fan in Ghana and beyond. 
                  We believe that wearing your team's badge is more than fashion — it's identity, 
                  loyalty, and belonging. Our mission is to bring that experience to you at fair 
                  prices, with exceptional quality and fast delivery.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 bg-slate-50 border border-slate-100 rounded-2xl hover:border-teal-200 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-[var(--font-display)] text-2xl font-bold text-slate-900 mb-4">
                  Our Promise
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Every jersey we sell is crafted with premium materials — breathable fabric, 
                  accurate colors, and authentic detailing. We stand behind every product with 
                  our satisfaction guarantee. If you're not happy, we'll make it right. That's 
                  the Zacks promise — from the pitch to your closet, we've got you covered.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Jersey passion section */}
        <section className="py-20 bg-gradient-to-br from-teal-50 via-white to-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                More Than A Jersey.
                <br />
                <span className="text-gradient-teal">It's A Statement.</span>
              </h2>
              <p className="text-slate-600 max-w-xl mx-auto">
                When you wear a Zacks jersey, you're not just wearing fabric — you're declaring 
                which side you're on. You're joining millions of fans worldwide who bleed their 
                team's colors. That's the power of the badge.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
