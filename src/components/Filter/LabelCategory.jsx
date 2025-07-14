
export default function LabelCategory() {
  return (
    <>
        <div className="container">
            <div className="d-flex align-items-center  mb-2 mx-3 lead">
               <img src="/icon.svg" alt="icon" className="position-absolute "  style={{height: '25px',  marginTop:'130px'}} />
               <label className="mt-4 mb-2 font-bold ">دسته بندی</label>
            </div>
            <div className=" p-2 border ">
              <select name="دسته بندی" className="w-100 p-2  mx-1">
                 <option value="item1" >دسته بندی</option>
                 <option value="item2">آیتم دوم</option>
                 <option value="item3">آیتم سوم</option>
              </select>
            </div>
         </div>
    </>
  );
}