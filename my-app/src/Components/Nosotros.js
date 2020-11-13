import React, { Component } from 'react'
import { SocialIcon } from 'react-social-icons';

export default class Nosotros extends Component {
  render() {
    return (
      <div>
        <div className="pt-5">
          {/* Navigation */}
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Home
              <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Productos</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Nosotros</a>
                  </li>

                </ul>
              </div>
            </div>
          </nav>
          {/* Page Content */}
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

         

          </div>


          {/* Footer */}
          <footer className="py-5 bg-dark">
            <div className="container">
              <p className="m-0 text-center text-white">Copyright © Meshuggah 2020</p>
              <div className="m-0 text-center text-white">
                
                <SocialIcon url="https://www.facebook.com/gamer.vip.arg/" />   <SocialIcon url="https://www.instagram.com/gamer.vip.arg/" />   <SocialIcon url="https://www.twitch.tv/gamerviparg" />
              </div>

            </div>
            {/* /.container */}
          </footer>
        </div>

      </div>
    );
  }
}
