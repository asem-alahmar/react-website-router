import React from "react";
import {Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'

const Header = () => {

    return(
        <React.Fragment>
                <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="https://react-bootstrap.github.io/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      React Bootstrap
    </Navbar.Brand>
  <div className="container">
    <Link className="navbar-brand" to="#">Asem Alahmar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active"  to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Asem">Asem</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Achievements">Achievements</Link>
        </li>
      
      </ul>
      <form className="d-flex">
      <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      Signed in as: <a href="#login">Asem</a>
    </Navbar.Text>
  </Navbar.Collapse>
      </form>
    </div>
  </div>
</Navbar>

        </React.Fragment>
    )

}


export default Header;