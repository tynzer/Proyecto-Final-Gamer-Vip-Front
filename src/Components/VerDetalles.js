import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './styles/productos.css'

class VerDetalles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            favorito:"far fa-heart text-danger pl-2"
        }
      }
      handleClose = () => this.setState({ show: false });
      handleShow = () => this.setState({ show: true });
      favoritoHandler = () => {
          if (this.state.favorito === "far fa-heart text-danger pl-2"){
              this.setState({favorito:"fas fa-heart text-danger pl-2"});
          }else{
            this.setState({favorito:"far fa-heart text-danger pl-2"});
          }
      }

    render() {
        return (
            <div>
                <Button variant="primary" onClick={this.handleShow}>
                    Ver Detalles
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header className="ver-detalles-header" closeButton>
                        <Modal.Title >
                            <img className="card-img-top" src={this.props.producto.linkImagen} alt={this.props.producto.titulo} />
                            <h3 className="card-title text-primary ">{this.props.producto.titulo}<i onClick={this.favoritoHandler} className={this.state.favorito} /></h3>{/*<i className="fal fa-heart"/> */}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="ver-detalles-body">
                        <h4>${this.props.producto.precio}</h4>
                        <h5 className="card-text">{this.props.producto.descripcion}</h5>
                    </Modal.Body>
                    <Modal.Footer className="ver-detalles-footer">
                        <small className="productos-estrellas">★ ★ ★ ★ ★</small>
                        <Button variant="success" onClick={this.handleClose}>
                            <h4>Comprar</h4>
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default VerDetalles;