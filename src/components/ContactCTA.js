import React from 'react';
import { Button } from 'antd';
import Invest from './inversion.png'; // Path to your left image file
import { WhatsAppOutlined } from '@ant-design/icons';



const ContactCTA = () => {
    const phoneNumber = '56974884316'; // Your phone number in international format without '+' and spaces
    const message = 'Hola! me interesa saber más de los servicios de Agroanalytics'; // Optional predefined message

    const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
};
    return (
        <div className="contact-cta" >
            <h2>Tomar las mejores decisiones de inversión</h2>
            <img src={Invest} className='big-image'alt='Investment'/>
            <h3>Qué ofrecemos</h3>
            <p>Revisión, levantamiento y ejecución de presupuesto</p>
            <Button onClick={openWhatsApp} className="button-hover-effect" type='primary' size="large" style={{ marginLeft: 20 }}>Contáctanos<WhatsAppOutlined WhatsAppOutlinedColor={'#95D414'}/> </Button>
        </div>
       
        
    );
};

export default ContactCTA;
