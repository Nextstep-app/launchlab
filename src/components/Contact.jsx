import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    businessType: 'Student',
    selectedPackage: 'Local Launch',
    projectDescription: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 1. Email Sending via FormSubmit.co
    try {
      await fetch("https://formsubmit.co/ajax/thiranprivateltd@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });
    } catch (error) {
      console.error("Email sending failed:", error);
    }
    
    // 2. WhatsApp Redirection
    const message = `*Thiran LaunchLab Inquiry*%0A%0A*Name:* ${formData.fullName}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Package:* ${formData.selectedPackage}%0A*Business Type:* ${formData.businessType}%0A*Details:* ${formData.projectDescription}`;
    const whatsappUrl = `https://wa.me/918056547565?text=${message}`;
    
    alert(t('contact.form.success'));
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl mb-8 leading-none">
                {t('contact.heading').split(' ')[0]} {t('contact.heading').split(' ')[1]} <br /> <span className="gradient-text">{t('contact.heading').split(' ')[2]}</span>
              </h2>
              <p className="text-white/50 font-outfit text-lg mb-12 max-w-md">
                {t('contact.subheading')}
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-zinc-900 border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-secondary/50 transition-colors">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/30 font-black">{t('contact.email_us')}</p>
                    <p className="text-lg font-heading text-sm">thiranprivateltd@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-zinc-900 border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-secondary/50 transition-colors">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/30 font-black">{t('contact.call_us')}</p>
                    <p className="text-lg font-heading text-sm">80565 47565</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">{t('contact.form.name')}</label>
                  <input 
                    type="text" name="fullName" required 
                    value={formData.fullName} onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 focus:border-primary focus:outline-none transition-all text-sm font-outfit"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">{t('contact.form.email')}</label>
                  <input 
                    type="email" name="email" required 
                    value={formData.email} onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 focus:border-primary focus:outline-none transition-all text-sm font-outfit"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">{t('contact.form.business')}</label>
                  <select 
                    name="businessType" 
                    value={formData.businessType} onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 focus:border-primary focus:outline-none transition-all text-sm font-outfit appearance-none"
                  >
                    <option value="Student">Student</option>
                    <option value="Creator">Creator / Influencer</option>
                    <option value="Startup">Startup / Small Business</option>
                    <option value="Enterprise">Enterprise</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">{t('contact.form.package')}</label>
                  <select 
                    name="selectedPackage" 
                    value={formData.selectedPackage} onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 focus:border-primary focus:outline-none transition-all text-sm font-outfit appearance-none"
                  >
                    <option value="Local Launch">Local Launch</option>
                    <option value="Creator Launch">Creator Launch</option>
                    <option value="Business Launch">Business Launch</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">{t('contact.form.phone')}</label>
                <input 
                    type="tel" name="phone" required 
                    value={formData.phone} onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 focus:border-primary focus:outline-none transition-all text-sm font-outfit"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">{t('contact.form.desc')}</label>
                <textarea 
                  name="projectDescription" required rows="4"
                  value={formData.projectDescription} onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 focus:border-primary focus:outline-none transition-all text-sm font-outfit resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full btn-primary py-5 flex items-center justify-center gap-3 group"
              >
                {t('contact.form.submit')}
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
