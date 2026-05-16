import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  CheckCircle2, 
  Code, 
  Smartphone, 
  BarChart3, 
  Globe, 
  Zap, 
  Rocket, 
  ArrowRight,
  Monitor,
  Layout,
  Search,
  MessageCircle,
  X
} from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    {
      id: 'local',
      name: 'Local Launch',
      for: 'Student / Creator / Small Business',
      icon: <Zap className="w-8 h-8 text-primary" />,
      features: [
        'Single Page Modern Website',
        'Mobile Responsive Design',
        'Contact Form Integration',
        'Social Media Links',
        'Basic SEO Setup',
        '1 Year Free Hosting'
      ],
      description: 'The perfect starting point for students and local creators to establish a professional digital presence quickly and affordably.'
    },
    {
      id: 'creator',
      name: 'Creator Launch',
      for: 'Influencers / Personal Brands',
      icon: <Layout className="w-8 h-8 text-primary" />,
      features: [
        'Multi-page Brand Website',
        'Custom Animations',
        'Portfolio/Gallery Section',
        'Newsletter Integration',
        'Advanced Analytics',
        'Priority Support'
      ],
      description: 'Level up your personal brand with a high-performance website designed to showcase your work and capture high-quality leads.'
    },
    {
      id: 'business',
      name: 'Business Launch',
      for: 'Startups / Agencies / Enterprise',
      icon: <Rocket className="w-8 h-8 text-primary" />,
      features: [
        'Full Enterprise Website',
        'Custom Admin Dashboard',
        'E-commerce / CMS Capability',
        'Premium Third-party APIs',
        'Full SEO Strategy',
        'Ongoing Maintenance'
      ],
      description: 'A comprehensive digital ecosystem for businesses ready to scale. Includes custom functionality tailored to your specific operations.'
    }
  ];

  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 border border-primary/20"
          >
            <Code className="w-8 h-8 text-primary" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl leading-none"
          >
            {t('services.heading')}
          </motion.h2>
          <p className="text-white/50 font-outfit mt-6 max-w-2xl">
            {t('services.subheading')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card flex flex-col group relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-black/40 rounded-xl border border-white/5 group-hover:border-primary/30 transition-colors">
                  {pkg.icon}
                </div>
                <div className="px-4 py-1 rounded-md text-[10px] font-black uppercase tracking-widest bg-secondary/10 text-secondary border border-secondary/20">
                  {pkg.id === 'business' ? t('services.elite') : t('services.active')}
                </div>
              </div>
              
              <h3 className="text-3xl mb-2">{pkg.name}</h3>
              <p className="text-sm text-white/40 mb-8 font-outfit italic">{t('services.for')}: {pkg.for}</p>
              
              <div className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-xs text-white/70 font-outfit">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => setSelectedPackage(pkg)}
                className="btn-outline w-full py-4 text-[10px]"
              >
                {t('services.learn_more')}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedPackage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPackage(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            ></motion.div>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl bg-zinc-900 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
              
              <button 
                onClick={() => setSelectedPackage(null)}
                className="absolute top-6 right-6 p-2 text-white/40 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-8">
                <div className="p-4 bg-black rounded-2xl border border-white/5 w-fit mb-6">
                  {selectedPackage.icon}
                </div>
                <h3 className="text-4xl md:text-5xl mb-4">{selectedPackage.name}</h3>
                <p className="text-white/60 font-outfit text-lg leading-relaxed">
                  {selectedPackage.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-4">Core Benefits</h4>
                  <ul className="space-y-3">
                    {selectedPackage.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-white/80">
                        <CheckCircle2 className="w-4 h-4 text-primary" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-black/40 border border-white/5 rounded-2xl p-6">
                  <h4 className="text-xs font-black uppercase tracking-widest text-white/40 mb-4 italic">Next Steps</h4>
                  <p className="text-xs text-white/50 font-outfit mb-6">
                    Ready to bring this project to life? Let's discuss your requirements on WhatsApp.
                  </p>
                  <a href="#contact" onClick={() => setSelectedPackage(null)} className="btn-primary w-full block text-center py-3 text-[10px]">
                    Consult Now
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
