import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar(props) {
 
const toggleMode=()=>{
  var element=document.body;
  element.dataset.bsTheme=
  element.dataset.bsTheme === "light" ? "dark" : "light" ;
  if(element.dataset.bsTheme ==='dark'){
    props.showAlert("success","Dark Mode has been enabled")
    
  }
  if(element.dataset.bsTheme ==='light'){
    props.showAlert("success","Light Mode has been enabled")
  }
}
  return (
    <nav className={`navbar navbar-expand-lg bg-body-tertiary text-danger`} >
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="about">About</Link>
          </li>
          </ul>
          <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={toggleMode}  role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
</div>
  
      </div>
    </div>
  </nav>
        
     
      
    
  )
}
//   // proptype incidecates the types of prop which is mention whwther its true or not ,is required attribute id for u haave to write given type
// Navbar.propTypes={
//   title:PropTypes.string.isRequired,
//   search:PropTypes.string
//   }
//   // this is default props if title and search r not given in app.jsx so it will take this prop by default
//   Navbar.defaultProps={
//     title:"food valley",
//     search:"go"
//   }

