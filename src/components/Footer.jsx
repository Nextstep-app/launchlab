import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start leading-none">
            <span className="text-2xl font-bold text-white uppercase">
              THIRAN <span className="text-primary">LAUNCHLAB</span>
            </span>
            <span className="text-[8px] font-bold tracking-[0.4em] text-white/30 uppercase mt-2">DREAM • BUILD • LAUNCH</span>
          </div>
          
          <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Thiran Private Ltd. All rights reserved.
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-primary transition-colors text-[10px] font-bold uppercase tracking-widest">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-primary transition-colors text-[10px] font-bold uppercase tracking-widest">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
