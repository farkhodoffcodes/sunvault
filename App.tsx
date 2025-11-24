import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { AboutSection, SolarSection, EfficiencySection, ReviewsSection, GetStartedSection } from './components/LandingSections';
import AiConsultant from './components/AiConsultant';

const App: React.FC = () => {
  const [isAiOpen, setIsAiOpen] = useState(false);

  return (
    <div className="min-h-screen bg-dark-900 text-white font-sans selection:bg-sun-400 selection:text-dark-900 overflow-x-hidden">
      <Navbar onOpenAi={() => setIsAiOpen(true)} />
      
      <main>
        <Hero />
        <div className="relative z-20 bg-dark-900">
           {/* Negative margin to pull content slightly over the bottom of hero if needed, but Hero handles spacing well now */}
           <AboutSection />
           <SolarSection />
           <EfficiencySection />
           <ReviewsSection />
           <GetStartedSection onOpenAi={() => setIsAiOpen(true)} />
        </div>
      </main>

      <footer className="bg-dark-900 border-t border-white/5 py-12 text-center text-gray-600 text-sm">
        <p>&copy; 2024 SunVault Energy Systems. All rights reserved.</p>
      </footer>

      <AiConsultant 
        isOpen={isAiOpen} 
        onClose={() => setIsAiOpen(false)} 
      />
    </div>
  );
};

export default App;