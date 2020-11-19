import React, { Component } from 'react';
//import Maqueta from './Components/Maqueta';
import Home from './Components/Home';
import Productos from './Components/Productos';
import Nosotros from './Components/Nosotros';
import Footer from './Components/Footer';
import NotFound from "./Components/NotFound";
import NavBar from "./Components/NavBar";
import Youtube from "./Components/Youtube";
import Banner2 from "./Components/Banner2";
import Whatsapp2 from "./Components/Whatsapp2";
import CategoriaProductos from "./Components/CategoriaProductos";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Redes from "./Components/Redes"
import Whatsapp from "./Components/Whatsapp"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "https://proyecto-final-gamer-vip-back.herokuapp.com/",
      productos: [],
      categorias: [],
      carousel: []
    }
  }

  componentDidMount() {

    fetch(`${this.state.url}productos`)
      .then(res => res.json())
      .then(productos => {
        this.setState({ productos: productos });
      })

    fetch(`${this.state.url}categorias`)
      .then(res => res.json())
      .then(categorias => {
        this.setState({ categorias: categorias });
      })

    fetch(`${this.state.url}carousel`)
      .then(res => res.json())
      .then(carousel => {
        this.setState({ carousel: carousel });
      })
  }
 
  renderProductos = routerProps => {
    let categoriaRouterProps = routerProps.match.params.categoria
    let categoriaProductos = categoriaRouterProps.replace(/-/g, " ");
    let filterProductos = this.state.productos.filter(producto => producto.categoria === categoriaProductos)
    return ( filterProductos ? <CategoriaProductos productos={filterProductos} categorias={this.state.categorias} /> : <NotFound/>)
    }
   

  render() {
    return (
      <Router>
        <Redes/>
        <NavBar />
        <Whatsapp/>
        <Switch>
          <Route exact path="/"><Home carousel={this.state.carousel} categorias={this.state.categorias} /></Route>
          <Route exact path="/productos" ><Productos productos={this.state.productos} categorias={this.state.categorias} /></Route>
          <Route path="/productos/:categoria" /* component={CategoriaProductos} */ render={this.renderProductos}></Route>  
          <Route path="/nosotros"><Nosotros /></Route>
          <Route path="/youtube"><Youtube /></Route>
          <Route path="/banner2"><Banner2 productos={this.state.productos}/></Route>
          <Route path="/whatsapp2"><Whatsapp2 /></Route>
         <Route component={NotFound}/>{/*  <Route path="*"><NotFound /></Route> */}
        </Switch>
        <Footer />

      </Router>
    );
  }
}

export default App;
