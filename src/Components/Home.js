import React, { Component } from 'react';
import Banner from './Banner';
import Categorias from './Categorias';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="pt-5">
          <div className="container">
            <div className="row">
             <Categorias/>
              <div className="col-lg-9 mt-5">
                 <Banner carousel={this.props.carousel}/>
              </div>
            </div>
          </div>
          <div className="m-0 text-center pt-5" style={{height: '400px'}}>
            <h2>Visión</h2>
            <p> Ser referentes en el gaming de alta performance</p>
            <h2>Misión</h2>
            <p>Satisfacer las necesidades de nuestros mejores gamer´s con los mejores productos premium del mercado 
              para que puedan vivir al máximo la experiencia Gamer Vip</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;