import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props){
    return(
        
           <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <a className="navbar-brand" href="/">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <div className='d-flex'>
        <div className='bg-primary rounded mx-2' onClick={()=> {props.toggleMode('primary')}} style={{height:'30px', width: '30px'}}></div> 
        <div className='bg-warning rounded mx-2' onClick={()=> {props.toggleMode('warning')}} style={{height:'30px', width: '30px'}}></div> 
        <div className='bg-danger rounded mx-2' onClick={()=> {props.toggleMode('danger')}} style={{height:'30px', width: '30px'}}></div> 
        <div className='bg-success rounded mx-2' onClick={()=> {props.toggleMode('success')}} style={{height:'30px', width: '30px'}}></div> 
    </div>
    <div className="custom-control custom-switch">
  <input type="checkbox" className="custom-control-input" id="customSwitch1" onClick={props.toggleMode}/>
  <label className="custom-control-label" htmlFor="customSwitch1">{props.mode} mode</label>
</div>
  </div>
</nav>
    
    )
}

Navbar.propTypes = {title: PropTypes.string}