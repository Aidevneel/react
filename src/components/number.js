import PropTypes from 'prop-types';
import React, {useState} from 'react';

Number.propTypes = {
    id :PropTypes.string.isRequired,
    qtext :PropTypes.string,
    value :PropTypes.number,
    class :PropTypes.string,
    placeholder :PropTypes.string,
    hint :PropTypes.string,
    help :PropTypes.string,
    min :PropTypes.number,
    max :PropTypes.number,
}

Number.defaultProps = {
    qtext :"Default Question",
    class :"form-control",
}

export default function Number(props){

    console.debug("number props", props)
    let debug = false

    let [num, setNum] = useState(props.value ? props.value : "")
    let [errRequired, setErrRequired] = useState(props.required === true ? false : true)
    let [min, setMin] = useState(false)
    let [max, setMax] = useState(false)
    let [numclass, setNumClass] = useState(props.class ? props.class : "form-control")

    //on change - set value
    const handleOnChange = (event) => {
       if(debug) console.debug("handleOnChange", event.target.value)     
       setNum(event.target.value)       
    }

    //validation
    const validateNumber = () => {
        if(debug) console.debug("validateNumber called")

        console.debug(num)
     
        if(num){
            setErrRequired(false)
        }else{
            setErrRequired(true)
        }

        if(num > props.min && num < props.max ){
            setMin(false)
            setMax(false)
            setNumClass("form-control is-valid")
        }else if(num < props.min){
            setMin(true)
            setMax(false)
            setNumClass("form-control is-invalid")
        }else if (num > props.max){
            setMax(true)            
            setMin(false)
            setNumClass("form-control is-invalid")
        }        
    }

    //set Initial value
    const setInit = () => {
        if(debug) console.debug("setInit called")
        setNum(props.value)       
    }

    //set value
    const setValue = () => {
        if(debug) console.debug("setInit called")
        setNum(12)       
    }

    return (
        <>
            <div className="row p-3">
                <div className="form-group ">
                <label htmlFor={props.id} className="form-label">{props.qtext}</label>
                {props.help ? <div className="fw-bold small">{props.help}</div> : ""} 
                <input className={numclass} type="number" id={props.id} name={props.id} placeholder={props.placeholder ? props.placeholder : ""} value={num} onChange={handleOnChange}/>
                {props.hint ? <div><small className="text-primary fst-italic">{props.hint}</small></div>  : ""  }  
                {(props.required && errRequired) ? <div><small className="text-danger">This field is required</small></div>  : ""  }  
                {min ? <div><small className="text-danger">Please enter value greater than {props.min}</small></div>  : ""  }  
                {max ? <div><small className="text-danger">Please enter value less than {props.max}</small></div>  : ""  }  
                </div>
                <div className='pb-2'>
                <button className='btn btn-primary' onClick={validateNumber}>Validate Number</button>
                </div>
                <div className='pb-2'>
                <button className='btn btn-primary' onClick={setInit}>set init value</button>
                </div>
                <div className='pb-2'>
                <button className='btn btn-primary' onClick={setValue}>set value</button>
                </div>
                <div className='pb-2'>
                <button className='btn btn-primary' onClick={setValue}>Blank</button>
                </div>
            </div>
        </>
    );
}
