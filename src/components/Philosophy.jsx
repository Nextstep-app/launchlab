import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Sparkles, Cpu, Rocket } from 'lucide-react';

const Philosophy = () => {
  const { t } = useTranslation();

  const steps = [
    {
      num: t('philosophy.steps.s1_num'),
      name: t('philosophy.steps.s1_name'),
      title: t('philosophy.steps.s1_title'),
      desc: t('philosophy.steps.s1_desc'),
      icon: Sparkles,
      color: "from-red-500/20 to-orange-500/20",
      glow: "group-hover:shadow-[0_0_50px_rgba(239,68,68,0.15)]",
      border: "group-hover:border-red-500/30"
    },
    {
      num: t('philosophy.steps2.s2_num'),
      name: t('philosophy.steps2.s2_name'),
      title: t('philosophy.steps2.s2_title'),
      desc: t('philosophy.steps2.s2_desc'),
      icon: Cpu,
      color: "from-zinc-500/20 to-slate-500/20",
      glow: "group-hover:shadow-[0_0_50px_rgba(255,255,255,0.08)]",
      border: "group-hover:border-white/30"
    },
    {
      num: t('philosophy.steps3.s3_num'),
      name: t('philosophy.steps3.s3_name'),
      title: t('philosophy.steps3.s3_title'),
      desc: t('philosophy.steps3.s3_desc'),
      icon: Rocket,
      color: "from-red-600/25 to-pink-600/20",
      glow: "group-hover:shadow-[0_0_50px_rgba(220,38,38,0.2)]",
      border: "group-hover:border-primary/40"
    }
  ];

  return (
    <section id="philosophy" className="py-28 bg-black relative overflow-hidden border-t border-b border-white/5">
      {/* Mesh and Glow Orbs */}
      <div className="absolute inset-0 bg-mesh opacity-[0.25] pointer-events-none"></div>
      <div className="glow-orb-red top-1/2 left-1/4 -translate-y-1/2 opacity-[0.03] animate-pulse"></div>
      <div className="glow-orb-yellow bottom-0 right-1/4 opacity-[0.02]"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title Block */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-6 px-5 py-2 bg-zinc-900/50 border border-primary/20 rounded-full flex items-center gap-3 backdrop-blur-sm"
          >
            <span className="text-primary text-xs animate-ping">●</span>
            <span className="text-[10px] font-black tracking-[0.3em] text-white uppercase italic">
              OUR FRAMEWORK
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-bold uppercase leading-none tracking-tight text-white mb-6"
          >
            Dream <span className="text-primary animate-pulse">·</span> Build <span className="text-primary animate-pulse">·</span> Launch
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/50 font-outfit max-w-3xl text-sm md:text-base leading-relaxed"
          >
            {t('philosophy.subheading')}
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className={`glass-card group flex flex-col items-start relative overflow-hidden transition-all duration-500 border border-white/5 ${step.border} ${step.glow} hover:-translate-y-2`}
              >
                {/* Visual Accent Line */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>

                {/* Big Step Number in Background */}
                <div className="absolute top-4 right-6 select-none pointer-events-none transition-all duration-500 group-hover:scale-105">
                  <span className="text-8xl md:text-9xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/[0.04] to-transparent">
                    {step.num}
                  </span>
                </div>

                {/* Icon Container */}
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${step.color} border border-white/10 mb-8 relative z-10 group-hover:scale-110 transition-transform duration-500`}>
                  <IconComponent className="w-8 h-8 text-white group-hover:text-primary transition-colors duration-300" />
                </div>

                {/* Card Text Content */}
                <span className="text-[10px] font-black tracking-[0.3em] text-primary uppercase italic mb-2 relative z-10">
                  STEP {step.num} / {step.name}
                </span>

                <h3 className="text-2xl md:text-3xl mb-4 text-white font-bold uppercase tracking-tight relative z-10 group-hover:text-glow-red transition-all duration-300">
                  {step.title}
                </h3>

                <p className="text-sm text-white/50 leading-relaxed font-outfit relative z-10 group-hover:text-white/70 transition-colors duration-300">
                  {step.desc}
                </p>

                {/* Decorative glow point inside card */}
                <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-primary/5 blur-2xl rounded-full group-hover:bg-primary/10 transition-colors duration-500"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
