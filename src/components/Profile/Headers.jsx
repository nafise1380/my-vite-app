import { Link } from "react-router-dom";

export default function Headers(props){
    return(
        <>
           <header className="border-b border-gray-200 flex my-3">
                  <Link to={"message"}> <img src="/alt-arrow-right.svg" alt="arrow"  className="d-flex"/> </Link>
                  <span className="  text-lg font-bold mt-0 "> {props.text} </span>   
                  <span className=" m-2 text-lg font-bold mt-0 "> {props.subject} </span>  
            </header>
        </>
    )
}