import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './styles/banner.css'

class Banner extends Component {

  render() {
    return (
      <Carousel>
        {this.props.carousel.map(imagen => {
          let categoriaTrim = imagen.categoria.trim();
          let categoriaReplace = categoriaTrim.replace(/\s/g, "-");
          return (
//            <div className="text-mayuscula">
              <Carousel.Item key={imagen._id} interval={imagen.intervalo}>
                <NavLink to={"/productos/" + categoriaReplace} className="list-group-item">
                  <img className="d-block img-fluid" src={imagen.URL} alt="First slide" />
                  <Carousel.Caption>
                    <h3 className="titulo-color">{imagen.titulo}</h3>
                    <p className="texto-color">{imagen.texto}</p>
                  </Carousel.Caption>
                </NavLink>
              </Carousel.Item>
 //           </div>

          )
        })}

      </Carousel>
    );
  }
}

export default Banner;


/*
import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class Banner extends Component {

  render() {
    return (
      <Carousel >
        {this.props.carousel.map(imagen => {
           let categoriaTrim = imagen.categoria.trim();
           let categoriaReplace = categoriaTrim.replace(/\s/g, "-");
          return (
            <Carousel.Item key={imagen._id} interval={imagen.intervalo}>
            <NavLink to={"/productos/"+ categoriaReplace} className="list-group-item">
              <img className="d-block img-fluid" src={imagen.URL} alt="First slide" />
              <Carousel.Caption>
                <h3>{imagen.titulo}</h3>
                <p>{imagen.texto}</p>
              </Carousel.Caption>
              </NavLink>
            </Carousel.Item>
          )
        })}

      </Carousel>
    );
  }
}

export default Banner;
*/