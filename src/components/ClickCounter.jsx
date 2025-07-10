import React, {useEffect, useState} from 'react'
import ClickButton from "./ClickButton.jsx";
import ClickMessage from "./ClickMessage.jsx";

function ClickCounter(){
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
    return (
        <>
            <ClickButton clickFunction = {incrementCount} />
            <ClickMessage count ={clickCount}/>
        </>
    )
}

export default ClickCounter;