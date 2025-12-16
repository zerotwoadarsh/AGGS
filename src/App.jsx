import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Dock from './Animations/Dock'
import Footer from './Components/Footer'
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from 'react-icons/vsc'
import homeLogo from './assets/images/homeLogo.svg'
import {House, CircleUser, Handshake, LocationEdit, BookOpenText} from 'lucide-react'
import Home from './Pages/Home'
import Collaborators from './Pages/Collaborators/Collaborators'
import ContactUs from './Pages/ContactUs'
import OfficeBearer from './Pages/OfficeBearer/OfficeBearer'
import About from './Pages/About/About'
import Journal from './Pages/Journal/Journal'
import Reviewers from './Pages/Journal/Reviewers';
import { COLORS } from './utils/colors';

function App() {

  const navigate = useNavigate();

  const items = [
    { icon: <House className="w-full h-full p-1" color={COLORS.primary}/>, label: 'Home', onClick: () => navigate('/') },
    { icon: <Handshake className="w-full h-full p-1" color={COLORS.primary} />, label: 'Office Bearer', onClick: () => navigate('/office-bearer') },
    { icon: <LocationEdit className="w-full h-full p-1" color={COLORS.primary}/>, label: 'Contact Us', onClick: () => navigate('/contact-us') },
    { icon: <CircleUser className="w-full h-full p-1" color={COLORS.primary}/>, label: 'Collaborators', onClick: () => navigate('/collaborators') },
    { icon: <BookOpenText className="w-full h-full p-1" color={COLORS.primary} />, label: 'Journal', onClick: () => navigate('/journal') 
    },
  ];
  return (
   <div>
    <Header/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/office-bearer" element={<OfficeBearer />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/collaborators" element={<Collaborators />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/reviewers" element={<Reviewers />} />

      </Routes>

  <Dock 
    items={items}
    panelHeight={68}
    baseItemSize={50}
    magnification={70}
  />

    <Footer />
   </div>
  )
}

export default App
