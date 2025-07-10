import { Button, Card } from "flowbite-react";


function ProfileSection() {
  return (
    <>
        <section className="container flex justify-end my-3" dir="ltr">     
              <div className="text-end m-3 ">
                  <span className="font-bold text-lg"> نیما سلیمانی </span>
                  <p className="text-gray-400"> وکیل پایه یک دادگستری </p>
                   <div className="flex gap-2">
                     <p className="text-gray-300"> مشاوره </p>
                     <span> +۲۰۰  </span>
                     <img src="Star.svg" alt="star"/>
                     <p> ۴.۲ <span className="text-gray-300"> (۲۳۰) </span></p>
                     <span> تهران </span>
                     <img src="/map-point.svg" alt="map-point" className="" />                    
                    </div>
               </div>
               <img src="/avatar.svg" alt="avatar" className="w-[80px] h-[80px] my-4"/>    
          </section>
          <ol className="container flex gap-3 ">
              <li className="border p-1"> کیفری </li>
              <li className="border p-1"> سایر </li>
              <li className="border p-1"> خوانده </li>
              <li className="border p-1"> مالیات </li>
              <li className="border p-1">  مورد دیگر ۳ </li>               
          </ol>    
    </>
  )
}

export default ProfileSection