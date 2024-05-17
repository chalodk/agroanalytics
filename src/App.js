import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainBanner from './components/MainBanner';
import ServicesSection from './components/ServicesSection';
import ContactCTA from './components/ContactCTA';
import DataSection from './components/DataSection';
import './components/styles/custom.css';
import './components/styles/Banner.module.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainBanner />
      <DataSection />
      <ServicesSection />
      <ContactCTA />
      <Footer />
    </div>
  );
}

export default App;
