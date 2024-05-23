import React from 'react';
import { Button } from 'antd';
import Invest from './inversion.png'; // Path to your left image file
import { WhatsAppOutlined } from '@ant-design/icons';



const ContactCTA = () => {
    return (
        <div className="contact-cta" >
            <h2>Tomar las mejores decisiones de inversión</h2>
            <img src={Invest} className='big-image'alt='Investment'/>
            <h3>Qué ofrecemos</h3>
            <p>Revisión, levantamiento y ejecución de presupuesto</p>
            <Button className="button-hover-effect" type='primary' size="large" style={{ marginLeft: 20 }}>Contáctanos<WhatsAppOutlined WhatsAppOutlinedColor={'#95D414'}/> </Button>
        </div>
       
        
    );
};

export default ContactCTA;
