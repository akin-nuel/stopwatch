import "./App.css";
import {useEffect, useState} from "react";

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(()=> {
    let interval;
    if (running){
      interval = setInterval (()=> {
        setTime( (prevTime) => prevTime + 10);
      }, 10);

    } else if (!running){
      clearInterval(interval)
    }
    return () => clearInterval(interval)
     
  }, [running]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md flex flex-col items-center justify-center py-8">
      <h1 className="text-2xl font-bold pb-3">Stopwatch</h1>
      <div className="text-xl font-semibold">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>

      <div className="w-3/3 flex flex-row justify-between">
        {running ? (
          <button className="border rounded-lg py-1 px-2" onClick={() => setRunning(false)}>Stop</button>
        ) : (
          <button className="border rounded-lg py-1 px-2" onClick={() => setRunning(true)}>Start</button>
        )}
        <button className="border rounded-lg py-1 px-2" onClick={() => setTime(0)}>Reset</button>
    </div>

    </div>

    </div>
      );
}

export default App;
