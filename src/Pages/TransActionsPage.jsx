import Header from "../components/Filter/Header"
import Navbarr from "../components/Transactions/Navbarr"
import Sections from "../components/Transactions/sections"
import Text from "../components/Transactions/Text"


function TransActionsPage() {
  return (
    <>
       <Header header='تراکنش ها'/>
       <Navbarr/>
       <Text/>
       <Sections text=' تومان' money='+۲۰۰,۰۰۰' date='14:30 | 1403/10/09'/>
       <Sections text=' تومان' money='+۱,۲۰۰,۰۰۰'   date='14:30 | 1403/10/09'/>
       <Sections text=' تومان' money='+۱,۲۰۰,۰۰۰' date='14:30 | 1403/10/09'/>
    </>
  )
}

export default TransActionsPage