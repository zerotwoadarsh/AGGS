import React from 'react';
import { Mail, Phone, MapPin, Send, User, Building, FileText } from 'lucide-react';
import { COLORS } from '../utils/colors'; // Import your color constants
import { motion } from 'framer-motion';
import image1 from '../Pages/images/p1.jpg'

// Placeholder image for Prof. Singh (Replace with actual image path)
// import profImage from '../assets/images/prof_singh.jpg'; 

const ContactUs = () => {
  
  // Data from your screenshot
  const contactInfo = {
    name: "Prof. M. K. Singh",
    role: "Deputy Editor-in-Chief",
    journal: "Journal of Groundwater Research",
    institute: "Indian Institute of Technology (Indian School of Mines)",
    address: "Dhanbad - 826 004, Jharkhand, India",
    emails: ["jgwr01@gmail.com", "drmks29@rediffmail.com"],
    landline: "(0326) 2235488",
    fax: "(0326) 2235488",
    mobile: "+91 9431125817",
    // Use a placeholder if you don't have the image imported yet
    image: {image1}
  };

  const inputStyle = {
    backgroundColor: COLORS.surface,
    border: `1px solid ${COLORS.border}`,
    color: COLORS.textMain,
  };

  return (
    <div 
      className="min-h-screen py-16 px-4 md:px-12 lg:px-24 w-full"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 
          className="text-3xl sm:text-5xl font-bold mb-4"
          style={{ color: COLORS.textMain }}
        >
          Contact Us
        </h1>
        <p 
          className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          style={{ color: COLORS.textMuted }}
        >
          Have questions about the Journal of Groundwater Research? Reach out to our editorial team or send us a message directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        
        {/* LEFT COLUMN: Contact Details Card */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl shadow-sm overflow-hidden"
          style={{ 
            backgroundColor: COLORS.surface,
            border: `1px solid ${COLORS.border}`
          }}
        >
          {/* Card Header (Blue Top) */}
          <div className="h-32 w-full relative" style={{ backgroundColor: COLORS.primary }}>
             <div className="absolute -bottom-16 left-8 p-1 rounded-full bg-white">
                <img 
                    src={image1} 
                    alt={contactInfo.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
                />
             </div>
          </div>

          {/* Card Body */}
          <div className="pt-20 pb-8 px-8">
            <h2 className="text-2xl font-bold" style={{ color: COLORS.textMain }}>
              {contactInfo.name}
            </h2>
            <p className="font-medium text-sm mt-1" style={{ color: COLORS.primary }}>
              {contactInfo.role}
            </p>
            <p className="text-sm italic mb-6" style={{ color: COLORS.textMuted }}>
              {contactInfo.journal}
            </p>

            <div className="space-y-4">
                {/* Institute */}
                <div className="flex items-start gap-3">
                    <Building className="w-5 h-5 mt-1 shrink-0" style={{ color: COLORS.primary }} />
                    <span className="text-sm leading-relaxed" style={{ color: COLORS.textMain }}>
                        {contactInfo.institute}
                    </span>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-1 shrink-0" style={{ color: COLORS.primary }} />
                    <span className="text-sm leading-relaxed" style={{ color: COLORS.textMain }}>
                        {contactInfo.address}
                    </span>
                </div>

                {/* Emails */}
                <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 mt-1 shrink-0" style={{ color: COLORS.primary }} />
                    <div className="flex flex-col text-sm" style={{ color: COLORS.textMain }}>
                        {contactInfo.emails.map((email, i) => (
                             <a key={i} href={`mailto:${email}`} className="hover:underline hover:text-blue-600 transition-colors">
                                {email}
                             </a>
                        ))}
                    </div>
                </div>

                {/* Phones */}
                <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 mt-1 shrink-0" style={{ color: COLORS.primary }} />
                    <div className="flex flex-col text-sm" style={{ color: COLORS.textMain }}>
                        <span>Tel/Fax: {contactInfo.landline}</span>
                        <span>Mobile: {contactInfo.mobile}</span>
                    </div>
                </div>
            </div>
          </div>
        </motion.div>


        {/* RIGHT COLUMN: Inquiry Form */}
        <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl shadow-sm p-8"
            style={{ 
                backgroundColor: COLORS.surface,
                border: `1px solid ${COLORS.border}`
            }}
        >
            <h3 className="text-2xl font-bold mb-6" style={{ color: COLORS.textMain }}>
                Send a Message
            </h3>
            
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium" style={{ color: COLORS.textMuted }}>Name</label>
                        <input 
                            type="text" 
                            className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                            style={inputStyle}
                            placeholder="Your name"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium" style={{ color: COLORS.textMuted }}>Email</label>
                        <input 
                            type="email" 
                            className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                            style={inputStyle}
                            placeholder="your@email.com"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium" style={{ color: COLORS.textMuted }}>Subject</label>
                    <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                        style={inputStyle}
                        placeholder="Inquiry regarding..."
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium" style={{ color: COLORS.textMuted }}>Message</label>
                    <textarea 
                        rows="4"
                        className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                        style={inputStyle}
                        placeholder="How can we help you?"
                    ></textarea>
                </div>

                <button 
                    className="w-full py-4 rounded-lg font-bold text-white flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-md"
                    style={{ backgroundColor: COLORS.primary }}
                >
                    <Send className="w-5 h-5" />
                    Send Message
                </button>
            </form>
        </motion.div>

      </div>
    </div>
  )
}

export default ContactUs