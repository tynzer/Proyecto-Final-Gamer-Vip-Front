import React, { Component } from 'react';
import '../banner2.css';
import { Redirect } from "react-router-dom";


class Banner2 extends Component {

  handleClick = (producto ) =>{
 /*    e.preventDefault(); */
    let categoriaTrim = producto.trim();
    let categoriaReplace = categoriaTrim.replace(/\s/g, "-");
return (<Redirect to={"/productos/"+ categoriaReplace} />)
  }


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
                                          <game-tile href="#" onClick={(e) => { e.preventDefault()
                                             this.handleClick(producto.categoria) }} platform={producto.marca} loading="auto" image={producto.linkImagen}>                                            
                                          <h2 slot="title">{producto.titulo}</h2>
                                          </game-tile>
                                          )})} 
                                            
  </tile-slider>
 
</section>

            </div>
        );
    }
}

export default Banner2;