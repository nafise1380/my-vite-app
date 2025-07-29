

function ListItem() {
    let items= ['برقراری تماس بلافاصله بعد از ثبت درخواست از شماره‌ی ۰۲۱۲۲۲۲۳۴۵ با شما صورت می‌گیرد.' , 'برقراری تماس بلافاصله بعد از ثبت درخواست از شماره‌ی ۰۲۱۲۲۲۲۳۴۵ با شما صورت می‌گیرد.']
  return (
       <>
          <div className="border !border-green-200 rounded-xl bg-green-50 m-2 my-4">
             <ul className=" m-2">
              {
                items.map(
                    (items) => <li className="m-2 mx-4"> {items} </li>
                )
              }
          </ul>
          </div>
       </>
  )
}

export default ListItem