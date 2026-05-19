import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  const [isLaunching, setIsLaunching] = useState(false);
  const [showLaunchText, setShowLaunchText] = useState(false);
  const [activeWordIndex, setActiveWordIndex] = useState(-1);

  const handleLaunch = (e) => {
    e.preventDefault();
    if (isLaunching) return;
    
    setIsLaunching(true);
    setShowLaunchText(true);

    // Word activation sequence
    setTimeout(() => setActiveWordIndex(0), 100);
    setTimeout(() => setActiveWordIndex(1), 300);
    setTimeout(() => setActiveWordIndex(2), 500);

    // Text fade out
    setTimeout(() => {
      setShowLaunchText(false);
    }, 700);

    // Scroll
    setTimeout(() => {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      
      // Cleanup after scroll
      setTimeout(() => {
         setIsLaunching(false);
         setActiveWordIndex(-1);
      }, 1000); 
    }, 800);
  };

  const getWordClasses = (index) => {
    const isActive = activeWordIndex >= index;
    return `text-xs md:text-lg font-black tracking-[0.25em] uppercase italic transition-all duration-300 ${
      isActive ? 'text-white text-glow-red scale-110 drop-shadow-[0_0_15px_rgba(255,0,0,0.8)]' : 'text-white/50'
    }`;
  };

  return (
    <section id="hero" className={`relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-mesh transition-colors duration-500 ${isLaunching ? 'launch-active shake-active' : ''}`}>
      {/* Launch Particles */}
      <AnimatePresence>
        {isLaunching && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: "100%", x: `${Math.random() * 100}%`, scale: Math.random() * 0.5 + 0.5 }}
                animate={{ opacity: [0, 1, 0], y: "-20%" }}
                transition={{ duration: 0.6 + Math.random() * 0.4, ease: "easeIn", delay: Math.random() * 0.1 }}
                className="absolute bottom-0 w-[2px] h-6 bg-primary rounded-full blur-[1px]"
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Red Energy Pulse */}
      <AnimatePresence>
        {isLaunching && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.25, scale: 2.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute bg-primary rounded-full blur-[100px] pointer-events-none z-0"
            style={{ width: '800px', height: '800px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          />
        )}
      </AnimatePresence>

      {/* Launch Text Overlay */}
      <AnimatePresence>
        {showLaunchText && (
          <motion.div
            initial={{ opacity: 0, filter: 'blur(12px)', scale: 0.95 }}
            animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
            exit={{ opacity: 0, filter: 'blur(8px)', scale: 1.05 }}
            transition={{ duration: 0.2, exit: { duration: 0.3 } }}
            className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
          >
            <h2 className="text-4xl md:text-6xl font-bold uppercase text-white tracking-[0.2em] font-heading drop-shadow-[0_0_20px_rgba(255,0,0,0.8)]" style={{ textShadow: '0 0 15px rgba(255, 0, 0, 0.8)' }}>
              {t('hero.launch_mode', 'LAUNCH MODE INITIATED')}
            </h2>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Glows */}
      <div className={`glow-orb-red top-1/4 -left-20 transition-all ${isLaunching ? 'animate-none opacity-40 scale-150 duration-500' : 'animate-pulse'}`}></div>
      
      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Sub-badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8 px-6 py-2 bg-zinc-900/50 border border-primary/20 rounded-full flex items-center gap-3 backdrop-blur-sm"
          >
            <span className="text-primary text-lg">⚡</span>
            <span className="text-[10px] md:text-xs font-black tracking-[0.3em] text-white uppercase italic">
              {t('hero.badge')}
            </span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-8xl font-bold uppercase mb-4 leading-[0.9] text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t('hero.heading').split('With Thiran')[0]} <br />
            <span className="text-primary">With Thiran</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center gap-3 md:gap-6 mb-8 mt-4"
          >
            <span className={isLaunching ? getWordClasses(0) : "text-xs md:text-lg font-black tracking-[0.25em] text-white uppercase italic text-glow-red transition-all duration-300"}>
              {t('philosophy.steps.s1_name')}
            </span>
            <span className="text-primary text-[8px] md:text-xs animate-pulse select-none">■</span>
            <span className={isLaunching ? getWordClasses(1) : "text-xs md:text-lg font-black tracking-[0.25em] text-white uppercase italic text-glow-red transition-all duration-300"}>
              {t('philosophy.steps2.s2_name')}
            </span>
            <span className="text-primary text-[8px] md:text-xs animate-pulse select-none">■</span>
            <span className={isLaunching ? getWordClasses(2) : "text-xs md:text-lg font-black tracking-[0.25em] text-white uppercase italic text-glow-red transition-all duration-300"}>
              {t('philosophy.steps3.s3_name')}
            </span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-6 flex flex-col md:flex-row gap-6 relative"
          >
            <a 
              href="#services" 
              onClick={handleLaunch}
              className={`btn-primary px-12 py-4 relative overflow-hidden ${isLaunching ? 'launching' : ''}`}
            >
              <span className="relative z-10">{t('hero.cta_start')}</span>
            </a>
            <a href="#services" className="btn-outline px-12 py-4">{t('hero.cta_services')}</a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements (Bottom Visual) */}
      <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-4xl transition-opacity duration-500 ${isLaunching ? 'opacity-100' : 'opacity-20'}`}>
         <div className={`h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent ${isLaunching ? 'shadow-[0_0_20px_rgba(255,0,0,1)]' : ''}`}></div>
      </div>
    </section>
  );
};

export default Hero;
