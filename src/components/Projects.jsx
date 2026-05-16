import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      name: 'Intrasphere Dashboard',
      description: 'Modern enterprise operational overview with real-time analytics and department activity monitoring.',
      image: '/project-1.png'
    },
    {
      name: 'Circular Management',
      description: 'Advanced communication portal for publishing and tracking operational circulars across the organization.',
      image: '/project-2.png'
    },
    {
      name: 'Employee Insight Portal',
      description: 'Comprehensive performance evaluation and productivity tracking for internal team members.',
      image: '/project-3.png'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-[#080808] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl italic leading-none">
              {t('projects.heading').split(' ')[0]} <span className="gradient-text">{t('projects.heading').split(' ')[1]}</span>
            </h2>
            <p className="text-secondary mt-4 font-outfit max-w-md uppercase tracking-[0.3em] text-[10px] font-bold">
              {t('projects.subheading')}
            </p>
          </motion.div>
        </div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination, EffectFade]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          className="rounded-3xl overflow-hidden border border-white/10"
        >
          {projects.map((project, i) => (
            <SwiperSlide key={i}>
              <div className="relative group aspect-video md:aspect-[21/9]">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-8 md:p-16 flex flex-col justify-end">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="text-3xl md:text-5xl mb-4 text-glow">{project.name}</h3>
                    <p className="text-white/60 font-outfit max-w-xl text-lg mb-8">{project.description}</p>
                    <a href="#" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all">
                      {t('projects.view')} <div className="w-8 h-[1px] bg-primary"></div>
                    </a>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full"></div>
    </section>
  );
};

export default Projects;
