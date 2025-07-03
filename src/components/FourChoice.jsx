

function FourChoice() {
  return (
        <>
          <div className="container border-b border-gray-200">
            <span className="flex justify-end font-bold mx-3 mt-3"> نوع مشاوره </span>
            <div className="flex  justify-end justify-between mx-2">
               <div className=" my-3  ">
                    <label  className="mx-2 font-bold"> متنی </label>
                    <input type="radio" name="sender"/>
                </div>
                <div className=" my-3 mx-10">
                    <label className="mx-2 font-bold">  تلفنی </label>
                    <input type="radio" name="sender"/>
                </div>
                <div className=" my-3 mx-10">
                    <label className="mx-2 font-bold"> شکایت </label>
                    <input type="radio" name="sender"/>
                </div>
                 <div className=" my-3 ">
                    <label className="mx-2  font-bold"> قرارداد </label>
                    <input type="radio" name="sender"/>
                </div>
            </div>
          </div>
        </>
  )
}

export default FourChoice