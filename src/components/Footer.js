import React from 'react';

const Footer = () => {
    return (
        <footer style={{ textAlign: 'center', padding: '20px 0' }}>
            ©{new Date().getFullYear()} Agroanalytics - Todos los derechos reservados
        </footer>
    );
};

export default Footer;
