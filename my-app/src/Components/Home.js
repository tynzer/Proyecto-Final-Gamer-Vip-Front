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
                      src="https://www.mexicoescultura.com/galerias/actividades/principal/1566318607831_festivalgamer_textura__cover_900.png"
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>El unico lugar</h3>
                      <p>DONDE VIVIS TU PASION</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={500}>
                    <img
                      className="d-block img-fluid"
                      src="https://terrymcfly.com/wp-content/uploads/2019/04/A40TR_Standalone_Image_1-900x350.jpg"
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
                      src="https://www.anaitgames.com/images/uploads/2017/02/guia-perifericos-2017-01-1.jpg"
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
          <div className="m-0 text-center">
            <h2>Visión</h2>
            <p> Ser referentes en el gaming de alta performance</p>

            <h2>Misión</h2>
            <p>Satisfacer a nuestros mejores gamer´s con los mejores productos premium</p>
            
          </div>
          {/* Footer */}
          <footer className="py-5 bg-dark">
            <div className="container">
              <p className="m-0 text-center text-white">Copyright © Meshuggah 2020</p>
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