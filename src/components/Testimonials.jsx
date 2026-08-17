import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      id: 1,
      text1: "The app solves the problem faced by the students from a campus by letting the management know the inconvenience faces by their students.",
      text2: "Working with thiran launch lab is very good. Fast delivery of the product.",
      text3: "Yes, For Sure I'll recommend Thiran launchlab.",
      rating: 5,
      author: "Client"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-black relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white tracking-tight">
            {t('testimonials.heading', 'Client Testimonials')}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t('testimonials.subheading', 'Hear what our partners have to say about working with us.')}
          </p>
        </motion.div>

        <div className="flex justify-center">
          {testimonials.map((tItem) => (
            <motion.div
              key={tItem.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 max-w-3xl w-full backdrop-blur-sm relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              <div className="flex mb-6 text-primary">
                {[...Array(tItem.rating)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>

              <div className="space-y-4 text-gray-300 text-lg leading-relaxed mb-8">
                <p>"{tItem.text1}"</p>
                <p>"{tItem.text2}"</p>
                <p>"{tItem.text3}"</p>
              </div>

              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div>
                  <h4 className="text-white font-bold text-lg">{tItem.author}</h4>
                </div>
              </div>
              
              {/* Decorative quote icon */}
              <div className="absolute top-8 right-8 text-white/5 text-6xl font-serif">"</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
