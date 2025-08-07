import { useState } from "react"


function ChooseMinutes() {
  let [minute , setMinute] = useState( 20)
  let [range , setRange] = useState( 100)
  return ( 
    <>
       <section className="text-lg">
           <div className="flex gap-2 mt-5 justify-center">
                <button onClick={() => setMinute( minute - 1)}> - </button>
                <p className="mx-3"> {minute} دقیقه </p>
                <button onClick={() => setMinute( minute + 1)} className="bg-gray-100 w-[32px] h-[32px] te"> + </button>
           </div>
           <span onClick={() => setRange( range + 1)} className="flex justify-center"> {range} هزار تومان </span>
           <div className="flex  justify-between m-5 font-bold">
              <p className="mr-5"> مبلغ نهایی </p>
              <span className="ml-5">  ۹۰,۰۰۰ تومان </span>
           </div>
       </section>
    </>
  )
}

export default ChooseMinutes