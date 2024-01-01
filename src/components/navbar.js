import PropTypes from 'prop-types'

// import { useState } from 'react'

function Mynavbar(props){
    console.debug("props", props)

    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">{props.home}</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">{props.about}</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
      </>
    );
  }

Mynavbar.propTypes = {
    title :PropTypes.string.isRequired,
    home :PropTypes.string,
    about :PropTypes.number.isRequired
}

Mynavbar.defaultProps = {
    title :"Default title",
    home :"Default home",
    about : 47
}

export default Mynavbar;