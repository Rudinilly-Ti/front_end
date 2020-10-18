import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle, NavBar } from './styles';
import NewProject from './components/NewProject'
import Routes from './routes';
function App() {
  return (
    <>
    <GlobalStyle />
    <Router>
      <NavBar >
        <h1>Projetos</h1>
        <NewProject />
      </NavBar>
      <Routes />
    </Router>
    </>
  );
}

export default App;
