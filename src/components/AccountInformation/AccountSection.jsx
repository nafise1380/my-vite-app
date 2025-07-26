

function AccountSection(props) {
  return (
     <> 
        <section className="  mx-4 my-4 border-b border-gray-200">
           <div className="my-3 flex justify-between">
               <div className="flex">
                    {props.imgSrc}
                    <p className="mb-0 mx-3"> {props.text}  </p>
                </div>
                 <img src="/alt-arrow-left.svg" alt="icon"/>
            </div>
        </section>
     </>
  )
}

export default AccountSection