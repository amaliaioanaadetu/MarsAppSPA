import React from 'react'
import CounterValue from "./CounterValue.jsx";

function ClickMessage({count}){
    return(
        <>
            <CounterValue count = {count}/>
        </>
    )
}

export default ClickMessage;