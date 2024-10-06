import React from 'react';
import { Button } from 'antd';
import styles from './styles/Banner.module.css';
//import rightImage from './banner-right.png'; // Path to your right image file

const MainBanner = () => {
  const phoneNumber = '56997023645'; // Your phone number in international format without '+' and spaces
    const message = 'Hola! me gustaría agendar una sesión de asesoría gratuita con Agroanalytics'; // Optional predefined message

    const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
};
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.textContent}>
        <h1>Tu partner en transformación digital agrícola</h1>
        <p>Tecnología al servicio de los agronegocios</p>
        <div className='bannerButton'>
          <Button onClick={openWhatsApp} className="button-hover-effect pulse-animation" type="primary" size="large">Agenda tu asesoría</Button>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
