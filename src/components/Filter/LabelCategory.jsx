import { useState } from "react";

export default function LabelCategory() {

  function changeHandler(event){
      setBg(event.target.value);
  }

  let [bg,setBg] = useState('red')

  let divStyle={
    backgroundColor: bg
  }
  return (
    <>
      <div className="d-flex align-items-center  mb-2 mx-3 text-lg ">
         <img src="/icon.svg" alt="icon" className="position-absolute "  style={{height: '25px',  marginTop:'130px'}} />
         <label className="mt-4 mb-2 font-bold ">دسته بندی</label>
      </div>
      <div className=" p-2 border " style={divStyle}>
      <select name="دسته بندی" className="w-100 p-2  mx-1 " onChange={changeHandler}>
          <option value="red" >دسته بندی</option>
          <option value="white">آیتم دوم</option>
          <option value="gray">آیتم سوم</option>
        </select>
      </div>
    </>
  );
}