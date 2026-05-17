import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TermsOfService = ({ isOpen, onClose }) => {
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
                <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider">TERMS OF SERVICE</h2>
                <p className="text-xl font-bold text-primary uppercase tracking-widest">Thiran LaunchLab</p>
                <p className="text-white/40 text-sm font-bold uppercase tracking-widest">Effective Date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              </div>

              <div className="space-y-6">
                <p className="leading-relaxed">
                  These Terms of Service govern your use of the Thiran LaunchLab website and services. By accessing or using our services, you agree to these terms.
                </p>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">1. Services</h3>
                  <p>Thiran LaunchLab provides digital services including but not limited to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>Website Development</li>
                    <li>UI/UX Design</li>
                    <li>Branding</li>
                    <li>Portfolio Websites</li>
                    <li>Startup Websites</li>
                    <li>Landing Pages</li>
                    <li>Digital Solutions</li>
                    <li>AI-based Integrations</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">2. Project Agreement</h3>
                  <p>All projects must include:</p>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>agreed requirements,</li>
                    <li>timelines,</li>
                    <li>pricing,</li>
                    <li>deliverables,</li>
                    <li>revision limitations.</li>
                  </ul>
                  <p>Project scope changes after approval may result in additional charges.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">3. Payments</h3>
                  <p>Payment terms may include:</p>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>advance payments,</li>
                    <li>milestone payments,</li>
                    <li>or full payments before delivery.</li>
                  </ul>
                  <p>Failure to complete payment may result in project suspension or delayed delivery.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">4. Client Responsibilities</h3>
                  <p>Clients are responsible for:</p>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>providing accurate information,</li>
                    <li>supplying required content/materials,</li>
                    <li>reviewing deliverables on time,</li>
                    <li>maintaining proper communication.</li>
                  </ul>
                  <p>Project delays caused by missing client responses may affect delivery timelines.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">5. Revisions</h3>
                  <p>Reasonable revisions are allowed based on the selected package.</p>
                  <p>Excessive redesign requests or scope changes beyond the original agreement may incur additional charges.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">6. Intellectual Property</h3>
                  <p>Unless otherwise agreed:</p>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>final delivered project ownership transfers to the client after full payment,</li>
                    <li>Thiran LaunchLab retains rights to showcase completed projects in portfolios and promotional materials.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">7. Prohibited Use</h3>
                  <p>Clients may not use our services for:</p>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>illegal activities,</li>
                    <li>harmful or malicious content,</li>
                    <li>copyright infringement,</li>
                    <li>fraudulent operations,</li>
                    <li>unauthorized data collection.</li>
                  </ul>
                  <p>Thiran LaunchLab reserves the right to reject or terminate projects violating these terms.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">8. Service Availability</h3>
                  <p>We aim to provide reliable services but do not guarantee uninterrupted website availability or error-free operation at all times.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">9. Limitation of Liability</h3>
                  <p>Thiran LaunchLab shall not be held responsible for:</p>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>indirect losses,</li>
                    <li>business interruptions,</li>
                    <li>third-party failures,</li>
                    <li>hosting issues,</li>
                    <li>data loss,</li>
                    <li>or damages arising from misuse of services.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">10. Termination</h3>
                  <p>We reserve the right to terminate services or refuse projects:</p>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>for policy violations,</li>
                    <li>abusive behavior,</li>
                    <li>fraudulent activity,</li>
                    <li>or non-payment.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">11. Modifications</h3>
                  <p>We may update these Terms of Service at any time without prior notice.</p>
                  <p>Continued use of our services indicates acceptance of updated terms.</p>
                </div>

                <div className="space-y-4 pt-8 border-t border-white/10">
                  <h3 className="text-2xl font-bold text-white">12. Contact Information</h3>
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

export default TermsOfService;
