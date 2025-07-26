import AccountSection from "../components/AccountInformation/AccountSection"
import ButtomOfThePage from "../components/AccountInformation/ButtomOfThePage"
import CheckBox from "../components/AccountInformation/CheckBox"
import Header from "../components/AccountInformation/Header"
import Table from "../components/AccountInformation/Table"


function AccountInformationPage() {
  return (
    <>
       <Header/>
       <Table/>
       <CheckBox/>
       <AccountSection text='ساعت کاری' imgSrc='/clock-square.svg'/>
       <AccountSection text='تراکنش ها' imgSrc='/documents-minimalistic.svg'/>
       <AccountSection text='پیام ها' imgSrc='/Letter.svg'/>
       <ButtomOfThePage />
    </>
  )
}

export default AccountInformationPage