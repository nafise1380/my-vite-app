

function SectionOfTelephoneConsultation() {
  return (
     < >
        <span className="container flex "> تعرفه مشاوره </span>
        <section className="container border p-3 gap-4 "  style={{borderRadius:"7px"}}>
               <div className="flex border-b border-dashed border-green-300">
                     <img src="/phone-calling-rounded.svg " alt="phone-calling-rounded"/>
                     <p className="font-bold text-lg "> مشاوره تلفنی فوری </p>
               </div>
                <div className="mt-3">
                    <span> ۲۰ دقیقه ۱۰۰ هزار تومان </span>
                    <div className=" flex bg-green-500 justify-center ">
                        <img src="/phone-calling-rounded.svg" alt="phone-calling-rounded"/>
                        <button className="m-2 " onClick={{}}>  تماس فوری</button>
                    </div>
                </div>
        </section>
     </>
  )
}

export default SectionOfTelephoneConsultation