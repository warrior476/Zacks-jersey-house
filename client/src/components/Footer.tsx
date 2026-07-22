/*
 * Zacks Jersey House — Footer
 * Design: Clean Premium Retail — Light, teal accents
 * Real contact: Bekwai, Ghana | IG: @official_zzacky | WhatsApp: 0552855012
 */
import { Link } from "wouter";
import { Instagram, Facebook, MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import { ShieldLogo } from "./ShieldLogo";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <ShieldLogo size={40} />
              <span className="font-[var(--font-display)] text-xl font-bold tracking-wide text-slate-900">
                ZACKS<span className="text-teal-600">.</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Premium football jerseys from the world's biggest clubs. 
              Authentic quality, unbeatable prices. Wear the badge with pride.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/official_zzacky"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-teal-600 hover:bg-teal-50 transition-all"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://wa.me/233552855012"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 transition-all"
              >
                <MessageCircle size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-teal-600 hover:bg-teal-50 transition-all">
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-[var(--font-display)] text-slate-900 font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-slate-500 hover:text-teal-600 text-sm transition-colors">Home</Link></li>
              <li><Link href="/shop" className="text-slate-500 hover:text-teal-600 text-sm transition-colors">Shop All Jerseys</Link></li>
              <li><Link href="/about" className="text-slate-500 hover:text-teal-600 text-sm transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-slate-500 hover:text-teal-600 text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-[var(--font-display)] text-slate-900 font-semibold uppercase tracking-wider mb-4">Categories</h4>
            <ul className="space-y-3">
              <li><Link href="/shop" className="text-slate-500 hover:text-teal-600 text-sm transition-colors">Premier League</Link></li>
              <li><Link href="/shop" className="text-slate-500 hover:text-teal-600 text-sm transition-colors">La Liga</Link></li>
              <li><Link href="/shop" className="text-slate-500 hover:text-teal-600 text-sm transition-colors">Serie A</Link></li>
              <li><Link href="/shop" className="text-slate-500 hover:text-teal-600 text-sm transition-colors">Bundesliga</Link></li>
              <li><Link href="/shop" className="text-slate-500 hover:text-teal-600 text-sm transition-colors">National Teams</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-[var(--font-display)] text-slate-900 font-semibold uppercase tracking-wider mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-teal-600 flex-shrink-0" />
                <span>Bekwai, Ashanti Region, Ghana</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-teal-600 flex-shrink-0" />
                <a href="tel:+233552855012" className="hover:text-teal-600 transition-colors">0552 855 012</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-teal-600 flex-shrink-0" />
                <a href="mailto:bra123forson@gmail.com" className="hover:text-teal-600 transition-colors">bra123forson@gmail.com</a>
              </li>
            </ul>
            <div className="mt-4">
              <Link href="/account" className="text-teal-600 hover:text-teal-700 text-sm font-medium transition-colors">
                Create Account →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-xs">
            © {new Date().getFullYear()} Zacks Jersey House. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-slate-600 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-slate-600 text-xs transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-400 hover:text-slate-600 text-xs transition-colors">Shipping Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
