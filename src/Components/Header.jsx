import React from 'react'
import Threads from '../Animations/Threads'
import image1 from '../assets/images/logo.png'
import { Droplets } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
// 1. Import your colors object
import { COLORS } from '../utils/colors' 

const Header = () => {
  const navigate = useNavigate();

  return (
    <div 
      // 2. Remove 'bg-gray-900' and use inline style for background
      className="relative w-full md:h-[100px] h-[120px] overflow-hidden flex items-center justify-start"
      style={{ backgroundColor: COLORS.secondary }} 
    >
      
      {/* Optional: If you want the Threads animation to blend in, ensure it handles transparency or overlay correctly */}
      {/* <Threads /> */}

      <div className="flex items-center space-x-2 px-8 cursor-pointer" onClick={() => navigate('/')}>
        {/* <Droplets className="h-8 w-8" style={{ color: COLORS.primary }} /> */}
        
        <img
          src={image1}
          alt="AGGS Logo Left"
          className="w-14 h-14 md:w-16 md:h-16 rounded-full"
          style={{ border: `2px solid ${COLORS.border}` }} // Optional: adds a clean border around logo
        />
        
        <div className="flex flex-col">
          <span 
            className="font-bold text-lg text-white" // Replaces text-white
          >
            AGGS
          </span>
          
          <span 
            className="text-xs hidden sm:block"
            // Replaces text-muted-foreground / text-gray-50. 
            // We use 'background' (off-white) here so it stands out against the dark header
            style={{ color: COLORS.background }} 
          >
            Global Groundwater Scientists
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header