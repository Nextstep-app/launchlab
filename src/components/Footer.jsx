import React, { useState } from 'react';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';

const Footer = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <>
      <footer className="bg-black py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start leading-none">
             <img 
              src="/logo-full.png" 
              alt="Thiran LaunchLab Logo" 
              className="h-12 w-auto object-contain" 
            />
          </div>
          
          <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Thiran Private Ltd. All rights reserved.
          </div>
          
          <div className="flex gap-6">
            <button onClick={() => setIsPrivacyOpen(true)} className="text-white/40 hover:text-primary transition-colors text-[10px] font-bold uppercase tracking-widest text-left">Privacy Policy</button>
            <button onClick={() => setIsTermsOpen(true)} className="text-white/40 hover:text-primary transition-colors text-[10px] font-bold uppercase tracking-widest text-left">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
    <PrivacyPolicy isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    <TermsOfService isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </>
  );
};

export default Footer;
