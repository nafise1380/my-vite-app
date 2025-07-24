

function VakilPv() {
  let divStyle={
    width:'48px',
    height:'48px'
  }
  return (
    <>
        <div className="flex justify-center items-center my-4">
          <div className=" border  rounded-lg bg-green-50 text-center !border-green-200 w-70 p-1">
            <div className=" text-lg  ">
                 <span className="flex  ">سارا پرویزی درخواست مشاوره ی فوری تلفنی به مدت ۲۰ دقیقه دارد.</span>
                 <span className=" text-gray-400 text-sm  flex justify-center ">14:30 |  1403/10/09 </span>
            </div>
           </div> 
        </div>
         <section className="flex justify-end m-2">
           <div className="border  rounded-br-lg rounded-tr-lg rounded-bl-lg bg-green-100  p-2 mb-2 w-[200px] flex items-center text-lg">
             <div className="flex items-center">
               <div className="border p-2 mx-3 bg-white">
                 <div style={divStyle} ></div>
               </div>
                untitle.pdf
              </div>
             </div>
          </section>
         <section className="flex justify-end">
             <div className="border mx-2  rounded-br-lg rounded-tr-lg rounded-bl-lg  w-[300px] px-2 mb-3 p-2 text-lg  text-right bg-green-100">
                 <span className="font-bold">توضیحات</span>
                 <p className="mt-3">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز است.
                  </p>
                <span className="flex justify-end text-gray-400 text-sm">14:30 | 1403/10/09</span>
             </div>
         </section>


    <div class="border mx-2 rounded-br-lg rounded-tl-lg rounded-bl-lg  w-75 px-2 p-2 lead d-inline-block" >
        
        <span className="font-bold">توضیحات</span>
        <p className=" mt-3  ">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز است.</p>
        <span className="text-gray-400 flex justify-end text-sm">14:30 |  1403/10/09</span>
       


    </div>
    </>
  )
}

export default VakilPv