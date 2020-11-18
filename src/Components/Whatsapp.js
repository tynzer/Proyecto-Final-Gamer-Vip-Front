import React, { Component } from 'react';
import './styles/whatsapp.css'

class Whatsapp extends Component {
    render() {
        return (
            <div>
                <a href="https://wa.me/541144444444?text=Me%20gustaría%20saber%20el%20precio%20del" className="whatsapp" target="_blank"> <i className="fa fa-whatsapp whatsapp-icon" /></a>
               
            </div>
        );
    }
}

export default Whatsapp;