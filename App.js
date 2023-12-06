import { useState } from 'react';
import './App.css';
import Header from './Header';
import Products from './Products';

function App() {

  let[name,setName] = useState();

  function buttonClick(data){
    console.log("Hey button "+data)
    setName("Sam");
  }

  return (
    <div className="App">    
    <Header name={name}></Header>
     <Products></Products>
     <button className='btn' onClick={(event)=>{
      console.log(event)
      buttonClick(event)
     }}>Click</button>
    </div>
  );
}

export default App;
