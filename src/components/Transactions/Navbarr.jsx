import { useState } from "react";
import { Link } from "react-router-dom";

function Navbarr() {
  let [click , setClick] = useState('پروفایل')

      function clickHandler() {
        console .log("cliiiickk")
        setClick("profie")
      }
  return (
    <>
       <div className="border-bottom">
            <ul className="list-unstyled d-flex m-2">
                 <li class="p-1 ">
                    <img src="/public/Home.png"/>
                </li>
                <li className=" p-1">
                  <a href="#" className="text-decoration-none ">
                    <span className="text-dark" onClick={clickHandler}> {click} </span>
                  </a>
                </li>
                <li className="p-1">/</li>
                <li className="p-1">
                  <Link to={"message"} className="text-decoration-none ">
                    <span className="text-gray-400"> تراکنش ها </span>
                  </Link>
                </li>
            </ul>
        </div>
    </>
  );
}

export default Navbarr;
