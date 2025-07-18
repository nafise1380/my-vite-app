

function ProfileSection(props) {
  return (
    <>
        <section className=" flex justify-end my-3 mx-3" dir="ltr">     
              <div className="text-end m-3 ">
                  <span className="font-bold text-lg"> نیما سلیمانی </span>
                  <p className="text-gray-400"> وکیل پایه یک دادگستری </p>
                   <div className="flex gap-2">
                     <p className="text-gray-300"> مشاوره </p>
                     <span> +۲۰۰  </span>
                     <img src="Star.svg" alt="star" className="mb-3"/>
                     <p> ۴.۲ <span className="text-gray-300"> (۲۳۰) </span></p>
                     <span> تهران </span>
                     <img src="/map-point.svg" alt="map-point" className="mb-3" />                    
                    </div>
               </div>
               <img src="/avatar.svg" alt="avatar" className="w-[80px] h-[80px] my-4"/>    
          </section>
          <ol className=" flex gap-3 justify-end ">
              <li className="border p-1 texts  h-8 justify-center"> {props.list.list1} </li>
              <li className="border p-1 texts  h-8 justify-center"> {props.list.list2} </li>
              <li className="border p-1 texts  h-8 justify-center"> {props.list.list3} </li>
              <li className="border p-1 texts  h-8 justify-center"> {props.list.list4} </li>
              <li className="border p-1 texts  h-8 justify-center">  {props.list.list5} </li>               
          </ol>    
    </>
  )
}

export default ProfileSection