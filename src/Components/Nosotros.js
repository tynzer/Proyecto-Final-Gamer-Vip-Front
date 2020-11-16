import React, { Component } from 'react'
/* import logo from '../logo_largo.svg' */
import logo1 from '../logo_largo1.svg'
import '../map.css'

export default class Nosotros extends Component {
  render() {
    return (
      <div>
        <div className="m-auto">

          <div className="container">
            <img src={logo1} alt="Logo" className="text-center mt-5 pt-5" />
            {/* <h1 className="my-4">Gamer Vip</h1> */}

            <h3>Nosotros</h3>
            <p>En GamerVip buscamos destacar por nuestro conocimiento e intentamos establecernos como la opción ideal para sus compras de tecnología. <br />
              Todos nuestros vendedores se encuentran altamente capacitados para asesorarlo y ofrecerle exactamente lo que necesita.<br />
              GamerVip es una tienda con más 17 años dentro del rubro tecnológico en Argentina. <br />
              Conocemos nuestros productos y por ello te asesoramos para que hagas una compra personalizada a la altura de tus necesidades.<br />
            </p>
            <h3>Nuestro público</h3>
            <p>-Particular: nos especializamos en entusiastas de GamerVip y hardware de alta gama.<br />
               De igual forma, tenemos equipos y piezas para cubrir cualquier necesidad o requerimiento.<br />
              -Corporativo: brindamos soluciones a la medida de cada empresa.<br />
               Productos de alta calidad, atención inmediata en licencia y soporte.<br />
              -Revendedores: queremos que crezcas con nosotros, para ello disponemos de descuentos especiales pensando en tu beneficio.<br /> <br />
            </p>
            <h5>Gracias a tú confianza vamos a ser la Tienda Gamer número 1 de Argentina.</h5><br />
            <h2>Mapa</h2>
            <p className="h5">Avenida Corrientes 6237, CABA.</p>
            <div className="map-responsive"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5125198743117!2d-58.45006848429093!3d-34.59119936434371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5f12e398ecd%3A0x98abf435fbfab70!2sAv.%20Corrientes%206237%2C%20C1427BPA%20CABA!5e0!3m2!1ses-419!2sar!4v1594497150374!5m2!1ses-419!2sar" title="myFrame" width={1100} height={400} frameBorder={0} style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex={0} /></div>
            <h2>Redes Sociales</h2>
            <p><a href="https://www.facebook.com/gamer.vip.arg/" target="_blank" rel="noopener noreferrer">FaceBook-GamerVip </a></p>
            <p><a href="https://www.twitch.tv/gamerviparg" target="_blank" rel="noopener noreferrer">Twitch-GamerVip</a></p>
            <p><a href="https://www.instagram.com/gamer.vip.arg/" target="_blank" rel="noopener noreferrer">Instagram-GamerVip</a></p>
          </div>
        </div>

      </div>
    );
  }
}
