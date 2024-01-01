// import logo from './logo.svg';
import './App.css';
import Text from './components/text'
import Textdnr from './components/textdnr'
import Number from './components/number'
import Mynavbar from './components/navbar'
import { useState } from 'react'; //for remember component and display something

function App(){
  return (
    <>
      {/* <Mynavbar/> */}
      {/* <Mynavbar title="Neel's Navbar" home="Myhome" about={56} /> */}
      <Text id="text" hint="my hint" help="my help" qtext="what is your name" placeholder="enter your name" value="Neel" required={true}/>
      <Number id="num" hint="my num hint" help="my num help" qtext="what is your age" placeholder="enter your age" value={5} required={true} min={18} max={30}/>
      <Textdnr id="textdnr" hint="my hint" help="my help" qtext="what is your name" placeholder="enter your name" value="Neel" required={true}/>
      {/* <Text id="ws" hint="my hint" help="my help" qtext="what is your name" /> */}
    </>
  );
}

export default App;
