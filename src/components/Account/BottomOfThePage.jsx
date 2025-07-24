import { Link } from "react-router-dom"



function BottomOfThePage() {
  return (
    <>
        <div className="my-5 flex">
             <Link to={"profile"}><img src="/Power.png" className="mx-1"/></Link>
             <span className="text-red-700 text-xl"> خروج </span>
        </div>

    </>
  )
}

export default BottomOfThePage