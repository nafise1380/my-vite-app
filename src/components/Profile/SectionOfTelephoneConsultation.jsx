

function SectionOfTelephoneConsultation(props) {
  function clickHandler(){
    console.log("clickkkk")
  }
  return (
     < >
        <span className="container flex ">  {props.subject} </span>
        <section className="container border p-3 gap-4 "  style={{borderRadius:"7px"}}>
               <div className="flex border-b border-dashed border-green-300">
                     {props.imageSrc}
                     <p className="font-bold text-lg "> {props.text} </p>
               </div>
               {(props.list1 || props.list2) && (
                  <ul className="list-decimal pl-5">
                   {props.list1 && <li>{props.list1}</li>}
                   {props.list2 && <li>{props.list2}</li>}
                 </ul>
               )}
                <div className="mt-3">
                    <span> {props.price}   </span>
                    <div className=" flex bg-green-500 justify-center ">
                        <img src="/phone-calling-rounded.svg" alt="phone-calling-rounded"/>
                        <button className="m-2 " onClick={clickHandler}>  {props.button} </button>
                    </div>
                </div>
        </section>
     </>
  )
}

export default SectionOfTelephoneConsultation