import { Button } from "flowbite-react";

export default function BottomOfThePage(){
    return(
        <>
          <div className="flex flex-wrap gap-2 ">
               <Button className="bg-green-500 fixed-bottom  justify-center items-center  h-[52px]">
                   اعمال فیلتر
               </Button>
          </div>
        </>
    )
}