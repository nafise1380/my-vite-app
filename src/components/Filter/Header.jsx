import { useState } from "react"


export default function Header({header,subgect,text}){
    return(
        <>
        <header className="border-b border-gray-200 flex  my-2">
             <img src="/alt-arrow-right.svg" alt="arrow"  className="d-flex"/>
             <span className=" m-1 text-lg font-bold"> {subgect} </span> 
             <span className=" my-2 text-lg font-bold" >{header} </span>  
             <span className=" my-2 text-lg font-bold" >{text} </span>       
       </header>  
        </>
    )
}