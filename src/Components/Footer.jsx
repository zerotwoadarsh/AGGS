import React from 'react'
import { Droplets, Mail, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
// 1. Import the constants
import { COLORS } from '../utils/colors' 

const Footer = () => {
  // Helper style for "muted" text on a dark background (using your off-white color)
  const mutedTextStyle = { color: COLORS.background, opacity: 0.8 };
  
  // Helper style for the divider line
  const borderStyle = { borderColor: 'rgba(255,255,255,0.1)' };

  return (
    <footer 
      className="py-16"
      style={{ backgroundColor: COLORS.secondary, color: COLORS.surface }}
    >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            
            {/* Column 1: Brand Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                {/* Brand Color Icon */}
                <Droplets className="h-8 w-8" style={{ color: COLORS.primary }} />
                <div>
                  <div className="font-bold text-lg text-white" >AGGS</div>
                  <div className="text-sm" style={mutedTextStyle}>Global Groundwater Scientists</div>
                </div>
              </div>
              <p className="text-sm" style={mutedTextStyle}>
                Advancing groundwater science through global collaboration and research excellence.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-white" >Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/about-us" className="hover:text-white transition-colors" style={mutedTextStyle}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white transition-colors" style={mutedTextStyle}>
                    Research
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white transition-colors" style={mutedTextStyle}>
                    Publications
                  </Link>
                </li>
                <li>
                  <Link to="/about-us#event" className="hover:text-white transition-colors" style={mutedTextStyle}>
                    Events
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Membership */}
            <div>
              <h4 className="font-semibold mb-4 text-white" >Membership</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="AGGS_alias_IGWC_application_form.doc" className="hover:text-white transition-colors" style={mutedTextStyle}>
                    Join AGGS
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white transition-colors" style={mutedTextStyle}>
                    Member Benefits
                  </Link>
                </li>
                <li>
                  <Link to="/collaborators" className="hover:text-white transition-colors" style={mutedTextStyle}>
                    Collaborators
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white transition-colors" style={mutedTextStyle}>
                    Committees
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Contact</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2" style={mutedTextStyle}>
                  <Mail className="h-4 w-4" />
                  <span>info@aggs.org</span>
                </div>
                <div className="flex items-center space-x-2" style={mutedTextStyle}>
                  <Phone className="h-4 w-4" />
                  <span>+91 234567890</span>
                </div>
                <div className="flex items-center space-x-2" style={mutedTextStyle}>
                  <MapPin className="h-4 w-4" />
                  <span>Coimbatore, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div 
            className="border-t mt-12 pt-8 text-center text-sm"
            style={{ ...mutedTextStyle, ...borderStyle }}
          >
            <p>&copy; {new Date().getFullYear()} Association of Global Groundwater Scientists. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer