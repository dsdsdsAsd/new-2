import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import VideoDemoSection from './components/VideoDemoSection';
import PricingSection from './components/PricingSection';
import ReviewsSection from './components/ReviewsSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import CallToActionSection from './components/CallToActionSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* Background Aurora Effect */}
      <div className="aurora-background"></div>

      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <VideoDemoSection />
      <PricingSection />
      <ReviewsSection />
      <CallToActionSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;