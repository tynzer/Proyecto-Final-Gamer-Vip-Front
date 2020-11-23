import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap';
import Categorias from './Categorias'
/* import Producto from './Producto'; */
import './styles/productos.css'

class CategoriaProductos extends Component {
    constructor(props) {
        super(props);
        this.state = {
          show: false
    
        }
      }
      handleClose = () => this.setState({ show: false });
      handleShow = () => this.setState({ show: true });
      favoritoHandler = () => {}
    render() {
        return (
            <div>
                <div className="pt-5 productos-fondo">
                    <div className="container">
                        <div className="row">
                            <Categorias categorias={this.props.categorias}/>
                            <div className="col-lg-9 mt-5">
                                <div className="row mt-5 ">
                                    {this.props.productos.map(producto => { 
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
                                                       <Button variant="primary" onClick={this.handleShow}>
                                                            Ver Detalles
                                                        </Button>

                                                        <Modal show={this.state.show} onHide={this.handleClose}>
                                                            <Modal.Header closeButton>
                                                                <Modal.Title>
                                                                    <img className="card-img-top" src={producto.linkImagen} alt={producto.titulo} />
                                                                    <h4 className="card-title text-primary ">{producto.titulo}<i onClick={this.favoritoHandler} className="fas fa-heart text-danger" /></h4>{/*<i className="fal fa-heart"/> */}
                                                                </Modal.Title>
                                                            </Modal.Header>
                                                            <Modal.Body>
                                                                <h5>${producto.precio}</h5>
                                                                <p className="card-text">{producto.descripcion}</p>
                                                            </Modal.Body>
                                                            <Modal.Footer>
                                                                <small className="productos-estrellas">★ ★ ★ ★ ★</small>
                                                                <Button variant="success" onClick={this.handleClose}>
                                                                   Comprar
                                                                </Button>
                                                            </Modal.Footer>
                                                        </Modal>
                                                        </div>
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
export default CategoriaProductos