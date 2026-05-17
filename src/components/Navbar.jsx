import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
  };

  const navLinks = [
    { name: t('nav.home'), href: '#' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.why'), href: '#why-thiran' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const languages = [
    { code: 'en', name: 'English', label: 'EN' },
    { code: 'ta', name: 'தமிழ்', label: 'தமிழ்' },
    { code: 'hi', name: 'हिंदी', label: 'हिंदी' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-4 group">
          <div className="relative">
            <div className="absolute -inset-1 bg-primary/40 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img 
                src="/logo.png" 
                alt="Logo" 
                className="relative h-10 w-10 object-contain drop-shadow-[0_0_8px_rgba(255,0,0,0.6)]" 
            />
          </div>
          
          <div className="flex flex-col leading-none">
            <span className="text-xl md:text-2xl font-bold text-white uppercase group-hover:text-primary transition-colors duration-300">
              THIRAN <span className="text-primary group-hover:text-white transition-colors duration-300">LAUNCHLAB</span>
            </span>
            <span className="text-[8px] font-bold tracking-[0.4em] text-white/40 uppercase mt-1">DREAM • BUILD • LAUNCH</span>
          </div>
        </a>

        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-black tracking-[0.2em] text-white/70 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center gap-6 ml-4">
             {/* Language Switcher */}
             <div className="relative">
                <button 
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors py-2 px-3 bg-white/5 rounded-lg border border-white/10"
                >
                   <Globe className="w-4 h-4" />
                   <span className="text-xs font-black uppercase">{languages.find(l => l.code === i18n.language.split('-')[0])?.label || 'EN'}</span>
                   <ChevronDown className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full right-0 mt-2 w-32 bg-zinc-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className={`w-full text-left px-4 py-3 text-xs font-bold uppercase tracking-wider hover:bg-primary hover:text-white transition-colors ${
                            i18n.language.startsWith(lang.code) ? 'text-primary' : 'text-white/70'
                          }`}
                        >
                          {lang.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
             </div>

             <a 
              href="#contact" 
              className="px-8 py-3 bg-primary text-white text-[10px] font-black rounded-lg hover:bg-primary-hover transition-all shadow-[0_0_20px_rgba(255,0,0,0.3)] uppercase tracking-widest"
            >
              {t('nav.launch')}
            </a>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-zinc-950 border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-black tracking-[0.2em] text-white/70 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="flex flex-col gap-4 mt-2 pt-6 border-t border-white/10">
                <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Select Language</span>
                <div className="flex gap-6">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { changeLanguage(lang.code); setMobileMenuOpen(false); }}
                      className={`text-xs font-bold uppercase tracking-wider transition-colors ${
                        i18n.language.startsWith(lang.code) ? 'text-primary' : 'text-white/70 hover:text-white'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>

              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 w-full text-center py-4 bg-primary text-white text-[10px] font-black rounded-lg hover:bg-primary-hover transition-all shadow-[0_0_20px_rgba(255,0,0,0.3)] uppercase tracking-widest"
              >
                {t('nav.launch')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
