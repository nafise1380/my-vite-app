

function Sections({text,date,money}) {
  return (
    <>
         <div class=" flex justify-end mt-3 ">
             <p class=" mx-1 font-bold"> {money} </p>
             <span class="text lead"> {text} </span>  
        </div>
        <p class="text-lg border-b border-gray-200 flex justify-end text-gray-400"> {date} </p>
    </>
  )
}

export default Sections