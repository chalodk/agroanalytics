

import React from 'react';
import { Button } from 'antd';
import styles from './styles/Banner.module.css';
import leftImage from './banner-left.png'; // Path to your left image file
//import rightImage from './banner-right.png'; // Path to your right image file

const MainBanner = () => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.centerColumn}>
        <div className={styles.mainBannerImage}>
          <img src={leftImage} alt='Data visualization Icons' className={styles.bannerImage}/>
        </div>
        <div className={styles.textContent}>
          <h1> Calidad, experiencia y confianza </h1>
          <p>Los procesos agrícolas de siempre, con la tecnología del mañana.</p>         
        </div>
        <Button className="button-hover-effect pulse-animation" type="primary" size="large">Agenda tu asesoría </Button>
      </div>
      <div className={styles.rightColumn}>
        <img src={leftImage} alt="Data Visualization Icons" className={styles.bannerImage} />
      </div>
    </div>
  );
};

export default MainBanner;
