import PropTypes from 'prop-types'
import {NavLink} from "react-router-dom"
// import { useState } from 'react'

function Mynavbar(props){
    console.debug("props", props)

    return (
      <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
              <NavLink className="navbar-brand" to="/">{props.title}</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/text">text</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/textdnr">textdnr</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/number">number</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/radio">radio</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/PwdGenerator">PwdGenerator</NavLink>
                    </li>
                </ul>
                </div>
                <div className="form-check form-switch">
                  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckChecked" />
                  <label className={`form-check-label text-${props.mode === "light" ? "dark" : "light"}`} htmlFor="flexSwitchCheckChecked">{props.mode === "light" ? "Dark" : "Light"} Mode</label>
                </div>
            </div>
        </nav>
      </>
    );
  }

Mynavbar.propTypes = {
    title :PropTypes.string.isRequired,
    home :PropTypes.string,
    mode :PropTypes.string,
    about :PropTypes.number.isRequired
}

Mynavbar.defaultProps = {
    title :"Default title",
    home :"Default home",
    about : 47
}

export default Mynavbar;