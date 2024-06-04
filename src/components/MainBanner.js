

import React from 'react';
import { Button } from 'antd';
import styles from './styles/Banner.module.css';
import leftImage from './banner-left.png'; // Path to your left image file
//import rightImage from './banner-right.png'; // Path to your right image file

const MainBanner = () => {
  const phoneNumber = '56974884316'; // Your phone number in international format without '+' and spaces
    const message = 'Hola! me gustaría agendar una sesión de asesoría gratuita con Agroanalytics'; // Optional predefined message

    const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
};
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.centerColumn}>
        <div className={styles.mainBannerImage}>
          <img src={leftImage} alt='Data visualization Icons' className={styles.bannerImage}/>
        </div>
        <div className={styles.textContent}>
          <h1> Visualizando el presente y futuro agrícola </h1>
          <p>Te acompañamos y aseguramos el éxito. </p>         
        </div>
        <div className='bannerButton'>
        <Button onClick={openWhatsApp} className="button-hover-effect pulse-animation" type="primary" size="large">Agenda tu asesoría </Button>
      </div>
      </div>
      <div className={styles.rightColumn}>
        <img src={leftImage} alt="Data Visualization Icons" className={styles.bannerImage} />
      </div>
    </div>
  );
};

export default MainBanner;
