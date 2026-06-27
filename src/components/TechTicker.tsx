"use client";
import { motion } from "framer-motion";

export default function TechTicker() {
  const techStack = [
    "React", "Node.js", "Python", "AWS", "Docker", "Kubernetes",
    "TensorFlow", "PostgreSQL", "MongoDB", "Redis", "GraphQL",
    "Next.js", "CyberSec", "Azure", "Flutter"
  ];

  return (
    <div className="ticker-wrap overflow-hidden whitespace-nowrap bg-gray-50 border-y border-gray-100 py-4 flex items-center">
      <motion.div
        className="flex w-max gap-16 px-8 font-semibold text-gray-400 tracking-widest text-sm uppercase"
        animate={{ x: [0, -2000] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        {[...techStack, ...techStack, ...techStack].map((tech, i) => (
          <div key={i} className="flex items-center gap-16">
            <span className="inline-block whitespace-nowrap">{tech}</span>
            <span className="text-gray-300">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
