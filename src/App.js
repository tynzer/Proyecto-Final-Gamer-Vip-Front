import React, { Component } from 'react';
//import Maqueta from './Components/Maqueta';
import Home from './Components/Home';
import Productos from './Components/Productos';
import Nosotros from './Components/Nosotros';
import Footer from './Components/Footer';
import NotFound from "./Components/NotFound";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      url:"https://proyecto-final-gamer-vip-back.herokuapp.com/",
      productos:[],
      categorias:[],
      carousel:[]
    }
  }

  componentDidMount(){

    fetch(`${this.state.url}productos`)
    .then(res => res.json())
    .then(productos => {
      this.setState({ productos: productos });
      console.log("productos; ", productos)
    })
  
    fetch(`${this.state.url}categorias`)
    .then(res => res.json())
    .then(categorias => {
      this.setState({ categorias: categorias });
      console.log("categorias; ", categorias)
    })

    fetch(`${this.state.url}carousel`)
    .then(res => res.json())
    .then(carousel => {
      this.setState({ carousel: carousel });
      console.log("carousel; ", carousel)
    })
  
  }
  
    render() {
    return (
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/"><Home carousel={this.state.carousel}/></Route>
          {/*<Route path="/productos/:categoria?" component={Productos}></Route>*/}
          <Route path="/productos" ><Productos productos={this.state.productos} categorias={this.state.categorias}/></Route>
          <Route path="/nosotros"><Nosotros/></Route>
          <Route path="*"><NotFound/></Route>
        </Switch>
        <Footer/>
      </Router>
    );
  }
}

export default App;
