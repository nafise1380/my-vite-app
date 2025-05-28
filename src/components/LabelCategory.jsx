
// export default function LabelCategory(){
//     return(
//         <>
//              <label className="d-flex  justify-content-end  mb-2 mx-3 lead "> دسته بندی </label>
//              <img src="/icon.svg" alt="icon" className="position-absolute"/>
//                 <select name='دسته بندی' className=" w-100 p-2 text-" >
                    
//                      <option value="item1">  دسته بندی </option>
//                      <option value="item2"> آیتم دوم </option>
//                      <option value="item3"> آیتم سوم </option>
//                 </select>
        
        
        
        
//         </>
//     )
// }

export default function LabelCategory() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-end mb-2 mx-3 lead">
        <img src="/icon.svg" alt="icon" className="position-absolute mx-3 "  style={{height: '30px',  marginTop:'100px' }} />
        <label className="m-0">دسته بندی</label>
      </div>

      <div className=" p-2">
        <select name="دسته بندی" className="w-100 p-2">
          <option value="item1">دسته بندی</option>
          <option value="item2">آیتم دوم</option>
          <option value="item3">آیتم سوم</option>
        </select>
      </div>
    </>
  );
}