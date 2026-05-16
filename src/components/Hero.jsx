import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-mesh">
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
            className="text-5xl md:text-8xl font-bold uppercase mb-8 leading-[0.9] text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t('hero.heading').split('With Thiran')[0]} <br />
            <span className="text-primary">With Thiran</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 flex flex-col md:flex-row gap-6"
          >
            <a href="#contact" className="btn-primary px-12 py-4">{t('hero.cta_start')}</a>
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
