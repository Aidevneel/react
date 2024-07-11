// import logo from './logo.svg';
import './App.css';
import Text, {test} from './components/text'
import Textdnr from './components/textdnr'
import Number from './components/number'
import Radio from './components/radio'
import Mynavbar from './components/navbar'
import Alert from './components/alert'
import PwdGenerator from './components/PwdGenerator';
import { useState } from 'react'; //for remember component and display something
import {BrowserRouter as Router,
        Routes,
        Route,
        Link
      } from "react-router-dom"
import Goto from './components/goto';

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

  const validateClick = () => {
    test("true")
  }

  //dark mode
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
  
  //alert
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
      <Router>
        <Mynavbar title="Neel's Navbar" mode={mode} toggleMode={toggleMode}/>
        <Routes>

          <Route path="/"></Route>

          <Route path="/text" 
          element={
            <div>
              <Text showAlert={showAlert} id="text" hint="my hint" help="my help" qtext="what is your name" placeholder="enter your name" value="" required={true}/> 
              <Text showAlert={showAlert} id="texts" hint="my shint" help="my shelp" qtext="what sis your name" placeholder="entesr your name" value="" required={true}/> 
            </div>
          }></Route>

          <Route path="/number" element={<Number id="num" hint="my num hint" help="my num help" qtext="what is your age" placeholder="enter your age" value={5} required={true} min={18} max={30}/>}></Route>
          
          <Route path="/textdnr" element={<Textdnr id="textdnr" hint="my hint" help="my help" qtext="what is your name" placeholder="enter your name" value="" required={true}/>}></Route>

          <Route path="/radio" element={ <Radio options={radio} id="radio" hint="my hint" help="my help" qtext="select your option" placeholder="enter your name" value={3} required={true}/> }></Route>

          <Route path="/PwdGenerator" element={ <PwdGenerator/> }></Route>

          <Route path="*" element={<h1>Page not found :(</h1> }></Route>

          {/* nested route  */}
          <Route path="/nested">
            <Route path="work" element={<h1>Nested route working</h1> }></Route>
          </Route>      

        </Routes>
        <Goto/>
      </Router>
      <br />

    <Alert alert={alertValues} /> {/* alert also used in text validation */}

    {/* <button className='btn btn-primary m-2' onClick={validateClick}> Validate Page</button> */}

    </>
  );
}

export default App;
