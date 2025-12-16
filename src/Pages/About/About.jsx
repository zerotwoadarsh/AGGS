import React, { useState } from 'react'
import p1 from '../../assets/images/p1.png'
import { Quote } from 'lucide-react'
import TiltedCard from '../../Animations/TiltedCard'
import AnimatedContent from '../../Animations/AnimatedContent'
import { data1, data2 } from './data'
import Modal from './Modal'
// 1. Import your colors
import { COLORS } from '../../utils/colors'

const About = () => {
    const [selectedCard, setSelectedCard] = useState(null)

    return (
        <div style={{ backgroundColor: COLORS.surface }}>
            {/* Modal */}
            <Modal
                isOpen={!!selectedCard}
                onClose={() => setSelectedCard(null)}
                title={selectedCard?.captionTitle}
                content={selectedCard?.modalContent}
                pdfLink={selectedCard?.pdfLink}
            />

            <div className='flex flex-col items-center justify-center w-full'>

                {/* Title */}
                <div 
                    className='text-3xl sm:text-5xl font-bold mt-10 mx-4 px-4 py-4 w-full text-center border-b-4'
                    style={{ 
                        color: COLORS.textMain,
                        borderColor: COLORS.textMain 
                    }}
                >
                    About Us
                </div>

                {/* About Section */}
                <section className='flex flex-col sm:flex-row items-center justify-center gap-8 px-4 py-12 w-full max-w-6xl'>

                    {/* Image */}
                    <div className='w-full sm:w-1/3 flex justify-center'>
                        <img 
                            src={p1} 
                            alt="About Profile" 
                            className='h-40 w-40 sm:h-52 sm:w-52 object-cover rounded-md shadow-md'
                            style={{ border: `1px solid ${COLORS.border}` }}
                        />
                    </div>

                    {/* Description Box (The Bubble) */}
                    <div 
                        className='relative w-full sm:w-2/3 sm:h-72 flex items-center justify-center px-6 sm:px-16 py-6 sm:rounded-full rounded-3xl shadow-lg'
                        // Changed bg-sky-300 to COLORS.primary (Royal Blue)
                        style={{ 
                            backgroundColor: COLORS.primary, 
                            color: COLORS.surface 
                        }}
                    >
                        <Quote 
                            size={48} 
                            className='absolute top-4 left-4 rotate-180' 
                            style={{ color: 'rgba(255, 255, 255, 0.3)' }} // White with opacity
                        />
                        <p className='text-sm sm:text-base text-justify leading-relaxed tracking-wide'>
                            The main mission of our forum is to join together and find innovative ways of selecting high yield wells in crystalline and basaltic terrain, assess recharge potentials, augment groundwater through artificial recharge, remediate contamination with simple tech, apply models for water resource management, and create public awareness to conserve limited water for future generations.
                        </p>
                    </div>
                </section>

                {/* Our Journey Section */}
                <section 
                    id="events" 
                    className='flex flex-col items-center justify-center w-full py-16 px-4 sm:px-8'
                    // Changed bg-sky-50 to COLORS.background (Off-White)
                    style={{ backgroundColor: COLORS.background }}
                >
                    <h1 
                        className='text-3xl sm:text-4xl font-bold border-b-2 pb-2'
                        style={{ 
                            color: COLORS.textMain, 
                            borderColor: COLORS.textMain 
                        }}
                    >
                        Our Journey
                    </h1>

                    <div className='w-full max-w-6xl mt-8'>
                        <p 
                            className='text-justify text-base sm:text-lg leading-relaxed tracking-wide p-6 sm:p-12 rounded-3xl shadow'
                            style={{ 
                                backgroundColor: COLORS.surface, // Pure White Card
                                color: COLORS.textMuted 
                            }}
                        >
                            IGWC was started in 2002 and slowly expanded by organizing international seminars across India. After five major events, members proposed formal registration as AGGS in 2013. The first E-Newsletter was released during INGWC-2020 at CWRDM, Calicut. Despite pandemic delays, AGGS continues sharing updates, awards, and conference announcements through its editorial board.
                        </p>
                    </div>

                    {/* International Conference Section */}
                    <div 
                        className='flex flex-col items-center justify-center mt-20 py-8 rounded-2xl w-full max-w-6xl shadow-sm'
                        // Changed Gradients to Clean White Surface with Border
                        style={{ 
                            backgroundColor: COLORS.surface,
                            border: `1px solid ${COLORS.border}`
                        }}
                    >
                        <h2 
                            className='text-xl sm:text-3xl font-bold text-center mb-6 underline underline-offset-8'
                            style={{ 
                                color: COLORS.textMain,
                                textDecorationColor: COLORS.textMain
                            }}
                        >
                            International Ground Water Conference
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8 w-full px-4">
                            {data1.map((card, index) => (
                                <AnimatedContent
                                    key={index}
                                    distance={150}
                                    direction="vertical"
                                    reverse={true}
                                    duration={1.2}
                                    initialOpacity={0}
                                    animateOpacity
                                    scale={1.1}
                                    threshold={0.2}
                                    delay={card.delay}
                                >
                                    <div
                                        className="flex justify-center cursor-pointer transition-transform hover:scale-105"
                                        onClick={() => setSelectedCard(card)}
                                    >
                                        <TiltedCard
                                            imageSrc={card.imageSrc}
                                            altText={card.altText}
                                            captionText={card.captionText}
                                            containerHeight="300px"
                                            containerWidth="200px"
                                            imageHeight="300px"
                                            imageWidth="200px"
                                            rotateAmplitude={12}
                                            scaleOnHover={1.1}
                                            showMobileWarning={false}
                                            showTooltip={true}
                                            displayOverlayContent={true}
                                            overlayContent={
                                                <p 
                                                    className="tilted-card-demo-text items-center font-bold"
                                                    // Ensure overlay text is readable (usually white on dark overlay)
                                                    style={{ color: '#fff' }} 
                                                >
                                                    {card.overlayText}
                                                </p>
                                            }
                                        />
                                    </div>
                                </AnimatedContent>
                            ))}
                        </div>
                    </div>

                    {/* National Conference Section */}
                    <div 
                        className='flex flex-col items-center justify-center my-20 py-8 rounded-2xl w-full max-w-6xl shadow-sm'
                        // Changed Gradients to Clean White Surface with Border
                        style={{ 
                            backgroundColor: COLORS.surface,
                            border: `1px solid ${COLORS.border}`
                        }}
                    >
                        <h2 
                            className='text-xl sm:text-3xl font-bold text-center mb-6 underline underline-offset-8'
                            style={{ 
                                color: COLORS.textMain,
                                textDecorationColor: COLORS.textMain
                            }}
                        >
                            Indian National Ground Water Conference
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8 w-full px-4">
                            {data2.map((card, index) => (
                                <AnimatedContent
                                    key={index}
                                    distance={150}
                                    direction="vertical"
                                    reverse={true}
                                    duration={1.2}
                                    initialOpacity={0}
                                    animateOpacity
                                    scale={1.1}
                                    threshold={0.2}
                                    delay={card.delay}
                                >
                                    <div
                                        className="flex justify-center cursor-pointer transition-transform hover:scale-105"
                                        onClick={() => setSelectedCard(card)}
                                    >
                                        <TiltedCard
                                            imageSrc={card.imageSrc}
                                            altText={card.altText}
                                            captionText={card.captionText}
                                            containerHeight="300px"
                                            containerWidth="200px"
                                            imageHeight="300px"
                                            imageWidth="200px"
                                            rotateAmplitude={12}
                                            scaleOnHover={1.1}
                                            showMobileWarning={false}
                                            showTooltip={true}
                                            displayOverlayContent={true}
                                            overlayContent={
                                                <p 
                                                    className="tilted-card-demo-text items-center font-bold"
                                                    style={{ color: '#fff' }}
                                                >
                                                    {card.overlayText}
                                                </p>
                                            }
                                        />
                                    </div>
                                </AnimatedContent>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default About