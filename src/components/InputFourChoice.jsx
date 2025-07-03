


function InputFourChoice() {
  return (
         <>
            <div className="container border-b border-gray-200">
                <span className="flex justify-end font-bold mx-3 mt-3"> نوع وکیل </span>
                <div className="flex justify-end justify-between mx-2">
                   <div className=" my-3 mx-12">
                        <label  className="mx-2 font-bold"> همه </label>
                        <input type="radio" name="sender"/>
                    </div>
                    <div className="my-3 mx-12 ">
                        <label className="mx-2 font-bold"> پایه یک</label>
                        <input type="radio" name="sender"/>
                    </div>
                    <div className=" my-3  ">
                        <label className="mx-2 font-bold"> کارشناس </label>
                        <input type="radio" name="sender"/>
                    </div>
                </div>
            </div>
         </>
  )
}

export default InputFourChoice