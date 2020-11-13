import React, { Component } from 'react';
import Banner from './Banner';
import Categorias from './Categorias';

//import Carousel from 'react-bootstrap'
class Home extends Component {
  render() {
    return (
      <div>
        <div className="pt-5">
          {/* Page Content */}
          <div className="container">
            <div className="row">
             <Categorias/>
              {/* /.col-lg-3 */}
              <div className="col-lg-9 mt-5">
                 <Banner/>
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
        </div>
      </div>
    );
  }
}

export default Home;