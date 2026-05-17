import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Quote = () => {
  const { t } = useTranslation();

  return (
    <section id="quote" className="py-32 bg-black relative overflow-hidden">
      {/* Background Cinematic Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-secondary to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="w-16 h-1 bg-primary rounded-full mb-2 mx-auto shadow-[0_0_10px_rgba(255,0,0,0.8)]"></div>
          </motion.div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-6 font-outfit text-white/90 italic">
            "{t('quote.text')}"
          </h2>
          <p className="text-primary font-black tracking-widest text-[10px] md:text-xs uppercase mb-16">
            — {t('quote.author')}
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex justify-center items-center gap-4 text-white/30 font-black tracking-widest text-[10px] uppercase italic"
          >
            <div className="h-px w-12 bg-white/10"></div>
            Thiran LaunchLab Brand Vision
            <div className="h-px w-12 bg-white/10"></div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default Quote;
