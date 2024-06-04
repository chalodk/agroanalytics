import React from 'react';
import { Card, Row, Col } from 'antd';
import service1image from './asesoria.png';
import service2image from './trazabilidad.png'; // Path to your left image file
import service3image from './reportes.png'; // Path to your left image file
import { Button } from 'antd';



const ServicesSection = () => {

  const phoneNumber = '56974884316'; // Your phone number in international format without '+' and spaces
    const message = 'Hola! me interesa saber más de los servicios de Agroanalytics'; // Optional predefined message

    const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  return (
    <div className="service-section">
      <Row gutter={[16, 24]} justify="space-around">
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <Card title="Asesorias" className='service-card-title'>
            <Row gutter={[16, 24]} justify="space-around">
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <img src={service1image} alt="Projects evaluation" className="service-image" />
                <p>Asesoramos a tu empresa en la elaboración y gestión de proyectos de mejora e inversión.</p>
              </Col>
              <Button onClick={openWhatsApp} className="button-hover-effect" type='secondary' size="large" style={{ marginLeft: 20 }}>Saber más </Button>       
            </Row>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <Card title="Trazabilidad" className='service-card-title'>
            <Row gutter={[16, 24]} justify="space-around">
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
              <img src={service2image} alt="Projects evaluation" className="service-image" />
               <p>Diseñamos, implementamos y mejoramos sistemas de trazabilidad a lo largo de tu cadena logística.</p> 
              </Col>
              <Button onClick={openWhatsApp} className="button-hover-effect" type='secondary' size="large" style={{ marginLeft: 20 }}>Saber más </Button>       
            </Row>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <Card title="Reportería & BI" className='service-card-title'>
            <Row gutter={[16, 24]} justify="space-around">
              
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
              <img src={service3image} alt="Business intelligence" className="service-image" />

               <p> Alertas, notificaciones y reportería avanzada usando datos del proceso.</p> 
              </Col>
              <Button onClick={openWhatsApp} className="button-hover-effect" type='secondary' size="large" style={{ marginLeft: 20 }}>Saber más </Button>       

            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ServicesSection;
