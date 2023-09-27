import React from 'react'
import { Link } from "react-router-dom"
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-3" to="/">OrderFood</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
            </ul>
            <div className="d-flex">
              <Link className="btn m-2 btn-warning" to="login" type="submit">Login</Link>
              <Link className="btn m-2 btn-primary" to="signup" type="submit">Signup</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
