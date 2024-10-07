import React from 'react';
import { Card, Row, Col, Button } from 'antd';
import service1image from './asesoria.png';
import service2image from './trazabilidad.png'; // Path to your left image file
import service3image from './reportes.png'; // Path to your left image file

const ServicesSection = () => {

  const phoneNumber = '56997023645'; // Your phone number in international format without '+' and spaces
  const message = 'Hola! me interesa saber más de los servicios de Agroanalytics'; // Optional predefined message

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="service-section">
      <Row gutter={[16, 24]} justify="center">
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <Card title="Asesorias" className='service-card-title' style={{ textAlign: 'center' }}>
            <img src={service1image} alt="Projects evaluation" className="service-image" style={{ width: '100px', height: '100px', marginBottom: '20px' }} />
            <p>Asesoramos a tu empresa en la elaboración y gestión de proyectos de mejora e inversión.</p>
            <Button onClick={openWhatsApp} className="button-hover-effect" type='primary' size="large">Saber más</Button>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <Card title="Transformación Digital" className='service-card-title-principal' style={{ textAlign: 'center' }}>
            <img src={service2image} alt="Projects evaluation" className="service-image" style={{ width: '100px', height: '100px', marginBottom: '20px' }} />
            <p>Diseñamos, implementamos y mejoramos los sistemas a lo largo de tu cadena productiva y logística a través de transformación digital a la medida.</p>
            <Button onClick={openWhatsApp} className="button-hover-effect" type='primary' size="large">Saber más</Button>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <Card title="Reportería & BI" className='service-card-title' style={{ textAlign: 'center' }}>
            <img src={service3image} alt="Business intelligence" className="service-image" style={{ width: '100px', height: '100px', marginBottom: '20px' }} />
            <p>Alertas, notificaciones y reportería avanzada aprovechando tus datos.</p>
            <Button onClick={openWhatsApp} className="button-hover-effect" type='primary' size="large">Saber más</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ServicesSection;
