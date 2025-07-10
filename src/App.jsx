import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NASA from "./components/NASA.jsx";
import ClickCounter from "./components/ClickCounter.jsx";

function App() {
  return (
    <>
      <div className="NASA">
          <NASA/>
      </div>

        <div>
            <ClickCounter/>
        </div>

    </>
  )
}

export default App
