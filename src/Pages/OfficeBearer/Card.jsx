import React from 'react';
import { COLORS } from '../../utils/colors';

const Card = ({ image, designation, name, college, address }) => {
  return (
    <div 
      className="rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-6 mx-auto my-6 w-full max-w-4xl shadow-sm hover:shadow-md transition-shadow duration-300"
      style={{ 
        backgroundColor: COLORS.surface,
        border: `1px solid ${COLORS.border}`
      }}
    >
      
      {/* DESIGNATION BADGE FIX:
         1. Removed fixed height (md:h-32).
         2. Added 'md:h-auto' so it grows with text.
         3. Added 'md:min-h-[8rem]' to maintain a good base size.
         4. Added 'py-2 md:py-4' for breathing room.
      */}
      <div 
        className="w-full md:w-16 h-12 md:h-auto md:min-h-[8rem] flex items-center justify-center shrink-0 rounded-md py-2 md:py-4"
        style={{ backgroundColor: COLORS.accent }} 
      >
        <h1 
          className="font-bold text-xs sm:text-sm uppercase tracking-wider md:[writing-mode:vertical-rl] md:rotate-180 whitespace-nowrap"
          style={{ color: COLORS.surface }} 
        >
          {designation}
        </h1>
      </div>

      {/* Text Info */}
      <div className="text-center md:text-left flex-1 px-2 md:px-4 space-y-2">
        <h2 
          className="text-xl font-bold"
          style={{ color: COLORS.textMain }} 
        >
          {name}
        </h2>
        <div className="space-y-1">
          <p className="text-sm font-medium" style={{ color: COLORS.primary }}>
             {college}
          </p>
          <p className="text-sm" style={{ color: COLORS.textMuted }}>
            {address}
          </p>
        </div>
      </div>

      {/* Image */}
      <div className="shrink-0">
        <img
          src={image}
          alt={name}
          className="w-40 h-40 md:w-48 md:h-64 object-cover rounded-lg shadow-sm"
          style={{ border: `1px solid ${COLORS.border}` }}
        />
      </div>
    </div>
  );
};

export default Card;