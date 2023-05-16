import React, {useState} from 'react';
import Axios from 'axios';
import './App.css';
// Axios zamenyaet fetch

//  #1 sposob - Axios

// function App() {
  
//   const [joke, setJoke] = useState('')
//   const getJoke = ()=>{
//     Axios.get("https://official-joke-api.appspot.com/random_joke").then((response)=>{
//       setJoke(response.data.setup + '...' + response.data.punchline)
//     })
//   }
//   return (
//     <div >
//       <h1>Hola! Here is joke generator</h1>
//       <button onClick={getJoke}>Get joke right now: </button>
//       {joke}
//     </div>
//   );
// }

// export default App;


//  #2 sposob - fetch

function App() {
  
  const [joke, setJoke] = useState('')
  const getJoke = ()=>{
    fetch("https://official-joke-api.appspot.com/random_joke").then((response)=>response.json()).then((data)=>{
      setJoke(data.setup + '...' + data.punchline)
    })
  }
  return (
    <div >
      <h1>Hola! Here is joke generator</h1>
      <button onClick={getJoke}>Get joke right now: </button>
      {joke}
    </div>
  );
}

export default App;

