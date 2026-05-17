import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PrivacyPolicy = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            className="bg-zinc-950 border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl p-8 md:p-12 shadow-2xl relative custom-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="space-y-10 text-white/80 font-sans">
              
              <div className="text-center space-y-4 pb-8 border-b border-white/10">
                <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider">PRIVACY POLICY</h2>
                <p className="text-xl font-bold text-primary uppercase tracking-widest">Thiran LaunchLab</p>
                <p className="text-white/40 text-sm font-bold uppercase tracking-widest">Effective Date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              </div>

              <div className="space-y-6">
                <p className="leading-relaxed">
                  Welcome to Thiran LaunchLab, a digital innovation and web solutions studio operated under Thiran Private Ltd. Your privacy is important to us. This Privacy Policy explains how we collect, use, store, and protect your information when you use our website and services.
                </p>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">1. Information We Collect</h3>
                  <p>We may collect the following information when you interact with our website or services:</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                      <h4 className="font-bold text-primary mb-2 uppercase tracking-wider text-sm">Personal Information</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Full Name</li>
                        <li>Email Address</li>
                        <li>Phone Number</li>
                        <li>Business/Organization Name</li>
                        <li>Project Details</li>
                        <li>Budget Information</li>
                      </ul>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                      <h4 className="font-bold text-primary mb-2 uppercase tracking-wider text-sm">Technical Information</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>IP Address</li>
                        <li>Browser Type</li>
                        <li>Device Information</li>
                        <li>Pages Visited</li>
                        <li>Website Usage Analytics</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">2. How We Use Your Information</h3>
                  <p>We use the collected information to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>Respond to project inquiries</li>
                    <li>Communicate regarding services</li>
                    <li>Provide website development and digital solutions</li>
                    <li>Improve website functionality and user experience</li>
                    <li>Send updates regarding projects or services</li>
                    <li>Maintain security and prevent misuse</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">3. Information Sharing</h3>
                  <p>Thiran LaunchLab does not sell, rent, or trade your personal information to third parties.</p>
                  <p>We may share information only:</p>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>when legally required,</li>
                    <li>to protect our rights,</li>
                    <li>or with trusted service providers assisting in project operations.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">4. Data Security</h3>
                  <p>We implement reasonable security measures to protect your information from unauthorized access, misuse, or disclosure.</p>
                  <p className="text-white/60 italic">However, no online system is completely secure, and we cannot guarantee absolute security.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">5. Third-Party Services</h3>
                  <p>Our website may use third-party services including:</p>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>WhatsApp integrations</li>
                    <li>Email services</li>
                    <li>Analytics tools</li>
                    <li>Hosting platforms</li>
                  </ul>
                  <p>These third-party services may collect information according to their own privacy policies.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">6. Cookies</h3>
                  <p>We may use cookies and analytics technologies to improve website performance and user experience.</p>
                  <p>Users may disable cookies through browser settings.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">7. User Rights</h3>
                  <p>You may request to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>access your information,</li>
                    <li>correct inaccurate information,</li>
                    <li>request deletion of your data,</li>
                    <li>withdraw communication consent.</li>
                  </ul>
                  <p>Requests can be made through our contact email.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">8. Intellectual Property</h3>
                  <p>All website content, branding, graphics, source code, and project materials created by Thiran LaunchLab remain the intellectual property of Thiran LaunchLab unless otherwise agreed in writing.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">9. Changes to This Policy</h3>
                  <p>We reserve the right to update or modify this Privacy Policy at any time without prior notice.</p>
                  <p>Updated versions will be posted on this page.</p>
                </div>

                <div className="space-y-4 pt-8 border-t border-white/10">
                  <h3 className="text-2xl font-bold text-white">10. Contact Information</h3>
                  <p>For any privacy-related concerns, contact:</p>
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10 inline-block">
                    <p className="font-bold text-lg text-white">Thiran LaunchLab</p>
                    <p className="text-white/60 text-sm mb-4">Under Thiran Private Ltd</p>
                    <div className="space-y-2">
                      <p className="flex items-center gap-3">
                        <span>📧</span> 
                        <a href="mailto:thiranprivateltd@gmail.com" className="text-primary hover:underline">thiranprivateltd@gmail.com</a>
                      </p>
                      <p className="flex items-center gap-3">
                        <span>📍</span> India
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PrivacyPolicy;
