import React, { Component } from 'react';
import Banner from './Banner';
import Categorias from './Categorias';
import './styles/home.css'
import Whatsapp from "./Whatsapp";
import Banner2 from './Banner2';
import Youtube from './Youtube';

class Home extends Component {
  render() {
    return (
      <div>

        <div className="pt-5 home-fondo">
          <div className="">
            <div className="col-lg-14 mt-5">
              <Banner carousel={this.props.carousel} />
            </div>
          </div>
          <div>
          <Banner2 productos={this.props.productos} />
          </div>
          <div className="m-0 text-center pt-5" style={{ height: '750px' }}>
            <h3 className="home-fuente">LOS MEJORES PRODUCTOS </h3>
            <h3 className="home-fuente-dos">SERAS DIFERENTE, UNICO, ORIGINAL </h3>
          </div>
          <Youtube/>
        </div>

      </div>
    );
  }
}

export default Home;


/*
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
             <Categorias categorias={this.props.categorias}/>
              <div className="col-lg-9 mt-5">
                 <Banner carousel={this.props.carousel}/>
              </div>
            </div>
          </div>
          <div className="m-0 text-center pt-5" style={{height: '400px'}}>
            <h3>No podrás encontrar mejor precio. </h3>
            
            <h3>Somos diferentes, originales y únicos. </h3>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
*/