

function Information(props) {
  return (
    <>
        <div className="border-b border-gray-200 m-2 flex justify-between ">
            <p className="font-bold text-lg "> {props.question} </p> 
            <div className="flex items-center">
                 <p className="m-2 text-gray-400 ">  {props.text} </p> 
                 <img src="/edit.png" alt="icon" /> 
             </div>
    
        </div>
    </>
  )
}

export default Information