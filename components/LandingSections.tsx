import React from 'react';
import { motion } from 'framer-motion';
import { Zap, BarChart3, Wind, Droplets, Sun, Star, ArrowRight } from 'lucide-react';

export const AboutSection = () => (
  <section id="about" className="py-24 bg-dark-900 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-sun-400 font-mono text-sm tracking-wider uppercase mb-4 block">Our Mission</span>
        <h2 className="text-5xl md:text-6xl font-light text-white mb-8 leading-tight">
          Redefining how we <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-sun-400 to-white">harvest light.</span>
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-8">
          SunVault isn't just about solar panels; it's about an integrated energy ecosystem. 
          We combine aerospace-grade photovoltaics with AI-driven energy management to 
          ensure your home isn't just powered, but intelligent.
        </p>
        <div className="flex gap-8">
           <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">25+</span>
              <span className="text-sm text-gray-500">Years Warranty</span>
           </div>
           <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">98%</span>
              <span className="text-sm text-gray-500">Efficiency Rate</span>
           </div>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative h-[600px] rounded-full overflow-hidden border border-white/10"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1545208942-e0c3132bb82a?q=80&w=2500&auto=format&fit=crop" 
          alt="Solar Technology" 
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  </section>
);

export const SolarSection = () => (
  <section id="solar" className="py-24 bg-dark-800 relative">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center mb-16">
         <h2 className="text-4xl font-bold text-white mb-4">The N-Type Technology</h2>
         <p className="text-gray-400 max-w-2xl mx-auto">Our panels use N-Type TOPCon cells, delivering superior performance in low light and high temperatures compared to conventional P-Type panels.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: Sun, title: "Low Light Performance", desc: "Generates power even on cloudy days or during dawn and dusk." },
          { icon: Wind, title: "Wind Load Tested", desc: "Certified to withstand hurricane-force winds up to 180 mph." },
          { icon: Droplets, title: "Self-Cleaning Glass", desc: "Hydrophobic coating prevents dust and water accumulation." }
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white/5 border border-white/5 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 group"
          >
            <div className="bg-sun-400/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-sun-400 group-hover:bg-sun-400 group-hover:text-dark-900 transition-colors">
              <item.icon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const EfficiencySection = () => (
  <section id="efficiency" className="py-24 bg-dark-900">
     <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 grid-rows-2 h-auto md:h-[600px]">
           
           {/* Main Stat Block */}
           <motion.div 
             whileHover={{ scale: 0.98 }}
             className="lg:col-span-2 row-span-2 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.5rem] p-10 relative overflow-hidden border border-white/10"
           >
              <div className="absolute top-0 right-0 p-32 bg-sun-500/10 rounded-full blur-3xl" />
              <h3 className="text-3xl text-white font-light mb-2">Real-time</h3>
              <h3 className="text-5xl text-white font-bold mb-10">Monitoring</h3>
              
              <div className="flex gap-4 items-end h-64 w-full">
                 {[40, 65, 45, 80, 55, 90, 70, 95].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="flex-1 bg-sun-400/80 rounded-t-lg relative group"
                    >
                       <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-white text-xs transition-opacity">{h}%</div>
                    </motion.div>
                 ))}
              </div>
           </motion.div>

           {/* Secondary Block */}
           <motion.div 
              whileHover={{ scale: 0.98 }}
              className="bg-sun-400 rounded-[2.5rem] p-8 flex flex-col justify-between text-dark-900"
            >
              <div className="flex justify-between items-start">
                 <h4 className="text-xl font-bold">Grid Freedom</h4>
                 <Zap className="w-6 h-6 fill-current" />
              </div>
              <div>
                 <p className="text-6xl font-bold">100<span className="text-2xl align-top">%</span></p>
                 <p className="text-sm opacity-80 mt-2">Off-grid capability with SunVault Battery systems.</p>
              </div>
           </motion.div>

           {/* Third Block */}
           <motion.div 
              whileHover={{ scale: 0.98 }}
              className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 flex flex-col justify-center items-center text-center backdrop-blur-md"
            >
               <BarChart3 className="w-12 h-12 text-sun-400 mb-4" />
               <h4 className="text-2xl text-white font-bold mb-2">ROI Calculator</h4>
               <p className="text-gray-400 text-sm">Average payback period of 4.5 years.</p>
           </motion.div>

        </div>
     </div>
  </section>
);

export const ReviewsSection = () => (
  <section id="reviews" className="py-24 bg-dark-800 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
       <h2 className="text-4xl font-light text-white">Trusted by <span className="font-bold text-sun-400">Future Thinkers</span></h2>
    </div>
    
    <div className="flex gap-6 overflow-x-auto pb-8 px-6 md:px-12 scrollbar-hide snap-x">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="min-w-[300px] md:min-w-[400px] bg-dark-900 border border-white/5 p-8 rounded-3xl snap-center shrink-0">
          <div className="flex gap-1 text-sun-400 mb-6">
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
          </div>
          <p className="text-white text-lg font-light italic mb-8">"The aesthetic integration is flawless. My neighbors barely noticed the panels, but my energy bill noticed the difference immediately."</p>
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 rounded-full bg-gray-600 overflow-hidden">
                <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="User" />
             </div>
             <div>
                <p className="text-white font-bold text-sm">Alex Johnson</p>
                <p className="text-gray-500 text-xs">California, USA</p>
             </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export const GetStartedSection = ({ onOpenAi }: { onOpenAi: () => void }) => (
  <section id="get-started" className="py-24 bg-sun-400 relative">
     <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-bold text-dark-900 mb-8 tracking-tight">Ready to switch?</h2>
        <p className="text-dark-900/80 text-xl mb-12 max-w-2xl mx-auto">
          Get a personalized solar estimate in seconds using our AI consultant, or schedule a visit with a human expert.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
           <button 
             onClick={onOpenAi}
             className="bg-dark-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-dark-800 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
           >
             <Zap className="w-5 h-5 fill-current" />
             TALK TO AI CONSULTANT
           </button>
           <button className="bg-transparent border-2 border-dark-900 text-dark-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-dark-900 hover:text-white transition-all flex items-center justify-center gap-2">
             VIEW PRICING <ArrowRight className="w-5 h-5" />
           </button>
        </div>
     </div>
  </section>
);
