// HamburgerMenu.js
import React, { useState } from 'react';
import { Drawer, Button, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { WhatsAppOutlined } from '@ant-design/icons';
import './styles/HamburgerMenu.css';  // Import the CSS file



const HamburgerMenu = () => {
    const [visible, setVisible] = useState(false);
    const phoneNumber = '56997023645'; // Your phone number in international format without '+' and spaces
    const message = 'Hola! me interesa saber más de los servicios de Agroanalytics'; // Optional predefined message

    const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <Button className="menu-button" type="primary" onClick={showDrawer} icon={<MenuOutlined />}>
                
            </Button>
            <Drawer
                title="Menu"
                placement="right"
                onClick={onClose}
                onClose={onClose}
                visible={visible}
            >
                <Menu
                    mode="vertical"
                    defaultSelectedKeys={['1']}
                > 
                    <Menu.Item key="1"><a href="/">Homepage</a></Menu.Item>
                    <Menu.Item key="2"><a href="#datos">Nosotros</a></Menu.Item>
                    <Menu.Item key="3"><a href="#servicios">Asesorías</a></Menu.Item>
                    <Menu.Item key="4"><a href="#servicios">Tecnología</a></Menu.Item>
                </Menu>
                <Button onClick={openWhatsApp}  type="secondary" size="large">Contáctanos <WhatsAppOutlined WhatsAppOutlinedColor="#95D414" /></Button>
            </Drawer>
        </>
    );
};

export default HamburgerMenu;
