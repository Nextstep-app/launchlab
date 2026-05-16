import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target, Users, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WhyThiran = () => {
  const { t } = useTranslation();

  const reasons = [
    {
      icon: Rocket,
      title: t('why.reasons.r1_t'),
      description: t('why.reasons.r1_d')
    },
    {
      icon: Target,
      title: t('why.reasons.r2_t'),
      description: t('why.reasons.r2_d')
    },
    {
      icon: Users,
      title: t('why.reasons.r3_t'),
      description: t('why.reasons.r3_d')
    },
    {
      icon: Zap,
      title: t('why.reasons.r4_t'),
      description: t('why.reasons.r4_d')
    }
  ];

  return (
    <section id="why-thiran" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl mb-4"
          >
            {t('why.heading').split('?')[0]}?
          </motion.h2>
          <p className="text-white/50 font-outfit max-w-2xl mx-auto uppercase tracking-widest text-xs">
            {t('why.subheading')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card group"
            >
              <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4 uppercase tracking-tight">{reason.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed font-outfit">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[150px] rounded-full"></div>
    </section>
  );
};

export default WhyThiran;
