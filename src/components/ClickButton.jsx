import React from 'react'

function ClickButton({clickFunction}) {

    return(
        <>
            <button onClick={clickFunction} >
                    Click me!
            </button>
        </>
    )
}

export default ClickButton;