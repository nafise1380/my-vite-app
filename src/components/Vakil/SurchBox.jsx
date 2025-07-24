import { Link } from "react-router-dom"


function SurchBox() {
  return (
    <>
       <div className="flex flex-row-reverse  bg-white p-2 items-center border-t border-gray-200 fixed-bottom " dir="rtl ">
        <Link to={"transaction"} className="flex">
          <button type="submit" className="bg-green-400 p-2 rounded">
            <img src="/Plain.svg" alt="send" />
          </button> 
        </Link>
        <input type="text" placeholder="متن خود را بنویسید" className=" flex-1 mx-2 p-2 px-5 border border-gray-300 rounded" />
        <img src="/icons.svg" alt="icon"  className="absolute ml-108"/>
      </div>
    </>
  )
}

export default SurchBox