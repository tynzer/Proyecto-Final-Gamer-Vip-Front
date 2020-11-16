import React, { Component } from 'react'
import Categorias from './Categorias'
/* import Producto from './Producto'; */

export default class Productos extends Component {
    constructor(props) {
        super(props);
        console.log(this)
    }
    
    render() {
        return (
            <div>
                <div className="pt-5">
                    <div className="container">
                        <div className="row">
                            <Categorias categorias={this.props.categorias}/>
                            <div className="col-lg-9 mt-5">
                                <div className="row mt-5">
                                    {this.props.productos.map(producto => { 
                                        return(
                                            <div key={producto._id} className="col-lg-4 col-md-6 mb-4">
                                                <div className="card h-100">
                                                    <img className="card-img-top" src={producto.linkImagen} alt={producto.titulo} />
                                                    <div className="card-body">
                                                        <h4 className="card-title text-primary">
                                                            {producto.titulo}
                                                        </h4>
                                                        <h5>${producto.precio}</h5>
                                                        <p className="card-text">{producto.descripcion}</p>
                                                    </div>
                                                    <div className="card-footer">
                                                        <small className="text-muted">★ ★ ★ ★ ★</small>
                                                    </div>
                                                </div>
                                            </div>    
                                    )})}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
