import React from 'react';
import { Row, Col } from 'antd';

const DataSection = () => {
  return (
    <div className="data-section">
        <div className="data-section-title">
        <h2>Controla tus operaciones basándote en datos</h2>
      </div>
      <Row gutter={[16, 24]} justify="space-around">
        <Col xs={24} sm={12} md={8} className="data-point">
          <h3>+10</h3>
          <p>Años de experiencia</p>
        </Col>
        <Col xs={24} sm={12} md={8} className="data-point separator">
          <h3>100%</h3>
          <p>Satisfacción de nuestros clientes</p>
        </Col>
        <Col xs={24} sm={12} md={8} className="data-point">
          <h3>SAG</h3>
          <p>Contraparte certificado</p>
        </Col>
      </Row>
    </div>
  );
};

export default DataSection;
