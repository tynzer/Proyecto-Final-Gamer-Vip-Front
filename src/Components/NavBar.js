import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../joystick_logo.svg';
import './styles/navbar.css'


class NavBar extends Component {
    render() {
        return (
            < nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-fondo header-margin" >
                <div className="container">
              <NavLink className="navbar-brand navbar-font-logo " to="/"> <span style={{fontSize:'1.85rem'}}>gamer vip </span>
                 <img src={logo} alt="Logo" className="d-inline-block align-top"/>
                </NavLink>       
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto ">
                            <li className="btn navbar-letras navbar-bordes active">
                                <NavLink className="nav-link" to="/">HOME</NavLink>
                            </li>
                            <li className="btn navbar-letras navbar-bordes">
                                <NavLink className="nav-link" to="/productos">PRODUCTOS</NavLink>
                            </li>
                            <li className="btn navbar-letras navbar-bordes">
                                <NavLink className="nav-link" to="/nosotros">NOSOTROS</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        );
    }
}
export default NavBar;


/*
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../joystick_logo.svg';

class NavBar extends Component {
    render() {
        return (
            < nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" >
                <div className="container">
              <NavLink className="navbar-brand " to="/"> <span style={{fontSize:'1.85rem'}}>Gamer VIP </span>
                 <img src={logo} alt="Logo" className="d-inline-block align-top"/>
                </NavLink>       
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
*/


/*
                            <li className="btn border-light">
                                <NavLink className="nav-link" to="/nosotros">NOSOTROS</NavLink>
                            </li>
*/