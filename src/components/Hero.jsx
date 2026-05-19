import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  const [isLaunching, setIsLaunching] = useState(false);

  const handleLaunch = (e) => {
    e.preventDefault();
    if (isLaunching) return;
    setIsLaunching(true);

    // Short delay for the button compression and pulse effect before scrolling
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      // Reset state so the effect can trigger again if needed
      setTimeout(() => setIsLaunching(false), 500); 
    }, 300);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-mesh">
      {/* Quick Energy Pulse */}
      <AnimatePresence>
        {isLaunching && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.3, scale: 2 }}
            exit={{ opacity: 0, scale: 2.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute bg-primary rounded-full blur-[80px] pointer-events-none z-0"
            style={{ width: '600px', height: '600px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          />
        )}
      </AnimatePresence>

      {/* Background Glows */}
      <div className="glow-orb-red top-1/4 -left-20 animate-pulse"></div>

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
            <span className="text-xs md:text-lg font-black tracking-[0.25em] text-white uppercase italic text-glow-red">
              {t('philosophy.steps.s1_name')}
            </span>
            <span className="text-primary text-[8px] md:text-xs animate-pulse select-none">■</span>
            <span className="text-xs md:text-lg font-black tracking-[0.25em] text-white uppercase italic text-glow-red">
              {t('philosophy.steps2.s2_name')}
            </span>
            <span className="text-primary text-[8px] md:text-xs animate-pulse select-none">■</span>
            <span className="text-xs md:text-lg font-black tracking-[0.25em] text-white uppercase italic text-glow-red">
              {t('philosophy.steps3.s3_name')}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-6 flex flex-col md:flex-row gap-6"
          >
            <a 
              href="#contact" 
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
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-4xl opacity-20">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
