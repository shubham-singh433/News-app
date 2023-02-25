import React, { Component } from "react";
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            NewsMonkey
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
              <a className="nav-link" href="/">
                About us
              </a>
              <a className="nav-link" href="/">
                Cricket
              </a>
              <a className="nav-link" href="/">
                Business
              </a>
              <a className="nav-link" href="/">
                Entertainment
              </a>
              <a className="nav-link" href="/">
                general
              </a>
              <a className="nav-link" href="/">
                health
              </a>
              <a className="nav-link" href="/">
                sciences
              </a>
              <a className="nav-link" href="/">
                technology
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
