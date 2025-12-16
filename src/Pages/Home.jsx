import React from 'react'
import heroBg from "../assets/images/hero-bg.jpg" // Kept imports
import bg from "../assets/images/bg.png"
import bg1 from "../assets/images/bg1.png"
import HomeSection from '../Components/HomeSection'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
// 1. Import your colors
import { COLORS } from '../utils/colors'

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: COLORS.background }}>

      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden min-h-[85vh] flex items-center">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-16 lg:py-24">

          {/* Left: Text Content */}
          <div className="max-w-xl space-y-6 text-center lg:text-left z-10">
            <h1
              className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
              style={{ color: COLORS.textMain }}
            >
              AGGS Welcomes You
            </h1>
            <p
              className="md:text-lg text-base leading-relaxed"
              style={{ color: COLORS.textMuted }}
            >
              Empowering groundwater science for a sustainable future. Join our global community of researchers and professionals.
            </p>
            <div className="pt-4">
              <Link
                to='/about-us'
                className="inline-block px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 hover:shadow-lg hover:opacity-90 hover:-translate-y-1"
                // 2. Button uses Primary Blue and White Text
                style={{
                  backgroundColor: COLORS.primary,
                  color: COLORS.surface
                }}
              >
                About Us
              </Link>
              <Link
                to='/journal'
                className="inline-block px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{
                  backgroundColor: COLORS.surface, // White background
                  color: COLORS.textMain,          // Dark text
                  border: `2px solid ${COLORS.border}` // Subtle border
                }}
              >
                Read Journal
              </Link>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end mt-12 lg:mt-0">

            {/* Optional: A subtle glow behind the image to replace the old background color */}
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] rounded-full blur-3xl opacity-10 -z-10"
              style={{ backgroundColor: COLORS.primary }}
            />

            <img
              src={bg1}
              alt="AGGS Illustration"
              // Replaced Next.js props (layout='fill') with standard React/Tailwind
              className="w-full max-w-md lg:max-w-lg h-auto object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </section>


      {/* CONTENT SECTIONS */}
      {/* Since we updated HomeSection.jsx earlier, these will automatically be White Cards on this Off-White background */}
      <div className="container mx-auto px-6 pb-24">

        <HomeSection
          title="Our Objectives"
          content1="Association of Global Groundwater Scientists (AGGS) will contribute in the field of effective management of groundwater resources. It is a forum, where in the experts working on groundwater and other natural resources development and management will assemble and devise methods for the effective management for ensuring sustainable development and livelihood in the overstressed areas of the country and elsewhere."
          content2="AGGS is committed to work on the promotion of research for minimizing groundwater pollution and to advocate the effective use of groundwater for better health and sustainable livelihood through undertaking appropriate measures."
        />

        <HomeSection
          title="What the forum can do"
          content1="The AGGS will contribute to information, training and research and will lead to an increased capacity of developing countries in the area of hydrogeology/hydraulics and water resources management. The new forum will lead to improved management and protection of groundwater resources through the collaborations of water resources professionals from universities, public water institutions, non-governmental organizations, public/ private sector professionals, international funding agencies and other relevant institutions."
          content2="The AGGS will mainly focus in organizing annual events at various centers in India and neighboring countries by bringing AGGS members and other International experts to discuss the latest development in the assessment and management of groundwater resources. It also plans to have some research activities in collaboration with National Institutes and International agencies on the understanding of hard rock aquifer system and development and management of coastal aquifer system."
          reverse={true}
        />

        <HomeSection
          title="Major Tasks and Activities"
          content1="AGGS is envisaged as a functional network and collaboration of different organizations including Government Departments, IIT’s, National Institutes/Laboratories, Universities, Water related Industries and NGOS for better sharing and collaboration on emerging issues in ground water management. SAGC will plan to bring experts in various fields to a common platform for exchange of new ideas, views and knowledge in a global platform that stimulates initiatives for the advancement of sustainable development and management of groundwater resources."
          content2=""
          reverse={false}
        />

        <HomeSection
          title="Our Focus"
          content1="Organizing regular annual events for groundwater scientists from all over the globe to assemble and discussing the various new research developments elsewhere and how to solve groundwater quantity and quality problems pertaining to SAARC countries"
          content2="Organization of mass awareness meeting among school children and rural woman folk regarding the quality and scarcity of drinking water and how to create sustainable supply. Impairing the scientific knowledge among school children, women and farmers about the identification of potential bore holes in hard rock and drought prone region."
          content3="Identification and development of innovative ideas for conservation of rainwater (rain water harvesting) and rain-fed forests."
          content4="Sustainable development of a watershed in a hard rock region.      "
          content5="Discussing problems and questions posed by farmers, the politicians, and technical cooperation agencies, general public and potential industrial clients."
          reverse={true}
        />

        <HomeSection
          title="Our Long Term Goals"
          content1="Providing training to young groundwater scientists/engineers on Mathematical modeling to assess groundwater potential and pollution migration and thereby evolving optimal management schemes."
          content2="Collaborating with public sector water related institutions, municipalities, non-governmental organizations (NGO) and the private sector for the implementation of water management schemes."
          content3="Promoting projects that directly involve and benefit local communities."
          content4="Initiating and sustaining the activities in the area of community-based research and the social, legal and economic aspects of groundwater resources management."
          content5="Promoting Joint research projects among scientists/engineers from India and its neighboring countries with leading research institution in the assessment and management of groundwater resources and pollution."
          content6="Development of new methodology to characterize the fracture aquifer geometry and understanding the flow dynamics of fracture system. "
          reverse={false}
        />
      </div>
    </div>
  )
}

export default Home