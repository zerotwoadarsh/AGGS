import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, X } from 'lucide-react'
import { COLORS } from '../../utils/colors'

const Modal = ({ isOpen, onClose, title, content, pdfLink }) => {
  
  // Close on backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          // The backdrop behind the modal (dark and blurred)
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            // FIX: Added 'bg-white' here to ensure solid opacity
            className="relative w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden bg-white"
            // We keep this to maintain the link to your design system, but bg-white ensures readability.
            style={{ backgroundColor: COLORS.surface }}
          >
            
            {/* Header */}
            <div 
              className="px-6 py-4 flex items-center justify-between border-b"
              style={{ borderColor: COLORS.border }}
            >
               <h2 
                 className="text-xl font-bold truncate pr-4"
                 style={{ color: COLORS.textMain }}
               >
                 {title}
               </h2>
               <button
                  onClick={onClose}
                  className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                  style={{ color: COLORS.textMain }}
               >
                  <X size={24} />
               </button>
            </div>

            {/* Body */}
            <div className='p-6 max-h-[60vh] overflow-y-auto custom-scrollbar'>
              <p 
                className="text-base leading-relaxed text-justify whitespace-pre-wrap"
                // Ensure text is dark slate for maximum contrast
                style={{ color: COLORS.textMain }}
              >
                {content}
              </p>
            </div>

            {/* Footer (Download Button) */}
            {pdfLink && (
               <div 
                 className="px-6 py-4 border-t flex justify-end"
                 style={{ 
                    borderColor: COLORS.border,
                    backgroundColor: COLORS.background // Slight off-white contrast for footer
                 }}
               >
                  <a 
                    href={pdfLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium transition-all hover:opacity-90 active:scale-95"
                    style={{ 
                        backgroundColor: COLORS.primary, 
                        color: COLORS.surface 
                    }}
                  >
                     <Download size={18} />
                     Download Brochure
                  </a>
               </div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default Modal