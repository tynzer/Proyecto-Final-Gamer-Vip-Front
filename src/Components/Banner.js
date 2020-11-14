import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
 
class Banner extends Component {
  constructor(props) {
    super(props);
    
  }
  
    render() {
        return (
          <Carousel >
            {this.props.carousel.map(imagen => {
              return (
                <Carousel.Item interval={imagen.intervalo}>
                  <img className="d-block img-fluid" src={imagen.URL} alt="First slide"/>
                  <Carousel.Caption>
                    <h3>{imagen.titulo}</h3>
                    <p>{imagen.texto}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              )
            })}

          </Carousel>
        );
    }
}

export default Banner;