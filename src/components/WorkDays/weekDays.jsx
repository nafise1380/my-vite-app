import { Link } from "react-router-dom"


function WorkDays(props) {
     
  return (
    <>
        <section className=" border  rounded my-4 mx-2 py-3 px-2  w-[380px] h-[56px]">
            <div className="flex justify-between items-center text-lg">
                 <div className="mx-2">
                      <span > {props.day} </span>
                 </div>
                 <div className="flex items-center ">
                      <span className="text-gray-400"> {props.time} </span>
                      <span > {props.times} </span>
                      <Link to={"vakil"}> <img src="/alt-arrow-left.svg" className="mr-3"/> </Link>
                 </div>
             </div>
        </section>
    </>
  )
}

export default WorkDays
