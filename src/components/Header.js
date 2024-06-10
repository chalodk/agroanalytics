// Header.js
import React from 'react';
import { Row, Col, Menu, Button } from 'antd';
//import { MenuOutlined } from '@ant-design/icons';
import HamburgerMenu from './HamburgerMenu';
import './styles/Header.css';  // Import the CSS file
import logo from './logo.png'; // Path to your left image file


const Header = () => {
    return (
        <>
        
            <div className="mobileVisible">
                <img src={logo} alt="Logo" className="logo" />
                <HamburgerMenu/>
            </div>
            <div className="desktopVisible">
                <Row align="middle" justify="space-between">
                    <Col>
                        <img src={logo} alt="Logo" className="logo" />
                    </Col>
                    <Col>
                        <Menu mode="horizontal" theme="light">
                            <Menu.Item key="home">Homepage</Menu.Item>
                            <Menu.Item key="about">Nosotros</Menu.Item>
                            <Menu.Item key="services">Asesorias</Menu.Item>
                            <Menu.Item key="traceability">Trazabilidad</Menu.Item>
                            <Menu.Item key="contact"><Button type="primary" size="large">Contáctanos</Button></Menu.Item>
                        </Menu>
                        <Menu mode="horizontal" theme="light"></Menu>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Header;
