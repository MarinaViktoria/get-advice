import './App.css';
import { useEffect, useState } from 'react';
import video from './rainyday.mp4';


function App() {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    getAdvice()
  }, [])
    const getAdvice = async() => {
      const response = await fetch("https://www.boredapi.com/api/activity/");
      const data = await response.json();
      setAdvice(data.activity)
    }

  return (
    <div className="App">
      <div className="container">
        <video autoPlay loop muted>
          <source src={video} type="video/mp4"/>
        </video>
        <h3>You are bored...</h3>
        <h3>and you dont't have any idea what you can do...</h3>
        <h3>Click the button to see my suggestions!</h3>
        <button onClick={getAdvice}>Get idea</button>
      </div>
      <div className="container">
        <h2>{advice}</h2>
      </div>
    </div>
  );
}
export default App;
