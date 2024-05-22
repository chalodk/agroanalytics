// HamburgerMenu.js
import React, { useState } from 'react';
import { Drawer, Button, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import './styles/HamburgerMenu.css';  // Import the CSS file

const HamburgerMenu = () => {
    const [visible, setVisible] = useState(false);

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
                    <Menu.Item key="1">Homepage</Menu.Item>
                    <Menu.Item key="2">Nosotros</Menu.Item>
                    <Menu.Item key="3">Asesorias</Menu.Item>
                    <Menu.Item key="4">Trazabilidad</Menu.Item>
                    <Menu.Item key="5">Demo</Menu.Item>
                    <Menu.Item key="6"><Button type="primary" size="large">Contáctanos</Button></Menu.Item>
                </Menu>
            </Drawer>
        </>
    );
};

export default HamburgerMenu;
