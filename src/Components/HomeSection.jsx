import React from 'react'
import AnimatedContent from '../Animations/AnimatedContent'
import { COLORS } from '../utils/colors' // 1. Import colors

const HomeSection = ({ title, content1, content2, content3, content4, content5, content6, reverse = false }) => {
    
    // Helper helper to avoid repeating styles
    const paragraphStyle = { 
        color: COLORS.textMuted, // Uses the professional slate grey for text
        marginBottom: '0.5rem'
    };

    return (
        <div 
            className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-8 py-8 shadow-sm my-16 rounded-4xl transition-all duration-300 hover:shadow-md`}
            // 2. Card Styling: Pure white background with a subtle border
            style={{ 
                backgroundColor: COLORS.surface,
                border: `1px solid ${COLORS.border}`
            }}
        >

            {/* Title Section */}
            <div className={`md:w-1/2 text-center ${reverse ? 'md:text-right' : 'md:text-left'} px-8`}>
                <h2 
                    className="text-2xl md:text-3xl font-bold"
                    // 3. Title Styling: Royal Blue to match your brand
                    style={{ color: COLORS.primary }}
                >
                    {title}
                </h2>
            </div>

            {/* Content Section */}
            <div className='flex flex-col items-center gap-8 md:gap-6 w-full md:w-1/2 text-justify px-4'>
                
                {/* Content Block 1 */}
                {content1 && (
                    <AnimatedContent
                        distance={150}
                        direction="vertical"
                        reverse={reverse}
                        duration={1.0}
                        initialOpacity={0.2}
                        animateOpacity
                        scale={0.4}
                        threshold={0.1}
                        delay={0.1}
                    >
                        <div className="px-4 text-base leading-relaxed">
                            <p className='text-sm sm:text-base' style={paragraphStyle}>{content1}</p>
                        </div>
                    </AnimatedContent>
                )}

                {/* Content Block 2 */}
                {content2 && (
                    <AnimatedContent
                        distance={150}
                        direction="vertical"
                        reverse={reverse}
                        duration={1.0}
                        initialOpacity={0.2}
                        animateOpacity
                        scale={0.4}
                        threshold={0.1} // Fixed typo from '0.'
                        delay={0.1}
                    >
                        <div className="px-4 text-base leading-relaxed">
                            <p className='text-sm sm:text-base' style={paragraphStyle}>{content2}</p>
                        </div>
                    </AnimatedContent>
                )}

                {/* Content Block 3 */}
                {content3 && (
                    <AnimatedContent
                        distance={150}
                        direction="vertical"
                        reverse={reverse}
                        duration={1.0}
                        initialOpacity={0.2}
                        animateOpacity
                        scale={0.4}
                        threshold={0.1}
                        delay={0.1}
                    >
                        <div className="px-4 text-base leading-relaxed">
                            <p className='text-sm sm:text-base' style={paragraphStyle}>{content3}</p>
                        </div>
                    </AnimatedContent>
                )}

                {/* Content Block 4 */}
                {content4 && (
                    <AnimatedContent
                        distance={150}
                        direction="vertical"
                        reverse={reverse}
                        duration={1.0}
                        initialOpacity={0.2}
                        animateOpacity
                        scale={0.4}
                        threshold={0.1}
                        delay={0.1}
                    >
                        <div className="px-4 text-base leading-relaxed">
                            <p className='text-sm sm:text-base' style={paragraphStyle}>{content4}</p>
                        </div>
                    </AnimatedContent>
                )}

                {/* Content Block 5 */}
                {content5 && (
                    <AnimatedContent
                        distance={150}
                        direction="vertical"
                        reverse={reverse}
                        duration={1.0}
                        initialOpacity={0.2}
                        animateOpacity
                        scale={0.4}
                        threshold={0.1}
                        delay={0.1}
                    >
                        <div className="px-4 text-base leading-relaxed">
                            <p className='text-sm sm:text-base' style={paragraphStyle}>{content5}</p>
                        </div>
                    </AnimatedContent>
                )}

                {/* Content Block 6 */}
                {content6 && (
                    <AnimatedContent
                        distance={150}
                        direction="vertical"
                        reverse={reverse}
                        duration={1.0}
                        initialOpacity={0.2}
                        animateOpacity
                        scale={0.4}
                        threshold={0.1}
                        delay={0.1}
                    >
                        <div className="px-4 text-base leading-relaxed">
                            <p className='text-sm sm:text-base' style={paragraphStyle}>{content6}</p>
                        </div>
                    </AnimatedContent>
                )}
            </div>
        </div>
    )
}

export default HomeSection