import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <h3>WorldNews</h3>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auhref mb-2 mb-lg-0">
              <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/NewNews/technology">Technology</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/NewNews/sport">Sport</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/NewNews/business">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/NewNews/science">Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/NewNews/entertanment">Entertanment</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    )
  }
}
