import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIcon, setActiveIcon] = useState('whatsapp');

  // Cycle through WhatsApp and Instagram icons when the widget is closed
  useEffect(() => {
    if (isOpen) return;
    const interval = setInterval(() => {
      setActiveIcon((prev) => (prev === 'whatsapp' ? 'instagram' : 'whatsapp'));
    }, 3000);
    return () => clearInterval(interval);
  }, [isOpen]);

  const whatsappUrl = "https://wa.me/918056547565?text=Hi%2C%20I'm%20interested%20in%20building%20a%20website%20with%20Thiran%20LaunchLab!";
  const instagramUrl = "https://www.instagram.com/thiran_launchlab?igsh=Nm9kbnNvcDE5bTI1";

  const whatsappSvg = (
    <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );

  const instagramSvg = (
    <svg className="w-6 h-6 text-white fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );

  const closeSvg = (
    <svg className="w-6 h-6 text-primary fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );

  const menuVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 20 },
    },
  };

  return (
    <div className="fixed bottom-8 right-8 z-[2000] flex flex-col items-end gap-4 select-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="flex flex-col items-end gap-3.5 mb-2"
          >
            {/* WhatsApp Option */}
            <motion.a
              variants={itemVariants}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <motion.span 
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="px-3 py-1.5 bg-zinc-950/90 border border-white/10 text-white font-bold text-[10px] uppercase tracking-widest rounded-lg shadow-xl backdrop-blur-md group-hover:border-primary/50 transition-colors"
              >
                WhatsApp
              </motion.span>
              <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_5px_15px_rgba(37,211,102,0.3)] hover:shadow-[0_8px_25px_rgba(37,211,102,0.5)] transition-shadow">
                {whatsappSvg}
              </div>
            </motion.a>

            {/* Instagram Option */}
            <motion.a
              variants={itemVariants}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <motion.span 
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="px-3 py-1.5 bg-zinc-950/90 border border-white/10 text-white font-bold text-[10px] uppercase tracking-widest rounded-lg shadow-xl backdrop-blur-md group-hover:border-primary/50 transition-colors"
              >
                Instagram
              </motion.span>
              <div className="w-12 h-12 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-full flex items-center justify-center shadow-[0_5px_15px_rgba(238,42,123,0.3)] hover:shadow-[0_8px_25px_rgba(238,42,123,0.5)] transition-shadow text-white">
                {instagramSvg}
              </div>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB Toggle Button / Close Option */}
      <div className="flex items-center gap-3 group">
        <AnimatePresence>
          {isOpen && (
            <motion.span
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 15 }}
              className="px-3 py-1.5 bg-zinc-950/90 border border-white/10 text-white font-bold text-[10px] uppercase tracking-widest rounded-lg shadow-xl backdrop-blur-md group-hover:border-primary/50 transition-colors cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Close
            </motion.span>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 relative cursor-pointer ${
            isOpen
              ? 'bg-zinc-900 border border-white/20 hover:border-primary/50 text-white shadow-[0_0_20px_rgba(255,255,255,0.1)]'
              : 'bg-black border border-white/10 text-white shadow-[0_0_15px_rgba(255,0,0,0.2)] hover:border-primary/30'
          }`}
        >
          {/* Pulsing glow ring when closed */}
          {!isOpen && (
            <div className="absolute inset-0 rounded-full border border-primary/45 animate-[glow-pulse_2s_infinite] pointer-events-none" />
          )}

          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                {closeSvg}
              </motion.div>
            ) : (
              <motion.div
                key="icons"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full flex items-center justify-center"
              >
                <AnimatePresence mode="wait">
                  {activeIcon === 'whatsapp' ? (
                    <motion.div
                      key="wa-icon"
                      initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.5, rotate: 30 }}
                      transition={{ duration: 0.35 }}
                      className="text-[#25D366]"
                    >
                      {whatsappSvg}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="ig-icon"
                      initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.5, rotate: 30 }}
                      transition={{ duration: 0.35 }}
                      className="text-pink-500"
                    >
                      {instagramSvg}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
};

export default FloatingContact;
