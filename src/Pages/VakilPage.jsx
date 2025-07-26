import Headers from "../components/Profile/Headers"
import SurchBox from "../components/Vakil/SurchBox"
import VakilPv from "../components/Vakil/VakilPv"


function VakilPage() {
  return (
    <>
       <Headers text='سارا پرویزی' imgSrc='/girl-avatar.svg' icon='/phone-calling-rounded.svg'/>
       <VakilPv/>
       <SurchBox/>
    </>
  )
}

export default VakilPage