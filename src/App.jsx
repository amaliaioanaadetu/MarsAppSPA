import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NASA from "./components/NASA.jsx";


function App() {
    const [clickCount, setClickCount] = useState(getInitialClickCount());

    function getInitialClickCount() {
        if(localStorage.getItem("clickCount")){
            return parseInt(localStorage.getItem("clickCount"));
        }
        return 0;
    }

    useEffect(() => {
        localStorage.setItem("clickCount", clickCount.toString());
    }, [clickCount]);

    function incrementCount() {
        setClickCount(clickCount + 1);
    }

    // const [count, setCount] = useRef(0)
    // localStorage.setItem('count', 0);
    // // const [count, setCount] = useState(0)
    // useEffect(() => {
    //     count.current += 1;
    // });

    /*
    const count = useRef(0)
    const [, setRerender] = useState(false);
    function increment() {
          count.current = count.current + 1;
          setRerender(r => !r);  //???? why works, why doesn't work with localStorage
        // const c = parseInt(localStorage.getItem('count'), 10) + 1
        // localStorage.setItem('count', c.toString())
        // return c;
    }
    */

  return (
    <>
      <div className="NASA">
          <NASA/>
      </div>
      <div className="Card">
        <button onClick={incrementCount}>
          count is {clickCount}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
