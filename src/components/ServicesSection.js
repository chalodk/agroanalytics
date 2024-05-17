import React from 'react';
import { Card, Row, Col } from 'antd';

const ServicesSection = () => {
  return (
    <div className="service-section">
      <Row gutter={[16, 24]} justify="space-around">
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <Card title="Asesorias">
            Consultoría integral. Analizamos tus procesos...
          </Card>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <Card title="Trazabilidad">
            Identificamos puntos críticos y estrategias...
          </Card>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <Card title="Reportería">
            Generamos reportes estratégicos: Analizamos...
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ServicesSection;
