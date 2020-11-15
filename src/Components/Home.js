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