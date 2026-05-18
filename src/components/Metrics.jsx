import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Metrics = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-black border-t border-b border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[150px] bg-primary/5 blur-[80px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-3 gap-4 md:gap-12 max-w-4xl mx-auto w-full"
        >
          <div className="flex flex-col items-center text-center">
            <span className="text-4xl md:text-7xl font-black text-white italic tracking-tighter text-glow-red">
              3
            </span>
            <span className="text-[9px] md:text-xs font-black tracking-[0.25em] text-white/50 uppercase mt-3">
              {t('hero.stats.total')}
            </span>
          </div>
          
          <div className="flex flex-col items-center text-center border-x border-white/5 px-4">
            <span className="text-4xl md:text-7xl font-black text-primary italic tracking-tighter text-glow-red">
              1
            </span>
            <span className="text-[9px] md:text-xs font-black tracking-[0.25em] text-white/50 uppercase mt-3">
              {t('hero.stats.completed')}
            </span>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <span className="text-4xl md:text-7xl font-black text-white italic tracking-tighter text-glow-red">
              2
            </span>
            <span className="text-[9px] md:text-xs font-black tracking-[0.25em] text-white/50 uppercase mt-3">
              {t('hero.stats.ongoing')}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Metrics;
