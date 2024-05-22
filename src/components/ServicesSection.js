import React from 'react';
import { Card, Row, Col } from 'antd';
import service1image from './asesoria.png'; // Path to your left image file


const ServicesSection = () => {
  return (
    <div className="service-section">
      <Row gutter={[16, 24]} justify="space-around">
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <Card title="Asesorias" className='service-card-title'>
            <Row gutter={[16, 24]} justify="space-around">
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <img src={service1image} alt="Projects evaluation" className="service-image" />
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <p>Asesoramos a tu empresa en la elaboración y gestión de proyectos de mejora.</p>
                
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <Card title="Trazabilidad" className='service-card-title'>
            <Row gutter={[16, 24]} justify="space-around">
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <img src={service1image} alt="Projects evaluation" className="service-image" />
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
               <p>Desarrollamos juntos las mejores estrategias para que el flujo operativo no se detenga.</p> 
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <Card title="Trazabilidad" className='service-card-title'>
            <Row gutter={[16, 24]} justify="space-around">
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <img src={service1image} alt="Projects evaluation" className="service-image" />
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                Identificamos puntos críticos y estrategias...
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ServicesSection;
