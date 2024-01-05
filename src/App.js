// import logo from './logo.svg';
import './App.css';
import Text from './components/text'
import Textdnr from './components/textdnr'
import Number from './components/number'
import Radio from './components/radio'
import Mynavbar from './components/navbar'
import Alert from './components/alert'
import { useState } from 'react'; //for remember component and display something

let radio = [
  {
      "key": "1",
      "text": "Option 1",
      "seq": 1
  },
  {
      "key": "22",
      "text": "Option 2",
      "seq": 2
  },
  {
      "key": "3",
      "text": "Option 3",
      "seq": 3
  }
]

function App(){  

  const [validatePage, setValidatePage] = useState(false)
  const validateClick = () => {
    setValidatePage(true)
  }

  const [mode, setMode] = useState("light")
  const toggleMode = () =>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = '#a5a8a6'
      showAlert("Dark mode is set", "Note:", "warning")
    }else{
      setMode("light")
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode is set", "Note:", "success")
    }
  }
  
  
  const [alertValues, setAlertValues] = useState({})

  const showAlert = (message, title, type) => {
    setAlertValues({
      "message" : message,
      "title" : title,
      "type" : type,
     })
     setTimeout(() => {
       setAlertValues({})      
     }, 1500);
  }

  return (
    <>

      <Mynavbar title="Neel's Navbar" home="Myhome" about={56} mode={mode} toggleMode={toggleMode}/>

      <Alert alert={alertValues} /> {/* alert also used in text validation */}

      <Text validateClick={validateClick} validateComponent={validatePage} showAlert={showAlert} id="text" hint="my hint" help="my help" qtext="what is your name" placeholder="enter your name" value="" required={true}/>

      <Number validateComponent={false} id="num" hint="my num hint" help="my num help" qtext="what is your age" placeholder="enter your age" value={5} required={true} min={18} max={30}/>

      <Textdnr validateComponent={false} id="textdnr" hint="my hint" help="my help" qtext="what is your name" placeholder="enter your name" value="" required={true}/>

      {/* <Radio options={radio} id="radio" hint="my hint" help="my help" qtext="select your option" placeholder="enter your name" value={3} required={true}/> */}

      <button onClick={validateClick}> Validate Page</button>

    </>
  );
}

export default App;
