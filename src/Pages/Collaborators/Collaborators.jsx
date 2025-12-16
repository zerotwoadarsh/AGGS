import React from 'react'
import Card from './Card'
import data from './data'
// 1. Import your colors
import { COLORS } from '../../utils/colors'

const Collaborators = () => {
  return (
    <div 
      className="py-16 px-4 sm:px-10 w-full"
      // 2. Set the main page background to Off-White
      style={{ backgroundColor: COLORS.background }} 
    >
      {/* Section Title */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 
          className="text-2xl sm:text-4xl font-bold mb-4"
          // 3. Use Main Text Color (Slate Grey)
          style={{ color: COLORS.textMain }}
        >
          Meet the Visionaries
        </h1>
        <p 
          className="text-base text-justify sm:text-lg leading-relaxed"
          // 4. Use Muted Text Color for the paragraph
          style={{ color: COLORS.textMuted }}
        >
          Meet the visionary leaders of the academic world who are shaping the future of groundwater science and management. Our esteemed collaborators bring a wealth of knowledge and expertise, driving innovation and excellence in research and practice. Together, we are committed to advancing the field and ensuring sustainable water resources for generations to come.
        </p>
      </div>

      {/* Collaborator Description */}
      <div className="max-w-5xl mx-auto text-center mb-8">
        <h2 
          className="text-xl sm:text-2xl font-semibold mb-2 underline"
          // 5. Use Primary Color (Royal Blue) for the subheading to make it pop
          style={{ color: COLORS.primary, textDecorationColor: COLORS.border }}
        >
          Collaborators
        </h2>
        <p 
          className="text-base leading-relaxed text-justify"
          style={{ color: COLORS.textMuted }}
        >
          These distinguished individuals are at the forefront of groundwater research, contributing to groundbreaking studies and innovative solutions. Their collaboration with AGGS enhances our mission to promote sustainable groundwater management practices worldwide.
        </p>
      </div>

      {/* Collaborators List */}
      <div className="flex flex-col gap-8 max-w-5xl mx-auto">
        {data.map((user, index) => (
          <Card
            key={index}
            name={user.name}
            description={user.description}
            img={user.img}
          />
        ))}
      </div>
    </div>
  )
}

export default Collaborators