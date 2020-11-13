import React, { Component } from 'react';
import Maqueta from './Components/Maqueta';
import Home from './Components/Home';
import Productos from './Components/Productos';
import Nosotros from './Components/Nosotros';
import Switch from 'react-bootstrap/esm/Switch';
import Footer from './Components/Footer'
import NotFound from "./Components/NotFound"
import NavBar from "./Components/NavBar"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state={

      url:""
    }
  }
  componentDidMount(){

    fetch(`${this.state.url}productList`)
    .then((res) => res.json())
        .then(
            (productList) => {
                this.setState({ productList: productList });
            }
        )


  render() {
    return (
      <Router>
        <NavBar/>
        <Header/>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/productos"><Productos/></Route>
          <Route path="/nosotros"><Nosotros/></Route>
          <Route path="*"><NotFound/></Route>
        </Switch>
        <Footer/>
      </Router>

    );
  }
}

export default App;
