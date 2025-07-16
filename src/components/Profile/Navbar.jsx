import { Link } from "react-router-dom";


export default function Navbar(props){
    function click(){
        console.log("clickkkkked")
    }
    return(
        <>
           <div className="flex container  border-b border-gray-200 w-[412px] h-[48px]  gap-2 items-center">
               <img src="/icon.svg" alt="icon" className="w-[26px] h-[26px] "/>
                <div>
                  <Link to={'/'} className="text-black " style={{ textDecoration: 'none'}} onClick={click}>  {props.t1}  </Link>
               </div>
                <div>
                  <Link to={'/'} className="text-black " style={{ textDecoration: 'none'}} onClick={click}>  {props.tab1}  </Link>
               </div>
               <span> / </span>
                <div>
                  <Link to={'/'} className="text-black " style={{ textDecoration: 'none'}}> {props.t2} </Link>
               </div>
                <div>
                  <Link to={'/'}  style={{ textDecoration: 'none', color:'gray' }} onClick={click}> {props.tab2}   </Link>
               </div>
               <span> {props.slash} </span>
               <div>
                  <Link to={'/'} className="text-black  visited:text-gray-300" style={{ textDecoration: 'none' }}>   {props.t3}  </Link>
               </div>
               
              
              
              
               
               
           </div>
        </>
    )
}