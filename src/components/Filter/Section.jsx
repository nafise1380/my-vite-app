

export default function Section(){
    return(
        <>
            <div className="container border-b border-gray-200 ">
                <span className=" flex justify-end m-3 mb-2 font-bold text-lg"> سایر</span>
                <div className="flex">
                    <section className="flex mb-3 ">
                        <a href='#'> <img src='/alt-arrow-left.svg' alt="alt-arrow-left"/></a>
                        <span className=" flex "> کل ایران</span>
                    </section>
                     <p className="mx-3 font-bold "> استان</p>
                </div>
            </div>
        </>
    )
}