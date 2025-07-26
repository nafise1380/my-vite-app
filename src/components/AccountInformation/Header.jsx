

function Header() {
  return (
    <>
       <div className="flex justify-between m-3">
           <div className="flex ">
                <img src="/rectangle-profile.svg" alt="profile"/>
                <div className="m-3">
                   <p className="font-bold text-lg mb-0"> علی رضایی </p>
                   <span className="text-sm "> ۰۹۳۳۳۴۵۶۷۸۰ </span>
                </div>
            </div>
            <div className="flex my-4">
                <p className="mt-1"> اطلاعات حساب </p>
                 <img src="/alt-arrow-left.svg" className="w-10 h-10"/>
            </div>
       </div>
    </>
  )
}

export default Header