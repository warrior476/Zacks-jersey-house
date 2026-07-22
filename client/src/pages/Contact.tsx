/*
 * Zacks Jersey House — Contact Page
 * Design: Clean Premium Retail — Light, teal accents, soft cards
 * Real contact: Bekwai, Ashanti Region | WhatsApp/Call: 0552855012 | IG: @official_zzacky
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, MessageCircle, Instagram } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ShieldLogo } from "@/components/ShieldLogo";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white relative">
      <Navbar />
      <main className="relative pt-24 pb-16">
        {/* Header */}
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="max-w-2xl relative"
            >
              <div className="mb-6 opacity-30">
                <ShieldLogo size={60} />
              </div>
              <span className="text-teal-600 text-sm font-semibold uppercase tracking-[0.2em]">
                Get In Touch
              </span>
              <h1 className="font-[var(--font-display)] text-4xl sm:text-5xl font-bold text-slate-900 mt-3">
                We'd Love To
                <br />
                <span className="text-gradient-teal">Hear From You.</span>
              </h1>
              <p className="text-slate-600 text-lg mt-4">
                Questions about a jersey? Need help with sizing? Want to place a bulk order? 
                Drop us a message and we'll get back to you within 24 hours.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-2 space-y-6"
              >
                <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:border-teal-200 hover:shadow-lg transition-all duration-300">
                  <h3 className="font-[var(--font-display)] text-xl font-semibold text-slate-900 mb-6">
                    Contact Info
                  </h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <p className="text-slate-900 font-medium text-sm">Location</p>
                        <p className="text-slate-500 text-sm mt-0.5">Bekwai, Ashanti Region, Ghana</p>
                        <a
                          href="https://maps.app.goo.gl/iEtxTjjWP83X8VXi7?g_st=ic"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal-600 text-xs mt-1 inline-block hover:text-teal-700 transition-colors"
                        >
                          View on Google Maps →
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                        <Phone size={18} />
                      </div>
                      <div>
                        <p className="text-slate-900 font-medium text-sm">Call Us</p>
                        <a href="tel:+233552855012" className="text-slate-500 text-sm mt-0.5 block hover:text-teal-600 transition-colors">
                          0552 855 012
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                        <MessageCircle size={18} />
                      </div>
                      <div>
                        <p className="text-slate-900 font-medium text-sm">WhatsApp</p>
                        <a
                          href="https://wa.me/233552855012?text=Hi%20Zacks!%20I'm%20interested%20in%20your%20jerseys."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-500 text-sm mt-0.5 block hover:text-emerald-600 transition-colors"
                        >
                          0552 855 012
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                        <Mail size={18} />
                      </div>
                      <div>
                        <p className="text-slate-900 font-medium text-sm">Email</p>
                        <a href="mailto:bra123forson@gmail.com" className="text-slate-500 text-sm mt-0.5 block hover:text-teal-600 transition-colors">
                          bra123forson@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                        <Instagram size={18} />
                      </div>
                      <div>
                        <p className="text-slate-900 font-medium text-sm">Instagram</p>
                        <a
                          href="https://www.instagram.com/official_zzacky"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-500 text-sm mt-0.5 block hover:text-teal-600 transition-colors"
                        >
                          @official_zzacky
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:border-teal-200 hover:shadow-lg transition-all duration-300">
                  <h3 className="font-[var(--font-display)] text-lg font-semibold text-slate-900 mb-4">
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Mon - Fri</span>
                      <span className="text-slate-900 font-medium">8:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Saturday</span>
                      <span className="text-slate-900 font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Sunday</span>
                      <span className="text-slate-900 font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                  </div>
                </div>

                {/* Quick WhatsApp CTA */}
                <a
                  href="https://wa.me/233552855012?text=Hi%20Zacks!%20I%20want%20to%20order%20a%20jersey."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-xl transition-all duration-200 active:scale-[0.97] flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20">
                    <MessageCircle size={16} />
                    Order Directly on WhatsApp
                  </button>
                </a>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="lg:col-span-3"
              >
                <form onSubmit={handleSubmit} className="p-8 bg-slate-50 border border-slate-100 rounded-2xl space-y-6 hover:border-teal-200 hover:shadow-lg transition-all duration-300">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-slate-700 text-sm font-medium mb-2 block">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="text-slate-700 text-sm font-medium mb-2 block">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-slate-700 text-sm font-medium mb-2 block">Subject</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label className="text-slate-700 text-sm font-medium mb-2 block">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all resize-none"
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm rounded-xl transition-all duration-200 active:scale-[0.97] flex items-center justify-center gap-2 shadow-lg shadow-teal-500/20"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
