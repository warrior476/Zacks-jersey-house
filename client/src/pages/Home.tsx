/*
 * Zacks Jersey House — Home Page
 * Design: Clean Premium Retail — Light, teal/emerald accents, floating spinning jersey
 */
import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { ShoppingBag, Star, Truck, Shield, Zap, MessageCircle, Users, Package, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

/* ─── Hero Section with Floating Spinning Jersey ─── */
function HeroSection() {
  const [currentJersey, setCurrentJersey] = useState(0);
  const featuredJerseys = [
    { name: "Manchester United", league: "Premier League", price: 170, image: "https://i.ibb.co/Mbh019y/man-utd-25-26-home-kit-21.jpg" },
    { name: "Ghana National Team", league: "AFCON", price: 170, image: "https://i.ibb.co/7xXyNJBM/s-l1600.jpg" },
    { name: "Real Madrid", league: "La Liga", price: 150, image: "https://i.ibb.co/5Wpjf111/real-madrid-25-26-home-kit-30.jpg" },
    { name: "PSG", league: "Ligue 1", price: 150, image: "https://i.ibb.co/MjqQyj0/PSG-25-26-Home-Kit-Released-7.jpg" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentJersey((prev) => (prev + 1) % featuredJerseys.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [featuredJerseys.length]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-slate-50 via-white to-teal-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-8rem)]">
          {/* Left: Text */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            >
              <span className="text-teal-600 text-sm font-semibold uppercase tracking-[0.2em]">
                Premium Football Jerseys
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="font-[var(--font-display)] text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-[0.95] tracking-tight"
            >
              Wear The Badge.
              <br />
              <span className="text-gradient-teal">Own The Moment.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="text-slate-600 text-lg max-w-md leading-relaxed"
            >
              Discover premium jerseys from the world's biggest clubs. 
              Authentic quality designed for comfort, durability, and everyday expression.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link href="/shop" className="inline-flex items-center gap-2 px-8 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm rounded-xl transition-all duration-200 active:scale-[0.97] shadow-lg shadow-teal-500/20">
                <ShoppingBag size={18} />
                Shop Now
              </Link>
              <a
                href="https://wa.me/233552855012?text=Hi%20Zacks!%20I'm%20interested%20in%20ordering%20a%20jersey."
                target="_blank"
                rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-xl transition-all duration-200 active:scale-[0.97] shadow-lg shadow-emerald-500/20"
              >
                  <MessageCircle size={18} />
                  Order on WhatsApp
              </a>
            </motion.div>

            {/* Size selector */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="pt-6"
            >
              <p className="text-slate-500 text-xs uppercase tracking-wider mb-3 font-medium">Popular Sizes</p>
              <div className="flex gap-2">
                {["S", "M", "L", "XL", "2XL", "3XL"].map((size) => (
                  <button
                    key={size}
                    className="w-10 h-10 rounded-lg border border-slate-200 text-slate-600 hover:border-teal-500 hover:text-teal-600 text-xs font-medium transition-all bg-white"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Floating Spinning Jersey */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Soft teal glow behind jersey */}
            <div className="absolute w-80 h-80 rounded-full bg-teal-400/10 blur-[100px]" />
            <div className="absolute w-48 h-48 rounded-full bg-emerald-400/8 blur-[60px]" />
            
            <motion.div
              key={currentJersey}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="relative"
              style={{ perspective: "800px" }}
            >
              {/* Animated jersey container */}
              <div className="animate-float-gentle">
                <div className="animate-spin-slow-jersey">
                  <img
                    src={featuredJerseys[currentJersey].image}
                    alt={featuredJerseys[currentJersey].name}
                    className="w-72 sm:w-80 lg:w-96"
                    style={{ filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.12))" }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Price tag */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute top-4 right-4 lg:right-8 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl px-5 py-3 shadow-lg"
            >
              <p className="text-slate-400 text-xs line-through">₵250.00</p>
              <p className="text-teal-600 font-bold text-lg">₵{featuredJerseys[currentJersey].price}.00</p>
            </motion.div>

            {/* Club name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center bg-white/80 backdrop-blur-sm rounded-xl px-4 py-2 shadow-sm border border-slate-100"
            >
              <p className="text-slate-900 font-[var(--font-display)] text-sm font-medium">
                {featuredJerseys[currentJersey].name}
              </p>
              <p className="text-slate-500 text-xs">{featuredJerseys[currentJersey].league}</p>
            </motion.div>
          </div>
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center gap-3 mt-6">
          {featuredJerseys.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentJersey(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentJersey ? "bg-teal-500 w-8" : "bg-slate-200 w-2 hover:bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Trust Bar ─── */
function TrustBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const stats = [
    { icon: <Users size={20} />, value: "5,000+", label: "Happy Customers" },
    { icon: <Package size={20} />, value: "50+", label: "Club Jerseys" },
    { icon: <Award size={20} />, value: "4.9", label: "Average Rating" },
    { icon: <Truck size={20} />, value: "Fast", label: "Nationwide Delivery" },
  ];

  return (
    <section ref={ref} className="bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600">
                {stat.icon}
              </div>
              <div>
                <p className="font-[var(--font-display)] text-xl font-bold text-slate-900">{stat.value}</p>
                <p className="text-slate-500 text-xs">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Featured Jerseys Grid ─── */
function FeaturedSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const jerseys = [
    { name: "Ghana National Team", league: "AFCON", price: 170, image: "https://i.ibb.co/7xXyNJBM/s-l1600.jpg" },
    { name: "Liverpool FC", league: "Premier League", price: 150, image: "https://i.ibb.co/n81t1mRk/lc-25-26-kits-2.jpg" },
    { name: "PSG", league: "Ligue 1", price: 150, image: "https://i.ibb.co/MjqQyj0/PSG-25-26-Home-Kit-Released-7.jpg" },
    { name: "Arsenal FC", league: "Premier League", price: 150, image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/200px-Arsenal_FC.svg.png" },
    { name: "Juventus", league: "Serie A", price: 140, image: "https://i.ibb.co/DPmNwST7/juventus-25-26-home-kit-18.jpg" },
    { name: "FC Barcelona", league: "La Liga", price: 150, image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/200px-FC_Barcelona_%28crest%29.svg.png" },
    { name: "Chelsea FC", league: "Premier League", price: 140, image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/200px-Chelsea_FC.svg.png" },
    { name: "Bayern Munich", league: "Bundesliga", price: 150, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282002%E2%80%932017%29.svg/200px-FC_Bayern_M%C3%BCnchen_logo_%282002%E2%80%932017%29.svg.png" },
  ];

  return (
    <section ref={ref} className="relative py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-16"
        >
          <span className="text-teal-600 text-sm font-semibold uppercase tracking-[0.2em]">
            Featured Collection
          </span>
          <h2 className="font-[var(--font-display)] text-4xl sm:text-5xl font-bold text-slate-900 mt-3">
            Top Clubs. Premium Quality.
          </h2>
          <p className="text-slate-500 mt-4 max-w-lg mx-auto">
            From the pitch to your closet — wear the colors of the world's greatest football clubs.
          </p>
        </motion.div>

        {/* Jersey Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {jerseys.map((jersey, index) => (
            <motion.div
              key={jersey.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
            >
              <Link href="/shop">
                <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden card-lift group h-full">
                  {/* Image */}
                  <div className="relative aspect-[3/4] bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center p-6 overflow-hidden">
                    <img
                      src={jersey.image}
                      alt={jersey.name}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                      style={{ filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.08))" }}
                    />
                    {/* WhatsApp overlay on hover */}
                    <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <a
                        href={`https://wa.me/233552855012?text=${encodeURIComponent(`Hi Zacks! I'm interested in ordering the ${jersey.name} jersey (₵${jersey.price}). What sizes are available?`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-2 bg-emerald-600/90 text-white text-xs font-semibold rounded-lg hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2"
                      >
                        <MessageCircle size={14} />
                        Order on WhatsApp
                      </a>
                    </div>
                  </div>
                  {/* Info */}
                  <div className="p-4">
                    <p className="text-slate-900 font-medium text-sm">{jersey.name}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{jersey.league}</p>
                    <div className="flex items-center justify-between mt-3">
                      <p className="text-teal-600 font-bold">₵{jersey.price}.00</p>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} size={10} className="text-teal-500 fill-teal-500" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
            <Link href="/shop" className="inline-block px-8 py-3 border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white font-semibold text-sm rounded-xl transition-all duration-200 active:scale-[0.97]">
              View All Jerseys →
            </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Why Choose Us ─── */
function WhySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { icon: <Shield size={24} />, title: "Authentic Quality", description: "Premium materials that match the real deal. Every jersey is crafted to the highest standards." },
    { icon: <Truck size={24} />, title: "Nationwide Delivery", description: "Fast and reliable delivery across Ghana. Track your order every step of the way." },
    { icon: <Star size={24} />, title: "Best Prices", description: "Competitive pricing in Cedis — from ₵120 to ₵170 with seasonal discounts and bundle offers." },
    { icon: <Zap size={24} />, title: "New Season Kits", description: "Be the first to wear the latest season jerseys. Fresh drops every week." },
  ];

  return (
    <section ref={ref} className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-16"
        >
          <span className="text-teal-600 text-sm font-semibold uppercase tracking-[0.2em]">
            Why Zacks Jersey House
          </span>
          <h2 className="font-[var(--font-display)] text-4xl sm:text-5xl font-bold text-slate-900 mt-3">
            More Than Just A Jersey
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:border-teal-200 hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 mb-4 group-hover:bg-teal-100 transition-colors">
                {feature.icon}
              </div>
              <h3 className="font-[var(--font-display)] text-slate-900 font-semibold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Banner ─── */
function CtaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 bg-gradient-to-br from-teal-50 via-white to-emerald-50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          <h2 className="font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Every Jersey Tells A Story.
            <br />
            <span className="text-gradient-teal">Yours Starts Here.</span>
          </h2>
          <p className="text-slate-600 text-lg mb-8 max-w-xl mx-auto">
            Join thousands of passionate fans wearing their team's colors with pride.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/shop" className="inline-block px-10 py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm rounded-xl transition-all duration-200 active:scale-[0.97] shadow-lg shadow-teal-500/20">
                Browse Collection
            </Link>
            <a
              href="https://wa.me/233552855012?text=Hi%20Zacks!%20I'd%20like%20to%20order%20a%20jersey."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl transition-all duration-200 active:scale-[0.97] shadow-lg shadow-emerald-500/20"
            >
                <MessageCircle size={18} />
                Order on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Main Page ─── */
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="relative">
        <HeroSection />
        <TrustBar />
        <FeaturedSection />
        <WhySection />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
