import React, { useState } from 'react'
import Badge from 'react-bootstrap/Badge'
import { Link , useNavigate} from "react-router-dom"
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';

function Navbar() {

  const [cartView , setCartView] = useState(false);
  const navigate = useNavigate();
  const data= useCart();
  const logout = () =>{
    localStorage.removeItem("authToken");
    navigate("/login");
  }
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
              {
                (localStorage.getItem("authToken"))
                ?
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">My Orders</Link>
              </li>
              : 
              ""
              }
            </ul>
            <div className="d-flex">
            {
              (!localStorage.getItem("authToken"))
              ?
              <div>
              <Link className="btn m-2 btn-warning" to="login" type="submit">Login</Link>
              <Link className="btn m-2 btn-primary" to="signup" type="submit">Signup</Link>
              </div>
              : 
              <div>
              <Link className="btn m-2 bg-white text-primary" onClick={() => {setCartView(true)}}>
              My Cart{" "}
              <Badge pill bg-danger>{data.length}</Badge>
              </Link>
              {
                cartView ? <Modal onClose={() => {setCartView(false)}}> <Cart /> </Modal> : null
              }
              <p className="btn m-2 bg-white text-danger" onClick={logout} >Logout</p>
              </div>
           
              
            }
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
