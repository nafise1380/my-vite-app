import { useState } from "react"


function ChooseMinutes() {
    const timeSelector = ({ duration , setDuration , baseRate}) =>{
    function clickHandler(change){
        setDuration((prev)=> Math.max('5, prev + change'));
    }
    }
  return (
    <>
       <section>
           <div className="flex gap-2 m-5">
                <button onClick={() =>clickHandler(-5) }> - </button>
                <p>  دقیقه </p>
                <button onClick={() =>clickHandler(5) }> + </button>
           </div>
           <span> </span>
           <div>
              <p> </p>
              <span> </span>
           </div>
       </section>
    </>
  )
}

export default ChooseMinutes