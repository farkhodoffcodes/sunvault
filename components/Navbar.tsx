import React from 'react';
import { Zap, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps {
  onOpenAi: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenAi }) => {
  const links = [
    { name: 'About', href: '#about' },
    { name: 'Solar', href: '#solar' },
    { name: 'Efficiency', href: '#efficiency' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6">
      {/* Glass Background Container - absolutely positioned to allow content to float above */}
      <div className="absolute inset-0 bg-dark-900/60 backdrop-blur-md border-b border-white/5 shadow-sm" />

      {/* Brand */}
      <div className="relative z-10 flex items-center gap-2">
        <Zap className="w-6 h-6 text-sun-400 fill-sun-400" />
        <span className="text-xl font-bold text-white tracking-wide">SunVault</span>
      </div>

      {/* Center Links */}
      <div className="relative z-10 hidden md:flex items-center gap-10">
        {links.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sun-400 transition-all group-hover:w-full" />
          </a>
        ))}
      </div>

      {/* Right Actions */}
      <div className="relative z-10 flex items-center gap-4">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpenAi}
          className="bg-sun-400 hover:bg-sun-500 text-dark-900 font-bold py-2.5 px-6 rounded-lg transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(250,204,21,0.4)]"
        >
          GET STARTED <Zap className="w-4 h-4 fill-current" />
        </motion.button>
        
        <button className="md:hidden text-white p-2">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;