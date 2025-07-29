

function Information(props) {
  return (
    <>
        <div className="border-b border-gray-200 m-2 mx-3 flex  justify-between">
            <div className="mx-2 flex">
               <p className="font-bold text-lg "> {props.question} </p> 
               <p className="mx-2"> {props.span} </p> 
            </div>
            <div className="flex gap-1  items-center ">
                 <div> {props.imgSrc} </div>
                 <p className=" text-gray-400 mb-0">  {props.text} </p> 
                 <div > {props.imageSrc} </div>
             </div>
    
        </div>
    </>
  )
}

export default Information