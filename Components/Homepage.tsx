"use client"
import { Inter, JetBrains_Mono } from "next/font/google";
import { useRouter } from "next/navigation";
import { motion, Variants } from "framer-motion";
import { Header } from "./Header";

const inter = Inter({ subsets: ["latin"], weight: ["700", "800"] });
const mono = JetBrains_Mono({ subsets: ["latin"] });

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number] 
    } 
  },
};

const Homepage = () => {
  const router = useRouter();

  return (
    <>
      <Header />
      <div className={`min-h-screen bg-black text-white/80 overflow-hidden relative ${mono.className}`}>
        <main className="relative z-10 flex flex-col justify-center h-screen px-8 md:px-16 max-w-7xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className={inter.className}
          >
            {/* Animated Heading */}
            <motion.h1 
              variants={itemVariants} 
              className="text-8xl font-extrabold leading-[0.9] mb-8"
            >
              Paper Analysis,<br />
              Synthesis,<br />
              Writing
            </motion.h1>

            {/* Animated Subtitle Text */}
            <motion.div variants={itemVariants} className="max-w-xl space-y-4">
              <p className="text-slate-400 text-lg md:text-xl font-medium leading-snug">
                AI research assistant with multi-model capability to analyze,
                summarize, and write academic papers.
              </p>
              <p className="text-slate-500 text-base md:text-lg">
                Accelerate breakthroughs with structured insights and collaborative workspace.
              </p>
            </motion.div>

            {/* Animated & Interactive Button */}
            <motion.div variants={itemVariants} className="mt-12">
              <motion.button 
                onClick={() => { router.push("/auth/sign-up") }}
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.96 }}   
                className="group flex items-center gap-4 bg-white text-black px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-[#FF5C00] hover:text-white transition-colors duration-300"
              >
                Get Started
                <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  ↗
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </main>

        {/* Breathing Animation for the Background Overlay */}
        <motion.div 
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.4, 0.7, 0.4] }} 
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-size-[100%_4px,3px_100%]" 
        />
      </div>
    </>
  );
};

export default Homepage;