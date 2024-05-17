

import React from 'react';
import { Button } from 'antd';
import styles from './styles/Banner.module.css';
import leftImage from './banner-left.png'; // Path to your left image file
import rightImage from './banner-right.png'; // Path to your right image file

const MainBanner = () => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.leftColumn}>
      <div className={styles.textContent}>
          <h1>Visualizando el futuro agrícola</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Solicitudin magna sollicitudin quis amet. Magna eget vivamus purus viverra dictumst diam cras aliquam.</p>
          <Button className="button-hover-effect pulse-animation" type="primary" size="large">Agenda tu asesoría </Button>        
        </div>
        </div>
        <div className={styles.centerColumn}>
        <img src={leftImage} alt="Data Visualization Icons" className={styles.bannerImage} />
        </div>
      
      <div className={styles.rightColumn}>
        <img src={rightImage} alt="Agricultural Scene" className={styles.bannerImage} />
      </div>
    </div>
  );
};

export default MainBanner;
