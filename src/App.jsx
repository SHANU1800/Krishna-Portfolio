import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import ValuePropSection from './components/sections/ValuePropSection';
import ServicesSection from './components/sections/ServicesSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ProcessSection from './components/sections/ProcessSection';
import AboutSection from './components/sections/AboutSection';
import ToolsSection from './components/sections/ToolsSection';
import PricingSection from './components/sections/PricingSection';
import ContactSection from './components/sections/ContactSection';

export default function App() {
  const [selectedInquiryTopic, setSelectedInquiryTopic] = useState('');

  const handleJumpToContact = (topic) => {
    if (topic) {
      setSelectedInquiryTopic(topic);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
      // Focus the first input cleanly once scrolling begins
      setTimeout(() => {
        const nameInput = document.getElementById('contact-name');
        if (nameInput) nameInput.focus({ preventScroll: true });
      }, 450);
    }
  };

  return (
    <div className="min-h-screen bg-[#07080d] text-[#f4f5f8]">
      <Navbar onBookCall={handleJumpToContact} />
      <main>
        <HeroSection onPrimaryCta={handleJumpToContact} />
        <ValuePropSection />
        <ServicesSection onSelectService={handleJumpToContact} />
        <ProjectsSection onInquireProject={handleJumpToContact} />
        <ProcessSection />
        <AboutSection />
        <ToolsSection />
        <PricingSection onSelectPackage={handleJumpToContact} />
        <ContactSection preselectedTopic={selectedInquiryTopic} />
      </main>
      <Footer />
    </div>
  );
}

