import React from 'react';
import { reviewersData } from './reviewersData';
import { COLORS } from '../../utils/colors';
import AnimatedList from '../../Animations/AnimatedList';
import { Mail, MapPin, Building2, Lightbulb, Star } from 'lucide-react';

const Reviewers = () => {

  // Custom Card to display ALL info for Reviewers
  const renderReviewerCard = (reviewer) => {
    // Generate Avatar
    const avatar = `https://ui-avatars.com/api/?name=${reviewer.name.replace(" ", "+")}&background=random&size=200&color=fff`;

    return (
      <div 
        className="rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow duration-300 bg-white flex flex-col md:flex-row gap-6"
        style={{ borderColor: COLORS.border }}
      >
        {/* Left: Avatar & Role */}
        <div className="flex flex-col items-center md:items-start shrink-0 space-y-3 md:w-48">
             <img 
               src={avatar} 
               alt={reviewer.name} 
               className="w-24 h-24 rounded-full border-4"
               style={{ borderColor: COLORS.background }}
             />
             <div 
                className="px-3 py-1 rounded-full text-xs font-bold uppercase text-center w-full"
                style={{ backgroundColor: `${COLORS.primary}15`, color: COLORS.primary }}
             >
                {reviewer.role.split(',')[0]} {/* e.g. Professor */}
             </div>
        </div>

        {/* Right: Detailed Info */}
        <div className="flex-1 space-y-3 text-center md:text-left">
            <div>
                <h3 className="text-xl font-bold" style={{ color: COLORS.textMain }}>{reviewer.name}</h3>
                <p className="text-sm italic" style={{ color: COLORS.textMuted }}>{reviewer.role}</p>
            </div>

            {/* Institution */}
            {reviewer.institution && (
                <div className="flex items-center justify-center md:justify-start gap-2 text-sm font-semibold" style={{ color: COLORS.primary }}>
                    <Building2 size={16} />
                    <span>{reviewer.institution}</span>
                </div>
            )}

            {/* Address */}
            <div className="flex items-start justify-center md:justify-start gap-2 text-sm text-gray-600">
                <MapPin size={16} className="shrink-0 mt-0.5" />
                <span>{reviewer.address}</span>
            </div>

            {/* Specialization */}
            {reviewer.specialization && (
                <div className="flex items-start justify-center md:justify-start gap-2 text-sm bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <Lightbulb size={16} className="shrink-0 mt-0.5" style={{ color: COLORS.accent }} />
                    <span className="text-gray-700">
                        <strong className="block text-xs uppercase text-gray-400 mb-1">Specialization</strong>
                        {reviewer.specialization}
                    </span>
                </div>
            )}

            {/* Email */}
            {reviewer.email && (
                 <a 
                    href={`mailto:${reviewer.email}`}
                    className="inline-flex items-center gap-2 text-sm font-medium hover:underline mt-2"
                    style={{ color: COLORS.primary }}
                 >
                    <Mail size={16} /> {reviewer.email}
                 </a>
            )}
        </div>
      </div>
    );
  };

  return (
    <div 
      className="min-h-screen w-full py-16 px-4 md:px-12 lg:px-24" 
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4" style={{ color: COLORS.textMain }}>
          Reviewers
        </h1>
        <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: COLORS.textMuted }}>
          Our distinguished panel of reviewers ensures the highest standards of scientific integrity and quality.
        </p>
        <div className="w-24 h-1 mx-auto mt-6 rounded-full" style={{ backgroundColor: COLORS.primary }}></div>
      </div>

      <div className="w-full max-w-5xl mx-auto">
        <AnimatedList 
            items={reviewersData} // Pass the RAW data now
            renderItem={renderReviewerCard} // Pass the CUSTOM render function
            displayScrollbar={true}
            showGradients={true}
            enableArrowNavigation={true}
        />
      </div>
    </div>
  );
};

export default Reviewers;