import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
 
class Banner extends Component {
    render() {
        return (
            <Carousel >
            <Carousel.Item interval={1000}>
              <img
                className="d-block img-fluid"
                src="https://i1.wp.com/www.toptensell.com/wp-content/uploads/2020/05/best-gaming-monitor.jpg?fit=900%2C350&ssl=1"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>El unico lugar</h3>
                <p>Donde vivis tu pasion</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block img-fluid"
                src="https://terrymcfly.com/wp-content/uploads/2019/04/A40TR_Standalone_Image_1-900x350.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Headset</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block img-fluid"
                src="https://i2.wp.com/www.gamingprofesional.es/wp-content/uploads/2020/06/Ratones-para-MMO.png?resize=900%2C350&ssl=1"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Mouse MMO</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        );
    }
}

export default Banner;