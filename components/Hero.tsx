import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, ShieldCheck, BatteryCharging, ArrowUpRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 200]); // Parallax for text
  const yImage = useTransform(scrollY, [0, 500], [0, 100]); // Parallax for image

  return (
    <section className="relative w-full min-h-[120vh] flex flex-col items-center justify-start pt-20 overflow-hidden bg-dark-900">
      
      {/* 0. Background Effects */}
      <div className="absolute inset-0 bg-hero-gradient z-0" />
      <div className="absolute top-0 inset-x-0 h-[800px] bg-mesh opacity-30 z-0 pointer-events-none" />
      
      {/* Decorative Orbs */}
      <div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-sun-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* 1. HUGE TYPOGRAPHY LAYER (z-10) - Behind Image */}
      <motion.div 
        style={{ y: yText }}
        className="absolute top-32 w-full max-w-[1600px] flex justify-between px-4 md:px-12 pointer-events-none select-none z-10"
      >
        <motion.h1 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-[18vw] md:text-[14rem] font-light text-white/90 tracking-tighter leading-none"
        >
          Solar
        </motion.h1>

        {/* Center Logo/Icon between text */}
        <motion.div 
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, type: "spring", delay: 0.2 }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block"
        >
           <Zap className="w-32 h-32 text-sun-400 fill-sun-400 drop-shadow-[0_0_60px_rgba(250,204,21,0.6)]" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-[18vw] md:text-[14rem] font-light text-white/90 tracking-tighter leading-none text-right"
        >
          Power
        </motion.h1>
      </motion.div>

      {/* 2. CENTRAL HOUSE IMAGE (z-20) - Overlapping Text */}
      <div className="relative z-20 w-full max-w-[1100px] mt-[10vh] md:mt-[15vh] px-4">
        <motion.div 
          style={{ y: yImage }}
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative aspect-[4/3] md:aspect-[16/9] rounded-[2.5rem] overflow-hidden shadow-[0_20px_100px_rgba(0,0,0,0.5)] border border-white/10"
        >
          {/* 4K House Image */}
          <img 
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2938&auto=format&fit=crop" 
            alt="Futuristic Solar Home" 
            className="w-full h-full object-cover"
          />
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent" />

          {/* Image Hotspots */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute top-[28%] left-[28%] hidden md:flex items-center gap-3"
          >
            <div className="relative">
              <div className="w-3 h-3 bg-sun-400 rounded-full animate-ping absolute" />
              <div className="w-3 h-3 bg-sun-400 rounded-full relative z-10" />
            </div>
            <div className="bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-lg border border-white/20 shadow-lg">
              <p className="text-xs font-bold font-mono text-white tracking-wide">SUN POWER</p>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1.7 }}
             className="absolute top-[45%] right-[25%] hidden md:flex items-center gap-3"
          >
             <div className="bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-lg border border-white/20 shadow-lg">
               <p className="text-xs font-bold font-mono text-white tracking-wide">50W Output</p>
             </div>
             <div className="w-12 h-[1px] bg-white/50" />
             <div className="w-2 h-2 bg-white rounded-full" />
          </motion.div>

          <div className="absolute top-10 left-10 hidden md:block">
            <div className="glass-panel px-4 py-2 rounded-lg border-l-4 border-sun-400">
               <p className="text-sun-400 font-mono text-xs mb-1">NX - 456</p>
               <p className="text-white text-sm max-w-[120px]">Discover models with new roof options.</p>
               <button className="text-[10px] text-white underline mt-2 hover:text-sun-400">TAKE ORDER</button>
            </div>
          </div>

        </motion.div>
      </div>

      {/* 3. FLOATING UI CARDS (z-30) - Bottom Layer */}
      <div className="relative z-30 w-full max-w-[1200px] px-6 -mt-20 md:-mt-24 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Reviews */}
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            whileHover={{ y: -10 }}
            className="glass-panel p-8 rounded-[2rem] relative overflow-hidden group min-h-[220px] flex flex-col justify-between"
          >
             <div className="absolute inset-0 bg-dark-900/40 z-0" />
             <div className="relative z-10 flex justify-between items-start">
                <div>
                   <h3 className="text-white text-2xl font-light">Explore<br/><span className="font-medium">reviews</span></h3>
                </div>
                <div className="bg-sun-400/20 p-2 rounded-full">
                  <Star className="text-sun-400 w-5 h-5 fill-sun-400" />
                </div>
             </div>
             
             <div className="relative z-10 mt-auto">
               <button className="text-sun-400 text-sm font-bold border-b border-sun-400/30 pb-0.5 hover:border-sun-400 transition-colors">SEE NOW</button>
               <div className="absolute bottom-0 right-0 flex items-center gap-2">
                 <span className="text-5xl text-white font-thin">4.8</span>
                 <Star className="w-6 h-6 text-sun-400 fill-sun-400 mb-4" />
               </div>
               <div className="absolute -bottom-16 -right-4 w-32 h-32 rounded-full overflow-hidden border-4 border-white/5 opacity-80">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" alt="User" />
               </div>
             </div>
          </motion.div>

          {/* Card 2: Battery */}
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            whileHover={{ y: -10 }}
            className="glass-panel p-8 rounded-[2rem] relative overflow-hidden min-h-[220px] flex flex-col items-center justify-center text-center"
          >
             <div className="absolute inset-0 bg-dark-800/60 z-0" />
             
             <div className="relative z-10">
                <p className="text-white text-lg font-light">Solar Edge</p>
                <p className="text-white text-xl font-medium mb-4">Battery</p>
                
                <div className="bg-gray-200/90 w-24 h-32 mx-auto rounded-lg relative shadow-lg overflow-hidden border border-white/20">
                   <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-1 bg-yellow-400 rounded-full animate-pulse" />
                   <div className="absolute bottom-7 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border border-gray-400/50" />
                </div>
             </div>
          </motion.div>

          {/* Card 3: Weather */}
          <motion.div 
             initial={{ y: 100, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.8, duration: 0.8 }}
             whileHover={{ y: -10 }}
             className="bg-white p-8 rounded-[2rem] relative overflow-hidden min-h-[220px] flex flex-col justify-between"
          >
             <div className="flex justify-between items-start">
               <div>
                 <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <ShieldCheck className="w-6 h-6 text-gray-800" />
                 </div>
                 <h3 className="text-dark-900 text-xl font-light">Weather</h3>
                 <h3 className="text-dark-900 text-xl font-bold">resistant</h3>
               </div>
               
               {/* 3D Drop Effect */}
               <div className="relative">
                 <div className="w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center border border-gray-100">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-100 to-gray-300 opacity-50" />
                 </div>
                 <div className="w-6 h-6 bg-white shadow-md rounded-full absolute -bottom-4 -right-2 opacity-80" />
               </div>
             </div>

             <div className="flex justify-between items-end mt-4">
                <span className="text-dark-900 font-bold text-sm">IPX8</span>
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-white rounded-full shadow-inner flex items-center justify-center">
                   <div className="w-12 h-12 bg-white rounded-full shadow-[inset_2px_2px_5px_rgba(0,0,0,0.05)]" />
                </div>
             </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default Hero;