/*
 * Zacks Jersey House — Shop Page
 * Design: Clean Premium Retail — Light, teal accents, card lift hover
 */
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Star, MessageCircle, ChevronDown, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const ALL_JERSEYS = [
  { id: 1, name: "Ghana National Team", league: "National Teams", price: 170, image: "/manus-storage/jersey-ghana_3fca1d37.png", rating: 5 },
  { id: 2, name: "Manchester United", league: "Premier League", price: 160, image: "/manus-storage/jersey-manchester-united_b2e4f67c.png", rating: 5 },
  { id: 3, name: "Real Madrid", league: "La Liga", price: 160, image: "/manus-storage/jersey-real-madrid_0403f633.png", rating: 5 },
  { id: 4, name: "Manchester City", league: "Premier League", price: 150, image: "/manus-storage/jersey-manchester-city_ba694e5e.png", rating: 5 },
  { id: 5, name: "PSG", league: "Ligue 1", price: 150, image: "/manus-storage/jersey-psg_45defcff.png", rating: 5 },
  { id: 6, name: "Liverpool FC", league: "Premier League", price: 150, image: "/manus-storage/jersey-liverpool_5dd58133.png", rating: 5 },
  { id: 7, name: "Juventus", league: "Serie A", price: 140, image: "/manus-storage/jersey-juventus_f6bb352c.png", rating: 5 },
  { id: 8, name: "Arsenal FC", league: "Premier League", price: 150, image: "/manus-storage/jersey-arsenal_4b84612a.png", rating: 5 },
  { id: 9, name: "FC Barcelona", league: "La Liga", price: 150, image: "/manus-storage/jersey-barcelona_95a64654.png", rating: 5 },
  { id: 10, name: "Chelsea FC", league: "Premier League", price: 140, image: "/manus-storage/jersey-chelsea_811dc0c3.png", rating: 5 },
  { id: 11, name: "Bayern Munich", league: "Bundesliga", price: 150, image: "/manus-storage/jersey-bayern_3d372e30.png", rating: 5 },
  { id: 12, name: "Inter Milan", league: "Serie A", price: 140, image: "/manus-storage/jersey-inter_f7852d56.png", rating: 5 },
  { id: 13, name: "AC Milan", league: "Serie A", price: 140, image: "/manus-storage/jersey-acmilan_456d85d2.png", rating: 5 },
  { id: 14, name: "Borussia Dortmund", league: "Bundesliga", price: 140, image: "/manus-storage/jersey-dortmund_0dabee09.png", rating: 4 },
  { id: 15, name: "Tottenham", league: "Premier League", price: 140, image: "/manus-storage/jersey-tottenham_721aa611.png", rating: 4 },
  { id: 16, name: "Atletico Madrid", league: "La Liga", price: 140, image: "/manus-storage/jersey-atletico_18abe46e.png", rating: 4 },
  { id: 17, name: "Napoli", league: "Serie A", price: 140, image: "/manus-storage/jersey-napoli_8d9eabc1.png", rating: 4 },
  { id: 18, name: "Tottenham Hotspur", league: "Premier League", price: 130, image: "/manus-storage/jersey-tottenham_721aa611.png", rating: 4 },
  { id: 19, name: "Ligue 1 Teams", league: "Ligue 1", price: 130, image: "/manus-storage/jersey-psg_45defcff.png", rating: 4 },
  { id: 20, name: "Other Clubs", league: "Other", price: 120, image: "/manus-storage/jersey-chelsea_811dc0c3.png", rating: 3 },
];

const LEAGUES = ["All Leagues", "Premier League", "La Liga", "Serie A", "Bundesliga", "Ligue 1", "National Teams"];

function JerseyCard({ jersey, index }: { jersey: typeof ALL_JERSEYS[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const whatsappMsg = encodeURIComponent(`Hi Zacks! I'm interested in ordering the ${jersey.name} jersey (₵${jersey.price}). What sizes are available?`);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden card-lift group h-full">
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
              href={`https://wa.me/233552855012?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-2 bg-emerald-600/90 text-white text-xs font-semibold rounded-lg hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle size={14} />
              Order on WhatsApp
            </a>
          </div>
        </div>
        <div className="p-4">
          <p className="text-slate-900 font-medium text-sm">{jersey.name}</p>
          <p className="text-slate-400 text-xs mt-0.5">{jersey.league}</p>
          <div className="flex items-center justify-between mt-3">
            <p className="text-teal-600 font-bold">₵{jersey.price}.00</p>
            <div className="flex items-center gap-0.5">
              {Array.from({ length: jersey.rating }).map((_, i) => (
                <Star key={i} size={10} className="text-teal-500 fill-teal-500" />
              ))}
            </div>
          </div>
          <div className="flex gap-1 mt-3">
            {["S", "M", "L", "XL"].map((s) => (
              <span key={s} className="text-[10px] px-1.5 py-0.5 border border-slate-200 rounded text-slate-400">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Shop() {
  const [search, setSearch] = useState("");
  const [league, setLeague] = useState("All Leagues");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = ALL_JERSEYS.filter((j) => {
    const matchSearch = j.name.toLowerCase().includes(search.toLowerCase());
    const matchLeague = league === "All Leagues" || j.league === league;
    return matchSearch && matchLeague;
  });

  return (
    <div className="min-h-screen bg-slate-50 relative">
      <Navbar />
      <main className="relative pt-24 pb-16">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="text-teal-600 text-sm font-semibold uppercase tracking-[0.2em]">
              Full Collection
            </span>
            <h1 className="font-[var(--font-display)] text-4xl sm:text-5xl font-bold text-slate-900 mt-2">
              Shop All Jerseys
            </h1>
            <p className="text-slate-500 mt-3">
              {filtered.length} jerseys available · Prices from ₵120 to ₵170
            </p>
          </motion.div>

          {/* Search & Filter Bar */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search jerseys..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-teal-300 hover:text-teal-600 transition-all flex items-center gap-2 sm:hidden"
              >
                <Filter size={16} />
                Filters
              </button>
              <div className="hidden sm:flex relative">
                <select
                  value={league}
                  onChange={(e) => setLeague(e.target.value)}
                  className="appearance-none px-4 py-3 pr-10 bg-white border border-slate-200 rounded-xl text-slate-700 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all cursor-pointer"
                >
                  {LEAGUES.map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="sm:hidden mt-4 flex flex-wrap gap-2"
            >
              {LEAGUES.map((l) => (
                <button
                  key={l}
                  onClick={() => setLeague(l)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    league === l
                      ? "bg-teal-600 text-white"
                      : "bg-white text-slate-600 border border-slate-200"
                  }`}
                >
                  {l}
                </button>
              ))}
            </motion.div>
          )}
        </div>

        {/* Jersey Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {filtered.map((jersey, index) => (
              <JerseyCard key={jersey.id} jersey={jersey} index={index} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-400 text-lg">No jerseys found matching your search.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
