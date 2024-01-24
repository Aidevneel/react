// import logo from './logo.svg';
import Engine from './components/engine';

let questions = {               
    "person_name": {
        "id": "person_name",
        "type": "text",
        "seq": "1",
        "qtext": "Person’s Name",
        "help": "helpp",
        "hint": "hintp",
        "value": "ssss",
        "required": true,
        "placeholder": "Enter your name"
    },
    "person_surname": {
        "id": "person_surname",
        "type": "text",
        "seq": "5",
        "qtext": "Enter Person’s surname",
        "help": "helpsp",
        "hint": "hintsp",
        "value": "",
        "required": false,
        "placeholder": "Enter your surname"
    },
    "age": {
        "id": "age",
        "type": "numberdnr",
        "required": "required",
        "qtext": "What is {person_name.text}'s age?",
        "min": "1",
        "max": "100",
        "seq": "2"
    },
    "bicycle_used": {
        "qtext": "In the past 7 days, how many days has {person_name.text} used a bicycle?",
        "id": "bicycle_used",
        "type": "numberdnr",
        "required": "required",
        "min": "0",
        "max": "7",
        "seq": "7"
    }
}


function Page1(){  


  return (
    <>
      <Engine questions={questions}/>
    </>
  );
}

export default Page1;
