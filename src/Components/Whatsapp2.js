import React, { Component } from 'react';
import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'
 
const Whatsapp2 = () => {
  return <WhatsAppWidget phoneNumber='+54 9 114444 4444' message= 'Hola que tal? En que podemos ayudarte'
  textReplyTime= 'Normalmente respondemos en el día' companyName= 'Gamer VIP'
  />
}

export default Whatsapp2;