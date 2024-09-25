import React from 'react';
import { Button } from 'antd';
import Invest from './inversion.png'; // Path to your left image file
import Us from './us.png';
import { WhatsAppOutlined } from '@ant-design/icons';



const ContactCTA = () => {
    const phoneNumber = '56997023645'; // Your phone number in international format without '+' and spaces
    const message = 'Hola! me interesa saber más de los servicios de Agroanalytics'; // Optional predefined message

    const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
};
    return (
        <div className="contact-cta" >
            <h2>Tomar las mejores decisiones de inversión</h2>
            <h3>Qué ofrecemos</h3>
            <p>Revisión, levantamiento y control de presupuesto</p>
            <img src={Invest} className='big-image'alt='Investment'/>
          
            <h2>Dedica tu tiempo a lo que realmente importa</h2>
            <h3>Llevamos al éxito tus proyectos</h3>
            <p>Nos dedidacamos a acompañar grandes proyectos con información simple y eficiente. Acompañamos todo el proceso de creación, ejecución y control de los proyectos</p>
            <img src={Us} className='big-image'alt='Investment'/>
            <Button onClick={openWhatsApp} className="button-hover-effect" type='secondary' size="large" style={{ marginLeft: 20 }}>Contáctanos<WhatsAppOutlined WhatsAppOutlinedColor={'#95D414'}/> </Button>
        </div>
        
        
       
        
    );
};

export default ContactCTA;
