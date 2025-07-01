


function InputFourChoice() {
  return (
         <>
            <div className="container border-b border-gray-200">
                <span className="flex justify-end"> نوع وکیل </span>
                <div className="flex">
                   <div className=" my-3 mx-12">
                        <label  className="mx-2"> همه </label>
                        <input type="radio" name="sender"/>
                    </div>
                    <div className="my-3 mx-12 ">
                        <label className="mx-2"> پایه یک</label>
                        <input type="radio" name="sender"/>
                    </div>
                    <div className=" my-3 mx-12 ">
                        <label className="mx-2"> کارشناس </label>
                        <input type="radio" name="sender"/>
                    </div>
                </div>
            </div>
         </>
  )
}

export default InputFourChoice