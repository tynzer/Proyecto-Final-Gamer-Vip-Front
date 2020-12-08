import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import "./styles/productos.css";
/* import Nav from 'react-bootstrap/Nav'; */

class VerDetalles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      favorito: "far fa-heart text-danger pl-2",
      url: "https://proyecto-final-gamer-vip-back.herokuapp.com/",
      linkMercadoPago: "",
      producto: this.props.producto._id,
      favoritosGamerVip: [],
    };
  }

  componentDidMount() {
    if (localStorage.getItem("favoritosGamerVip")) {
      let favorito = JSON.parse(localStorage.getItem("favoritosGamerVip"));
      this.setState({ favoritosGamerVip: favorito });
      console.log("desde favorito", this.state.favoritosGamerVip);
    }

    fetch(`${this.state.url}productos/${this.props.producto._id}`)
      .then((res) => res.json())
      .then((linkMercadoPago) => {
        this.setState({ linkMercadoPago: linkMercadoPago.init_point });
        console.log(linkMercadoPago);
      });
  }

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  favoritoHandler = () => {
    if (this.state.favorito === "far fa-heart text-danger pl-2") {
      this.setState({ favorito: "fas fa-heart text-danger pl-2" });
    } else {
      this.setState({ favorito: "far fa-heart text-danger pl-2" });
    }
  };

  handleClick = () => {
    console.log(window);
    window.open(this.state.linkMercadoPago, "_blank");
  };

  favoritoHandler = (e) => {
    //console.log(this.props.producto._id);
    if (this.state.favorito === "far fa-heart text-danger pl-2") {
      this.setState({ favorito: "fas fa-heart text-danger pl-2" });
      let stateFavoritos = this.state.favoritosGamerVip;
      let isFavorito = stateFavoritos.findIndex(
        (favorito) => favorito === this.props.producto._id
      );
      if (isFavorito < 0) {
        stateFavoritos.push(this.props.producto._id);
        this.setState({ favoritosGamerVip: stateFavoritos });
        localStorage.removeItem("favoritosGamerVip");
        localStorage.setItem(
          "favoritosGamerVip",
          JSON.stringify(stateFavoritos)
        );
        //console.log("desde agredado favorito", stateFavoritos);
      }
    } else {
      let stateFavoritos = this.state.favoritosGamerVip;
      this.setState({ favorito: "far fa-heart text-danger pl-2" });
      //console.log("desde borrado favorito", stateFavoritos);
      let indice = stateFavoritos.findIndex(
        (favorito) => favorito === this.props.producto._id
      );
      console.log("desde borrado indice", indice);
      if (indice !== -1) {
        stateFavoritos.splice(indice, 1);
       // console.log("desde borrado para indice", stateFavoritos);
        this.setState({ favoritosGamerVip: stateFavoritos });
        localStorage.removeItem("favoritosGamerVip");
        localStorage.setItem(
          "favoritosGamerVip",
          JSON.stringify(stateFavoritos)
        );
      }
    }
  };

  render() {
    //console.log("desde favorito render", this.state.favoritosGamerVip);
    return (
      <div style={{ zIndex: 5 }}>
        <Button variant="primary" onClick={this.handleShow}>
          Ver Detalles
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header className="ver-detalles-header" closeButton>
            <Modal.Title>
              <img
                className="card-img-top"
                src={this.props.producto.linkImagen}
                alt={this.props.producto.titulo}
              />
              <h3 className="card-title text-primary ">
                {this.props.producto.titulo}
                <i
                  onClick={this.favoritoHandler}
                  className={this.state.favorito}
                />
              </h3>
              {/*<i className="fal fa-heart"/> */}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="ver-detalles-body">
            <h5>${this.props.producto.precio}</h5>
            <h4>
              Precio Oferta : {this.props.producto.descuento || "Sin descuento"}{" "}
            </h4>
            <h5 className="card-text">{this.props.producto.descripcion}</h5>
            <h5 className="card-text">
              Stock : {this.props.producto.stock || "Sin stock"}
            </h5>
            <h5 className="card-text">
              Marca : {this.props.producto.marca || "--"}
            </h5>
          </Modal.Body>
          <Modal.Footer className="ver-detalles-footer">
            <small className="productos-estrellas">★ ★ ★ ★ ★</small>
            <Button variant="success" onClick={this.handleClick}>
              <h4>Comprar</h4>
            </Button>
          </Modal.Footer>
          {/*  <a href={this.state.linkMercadoPago}   rel = "noopener noreferrer"  target="_blank">Comprar</a>
                    <Nav.Link href={this.state.linkMercadoPago}  rel = "noopener noreferrer"  target="_blank" variant="pills" >Active</Nav.Link> */}
        </Modal>
      </div>
    );
  }
}

export default VerDetalles;
