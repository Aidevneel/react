import PropTypes from 'prop-types';
import React, {useState} from 'react';

Engine.propTypes = {
    questions: PropTypes.object.isRequired
}
  
  Text.propTypes = {
      id: PropTypes.string.isRequired,
      qtext: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
      value: PropTypes.string,
      help: PropTypes.string,
      hint: PropTypes.string,
      required: PropTypes.bool,
      onChange: PropTypes.func.isRequired,
};

function Text({ id, qtext, placeholder, value, help, hint, required, errRequired, newval, onChange }) { //need to use same name as json
    console.debug("newval",newval)
    return (
      <div className="row p-3">
        <div className="form-group">
          <label htmlFor={id} className="form-label">{qtext}</label>
          {help ? <div className="fw-bold small">{help}</div> : null}
          <input
            className="form-control"
            type="text"
            id={id}
            name={id}
            placeholder={placeholder || ''}
            value={newval && newval[id] ? newval[id] : newval && newval[id] === "" ? "" : value ? value : ""}
            onChange={(event) => onChange(event, id)}
          />
          {hint ? <div><small className="text-primary fst-italic">{hint}</small></div> : null}
          {required && errRequired && errRequired[id] ? <div><small className="text-danger">This field is required</small></div> : null}
        </div>
      </div>
    );
  }

export default function Engine(props){

  let debug = true
  if(debug) console.debug("engine props", props)

  //------------------------------------- text start -------------------------------------
  //OnTextChange
  const [textValue, setTextValues] = useState(null);
  let [errRequired, setErrRequired] = useState(false)
    const OnTextChange = (event, id) =>{
        const newValue = event.target.value;
        //set value as per id
        // setTextValues( newValue );
        setTextValues(prevValues => ({ ...prevValues, [id]: newValue }));
        if(newValue.trim() === ""){
            setErrRequired(prevValues => ({ ...prevValues, [id]: true }));
        }else{
            setErrRequired(prevValues => ({ ...prevValues, [id]: false }));
        }
        console.debug("OnTextChange", id, newValue);
    }    
    
    //------------------------------------- text start -------------------------------------
    
    //   let [textonly, setText] = useState(props.value ? props.value : "")
    
    console.debug("length props.question:",Object.keys(props.questions).length)
    let questionsArr = Object.keys(props.questions).map(question => {
        if(props.questions[question].type === "text"){
            return (
                //unique key required
                <Text  key={props.questions[question].id}  onChange={OnTextChange} newval={textValue} errRequired={errRequired} {...props.questions[question]}  />  //same name will be used in function param
              );
        }
        return null
    })


    if(questionsArr ){
        return (
            <>
            {questionsArr}
            </>
        );
    }else{
        return (
            <>
            <div>No questions OR Something wrong in question_json</div>
            </>
        )
    }
}