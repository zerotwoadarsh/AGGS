import React from 'react';
import { Mail, MapPin, Building2, Phone, Star, Globe } from 'lucide-react';
import { editorialData } from './editorialData';
import { COLORS } from '../../utils/colors';

const JournalEditorial = () => {
    
    // Helper Component for Cards
    const EditorCard = ({ member, isChief = false }) => (
        <div 
            className={`flex flex-col h-full rounded-2xl p-6 transition-all hover:shadow-md ${isChief ? 'border-2' : 'border'}`}
            style={{ 
                backgroundColor: COLORS.surface,
                borderColor: isChief ? COLORS.primary : COLORS.border
            }}
        >
            {/* Header: Role & Name */}
            <div className="mb-4">
                {isChief && (
                    <span className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: COLORS.accent }}>
                        {member.role}
                    </span>
                )}
                <h3 className={`font-bold text-gray-900 ${isChief ? 'text-2xl' : 'text-lg'}`} style={{ color: COLORS.textMain }}>
                    {member.name}
                </h3>
                {member.credentials && (
                     <p className="text-xs text-gray-500 mt-1">{member.credentials}</p>
                )}
            </div>

            {/* Body: Institution & Location */}
            <div className="flex-1 space-y-3 mb-6">
                <div className="flex items-start gap-3">
                    <Building2 size={isChief ? 20 : 16} className="shrink-0 mt-0.5" style={{ color: COLORS.primary }} />
                    <div>
                        <p className={`font-medium ${isChief ? 'text-base' : 'text-sm'}`} style={{ color: COLORS.textMain }}>
                            {member.institution}
                        </p>
                        {isChief && <p className="text-sm text-gray-500">{member.department}</p>}
                    </div>
                </div>
                
                <div className="flex items-start gap-3">
                    <MapPin size={isChief ? 20 : 16} className="shrink-0 mt-0.5" style={{ color: COLORS.textMuted }} />
                    <p className="text-sm text-gray-600">{member.location}</p>
                </div>

                {member.specialization && (
                    <div className="flex items-start gap-3 pt-2">
                         <Star size={isChief ? 20 : 16} className="shrink-0 mt-0.5" style={{ color: COLORS.accent }} />
                         <p className="text-xs font-medium text-gray-600 leading-relaxed">
                            {member.specialization}
                         </p>
                    </div>
                )}
            </div>

            {/* Footer: Contact */}
            <div className="pt-4 border-t border-gray-100 space-y-2">
                {member.contact?.phone && (
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Phone size={14} /> {member.contact.phone}
                    </div>
                )}
                {member.email && (
                    <a 
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-2 text-sm font-medium hover:underline transition-all truncate"
                        style={{ color: COLORS.primary }}
                    >
                        <Mail size={14} /> {member.email}
                    </a>
                )}
            </div>
        </div>
    );

    return (
        <div className="w-full space-y-16 animate-fadeIn">
            
            {/* 1. CHIEF EDITORS SECTION */}
            <section className="text-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {editorialData.chiefs.map((chief, idx) => (
                        <EditorCard key={idx} member={chief} isChief={true} />
                    ))}
                </div>
            </section>

            {/* 2. SECTION EDITORS */}
            <section>
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-px bg-gray-200 flex-1"></div>
                    <h2 className="text-2xl font-bold text-center" style={{ color: COLORS.textMain }}>Section Editors</h2>
                    <div className="h-px bg-gray-200 flex-1"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {editorialData.sectionEditors.map((editor, idx) => (
                        <EditorCard key={idx} member={editor} />
                    ))}
                </div>
            </section>

             {/* 3. ASSOCIATE EDITORS (ABROAD) */}
             <section>
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-px bg-gray-200 flex-1"></div>
                    <h2 className="text-2xl font-bold text-center flex items-center gap-2" style={{ color: COLORS.textMain }}>
                        <Globe size={24} style={{ color: COLORS.primary }} /> Associate Editors (Abroad)
                    </h2>
                    <div className="h-px bg-gray-200 flex-1"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {editorialData.associateEditorsAbroad.map((editor, idx) => (
                        <EditorCard key={idx} member={editor} />
                    ))}
                </div>
            </section>

            {/* 4. ASSOCIATE EDITORS (INDIA) */}
            <section>
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-px bg-gray-200 flex-1"></div>
                    <h2 className="text-2xl font-bold text-center" style={{ color: COLORS.textMain }}>Associate Editors (India)</h2>
                    <div className="h-px bg-gray-200 flex-1"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {editorialData.associateEditorsIndia.map((editor, idx) => (
                        <EditorCard key={idx} member={editor} />
                    ))}
                </div>
            </section>

             {/* 5. INTERNATIONAL BOARD OF ADVISORS */}
             <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h2 className="text-xl font-bold mb-8 text-center" style={{ color: COLORS.textMain }}>International Board of Advisors</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
                    {editorialData.advisors.map((advisor, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0">
                            <div>
                                <h4 className="font-bold text-sm text-gray-800">{advisor.name}</h4>
                                <span className="text-xs font-semibold text-blue-600">{advisor.country}</span>
                            </div>
                            {advisor.email && (
                                <a href={`mailto:${advisor.email}`} className="text-gray-400 hover:text-blue-600">
                                    <Mail size={16} />
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default JournalEditorial;