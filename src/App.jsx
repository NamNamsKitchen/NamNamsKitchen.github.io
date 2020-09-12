import React from "react";
import logo from "./logo.svg";
import Album from "./components/Menu";
import { Header } from "./components/Header";
import "./App.css";
import Container from '@material-ui/core/Container';

function App() {
  return (
    <div>
    <Container maxWidth="lg">
      <header>
        <Header />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </Container>
    <Container maxWidth="lg">
      <Album />
      </Container>
      </div>
  );
}

export default App;
