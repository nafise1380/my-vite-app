import { useState } from "react";
import { Link } from "react-router-dom";


export default function Section(){
     let [text,setText] = useState("سایر")
    function clickHandler(){
        setText("etc")
    }
    return(
        <>
            <div className=" border-b border-gray-200 ">
                <span className=" flex  m-3 my-4 mb-5 font-bold text-lg "  onClick={clickHandler}> {text} </span>
                <div className="flex  justify-between">
                    <p className="mx-3 font-bold "> استان</p>
                    <section className="flex mb-3 ">
                        <span className=" flex text-gray-400 ml-3"> کل ایران</span>
                        <Link to={"profile"}><img src='/alt-arrow-left.svg' alt="alt-arrow-left"/></Link> 
                    </section>  
                </div>
            </div>
        </>
    )
}