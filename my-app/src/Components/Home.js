import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
//import Carousel from 'react-bootstrap'
class Home extends Component {
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
    <div className="row">
      <div className="col-lg-3">
        <h1 className="my-4">Gamer Vip</h1>
        <div className="list-group">
          <a href="#" className="list-group-item">Category 1</a>
          <a href="#" className="list-group-item">Category 2</a>
          <a href="#" className="list-group-item">Category 3</a>
        </div>
      </div>
      {/* /.col-lg-3 */}
      <div className="col-lg-9 mt-5">
      <Carousel >
        <Carousel.Item interval={1000}>
          <img
            className="d-block img-fluid"
            src="http://placehold.it/900x350"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block img-fluid"
            src="http://placehold.it/900x350"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block img-fluid"
            src="http://placehold.it/900x350"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        
        
        {/* /.row */}
      </div>
      {/* /.col-lg-9 */}
    </div>
    {/* /.row */}
  </div>
  {/* /.container */}
  <div className="container mx-auto mt-5">
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

SETUP. Tareas relacionadas con arrancar el proyecto y crear ambientes.
Tienda. Tareas/Historias de usuario relacionadas a la tienda que puede visitar un cliente.
Backoffice. Tareas/Historias de usuario sobre el sitio operativo al que acceden los empleados de la tienda.
Servicios API. Tareas sobre servicios backend necesarios para operar la tienda.
Objetivo
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

SETUP. Tareas relacionadas con arrancar el proyecto y crear ambientes.
Tienda. Tareas/Historias de usuario relacionadas a la tienda que puede visitar un cliente.
Backoffice. Tareas/Historias de usuario sobre el sitio operativo al que acceden los empleados de la tienda.
Servicios API. Tareas sobre servicios backend necesarios para operar la tienda.</p>
  </div>
  {/* Footer */}
  <footer className="py-5 bg-dark">
    <div className="container">
      <p className="m-0 text-center text-white">Copyright © Your Website 2020</p>
      <div className="m-0 text-center text-white">
        <a href="#" >FaceBook</a><a href="#" className="px-3">Tweeter</a><a href="#">Instagram</a>
      </div>
      
    </div>
    {/* /.container */}
  </footer>
</div>

            </div>
        );
    }
}

export default Home;