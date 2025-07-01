

function FourChoice() {
  return (
        <>
          <div className="container">
            <span className="flex justify-end"> نوع مشاوره </span>
            <div className="flex border-b border-gray-200">
               <div className=" my-3  mx-8">
                    <label  className="mx-2"> متنی </label>
                    <input type="radio" name="sender"/>
                </div>
                <div className=" my-3 mx-8">
                    <label className="mx-2">  تلفنی </label>
                    <input type="radio" name="sender"/>
                </div>
                <div className=" my-3 mx-8">
                    <label className="mx-2"> شکایت </label>
                    <input type="radio" name="sender"/>
                </div>
                 <div className=" my-3 mx-8">
                    <label className="mx-2"> قرارداد </label>
                    <input type="radio" name="sender"/>
                </div>
            </div>
          </div>
        </>
  )
}

export default FourChoice