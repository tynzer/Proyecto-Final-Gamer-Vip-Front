import React, { Component } from 'react'

export default class Nosotros extends Component {
  render() {
    return (
      <div>
        <div className="pt-5">

          <div className="container">

            <h1 className="my-4">Gamer Vip</h1>


            <p>Objetivo
            Construir una solución de Ecommerce completa, Frontend/Backend/Base de Datos, integración con plataforma de pagos, donde podamos aplicar todo lo que estuvimos aprendiendo en la carrera Guayerd FullStack+

            Metodología Ágil Scrum
            (https://www.atlassian.com/es/agile/scrum)
            Aplicaremos Scrum como marco de trabajo para administrar el proyecto. Por ese motivo las tareas están agrupadas en Sprints

            Sprints
            (https://www.atlassian.com/es/agile/scrum/sprints)
            Dividimos el proyecto completo en 3 sprints de tiempo fijo (3 días cada uno.). La demo se realizará el día siguiente de la finalización del #3 sprint.

            Epics
            (https://www.atlassian.com/es/agile/project-management/epics)
            Una EPIC es una etiqueta que agrupa tareas individuales con un mismo objetivo.
            </p>
            <h2>Mapa</h2>
                <p className="h5">Avenida Corrientes 6237, CABA.</p> 
                <div className="mapa"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5125198743117!2d-58.45006848429093!3d-34.59119936434371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5f12e398ecd%3A0x98abf435fbfab70!2sAv.%20Corrientes%206237%2C%20C1427BPA%20CABA!5e0!3m2!1ses-419!2sar!4v1594497150374!5m2!1ses-419!2sar" title="myFrame" width={1100} height={400} frameBorder={0} style={{border: 0}} allowFullScreen="" aria-hidden="false" tabIndex={0} /></div>
                <h2>Redes Sociales</h2>
                <p><a href="https://www.facebook.com/gamer.vip.arg/" target="_blank">FaceBook-GamerVip</a></p>
                <p><a href="https://www.twitch.tv/gamerviparg" target="_blank">Twitch-GamerVip</a></p>
                <p><a href="https://www.instagram.com/gamer.vip.arg/" target="_blank">Instagram-GamerVip</a></p>
          </div>
        </div>
        
      </div>
    );
  }
}
