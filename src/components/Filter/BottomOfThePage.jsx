import { Button } from "flowbite-react";

export default function BottomOfThePage(){
    return(
        <>
          <div className="flex flex-wrap gap-2">
               <Button className="bg-green-500 fixed-bottom  w-[420px] justify-center items-center  h-[52px]">
                   اعمال فیلتر
               </Button>
          </div>
        </>
    )
}