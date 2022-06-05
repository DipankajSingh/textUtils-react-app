import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


export default function Navbar(pro) {
    return (
        <nav className={`navbar navbar-expand-lg bg-${pro.mode}`}>
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"  aria-expanded="false" aria-label="Toggle navigation">
      Menu
    </button>
    <Link className="navbar-brand" to="/">{pro.title}</Link>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
          <Link className="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
      </ul>
      <button onClick={pro.toggleMode}>change theme to {pro.mode==='light'?'dark':'light'}</button>
    </div>
  </div>
</nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}