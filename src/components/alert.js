import PropTypes from 'prop-types'

// import { useState } from 'react'

Alert.propTypes = {
    alert: PropTypes.object.isRequired
}

export default function Alert(props){
    console.debug("Alert props", props)

    return (
       props.alert.message  && <>
       <div className={`alert alert-${props.alert.type}`} role="alert">
        <b>{props.alert.title ? props.alert.title : ''}</b> {props.alert.message}
        </div>
      </>
    );
}
