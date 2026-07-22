import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/233552855012?text=Hi%20Zacks!%20I'm%20interested%20in%20ordering%20a%20jersey."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-5 py-3 shadow-xl shadow-emerald-500/30 transition-all duration-200 active:scale-[0.95] group"
    >
      <MessageCircle size={20} className="group-hover:rotate-12 transition-transform" />
      <span className="text-sm font-semibold hidden sm:inline">Order Now</span>
    </motion.a>
  );
}
