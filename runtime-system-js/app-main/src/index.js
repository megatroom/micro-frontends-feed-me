import React from "react";
import ReactDOM from "react-dom";

const AppBar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <a className="navbar-brand" href="/">
        Runtime with SystemJS
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#appBar"
        aria-controls="appBar"
        aria-expanded="false"
        aria-label="Alterna navegação"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="appBar">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Order
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

const App = () => (
  <div>
    <AppBar />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app-main"));
