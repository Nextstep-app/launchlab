import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const IntroScreen = ({ onStart }) => {
  const { t } = useTranslation();

  return (
    <motion.div 
      className="fixed inset-0 z-[2000] flex flex-col items-center justify-center bg-black overflow-hidden"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Cinematic Red Particles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full blur-[1px]"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.2
            }}
            animate={{ 
              y: [null, -100],
              opacity: [null, 0]
            }}
            transition={{ 
              duration: Math.random() * 5 + 3, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-center z-10"
      >
        <div className="mb-8 flex flex-col items-center">
            <motion.div 
              className="relative mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <div className="absolute inset-0 bg-primary/40 blur-2xl rounded-full animate-pulse"></div>
                <img 
                    src="/logo.png" 
                    alt="Logo" 
                    className="relative h-24 md:h-32 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,0,0,0.8)]" 
                />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <h1 className="text-4xl md:text-7xl font-bold text-white uppercase leading-none">
                THIRAN <span className="text-primary drop-shadow-[0_0_10px_rgba(255,0,0,0.5)]">LAUNCHLAB</span>
              </h1>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4"></div>
            </motion.div>
        </div>

        <p className="text-sm md:text-lg text-secondary font-outfit tracking-[0.5em] mb-12 uppercase opacity-80 px-6">
          {t('intro.tagline')}
        </p>

        <motion.button
          onClick={onStart}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary px-16 py-5 text-sm tracking-[0.3em] uppercase relative group"
        >
          <span className="relative z-10">{t('intro.button')}</span>
          <div className="absolute inset-0 bg-secondary blur-2xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default IntroScreen;
