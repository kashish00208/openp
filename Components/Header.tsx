'use client'
import { CgProfile } from "react-icons/cg";
import { motion } from "motion/react";
import { useRef } from "react";

export const Header = () => {
  const scrollRef = useRef(null);
  
  return (
    <header 
      ref={scrollRef} 
      className="fixed top-6 inset-x-0 z-50 flex justify-center px-6"
    >
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-7xl backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-4 shadow-lg"
      >
        <ul className="flex justify-between items-center text-xl font-medium text-white">
          <li className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity">
            <span>Open</span>
            <span className="text-black bg-white rounded-md px-1 font-bold">P</span>
          </li>

          <li className="cursor-pointer hover:scale-110 transition-transform active:scale-95">
            <CgProfile size={28} className="text-white/90" />
          </li>
        </ul>
      </motion.nav>
    </header>
  );
};