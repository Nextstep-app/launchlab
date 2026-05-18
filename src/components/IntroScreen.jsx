import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const IntroScreen = ({ onStart }) => {
  const { t } = useTranslation();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showSequence, setShowSequence] = useState(true);
  const words = ["dream", "build", "launch"];

  useEffect(() => {
    if (currentWordIndex < words.length) {
      const timer = setTimeout(() => {
        setCurrentWordIndex(prev => prev + 1);
      }, 1100); // 1.1 seconds per word for elegant pacing
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setShowSequence(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [currentWordIndex]);

  return (
    <motion.div 
      className="fixed inset-0 z-[2000] flex flex-col items-center justify-center bg-black overflow-hidden"
      exit={{ opacity: 0, scale: 1.15 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Cinematic Red Particles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(35)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full blur-[1px]"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200), 
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: Math.random() * 0.4 + 0.1
            }}
            animate={{ 
              y: [null, -150],
              opacity: [null, 0]
            }}
            transition={{ 
              duration: Math.random() * 6 + 4, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {showSequence ? (
          <motion.div
            key="sequence"
            className="flex items-center justify-center z-10"
            exit={{ opacity: 0, scale: 0.9, filter: "blur(15px)" }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              {currentWordIndex < words.length && (
                <motion.h2
                  key={currentWordIndex}
                  initial={{ opacity: 0, scale: 0.75, letterSpacing: "0.2em", filter: "blur(12px)" }}
                  animate={{ opacity: 1, scale: 1.05, letterSpacing: "0.35em", filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.25, letterSpacing: "0.45em", filter: "blur(8px)" }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl md:text-9xl font-black text-white text-glow-red italic uppercase tracking-[0.3em] font-sans"
                >
                  {t(`intro.sequence.${words[currentWordIndex]}`)}
                </motion.h2>
              )}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* Main Content */
          <motion.div
            key="main-content"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-center z-10 flex flex-col items-center justify-center"
          >
            <div className="mb-8 flex flex-col items-center">
                <motion.div 
                  className="relative mb-8"
                  initial={{ scale: 0.75, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                >
                    <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-full animate-pulse"></div>
                    <img 
                        src="/logo.png" 
                        alt="Logo" 
                        className="relative h-24 md:h-32 w-auto object-contain drop-shadow-[0_0_20px_rgba(255,0,0,0.75)]" 
                    />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                  className="text-center"
                >
                  <h1 className="text-4xl md:text-7xl font-bold text-white uppercase leading-none tracking-tight">
                    THIRAN <span className="text-primary drop-shadow-[0_0_12px_rgba(255,0,0,0.6)]">LAUNCHLAB</span>
                  </h1>
                  <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-5 shadow-[0_0_8px_#ff0000]"></div>
                </motion.div>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-sm md:text-xl text-secondary font-outfit tracking-[0.4em] mb-12 uppercase px-6 font-bold text-glow-red italic animate-pulse"
            >
              {t('intro.tagline')}
            </motion.p>

            <motion.button
              onClick={onStart}
              whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(255,0,0,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-20 py-5 text-xs tracking-[0.4em] uppercase relative group overflow-hidden"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <span className="relative z-10 font-black">{t('intro.button')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-secondary blur-2xl opacity-10 group-hover:opacity-30 transition-opacity rounded-full"></div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default IntroScreen;
