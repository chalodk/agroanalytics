import React from 'react';
import {Row, Col, Menu, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import HamburgerMenu from './HamburgerMenu';  // Ensure you have this component created as shown previously

const Header = () => {
    return (
        <>
            {/* Hamburger Menu: Visible on mobile only */}
            <div className="mobileVisible">
                <HamburgerMenu />
            </div>

            {/* Horizontal Menu: Visible on desktop only */}
            <div className="desktopVisible">
            <Row align="middle" justify="space-between">
        <Col>
          <img src="/logo.png" alt="Logo" className="logo" />
        </Col>
        <Col>
                <Menu mode="horizontal" theme="light">
                    <Menu.Item key="home">Homepage</Menu.Item>
                    <Menu.Item key="about">Nosotros</Menu.Item>
                    <Menu.Item key="services">Asesorias</Menu.Item>
                    <Menu.Item key="traceability">Trazabilidad</Menu.Item>
                    <Menu.Item key="demo">Demo</Menu.Item>
                    <Menu.Item key="contact"><Button type="primary" size="large">Contáctanos</Button></Menu.Item>
                </Menu>
         </Col>
         </Row>
            </div>
        </>
    );
};

export default Header;
