import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import Food  from "./Components/Pages/Food";


function App() {
 

  return (
     <>
   <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">
              Navbar
            </a> */}
          <Link className="navbar-brand" to="#">
            {" "}
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-warning text-bold" aria-current="page" to="/">
                  Foody
                </Link>
              </li>
             
            </ul>
            <button className="me-2 btn btn-outline-success">
              <Link className="text-decoration-none text-success " to="/register"> Register</Link>
            </button>
            <button className="btn btn-outline-warning">
              <Link className="text-decoration-none text-warning " to="/login"> Login</Link>
            </button>
          
          </div>
        </div>
      </nav>

      
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Routes>
        <Route path="/" element={<Food />} />
         
        
      </Routes>
    </Router>
     </>
  )
}

export default App
