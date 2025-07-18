import { useState } from "react"


export default function Header(){
    let [text,setText] = useState("فیلتر")
    function clickHandler(){
        setText("filter")
    }
    return(
        <>
        <header className="border-b border-gray-200 flex  container">
            <img src="/alt-arrow-right.svg" alt="arrow"  className="d-flex"/>
             <span className=" m-2 text-lg font-bold" onClick={clickHandler}> {text} </span>     
       </header>  
        </>
    )
}