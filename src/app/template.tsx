"use client";
import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <motion.div
        className="fixed inset-0 z-[9997] pointer-events-none"
        style={{ background: "linear-gradient(135deg, #1A56DB 0%, #0EA5E9 100%)" }}
        initial={{ clipPath: "circle(150% at 50% 50%)" }}
        animate={{ clipPath: "circle(0% at 50% 50%)" }}
        transition={{ duration: 0.8, ease: [0.77, 0, 0.18, 1] }}
      />
      {children}
    </>
  );
}
