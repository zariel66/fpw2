import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import  NcGuiasAereas  from './Comprobantes/Notas de Credito/NC Guias/NcGuiasAereas.js';
import FacturacionNormal from './Comprobantes/Facturacion/Facturacion Normal/FacturacionNormal.js';
//import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={FacturacionNormal} />
        </Switch>
      </Router>
    );
  }
}

export default App;