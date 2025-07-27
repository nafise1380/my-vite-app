


function SectionOfTelephoneConsultation(props) {
  function clickHandler(){
    console.log("clickkkk")
  }
  let chat =['برای تنظیم قرارداد' , 'تنظیم شکایت']
  return (
     < >
        <span className=" flex my-2 mx-4 text-lg">  {props.subject} </span>
        <section className=" border p-3 gap-4  mx-2"  style={{borderRadius:"7px"}}>
               <div className="flex border-b border-dashed border-green-300">
                     {props.imageSrc}
                     <p className="font-bold text-lg "> {props.text} </p>
               </div>
                  <ul>   
                  {
                    chat.map(
                      (chat) => <li> {chat} </li>
                    )
                  }
               </ul>
                <div className="mt-3 ">
                    <span> {props.price}</span>
                    <div className=" flex bg-green-500 justify-center my-2">
                        <img src="/phone-calling-rounded.svg" alt="phone-calling-rounded" className="filter invert brightness-0"/>
                        <button className="m-2 text-white " onClick={clickHandler}>  {props.button} </button>
                    </div>
                </div>
        </section>
     </>
  )
}

export default SectionOfTelephoneConsultation