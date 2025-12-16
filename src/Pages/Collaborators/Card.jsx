import React from 'react'
import { COLORS } from '../../utils/colors' // Import colors

const Card = ({ img, name, description }) => {
    return (
        <div 
            // 1. Removed custom gradient classes. Kept layout classes.
            className="rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 w-full max-w-5xl mx-auto px-4 py-6 sm:px-8"
            // 2. Card Styling: White surface with a thin border
            style={{ 
                backgroundColor: COLORS.surface, 
                border: `1px solid ${COLORS.border}` 
            }}
        >
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                
                <div className="flex-shrink-0">
                    <img
                        src={img}
                        alt={name}
                        width={250}
                        height={300}
                        className="rounded-2xl object-cover shadow-sm"
                        // 3. Optional: Add a border to the image to frame it
                        style={{ border: `1px solid ${COLORS.border}` }}
                    />
                </div>

                <div className="flex flex-col text-center sm:text-left">
                    <h2 
                        className="text-xl sm:text-2xl font-semibold mb-2"
                        // 4. Name in dark slate (Main Text)
                        style={{ color: COLORS.textMain }}
                    >
                        {name}
                    </h2>
                    <p 
                        className="text-sm sm:text-base leading-relaxed tracking-wide text-justify"
                        // 5. Description in muted grey
                        style={{ color: COLORS.textMuted }}
                    >
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card