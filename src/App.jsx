import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IntroScreen from './components/IntroScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Quote from './components/Quote';
import Projects from './components/Projects';
import WhyThiran from './components/WhyThiran';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <AnimatePresence mode="wait">
        {!isStarted ? (
          <IntroScreen key="intro" onStart={() => setIsStarted(true)} />
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Navbar />
            <Hero />
            <Services />
            <WhyThiran />
            <Quote />
            <Projects />
            <Contact />
            <Footer />
            <WhatsAppButton />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
