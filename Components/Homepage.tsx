"use client"
import { Inter, JetBrains_Mono } from "next/font/google";
import { useRouter } from "next/navigation";
const inter = Inter({ subsets: ["latin"], weight: ["700", "800"] });
const mono = JetBrains_Mono({ subsets: ["latin"] });

const Homepage = () => {
  const router = useRouter();

  return (
    <div className={`min-h-screen bg-black text-white/80 overflow-hidden relative ${mono.className}`}>
      
      
      <main className="relative z-10 flex flex-col justify-center h-screen px-8 md:px-16 max-w-7xl">


        <div className={inter.className}>
          <h1 className="text-8xl font-extrabold leading-[0.9]  mb-8">
            Paper Analysis,<br />
            Synthesis,<br />
            Writing
          </h1>
          
          <div className="max-w-xl space-y-4">
            <p className="text-slate-400 text-lg md:text-xl font-medium leading-snug">
              AI research assistant with multi-model capability to analyze, 
              summarize, and write academic papers.
            </p>
            <p className="text-slate-500 text-base md:text-lg">
              Accelerate breakthroughs with structured insights and collaborative workspace.
            </p>
          </div>
        </div>

        <div className="mt-12" onClick={()=>{router.push("/auth/sign-up")}}>
          <button className="group flex items-center gap-4 bg-white text-black px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-[#FF5C00] hover:text-white transition-all">
            Get Started
            <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
              ↗
            </span>
          </button>
        </div>
      </main>

     
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-size-[100%_4px,3px_100%]" />
    </div>
  );
};

export default Homepage;