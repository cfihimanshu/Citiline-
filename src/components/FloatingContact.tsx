"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FloatingContact() {
  return (
    <motion.div 
      className="fixed bottom-6 left-6 z-[9990]"
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <Link 
        href="/contact" 
        className="flex items-center gap-2.5 bg-[#1A56DB] text-white px-6 py-3.5 rounded-full shadow-[0_8px_30px_rgba(26,86,219,0.3)] hover:shadow-[0_12px_40px_rgba(26,86,219,0.45)] hover:-translate-y-1 hover:bg-[#0F1E45] transition-all duration-300 font-semibold text-sm tracking-wide group"
      >
        <span className="text-lg group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300">💬</span>
        Contact Us
      </Link>
    </motion.div>
  );
}
