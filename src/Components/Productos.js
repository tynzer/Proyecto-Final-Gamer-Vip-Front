import React, { Component } from 'react'
import Categorias from './Categorias'
import './styles/productos.css'
import VerDetalles from './VerDetalles';

export default class Productos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productos: false,
            text: "",         
        }
        }

        filter(e) {
            let text = e.target.value
            const data = this.props.productos
            const newData = data.filter(function (item) {
                    const itemDataTitle = item.titulo.toUpperCase()
                      const itemDataDescp = item.descripcion.toUpperCase()
                      const itemDataMarca = item.marca.toUpperCase() 
                    const campo = itemDataTitle +" "+itemDataDescp+" "+ itemDataMarca 
                    const textData = text.toUpperCase()
                    return campo.indexOf(textData) > -1
                })
                this.setState({
                    productos: newData,
                    text: text,
                })
            } 
    
       
    render() {
        return (
            <div>
                <div className="pt-5 productos-fondo">
                    <div className="container">
                        <div className="row mx-5">
                        <input className="form-control mx-sm-3 mt-5" type="text" value={this.state.text} onChange={(e) => this.filter(e)} placeholder="Search" aria-label="Search" />
                        <Categorias categorias={this.props.categorias}/>
                            <div className="col-lg-9 mt-5 " >
                                <div className="row mt-5 ">
                                    {(this.state.productos && this.state.productos.map(producto => { 
                                        return(
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
                                                        <div style={{zIndex:4}}>
                                                            <VerDetalles producto={producto}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>    
                                    )})) ||
                                    (this.props.productos && this.props.productos.map(producto => { 
                                        return(
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
                                                        <div>
                                                            <VerDetalles producto={producto}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>    
                                    )}))
                                    
                                    
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


/*
import React, { Component } from 'react'
import Categorias from './Categorias'
//import Producto from './Producto'; 

export default class Productos extends Component {
       
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

*/
