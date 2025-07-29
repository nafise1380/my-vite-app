import { Link } from "react-router-dom";


export default function Navbar(props){
    function click(){
        console.log("clickkkkked")
    }
    return(
        <>
           <div className="flex   border-b border-gray-200  h-[48px]  gap-2 items-center">
               <div className="w-[26px] h-[26px] "> {props.imgSrc} </div> 
               <div > {props.imageSrc} </div> 
                <div>
                  <Link to={'/'} className="text-black " style={{ textDecoration: 'none'}} onClick={click}> {props.t1}  </Link>
               </div>
                <div>
                  <Link to={'/'} className="text-black " style={{ textDecoration: 'none'}} onClick={click}> {props.tab1}  </Link>
               </div>
               <span> / </span>
                <div>
                  <Link to={'/'} className="text-black " style={{ textDecoration: 'none'}}> {props.t2} </Link>
               </div>
                <div>
                  <Link to={'/'}  style={{ textDecoration: 'none', color:'gray' }} onClick={click}> {props.tab2}  </Link>
               </div>
               <span> {props.slash} </span>
               <div>
                  <Link to={'/'} className=" visited:text-gray-300" style={{ textDecoration: 'none' , color:'#9C9C9C'}}> {props.t3}  </Link>
               </div>         
           </div>
        </>
    )
}