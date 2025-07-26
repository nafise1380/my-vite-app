import Table from "./Table"


function ButtomOfThePage() {
  return (
     <> 
         <section className="flex w-[412px] fixed-bottom border-t border-gray-200">
         <div className="    my-2  mx-5 ">
          <table className="w-[412px] h-[80px] ">
             <tr className="">
                <th> <img src="/Home.png"/> </th>
                <th> <img src="/request-icon.svg"/> </th>
                <th> <img src="/icon-container.svg"/> </th>
             </tr>
             <tr className=" ">
                <td> خانه </td>
                <td>  درخواست ها </td> 
                <td> پروفایل </td>
             </tr>
         </table>
      </div>
     </section>
     </>
  )
}

export default ButtomOfThePage