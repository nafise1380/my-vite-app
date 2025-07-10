import { Link } from "react-router-dom";


export default function Navbar(){
    return(
        <>
           <div className="flex container  border-b border-gray-200 w-[412px] h-[48px]  gap-2 items-center">
               <img src="/icon.svg" alt="icon" className="w-[26px] h-[26px] "/>
                <div>
                  <Link to={'/'} className="text-black " style={{ textDecoration: 'none'}}> مشاوره تلفنی  </Link>
               </div>
               <span> / </span>
                <div>
                  <Link to={'/'} className="text-black " style={{ textDecoration: 'none'}}> مشاوره ملکی  </Link>
               </div>
               <span> / </span>
               <div>
                  <Link to={'/'} className="text-black  visited:text-gray-300" style={{ textDecoration: 'none' }}> نیما سلیمانی  </Link>
               </div>
               
              
              
              
               
               
           </div>
        </>
    )
}