import React from 'react'
import Card from './Card'
import data from './data'
import AnimatedList from '../../Animations/AnimatedList'
import { COLORS } from '../../utils/colors' // Import colors

const OfficeBearer = () => {
  return (
    <div 
      // 1. Replaced Mint Gradient with solid Background color
      // 2. FIXED RESPONSIVENESS: Changed 'px-24' to 'px-4 md:px-12 lg:px-24'
      className='py-16 px-4 md:px-12 lg:px-24 w-full'
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="text-center mb-12 px-4">
        <h1 
          className="text-3xl sm:text-4xl font-bold mb-4"
          style={{ color: COLORS.textMain }}
        >
          Office Bearers
        </h1>
        <p 
          className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
          style={{ color: COLORS.textMuted }}
        >
          Meet the dedicated individuals who lead and manage our organization, ensuring that we achieve our mission of advancing groundwater science and management.
        </p>
      </div>

      <AnimatedList items={data} />
    </div>
  )
}

export default OfficeBearer