import React, { Component } from 'react';
import '../banner2.css';



class Banner2 extends Component {
    render() {
        return (
            <div>
                <section>
  <div className="wrapper">
    <h1>Productos Destacados</h1>
  </div>

  <tile-slider>
  {this.props.productos.map(producto => { 
                                        return(
                                          gametitle
                                            <div key={producto._id} className="col-lg-4 col-md-6 mb-4">
                                                <div className="card h-100 productos-borde">
                                                    <img className="card-img-top" src={producto.linkImagen} alt={producto.titulo} />
                                                    <div className="card-body productos-item-fondo">
                                                        <h4 className="card-title text-primary ">
                                                            {producto.titulo}
                                                        </h4>
                                                        <h5>${producto.precio}</h5>
                                                        <p className="card-text">{producto.descripcion}</p>
                                                    </div>
                                                    <div className="card-footer">
                                                        <small className="productos-estrellas">★ ★ ★ ★ ★</small>
                                                    </div>
                                                </div>
                                            </div>    
                                    )})}


    <game-tile href="https://www.nintendo.com/" platform="Nintendo Switch" loading="auto" image="https://www.nintendo.com/content/dam/noa/en_US/merchandising/feature-banner/animal-crossing-new-horizons/356x200_fb_ac.jpg">
      <h2 slot="title">Available now</h2>
    </game-tile>

   </tile-slider>
</section>

            </div>
        );
    }
}

export default Banner2;