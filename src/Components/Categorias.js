import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Categorias extends Component {
    render() {
        return (
            <div className="col-lg-3">
                <h1 className="my-4">Gamer Vip</h1>
                <div className="list-group">
                    { this.props.categorias.map(categoria =>{return(
                             <NavLink key={categoria._id} to={"/productos/"+ categoria.categoria} className="list-group-item">{categoria.categoria}</NavLink>
                    )
                    })}
                 {/*    <NavLink to="/productos/categoria1" className="list-group-item">Category 1</NavLink>
                    <NavLink to="/productos" className="list-group-item">Category 2</NavLink>
                    <NavLink to="/productos" className="list-group-item">Category 3</NavLink> */}
                </div>
            </div>
        );
    }
}

export default Categorias;
