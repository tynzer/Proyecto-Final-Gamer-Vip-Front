import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo2.svg';


class NavBar extends Component {
    render() {
        return (
            < nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" >
                <div className="container">
             {/*    <NavLink className="navbar-brand" to="/"> 
                 <img src={logo} alt="Logo" className="d-inline-block align-top"/>Gamer VIP
                </NavLink>    */}    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/productos">Productos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/nosotros">Nosotros</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        );
    }
}
export default NavBar;
