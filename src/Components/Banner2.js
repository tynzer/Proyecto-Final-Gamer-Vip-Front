import React, { Component } from 'react';
import '../banner2.css';
import { Redirect } from "react-router-dom";


class Banner2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      redireccionar: false,
      categoriaReplace: "",
    }
  }

  handleClick = (producto) => {   
    let categoriaTrim = producto.trim();
    let categoriaReplace = categoriaTrim.replace(/\s/g, "-");
    this.setState({ redireccionar: true, categoriaReplace: categoriaReplace })
  }

  render() {
    if (this.state.redireccionar) {
      return (<Redirect to={"/productos/" + this.state.categoriaReplace} />)
    } else {
      return (
        <div>
          <section>
            <div className="wrapper">
              <h1>Productos Destacados</h1>
            </div>
            <tile-slider>
              {this.props.productos.map(producto => {
                return (
                  <game-tile href="#" onClick={(e) => {
                    e.preventDefault()
                    this.handleClick(producto.categoria)
                  }} platform={producto.marca} loading="auto" image={producto.linkImagen}>
                    <h2 slot="title">{producto.titulo}</h2>
                  </game-tile>
                )
              })}
            </tile-slider>
          </section>
        </div>
      );
    }
  }
}

export default Banner2;