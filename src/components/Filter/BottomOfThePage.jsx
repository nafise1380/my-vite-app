import { Button } from "flowbite-react";

export default function BottomOfThePage(){
    return(
        <>
          <div className="flex flex-wrap gap-2 container">
               <Button className="bg-green-500 fixed-bottom container justify-center items-center w-[380px] h-[52px]">
                   اعمال فیلتر
               </Button>
          </div>
        </>
    )
}