import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainBanner from './components/MainBanner';
import ServicesSection from './components/ServicesSection';
import ContactCTA from './components/ContactCTA';
import DataSection from './components/DataSection';
import './components/styles/custom.css';
import './components/styles/Banner.module.css';
import TermsAndConditions from './components/termsAndConditions';

import { useState } from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;


function App() {
  const [expandido, setExpandido] = useState(false);

  const alternarExpandido = () => {
    setExpandido(!expandido);
  };
  return (
    
    <div className="App">
      <Header />
      <MainBanner />
      <DataSection />
      <ServicesSection />
      <ContactCTA />
      <div className="terminos-y-condiciones">
        
        <Collapse activeKey={expandido ? ['1'] : []} onChange={alternarExpandido}>
          <Panel header="Términos y Condiciones" key="1">
            <TermsAndConditions />
          </Panel>
        </Collapse>
      </div>
      <Footer />
      
    </div>
    
  );
}

export default App;
